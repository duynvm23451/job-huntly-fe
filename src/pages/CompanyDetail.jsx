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
  return (
    <section>
      <Content>Company detail page</Content>
    </section>
  );
};

export default CompanyDetail;
