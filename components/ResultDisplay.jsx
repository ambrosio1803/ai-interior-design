export default function ResultDisplay({ original, result }) {
  if (!original && !result) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {original && (
        <div>
          <p className="font-semibold">Original</p>
          <img src={original} alt="Original" className="rounded shadow" />
        </div>
      )}
      {result && (
        <div>
          <p className="font-semibold">Transformado por IA</p>
          <img src={result} alt="Transformado" className="rounded shadow" />
        </div>
      )}
    </div>
  )
}
