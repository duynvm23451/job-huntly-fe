import RectangleButton from "@/components/shared/RectangleButton";
import React, { useState } from "react";
import ReactQuill from "react-quill";

const JobCreationDescriptionSection = ({ onSaveData, onChangeTab }) => {
  const [data, setData] = useState({
    description: "",
    responsibilities: "",
    preferredQualifications: "",
    niceToHaves: "",
  });

  const handleQuillChange = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSaveData(data);
    onChangeTab();
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-lg font-semibold mb-1">Mô tả</h2>
        <p className="mb-6">Những thông tin ở đây sẽ được hiển thị công khai</p>
        <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
          <div className="col-span-4 ">
            <label className="font-semibold ">
              Mô tả công việc<span className="text-red-500"> *</span>
            </label>
            <p>Mô tả vị trí đang tuyển dụng</p>
          </div>
          <div className="col-span-8">
            <ReactQuill
              theme="snow"
              value={data["description"]}
              onChange={(value) => handleQuillChange("description", value)}
              className="h-fit"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
          <div className="col-span-4 ">
            <label className="font-semibold ">
              Trách nghiệm<span className="text-red-500"> *</span>
            </label>
            <p>Trách nghiệm của ứng viên nếu đảm nhận công việc này</p>
          </div>
          <div className="col-span-8">
            <ReactQuill
              theme="snow"
              value={data["responsibilities"]}
              onChange={(value) => handleQuillChange("responsibilities", value)}
              className="h-fit"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
          <div className="col-span-4 ">
            <label className="font-semibold ">
              Bạn là ai ?<span className="text-red-500"> *</span>
            </label>
            <p>Những yêu cầu cần đáp ứng khi ứng tuyển</p>
          </div>
          <div className="col-span-8">
            <ReactQuill
              theme="snow"
              value={data["preferredQualifications"]}
              onChange={(value) =>
                handleQuillChange("preferredQualifications", value)
              }
              className="h-fit"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
          <div className="col-span-4 ">
            <label className="font-semibold ">
              Ưu tiên nếu có<span className="text-red-500"> *</span>
            </label>
            <p>Ứng viên đáp ứng những tiêu chí này sẽ được ưu tiên</p>
          </div>
          <div className="col-span-8">
            <ReactQuill
              theme="snow"
              value={data["niceToHaves"]}
              onChange={(value) => handleQuillChange("niceToHaves", value)}
              className="h-fit"
            />
          </div>
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 py-6 flex justify-end">
        <RectangleButton>Bước tiếp</RectangleButton>
      </div>
    </form>
  );
};

export default JobCreationDescriptionSection;
