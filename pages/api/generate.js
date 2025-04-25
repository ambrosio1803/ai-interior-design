export const config = {
  api: {
    bodyParser: false,
  },
}

import { IncomingForm } from 'formidable'
import fs from 'fs'
import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

export default async function handler(req, res) {
  const form = new IncomingForm()
  form.parse(req, async (err, fields, files) => {
    const file = files.file[0]
    const style = fields.style[0]

    const fileData = fs.readFileSync(file.filepath)
    const base64 = `data:image/jpeg;base64,${fileData.toString('base64')}`

    const output = await replicate.run(
      "rocketdigitalai/interior-design-sdxl",
      {
        input: {
          image: base64,
          style: style,
        },
      }
    )

    res.status(200).json({ url: output[0] })
  })
}