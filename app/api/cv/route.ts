import { google } from 'googleapis';
import { NextResponse } from 'next/server';

async function getGoogleDocsPdf(docId: string | undefined, accessToken: string | undefined) {
  const drive = google.drive({
    version: 'v3',
    auth: accessToken,
  });

  try {
    const res = await drive.files.export(
      {
        fileId: docId,
        mimeType: 'application/pdf',
      },
      { responseType: 'stream' }
    );

    const chunks: Uint8Array[] = [];
    res.data.on('data', (chunk) => chunks.push(chunk));
    await new Promise((resolve, reject) => {
      res.data.on('end', resolve);
      res.data.on('error', reject);
    });

    return Buffer.concat(chunks);
  } catch (error) {
    console.error('Error retrieving Google Docs PDF:', error);
    throw new Error('Failed to retrieve document');
  }
}

export async function GET() {
  try {
    const docId = process.env.DOC_ID;
    const accessToken = process.env.GC_APP_CREDENTIALS;
    const pdfBuffer = await getGoogleDocsPdf(docId, accessToken);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=CV_FullStack_developer_Yevhen_Batenko.pdf`,
      },
    });
  } catch (error) {
    console.error('Error retrieving PDF:', error);
    return NextResponse.json(
      { message: 'Failed to retrieve PDF', error: (error as Error).message },
      { status: 500 },
    );
  }
}
