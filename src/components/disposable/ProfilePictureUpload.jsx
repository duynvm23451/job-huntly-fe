import React, { useState } from "react";

const ProfilePictureUpload = ({ onHandleFile, currentLogo }) => {
  console.log(currentLogo);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    onHandleFile(file);
  };

  return (
    <div className="flex items-center">
      <div className="border-2 h-fit border-dashed border-custom-violet-2 rounded-lg p-4 text-center max-w-xs">
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
      {(selectedImage || currentLogo) && (
        <div className="mt-4 ml-20 text-center">
          <img
            src={selectedImage || currentLogo}
            alt="Selected"
            className="rounded-full w-40 h-40 object-cover mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePictureUpload;
