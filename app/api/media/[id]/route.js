import { Readable } from "node:stream";
import { NextResponse } from "next/server";
import { drive } from "@/lib/googleDrive";

export async function GET(request, { params }) {
  const { id } = await params;
  const range = request.headers.get("range");

  try {
    const metadata = await drive.files.get({
      fileId: id,
      fields: "mimeType,size",
      supportsAllDrives: true,
    });

    const size = Number(metadata.data.size);
    const contentType = metadata.data.mimeType || "application/octet-stream";
    const requestedRange = range?.match(/^bytes=(\d+)-(\d*)$/);
    const start = requestedRange ? Number(requestedRange[1]) : 0;
    const requestedEnd = requestedRange?.[2]
      ? Number(requestedRange[2])
      : size - 1;
    const end = Math.min(requestedEnd, size - 1);

    if (start >= size || start > end) {
      return new NextResponse(null, {
        status: 416,
        headers: { "Content-Range": `bytes */${size}` },
      });
    }

    const response = await drive.files.get(
      {
        fileId: id,
        alt: "media",
        supportsAllDrives: true,
      },
      {
        responseType: "stream",
        headers: range ? { Range: range } : undefined,
      }
    );

    const headers = new Headers();
    const responseHeaders = response.headers;

    headers.set("Content-Type", contentType);
    headers.set("Accept-Ranges", "bytes");

    if (requestedRange) {
      headers.set("Content-Length", String(end - start + 1));
      headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    } else {
      headers.set("Content-Length", String(size));
    }

    headers.set("Cache-Control", "private, max-age=3600");

    return new NextResponse(Readable.toWeb(response.data), {
      status: requestedRange ? 206 : 200,
      headers,
    });
  } catch (error) {
    console.error("Google Drive media stream failed:", error);

    return NextResponse.json(
      { message: "Unable to stream this media file" },
      { status: 500 }
    );
  }
}