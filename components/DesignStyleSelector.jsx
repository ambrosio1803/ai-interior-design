export default function DesignStyleSelector({ style, setStyle }) {
  const styles = ['minimalist', 'modern', 'industrial', 'classic', 'scandinavian']

  return (
    <div className="mb-4">
      <label className="font-semibold mr-2">Elige un estilo:</label>
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
