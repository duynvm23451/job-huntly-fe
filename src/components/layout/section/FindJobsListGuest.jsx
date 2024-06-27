import { useState } from "react";
import Content from "@/components/shared/Content";
import SideBarDropDown from "@/components/shared/SideBarDropDown";
import JobsListItemCard from "@/components/disposable/JobsListItemCard";
import Pagination from "@/components/shared/Pagination";
import useGetData from "@/hooks/useGetData";
import { getJobs } from "@/utils/http";
import { convertJobType } from "@/utils/hepler";
import renderPaginationItems from "@/utils/pagination";
import { useSearchParams } from "react-router-dom";

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
  let [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, error, data } = useGetData(
    getJobs,
    searchParams,
    searchObject
  );
  return (
    <section>
      <Content className={"pt-24 pb-12 grid grid-cols-12"}>
        <aside className="col-span-3">
          <SideBarDropDown
            name="type"
            items={categoriesList}
            title={"Loại hình tuyển dụng"}
            changeHanlder={changeHanlder}
          />
          <SideBarDropDown
            name="categories"
            items={typeList}
            title={"Lĩnh vực"}
            changeHanlder={changeHanlder}
          />
          <SideBarDropDown
            name="level"
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
                key={job.id}
                logo={
                  "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
                }
                title={job.title}
                type={convertJobType(job.type)}
                company={job.company.name}
                location={job.company.location}
                categories={job.categories}
              />
            ))}
          {!error && data && (
            <div className="w-full flex justify-center mt-12">
              <Pagination
                pagination={renderPaginationItems(
                  data.number + 1,
                  data.totalPages
                )}
              />
            </div>
          )}
        </div>
      </Content>
    </section>
  );
};

export default FindJobsListGuest;
