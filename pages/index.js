import Head from 'next/head'
import FileUpload from '@/components/FileUpload'
import ImageExample from '@/components/ImageExample'
import StyleSelector from '@/components/StyleSelector'
import { useState } from 'react'

export default function Home() {
  const [style, setStyle] = useState('minimalist')

  return (
    <>
      <Head>
        <title>AI Interior Designer</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Diseña tu espacio con IA</h1>
        <StyleSelector style={style} setStyle={setStyle} />
        <FileUpload selectedStyle={style} />
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Ejemplos de estilos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ImageExample title="Minimalista" src="/img/example-minimalist.jpg" />
            <ImageExample title="Moderno" src="/img/example-modern.jpg" />
            <ImageExample title="Industrial" src="/img/example-industrial.jpg" />
          </div>
        </section>
      </main>
    </>
  )
}