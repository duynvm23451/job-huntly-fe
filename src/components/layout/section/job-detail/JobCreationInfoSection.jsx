import RectangleButton from "@/components/shared/RectangleButton";
import useGetData from "@/hooks/useGetData";
import {
  convertToReadableJobLevel,
  convertToReadableJobType,
} from "@/utils/hepler";
import { getConfiguration } from "@/utils/http";
import React, { useState } from "react";

const JobCreationInfoSection = ({ onSaveData, onChangeTab }) => {
  const { data: config } = useGetData(getConfiguration);
  const [jobType, setjobType] = useState("");
  const [jobLevel, setjobLevel] = useState("");
  const [categories, setCategories] = useState([]);
  const handleJobTypesChange = (event) => {
    const { value } = event.target;
    setjobType(value);
  };

  const handleJobLevelChange = (event) => {
    const { value } = event.target;
    setjobLevel(value);
  };

  const handleCategoriesChange = (event) => {
    const { checked, value } = event.target;
    setCategories((prev) => {
      if (checked) {
        return [value, ...prev];
      } else {
        return prev.filter((val) => val !== value);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    data.type = jobType;
    data.jobLevel = jobLevel;
    data.categories = fd.getAll("categories");
    onSaveData(data);
    onChangeTab();
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
            Tiêu đề công việc<span className="text-red-500"> *</span>
          </label>
          <p>Tiêu đều công việc phải mô tả chính xác vị trí đang tuyển</p>
        </div>
        <div className="col-span-8">
          <input
            required
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="title"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4">
          <label className="font-semibold">
            Loại hình tuyển dụng<span className="text-red-500"> *</span>
          </label>
          <p>Chọn loại hình tuyển dụng</p>
        </div>
        <div className="col-span-8 flex-col">
          {config &&
            config.jobTypes.map((el) => (
              <div className="mb-4" key={el}>
                <input
                  className={`w-6 h-6 text-custom-violet border-2 rounded-full border-slate-300 mr-4`}
                  type="radio"
                  id="jobType"
                  name="jobType"
                  value={el}
                  onChange={handleJobTypesChange}
                />
                <label className="text-lg text-gray-600" htmlFor={"jobType"}>
                  {convertToReadableJobType(el)}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4">
          <label className="font-semibold">
            Mức lương<span className="text-red-500"> *</span>
          </label>
          <p>Điều chỉnh mức lương. Bạn có thể để một trong hai trống</p>
        </div>
        <div className="col-span-8 font-semibold flex">
          <div className="mr-8">
            <label className="font-semibold">
              Thấp nhất ( Đồng )<span className="text-red-500"></span>
            </label>
            <input
              required
              type="number"
              className="px-4 py-2 border-1 mt-2 mb-2 w-full border-custom-neutral-2 rounded-sm block"
              name="minSalary"
            />
          </div>
          <div>
            <label className="font-semibold">
              Cao nhất ( Đồng )<span className="text-red-500"></span>
            </label>
            <input
              required
              className="px-4 py-2 border-1 mt-2 mb-2 w-full border-custom-neutral-2 rounded-sm block"
              name="maxSalary"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4">
          <label className="font-semibold">
            Cập bậc<span className="text-red-500"> *</span>
          </label>
          <p>Chon cập bậc cho công việc của bạn</p>
        </div>
        <div className="col-span-8 flex-col">
          {config &&
            config.jobLevels.map((el) => (
              <div className="mb-4" key={el}>
                <input
                  className={`w-6 h-6 text-custom-violet border-2 rounded-full border-slate-300 mr-4`}
                  type="radio"
                  id="jobLevel"
                  name="jobLevel"
                  value={el}
                  onChange={handleJobLevelChange}
                />
                <label className="text-lg text-gray-600" htmlFor={"jobType"}>
                  {convertToReadableJobLevel(el)}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4">
          <label className="font-semibold">
            Số lượng tuyển dụng<span className="text-red-500"> *</span>
          </label>
          <p>Số lượng nhân viên cần thiết cho vị trí này</p>
        </div>
        <div className="col-span-8 font-semibold flex">
          <input
            required
            type="number"
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="numberOfRecruits"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4">
          <label className="font-semibold">
            Ngày hết hạn ứng tuyển<span className="text-red-500"> *</span>
          </label>
          <p>Chọn ngày hết hạn ứng tuyển</p>
        </div>
        <div className="col-span-8 font-semibold flex">
          <input
            required
            type="date"
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="deadline"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 py-4 border-t-1 border-custom-neutral-2 gap-x-12">
        <div className="col-span-4">
          <label className="font-semibold">
            Lĩnh vực <span className="text-red-500"></span>
          </label>
          <p>Bạn có thể chọn nhiều hơn một lĩnh vực</p>
        </div>
        <div className="col-span-8 flex-col">
          {config &&
            config.categories.map((el) => (
              <div className="mb-4" key={el}>
                <input
                  className={`w-6 h-6 text-custom-violet border-2  rounded-md border-slate-300 mr-4`}
                  type="checkbox"
                  id="categories"
                  name="categories"
                  value={el}
                  onChange={handleCategoriesChange}
                  checked={categories.includes(el)}
                />
                <label className="text-lg text-gray-600" htmlFor={"jobType"}>
                  {el}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-end border-t border-custom-neutral-2 py-6">
        <RectangleButton>Bước tiếp</RectangleButton>
      </div>
    </form>
  );
};

export default JobCreationInfoSection;
