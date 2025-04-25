
import { useState } from 'react'

export default function UploadSection() {
  const [image, setImage] = useState(null)
  const [style, setStyle] = useState('minimalist')

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image, style })
    })
    const data = await response.json()
    setImage(data.output[0])
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <select onChange={(e) => setStyle(e.target.value)}>
        <option value="minimalist">Minimalista</option>
        <option value="modern">Moderno</option>
        <option value="industrial">Industrial</option>
      </select>
      <button onClick={handleSubmit}>Generar diseño</button>
      {image && <img src={image} alt="Diseño generado" />}
    </div>
  )
}
