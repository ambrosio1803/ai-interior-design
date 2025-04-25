export default function StyleSelector({ style, setStyle }) {
  const styles = ['minimalist', 'modern', 'industrial']
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2">Selecciona un estilo:</label>
      <select
        className="border p-2 rounded"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      >
        {styles.map((s) => (
          <option key={s} value={s}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}