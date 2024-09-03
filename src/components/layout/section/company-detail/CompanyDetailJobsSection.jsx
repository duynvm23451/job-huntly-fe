import Content from "@/components/shared/Content";
import graphic from "@/assets/pattern-2.svg";

import React, { useMemo, useRef } from "react";
import { useRouteLoaderData, useSearchParams } from "react-router-dom";
import useGetData from "@/hooks/useGetData";
import { getApplicableJobs, getJobsByCompany } from "@/utils/http";
import LastestJobGuestCard from "@/components/disposable/LastestJobGuestCard";
import Pagination from "@/components/shared/Pagination";
import renderPaginationItems from "@/utils/pagination";
import { convertToReadableJobType } from "@/utils/hepler";

const CompanyDetailJobsSection = ({ companyId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") - 1 || 0;
  const size = searchParams.get("size") || 5;
  const token = useRouteLoaderData("root");
  const queryParams = useMemo(
    () => ({
      token,
      page,
      size,
    }),
    [token, page, size]
  );
  const { isLoading, error, data } = useGetData(getApplicableJobs, queryParams);
  console.log(data);
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
              logo={job.company.logo}
              title={job.title}
              type={convertToReadableJobType(job.type)}
              company={job.company.name}
              location={job.company.location}
              categories={job.categories}
              className="col-span-2"
              key={job.id}
            />
          ))}
        </div>
        {!error && data.totalElements > size && data && (
          <div className="w-full flex justify-center col-span-12 mt-12">
            <Pagination
              navigatePath={"/companies/" + companyId}
              pagination={renderPaginationItems(
                data.page.number + 1,
                data.page.totalPages
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
