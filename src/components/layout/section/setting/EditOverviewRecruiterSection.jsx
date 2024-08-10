import ProfilePictureUpload from "@/components/disposable/ProfilePictureUpload";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditOverviewRecruiterSection = () => {
  const [value, setValue] = useState("");
  return (
    <div className="col-span-12">
      <p className="mt-4 text-lg font-semibold">Thông tin cơ bản</p>
      <p className="mb-6">
        Đây là nơi bạn có thể chỉnh sửa thông tin cơ bản của bản thân
      </p>
      <div className="border-t-1 border-custom-neutral-2 py-4 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Logo của công ty</h3>
          <p>Ảnh tải lên sẽ làm logo của công ty, được hiển thị công khai</p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-7">
          <ProfilePictureUpload />
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 pt-4 pb-6 grid grid-cols-12">
        <div className="col-span-4">Thông tin cá nhân</div>
        <div className="col-span-8">
          <label className="font-semibold">
            Tên công ty<span className="text-red-500"> *</span>
          </label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
          />
          <label className="font-semibold">
            Địa chỉ<span className="text-red-500"> *</span>
          </label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block"
          />
          <div className="flex w-2/3 mt-4">
            <div className="w-full mr-4">
              <label className="font-semibold">
                Số nhân viên<span className="text-red-500"> *</span>
              </label>
              <input
                required
                type="number"
                className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block"
              />
            </div>
            <div className="w-full">
              <label className="font-semibold">
                Lĩnh vực<span className="text-red-500"> *</span>
              </label>
              <select
                required
                className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block"
              >
                <option value="technology">Công nghệ</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
          <div className="flex w-2/3 mt-4">
            <div className="w-full">
              <label className="font-semibold">
                Ngày sinh<span className="text-red-500"> *</span>
              </label>
              <input
                type="date"
                className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 py-4 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Mô tả về công ty</h3>
          <p>Tóm tắt sơ lược về công ty của bạn</p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-7">
          <label className="font-semibold mb-2 inline-block">
            Mô tả<span className="text-red-500"> *</span>
          </label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-36"
          />
        </div>
      </div>
    </div>
  );
};

export default EditOverviewRecruiterSection;
