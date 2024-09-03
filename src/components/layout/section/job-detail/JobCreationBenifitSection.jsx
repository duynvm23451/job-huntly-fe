import RectangleButton from "@/components/shared/RectangleButton";
import React, { useState } from "react";
import ReactQuill from "react-quill";

const JobCreationBenifitSection = ({
  onSaveData,
  onFinalSubmit,
  isLoading,
}) => {
  const [data, setData] = useState({
    perkAndBenefits: "",
  });
  const handleQuillChange = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onFinalSubmit(data.perkAndBenefits);
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-lg font-semibold mb-1">Thông tin cơ bản</h2>
        <p className="mb-6">Những thông tin ở đây sẽ được hiển thị công khai</p>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4 ">
          <label className="font-semibold ">
            Phúc lợi và lợi ích<span className="text-red-500"> *</span>
          </label>
          <p>
            Khuyến khích mọi người ứng tuyển bằng cách đưa ra những chính sách
            và quyền lợi hấp dẫn
          </p>
        </div>
        <div className="col-span-8">
          <ReactQuill
            theme="snow"
            value={data["perkAndBenefits"]}
            onChange={(value) => handleQuillChange("perkAndBenefits", value)}
            className="h-fit"
          />
        </div>
      </div>
      <div className="py-6 border-t-1 border-custom-neutral-2 flex justify-end">
        <RectangleButton disabled={isLoading}>
          {isLoading ? "isLoading" : "Tạo công việc"}
        </RectangleButton>
      </div>
    </form>
  );
};

export default JobCreationBenifitSection;
