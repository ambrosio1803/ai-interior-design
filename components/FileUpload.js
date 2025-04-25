import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/generate', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setImage(data.image);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Generar diseño</button>
      {image && <img src={image} alt="Resultado IA" />}
    </div>
  );
}