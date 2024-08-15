import JobApplicationCard from "@/components/disposable/JobApplicationCard";
import WarningIcon from "@/components/icons/WarningIcon";
import { getApplications } from "@/utils/http";
import React, { useEffect, useMemo, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

const DashboardRecentApplicationsSection = () => {
  const [data, setData] = useState(null);
  const token = useRouteLoaderData("root");
  const queryParams = useMemo(
    () => ({
      page: 0,
      size: 3,
      sort: "createdAt,desc",
    }),
    []
  );
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getApplications(queryParams, token);
        setData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplications();
  }, [queryParams]);
  return (
    <div className="mt-4 border-1 border-custom-neutral-2 rounded-lg">
      <div className="p-4 border-b-1 border-custom-neutral-2">
        <h3 className="text-lg font-semibold">
          Các công việc ứng tuyển gần đây
        </h3>
      </div>
      {data && (
        <ul className="p-4">
          {data.map((el, index) => (
            <JobApplicationCard
              key={index}
              application={el}
              isEven={index % 2 == 0}
            />
          ))}
        </ul>
      )}
      {(!data || data.length == 0) && (
        <p className="flex flex-col justify-center items-center p-8 text-xl font-medium text-red-500">
          <WarningIcon className="w-20 h-20 mb-4 text-center" />
          Không tìm thấy công việc nào đã ứng tuyển
        </p>
      )}
    </div>
  );
};

export default DashboardRecentApplicationsSection;
