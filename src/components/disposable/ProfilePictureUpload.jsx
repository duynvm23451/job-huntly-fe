import React, { useState } from "react";

const ProfilePictureUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    // Handle file upload logic here (e.g., send to server)
  };

  return (
    <div>
      <div className="border-2 border-dashed border-custom-violet-2 rounded-lg p-4 text-center max-w-xs">
        <input
          id="file-upload"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer font-semibold text-custom-violet-2"
        >
          Nhấp vào đây để tải ảnh lên
        </label>
        <p className="text-gray-600 text-sm mt-2">
          SVG, PNG, JPG or GIF (max. 400 x 400px)
        </p>
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
