// TODO Decide to use this or not later
// import { NextResponse } from "next/server";
// import { google } from "googleapis";
// import fs from "fs";
// import path from "path";
//
// const credentials: { [key: string]: never } = process.env.GC_APP_CREDENTIALS
//     ? JSON.parse(Buffer.from(process.env.GC_APP_CREDENTIALS, 'base64').toString('utf-8'))
//     : {};
//
// const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/drive.readonly"],
// });
//
// const drive = google.drive({ version: "v3", auth });
//
// export async function GET(): Promise<NextResponse> {
//     const documentId: string = "1XK91Y4FmBtQlg5ceDpm0C72sWKA_wH7qrxN44qqCNtg";
//
//     try {
//         // Експорт файлу у формат PDF
//         const response = await drive.files.export(
//             {
//                 fileId: documentId,
//                 mimeType: "application/pdf",
//             },
//             { responseType: "stream" }
//         );
//
//         // Шлях для збереження PDF файлу
//         const pdfPath = path.join(process.cwd(), "public", `${documentId}.pdf`);
//         const dest = fs.createWriteStream(pdfPath);
//
//         // Запис потоку у файл
//         await new Promise<void>((resolve, reject) => {
//             response.data
//                 .on("end", () => resolve())
//                 .on("error", (error) => reject(error))
//                 .pipe(dest);
//         });
//
//         return NextResponse.json({
//             message: "PDF successfully created",
//             pdfUrl: `/public/${documentId}.pdf`,
//         });
//     } catch (error: unknown) {
//         console.error("Failed to export PDF:", error);
//         return NextResponse.json(
//             { error: "Failed to export PDF" },
//             { status: 500 }
//         );
//     }
// }