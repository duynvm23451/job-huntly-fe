import WarningIcon from "@/components/icons/WarningIcon";
import JobDetailContentSection from "@/components/layout/section/job-detail/JobDetailContentSection";
import RecruiterJobDetailTitleSection from "@/components/layout/section/job-detail/RecruiterJobDetailTitleSection";
import useGetData from "@/hooks/useGetData";
import { getJobDetail } from "@/utils/http";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditJob = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const params = useParams();
  const queryParams = useMemo(
    () => ({
      id: params.jobId,
    }),
    [params]
  );
  const { isLoading, error, data } = useGetData(getJobDetail, queryParams);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <div className="h-screen bg-custom-neutral flex flex-col justify-center items-center text-xl font-medium text-red-500">
        <WarningIcon className="w-20 h-20 mb-4 text-center" />
        {error.message}
      </div>
    );
  }
  if (!data) {
    return <p>No job data found</p>;
  }
  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="flex items-center">
          {loggedInUser?.company && (
            <img
              src={loggedInUser.company.logo}
              alt="company logo"
              className="w-12 h-12 rounded-full mr-4"
            />
          )}

          <h1 className="text-xl font-bold">
            {loggedInUser.company
              ? loggedInUser.company.name
              : "Không có công ty"}
          </h1>
        </div>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Trở về dashboard
        </button>
      </div>
      <RecruiterJobDetailTitleSection job={data} />
      <JobDetailContentSection job={data} />
    </>
  );
};

export default EditJob;
