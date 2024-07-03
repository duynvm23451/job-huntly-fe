import CompanyDetailContentSection from "@/components/layout/section/company-detail/CompanyDetailContentSection";
import CompanyDetailJobsSection from "@/components/layout/section/company-detail/CompanyDetailJobsSection";
import { CompanyDetailTitleSection } from "@/components/layout/section/company-detail/CompanyDetailTitleSection";
import Content from "@/components/shared/Content";
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
