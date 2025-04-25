import { useState } from 'react'
import axios from 'axios'

export default function FileUpload() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const uploaded = e.target.files[0]
    setFile(uploaded)
    setPreview(URL.createObjectURL(uploaded))
  }

  const handleUpload = async () => {
    // Aquí iría la llamada a la API real de Replicate
    alert('Imagen enviada para procesamiento IA')
  }

  return (
    <div className="my-6">
      <input type="file" onChange={handleChange} />
      {preview && <img src={preview} alt="preview" className="my-4 max-w-md" />}
      <button onClick={handleUpload} className="bg-black text-white px-4 py-2 rounded">
        Generar imagen con IA
      </button>
    </div>
  )
}