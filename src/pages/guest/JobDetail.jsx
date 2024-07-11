import WarningIcon from "@/components/icons/WarningIcon";
import JobDetailContentSection from "@/components/layout/section/job-detail/JobDetailContentSection";
import JobDetailTitleSection from "@/components/layout/section/job-detail/JobDetailTitleSection";
import useGetData from "@/hooks/useGetData";
import { getJobDetail } from "@/utils/http";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
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
    console.log(error);
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
      <JobDetailTitleSection job={data} />
      <JobDetailContentSection job={data} />
    </>
  );
};

export default JobDetail;
