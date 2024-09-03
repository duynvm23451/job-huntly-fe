import ProfilePictureUpload from "@/components/disposable/ProfilePictureUpload";
import UploadIcon from "@/components/icons/UploadIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import React from "react";

const EditProfileEmployeeSection = () => {
  return (
    <div className="col-span-12">
      <p className="mt-4 text-lg font-semibold">Thông tin cơ bản</p>
      <p className="mb-6">
        Đây là nơi bạn có thể chỉnh sửa thông tin cơ bản của bản thân
      </p>
      <div className="border-t-1 border-custom-neutral-2 py-4">
        <ProfilePictureUpload />
      </div>
      <div className="border-t-1 border-custom-neutral-2 pt-4 pb-6 grid grid-cols-12">
        <div className="col-span-4">Thông tin cá nhân</div>
        <div className="col-span-8">
          <label className="font-semibold">
            Họ và tên<span className="text-red-500"> *</span>
          </label>
          <input className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block" />
          <div className="flex w-2/3 mt-4">
            <div className="w-full mr-4">
              <label className="font-semibold">
                Số điện thoại<span className="text-red-500"> *</span>
              </label>
              <input className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block" />
            </div>
            <div className="w-full">
              <label className="font-semibold">
                Email<span className="text-red-500"> *</span>
              </label>
              <input className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block" />
            </div>
          </div>
          <div className="flex w-2/3 mt-4">
            <div className="w-full mr-4">
              <label className="font-semibold">
                Ngày sinh<span className="text-red-500"> *</span>
              </label>
              <input
                type="date"
                className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block"
              />
            </div>
            <div className="w-full">
              <label className="font-semibold">
                Giới tính<span className="text-red-500"> *</span>
              </label>
              <select className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block">
                <option value="volvo">Nam</option>
                <option value="saab">Nữ</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 py-4 grid grid-cols-12">
        <div className="col-span-4">Giới thiệu về bản thân</div>
        <div className="col-span-8">
          <textarea
            rows={"5"}
            className="w-2/3 border-1 border-custom-neutral-2"
          />
        </div>
      </div>

      <div className="border-t-1 border-b-1 border-custom-neutral-2 py-4">
        <div className="col-span-12 border-2 border-dashed mt-2 border-custom-violet-2 rounded-lg p-4 text-center">
          <input
            id="file-upload"
            className="hidden"
            type="file"
            accept="image/*"
            // onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer font-semibold text-custom-violet-2 flex flex-col items-center"
          >
            Tải lên CV mới
            <UploadIcon className="-rotate-90 w-12 h-12 mt-2" />
          </label>
        </div>
      </div>
      <div className="flex justify-end pt-8 pb-16">
        <RectangleButton>Lưu thay đổi</RectangleButton>
      </div>
    </div>
  );
};

export default EditProfileEmployeeSection;
