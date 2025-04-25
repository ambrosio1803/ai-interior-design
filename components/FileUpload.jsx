import { useState } from 'react'

export default function FileUpload({ selectedStyle }) {
  const [image, setImage] = useState(null)
  const [generatedImage, setGeneratedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setImage(e.target.files[0])

  const handleUpload = async () => {
    if (!image) return
    setLoading(true)
    const formData = new FormData()
    formData.append('file', image)
    formData.append('style', selectedStyle)

    const res = await fetch('/api/generate', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    setGeneratedImage(data.url)
    setLoading(false)
  }

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <input type="file" accept="image/*" onChange={handleChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generando...' : 'Generar con IA'}
      </button>

      {generatedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Resultado generado:</h3>
          <img src={generatedImage} alt="AI result" className="mt-2 rounded shadow" />
        </div>
      )}
    </div>
  )
}