import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials/google-drive.json",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

export const drive = google.drive({
  version: "v3",
  auth,
});