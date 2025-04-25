import Head from 'next/head';
import FileUpload from '@/components/FileUpload';
import ImageExample from '@/components/ImageExample';
import StyleSelector from '@/components/StyleSelector';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Interior Design</title>
      </Head>
      <main>
        <h1>Diseña tu espacio con IA</h1>
        <StyleSelector />
        <FileUpload />
        <ImageExample />
      </main>
    </>
  );
}