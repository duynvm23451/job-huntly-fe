import Content from "@/components/shared/Content";
import graphic from "@/assets/pattern-2.svg";

import React, { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useGetData from "@/hooks/useGetData";
import { getJobsByCompany } from "@/utils/http";
import LastestJobGuestCard from "@/components/disposable/LastestJobGuestCard";
import Pagination from "@/components/shared/Pagination";
import renderPaginationItems from "@/utils/pagination";

const CompanyDetailJobsSection = ({ companyId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const size = searchParams.get("size") ?? 6;
  const queryParams = useMemo(
    () => ({
      id: companyId,
      page,
      size,
    }),
    [companyId, page, size]
  );
  const { isLoading, error, data } = useGetData(getJobsByCompany, queryParams);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No data</p>;
  }
  return (
    <section className="bg-custom-neutral relative overflow-hidden">
      <img
        src={graphic}
        alt="graphic"
        className="absolute -bottom-40 left-1/2 z-10"
      />
      <Content className={"relative z-20 mt-16 pb-20"}>
        <h1 className="text-3xl font-bold">Các công việc đang tuyển dụng</h1>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-6">
          {data.content.map((job) => (
            <LastestJobGuestCard
              logo={
                "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
              }
              title={"Email marketing"}
              type={"Full Time"}
              company={"Revolut"}
              location={"Madrid, Span"}
              categories={["Marketing", "Design"]}
              className="col-span-1"
              key={job.id}
            />
          ))}
        </div>
        {!error && data.totalElements > size && data && (
          <div className="w-full flex justify-center col-span-12 mt-12">
            <Pagination
              navigatePath={"/companies/" + companyId}
              pagination={renderPaginationItems(
                data.number + 1,
                data.totalPages
              )}
            />
          </div>
        )}
        {data.totalElements == 0 && (
          <p className="text-center text-xl font-semibold text-custom-violet mt-8">
            Hiện tại công ty chưa đăng tuyển công việc
          </p>
        )}
      </Content>
    </section>
  );
};

export default CompanyDetailJobsSection;
