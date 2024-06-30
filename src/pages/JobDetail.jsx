import JobDetailTitleSection from "@/components/layout/section/job-detail/JobDetailTitleSection";
import Content from "@/components/shared/Content";
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
  if (!data) {
    return <p>No job data found</p>;
  }
  console.log(data);
  return (
    <>
      <JobDetailTitleSection job={data} />
    </>
  );
};

export default JobDetail;
