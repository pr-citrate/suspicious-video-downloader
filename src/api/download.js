import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send('File ID is required');
  }

  const downloadUrl = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      return res.status(response.status).send('Error fetching the file');
    }

    const contentType = response.headers.get('content-type');
    const contentLength = response.headers.get('content-length');

    res.setHeader('Content-Type', contentType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${id}.mp4"`);
    res.setHeader('Content-Length', contentLength);

    response.body.pipe(res);
  } catch (error) {
    console.error('Error downloading the file:', error);
    res.status(500).send('Internal Server Error');
  }
}
