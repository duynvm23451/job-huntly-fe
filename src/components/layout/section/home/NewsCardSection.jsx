import ArrowRight2Icon from "@/components/icons/ArrowRight2Icon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import useGetData from "@/hooks/useGetData";
import { getRecruiterDashboardInfo } from "@/utils/http";
import React, { useMemo } from "react";
import { useRouteLoaderData } from "react-router-dom";

const NewsCardSection = () => {
  const token = useRouteLoaderData("root");
  const queryParams = useMemo(
    () => ({
      token,
    }),
    [token]
  );
  const { isLoading, error, data } = useGetData(
    getRecruiterDashboardInfo,
    queryParams
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No data</p>;
  }

  const jobLevels = [
    { name: "intern", color: "bg-purple-500" },
    { name: "fresher", color: "bg-teal-400" },
    { name: "junior", color: "bg-blue-400" },
    { name: "middle", color: "bg-yellow-400" },
    { name: "senior", color: "bg-red-400" },
    { name: "director", color: "bg-[#a6acaf]" },
    { name: "above", color: "bg-[#17202a]" },
  ];

  return (
    <>
      {data && (
        <div className="grid grid-cols-12 gap-x-6">
          <div className="flex bg-custom-violet col-span-4 p-6 items-center text-custom-neutral">
            <h1 className="text-5xl font-semibold mr-4">{data.applications}</h1>
            <p className="">Ứng viên cần được xem xét</p>
            <ArrowRightIcon className="w-10 h-10 ml-4" />
          </div>
          <div className="flex bg-[#56CDAD] col-span-4 p-6 items-center text-custom-neutral">
            <h1 className="text-5xl font-semibold mr-4">
              {data.notRepChatRooms}
            </h1>
            <p className="">Cuộc hội thoại chưa trả lời</p>
            <ArrowRightIcon className="w-10 h-10 ml-4" />
          </div>
          <div className="flex bg-[#26A4FF] col-span-4 p-6 items-center text-custom-neutral">
            <h1 className="text-5xl font-semibold mr-4">
              {data.applicableJobs}
            </h1>
            <p className="">Công việc có thể ứng tuyển</p>
            <ArrowRightIcon className="w-10 h-10 ml-4" />
          </div>
          <div className="rounded-lg p-6 shadow-md col-span-12 flex mt-4 border-1 border-custom-neutral-2">
            <div className="w-3/12">
              <h3 className="text-lg -mt-2 mb-2 font-semibold text-gray-700">
                Tổng quan ứng viên
              </h3>
              <h1 className="text-5xl font-bold text-gray-800 mb-2">
                {data.totalApplications}
              </h1>
              <p className="text-gray-500">Ứng viên</p>
            </div>
            <div className="w-full">
              <div className="flex  h-2 mb-6">
                {jobLevels.map((jobLevel, index) => (
                  <div
                    key={index}
                    className={`${jobLevel.color} flex-grow`}
                    style={{ flexGrow: data[jobLevel.name] }}
                  ></div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                {jobLevels.map((jobLevel, index) => (
                  <div
                    key={index}
                    className="flex items-center mb-2 w-full sm:w-1/2"
                  >
                    <span
                      className={`w-3 h-3 rounded-sm ${jobLevel.color} mr-2`}
                    ></span>
                    <span className="text-sm text-gray-700 flex-grow">
                      {jobLevel.name}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {data[jobLevel.name]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCardSection;
