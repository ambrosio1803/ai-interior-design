export default function ImageExample() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4">Ejemplo de transformación</h2>
      <div className="flex flex-wrap gap-4">
        <img src="/img/example-before.jpg" alt="Antes" className="w-1/2 rounded shadow" />
        <img src="/img/example-after.jpg" alt="Después" className="w-1/2 rounded shadow" />
      </div>
    </div>
  )
}