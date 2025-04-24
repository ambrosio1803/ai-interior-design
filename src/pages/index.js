import React, { useState } from 'react';
import Head from 'next/head';
import UploadForm from '../components/UploadForm';

export default function Home() {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/generate", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setGeneratedImage(data.output);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>AI Interior Design</title>
      </Head>
      <main className="min-h-screen p-10">
        <h1 className="text-4xl font-bold text-center mb-10">AI Interior Design</h1>
        <UploadForm onImageUpload={handleImageUpload} />
        {loading && <p className="text-center mt-6">Generating image with AI...</p>}
        {generatedImage && (
          <div className="mt-6 flex justify-center">
            <img src={generatedImage} alt="Generated" className="rounded shadow-lg" />
          </div>
        )}
      </main>
    </>
  );
}