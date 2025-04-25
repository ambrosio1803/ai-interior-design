import Replicate from 'replicate';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Error parsing the files' });

    const replicate = new Replicate({
      auth: 'r8_3UFLSBnl9IduabDM15blN1nBXFG1tmB08vp1R'
    });

    const fileData = fs.readFileSync(files.image[0].filepath, { encoding: 'base64' });

    const output = await replicate.run(
      'rocketdigitalai/interior-design-sdxl',
      { input: { image: `data:image/png;base64,${fileData}` } }
    );

    res.status(200).json({ image: output });
  });
}