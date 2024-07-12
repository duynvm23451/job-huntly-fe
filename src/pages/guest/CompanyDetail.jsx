import WarningIcon from "@/components/icons/WarningIcon";
import CompanyDetailContentSection from "@/components/layout/section/company-detail/CompanyDetailContentSection";
import CompanyDetailJobsSection from "@/components/layout/section/company-detail/CompanyDetailJobsSection";
import { CompanyDetailTitleSection } from "@/components/layout/section/company-detail/CompanyDetailTitleSection";
import useGetData from "@/hooks/useGetData";
import { getComapnyDetail } from "@/utils/http";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const CompanyDetail = () => {
  const params = useParams();
  const queryParams = useMemo(
    () => ({
      id: params.companyId,
    }),
    [params]
  );
  const { isLoading, error, data } = useGetData(getComapnyDetail, queryParams);
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
    return <p>No company data found</p>;
  }
  return (
    <>
      <CompanyDetailTitleSection company={data} />
      <CompanyDetailContentSection company={data} />
      <CompanyDetailJobsSection companyId={data.id} />
    </>
  );
};

export default CompanyDetail;
