import { NextResponse } from "next/server";
import { drive } from "@/lib/googleDrive";

export async function GET() {
  try {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!folderId) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_DRIVE_FOLDER_ID is not configured",
        },
        { status: 500 }
      );
    }

    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: "files(id,name,mimeType,size,webViewLink,thumbnailLink)",
      orderBy: "createdTime desc",
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    });

    const files = response.data.files || [];

    const result = files.map((file) => ({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      size: file.size,
      url: `/api/media/${file.id}`,
      viewUrl: `https://drive.google.com/file/d/${file.id}/view`,
      thumbnail: file.thumbnailLink || null,
    }));

    return NextResponse.json({
      success: true,
      files: result,
    });
  } catch (error) {
    console.error("Google Drive media request failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch Google Drive files",
      },
      { status: 500 }
    );
  }
}