import Head from 'next/head'
import FileUpload from '@/components/FileUpload'
import ImageExample from '@/components/ImageExample'
import StyleSelector from '@/components/StyleSelector'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>AI Interior Design</title>
      </Head>
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Transforma tus espacios con IA</h1>
        <StyleSelector />
        <FileUpload />
        <ImageExample />
      </main>
    </div>
  )
}