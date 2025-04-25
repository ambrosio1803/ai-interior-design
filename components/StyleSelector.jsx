import { useState } from 'react'

export default function StyleSelector() {
  const [style, setStyle] = useState('moderno')

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Selecciona un estilo:</label>
      <select value={style} onChange={(e) => setStyle(e.target.value)} className="p-2 border rounded">
        <option value="minimalista">Minimalista</option>
        <option value="moderno">Moderno</option>
        <option value="industrial">Industrial</option>
      </select>
    </div>
  )
}