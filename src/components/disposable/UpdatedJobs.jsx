import useGetData from "@/hooks/useGetData";
import { getJobsByCompany } from "@/utils/http";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import JobApplicationCard from "./JobApplicationCard";
import WarningIcon from "../icons/WarningIcon";
import JobCard from "./JobCard";

const UpdatedJobs = () => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const queryParams = useMemo(
    () => ({
      token,
      page: 0,
      size: 3,
      id: loggedInUser?.company?.id || null,
      sort: "updatedAt,desc",
    }),
    [token]
  );

  const { isLoading, error, data } = useGetData(getJobsByCompany, queryParams);
  return (
    <>
      {loggedInUser && loggedInUser.company && (
        <div className="mt-4 border-1 border-custom-neutral-2 rounded-lg">
          <div className="p-4 border-b-1 border-custom-neutral-2">
            <h3 className="text-lg font-semibold">
              Các công việc cập nhật gần đây
            </h3>
          </div>
          {data && data.content.length > 0 && (
            <ul className="p-4">
              {data.content.map((el, index) => (
                <JobCard key={index} job={el} isEven={index % 2 == 0} />
              ))}
            </ul>
          )}
          {(!data || data.length == 0) && (
            <p className="flex flex-col justify-center items-center p-8 text-xl font-medium text-red-500">
              <WarningIcon className="w-20 h-20 mb-4 text-center" />
              Không tìm thấy công việc nào
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default UpdatedJobs;
