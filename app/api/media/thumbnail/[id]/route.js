import { NextResponse } from "next/server";
import { drive } from "@/lib/googleDrive";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return new NextResponse("Missing file ID", {
        status: 400,
      });
    }

    // Get thumbnail URL from Google Drive
    const file = await drive.files.get({
      fileId: id,
      fields: "thumbnailLink",
      supportsAllDrives: true,
    });

    const thumbnailUrl = file.data.thumbnailLink;

    if (!thumbnailUrl) {
      return new NextResponse("Thumbnail not found", {
        status: 404,
      });
    }

    // Fetch thumbnail server-side
    const response = await fetch(thumbnailUrl);

    if (!response.ok) {
      console.error(
        "Google thumbnail fetch failed:",
        response.status,
        response.statusText,
      );

      return new NextResponse("Failed to fetch thumbnail", {
        status: 502,
      });
    }

    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          response.headers.get("content-type") || "image/jpeg",

        "Cache-Control":
          "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Thumbnail request failed:", error);

    return new NextResponse("Failed to load thumbnail", {
      status: 500,
    });
  }
}