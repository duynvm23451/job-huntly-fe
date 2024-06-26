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

const salaryRangeList = ["$700 - $1000", "$1000 - $1500", "Trên $2000"];

const FindJobsListGuest = () => {
  const [isShowed, setIsShowed] = useState({
    type: false,
    categories: false,
    level: false,
    salaryRange: false,
  });
  let [searchParams, setSearchParams] = useSearchParams();
  // const [searchParams, setSearchParams] = useState("");

  const { isLoading, error, data } = useGetData(getJobs, searchParams);
  const handleClick = (name) => {
    setIsShowed((preValue) => ({
      ...preValue,
      [name]: !preValue[name],
    }));
  };
  return (
    <section>
      <Content className={"pt-24 pb-12 grid grid-cols-12"}>
        <aside className="col-span-3">
          <SideBarDropDown
            name="type"
            isShowed={isShowed}
            items={categoriesList}
            title={"Loại hình tuyển dụng"}
            onClick={handleClick}
          />
          <SideBarDropDown
            name="categories"
            isShowed={isShowed}
            items={typeList}
            title={"Lĩnh vực"}
            onClick={handleClick}
          />
          <SideBarDropDown
            name="level"
            isShowed={isShowed}
            items={levelList}
            title={"Cấp bậc"}
            onClick={handleClick}
          />
          <SideBarDropDown
            name="salaryRange"
            isShowed={isShowed}
            items={salaryRangeList}
            title={"Mức lương"}
            onClick={handleClick}
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
                  data.number == 0 ? 1 : data.number,
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
