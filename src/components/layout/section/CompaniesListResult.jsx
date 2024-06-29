import CompanyCard from "@/components/disposable/CompanyCard";
import Content from "@/components/shared/Content";
import SideBarDropDown from "@/components/shared/SideBarDropDown";
import useGetData from "@/hooks/useGetData";
import { getCompanies } from "@/utils/http";
import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const industries = [
  "Quảng cáo",
  "Marketing",
  "Blockchain",
  "Cloud",
  "Công nghệ",
  "Giáo dục",
  "Tài chính",
  "Thực phẩm và đồ uống",
  "Sức khỏe",
  "Truyền thông",
];

const employeesRangeList = [
  {
    min: 1,
    max: 50,
  },
  {
    min: 51,
    max: 150,
  },
  {
    min: 151,
    max: 250,
  },
  {
    min: 251,
    max: 500,
  },
  {
    min: 501,
    max: 1000,
  },
  {
    min: 1000,
    max: null,
  },
];

const CompaniesListResult = ({ changeHanlder, searchObject }) => {
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
  const { isLoading, error, data } = useGetData(getCompanies, queryParams);
  return (
    <section>
      <Content className="pt-24 pb-12 grid grid-cols-12">
        <aside className="col-span-3">
          <SideBarDropDown
            name="industries"
            items={industries}
            title={"Lĩnh vực"}
            changeHanlder={changeHanlder}
          />
          <SideBarDropDown
            type="radio"
            name="employeesRange"
            items={employeesRangeList}
            title={"Số lượng nhân viên"}
            changeHanlder={changeHanlder}
          />
        </aside>
        <div className="col-span-9">
          <div className="flex justify-between items-center">
            <div className="mb-12">
              <h1 className="text-3xl font-bold">Tất cả công ty</h1>
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
          <div className="grid grid-cols-12 gap-8">
            {!error &&
              data &&
              data.content.map((company) => (
                // logo, title, jobNumber, description, categories
                <div className="col-span-6">
                  <CompanyCard
                    logo={
                      "https://img.freepik.com/free-vector/golden-blue-diamond-shape-logo-business-template_23-2148707648.jpg"
                    }
                    title={company.name}
                    jobNumber={8}
                    description={company.description}
                    categories={company.industries.map(
                      (industry) => industry.name
                    )}
                  />
                </div>
              ))}
          </div>
        </div>
      </Content>
    </section>
  );
};

export default CompaniesListResult;
