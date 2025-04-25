export default function ImageExample({ title, src }) {
  return (
    <div>
      <img src={src} alt={title} className="rounded shadow" />
      <p className="mt-2 text-center">{title}</p>
    </div>
  )
}