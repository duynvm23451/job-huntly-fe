import ArrowRight2Icon from "@/components/icons/ArrowRight2Icon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import React from "react";

const NewsCardSection = () => {
  const data = {
    total: 67,
    categories: [
      { name: "Intern", count: 45, color: "bg-purple-500" },
      { name: "Junior", count: 24, color: "bg-teal-400" },
      { name: "Middle", count: 22, color: "bg-blue-400" },
      { name: "Senior", count: 32, color: "bg-yellow-400" },
      { name: "Manager", count: 30, color: "bg-red-400" },
      { name: "Director", count: 3, color: "bg-[#515B6F]" },
    ],
  };
  return (
    <div className="grid grid-cols-12 gap-x-6">
      <div className="flex bg-custom-violet col-span-4 p-6 items-center text-custom-neutral">
        <h1 className="text-5xl font-semibold mr-4">76</h1>
        <p className="">Ứng viên cần được xem xét</p>
        <ArrowRightIcon className="w-10 h-10 ml-4" />
      </div>
      <div className="flex bg-[#56CDAD] col-span-4 p-6 items-center text-custom-neutral">
        <h1 className="text-5xl font-semibold mr-4">24</h1>
        <p className="">Tin nhắn mới</p>
        <ArrowRightIcon className="w-10 h-10 ml-4" />
      </div>
      <div className="flex bg-[#26A4FF] col-span-4 p-6 items-center text-custom-neutral">
        <h1 className="text-5xl font-semibold mr-4">12</h1>
        <p className="">Công việc có thể ứng tuyển</p>
        <ArrowRightIcon className="w-10 h-10 ml-4" />
      </div>
      <div className="rounded-lg p-6 shadow-md col-span-12 flex mt-4 border-1 border-custom-neutral-2">
        <div className="w-3/12">
          <h3 className="text-lg -mt-2 mb-2 font-semibold text-gray-700">
            Tổng quan ứng viên
          </h3>
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            {data.total}
          </h1>
          <p className="text-gray-500">Ứng viên</p>
        </div>
        <div className="w-full">
          <div className="flex  h-2 mb-6">
            {data.categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} flex-grow`}
                style={{ flexGrow: category.count }}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            {data.categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center mb-2 w-full sm:w-1/2"
              >
                <span
                  className={`w-3 h-3 rounded-sm ${category.color} mr-2`}
                ></span>
                <span className="text-sm text-gray-700 flex-grow">
                  {category.name}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSection;
