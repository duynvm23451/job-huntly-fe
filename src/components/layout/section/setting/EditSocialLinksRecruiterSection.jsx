import ProfilePictureUpload from "@/components/disposable/ProfilePictureUpload";
import UploadIcon from "@/components/icons/UploadIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditSocialLinksRecruiterSection = () => {
  const [files, setFiles] = useState([]);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...selectedFiles]); // Spread the FileList into an array
    console.log(selectedFiles);
  };
  return (
    <div className="col-span-12">
      <div className="py-4 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Mạng xã hội</h3>
          <p>
            Thêm các đường link các trang mạng xã hội của công ty bạn để ứng
            viên có thể dễ dàng tìm hiểu hơn
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-8">
          <label className="font-semibold">Facebook</label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block"
          />
          <br />
          <label className="font-semibold">Youtube</label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block"
          />
          <br />
          <label className="font-semibold">Linkedin</label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
          />
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 pt-4 pb-6 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Ảnh công ty</h3>
          <p>
            Thêm các đường link các trang mạng xã hội của công ty bạn để ứng
            viên có thể dễ dàng tìm hiểu hơn
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-7">
          <div className="col-span-12 border-2 border-dashed mt-2 border-custom-violet-2 rounded-lg p-4 text-center">
            <input
              id="file-upload"
              className="hidden"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer font-semibold text-custom-violet-2 flex flex-col items-center"
            >
              Tải lên CV mới
              <UploadIcon className="-rotate-90 w-12 h-12 mt-2" />
            </label>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {Array.from(files).map((file, index) => (
              <div key={index} className="col-span-1">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-8 w-11/12">
        <RectangleButton>
          {loggedInUser && loggedInUser.company ? "Lưu thay đổi" : "Tạo mới"}
        </RectangleButton>
      </div>
    </div>
  );
};

export default EditSocialLinksRecruiterSection;
