import { useState } from 'react'
import callReplicate from '@/utils/callReplicate'

export default function ImageUploadForm({ setImageUrl, setResultUrl, style }) {
  const [loading, setLoading] = useState(false)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = async () => {
      setImageUrl(reader.result)
      setLoading(true)
      const result = await callReplicate(reader.result, style)
      setResultUrl(result)
      setLoading(false)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="mb-4">
      <input type="file" onChange={handleImageUpload} />
      {loading && <p className="mt-2">Generando imagen con IA...</p>}
    </div>
  )
}
