import React, { useState } from 'react';

const UploadForm = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    onImageUpload(file);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {selectedImage && <img src={selectedImage} alt="Preview" className="w-64 rounded shadow" />}
    </div>
  );
};

export default UploadForm;