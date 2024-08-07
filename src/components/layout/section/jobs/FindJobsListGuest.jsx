import { useMemo, useState } from "react";
import Content from "@/components/shared/Content";
import SideBarDropDown from "@/components/shared/SideBarDropDown";
import JobsListItemCard from "@/components/disposable/JobsListItemCard";
import Pagination from "@/components/shared/Pagination";
import useGetData from "@/hooks/useGetData";
import { getJobs } from "@/utils/http";
import { convertJobType } from "@/utils/hepler";
import renderPaginationItems from "@/utils/pagination";
import { Link, useSearchParams } from "react-router-dom";
import WarningIcon from "@/components/icons/WarningIcon";

const typeList = ["Full Time", "Part Time", "Remote", "Contact"];
const categoriesList = [
  "Design",
  "Sales",
  "Marketing",
  "Business",
  "Human Resource",
  "Finance",
  "Engineering",
  "Technology",
];
const levelList = [
  "Intern",
  "Junior",
  "Middle",
  "Senior",
  "Manager",
  "Director",
];

const salaryRangeList = [
  {
    min: 700,
    max: 1000,
  },
  {
    min: 1000,
    max: 1500,
  },
  {
    min: 1500,
    max: null,
  },
];

const FindJobsListGuest = ({ changeHanlder, searchObject }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const size = searchParams.get("size") ?? 1;
  const queryParams = useMemo(
    () => ({
      ...searchObject,
      page,
      size,
    }),
    [searchObject, page, size]
  );
  const { isLoading, error, data } = useGetData(getJobs, queryParams);
  return (
    <section>
      <Content className={"pt-24 pb-12 grid grid-cols-12"}>
        <aside className="col-span-3">
          <SideBarDropDown
            name="types"
            items={typeList}
            title={"Loại hình tuyển dụng"}
            changeHanlder={changeHanlder}
          />
          <SideBarDropDown
            name="categories"
            items={categoriesList}
            title={"Lĩnh vực"}
            changeHanlder={changeHanlder}
          />
          <SideBarDropDown
            name="levels"
            items={levelList}
            title={"Cấp bậc"}
            changeHanlder={changeHanlder}
          />
          <SideBarDropDown
            type="radio"
            name="salaryRange"
            items={salaryRangeList}
            title={"Mức lương"}
            changeHanlder={changeHanlder}
          />
        </aside>
        <div className="w-full col-span-9">
          <div className="flex justify-between items-center">
            <div className="mb-12">
              <h1 className="text-3xl font-bold">Tất cả công việc</h1>
              <p className="text-xl text-gray-500 mt-2">Hiển thị 73 kết quả</p>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-500">Sắp xếp theo: </p>
              <select className="border-transparent focus:border-transparent focus:ring-0">
                <option>Ngày đăng gần nhất</option>
                <option>Lựa chọn 2</option>
                <option>Lựa chọn 3</option>
              </select>
            </div>
          </div>
          {!error &&
            data &&
            data.content.map((job) => (
              <JobsListItemCard
                logo={
                  "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
                }
                title={job.title}
                type={convertJobType(job.type)}
                company={job.company.name}
                location={job.company.location}
                categories={job.categories}
                id={job.id}
                key={job.id}
              />
            ))}
          {!error && data && (
            <div className="w-full flex justify-center mt-12">
              <Pagination
                navigatePath="/jobs"
                pagination={renderPaginationItems(
                  data.number + 1,
                  data.totalPages
                )}
              />
            </div>
          )}
          {error && (
            <p className="flex flex-col justify-center items-center p-8 text-xl font-medium text-red-500">
              <WarningIcon className="w-20 h-20 mb-4 text-center" />
              {error.message}
            </p>
          )}
        </div>
      </Content>
    </section>
  );
};

export default FindJobsListGuest;
