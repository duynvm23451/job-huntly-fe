import CompaniesListResult from "@/components/layout/section/companies/CompaniesListResult";
import FindJobsCompaniesHeroGuestSection from "@/components/layout/section/FindJobsCompaniesHeroGuestSection";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const CompaniesGuest = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchObject, setSearchObject] = useState({
    name: "",
    location: "",
    industries: [],
    employeesRange: [],
  });

  const handleFormSubmit = (formValue) => {
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] !== "") {
        setSearchObject((preValue) => ({
          ...preValue,
          [key]: formValue[key],
        }));
      }
    });
    setSearchParams({});
  };

  const handleChange = (name, value) => {
    setSearchObject((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    setSearchParams({});
  };

  return (
    <div className="pb-12">
      <FindJobsCompaniesHeroGuestSection
        highlightText={"công ty"}
        description={"Tìm công ty trong mơ mà bạn muốn được làm việc"}
        isCompaniesTab={true}
        formSubmitHanlder={handleFormSubmit}
      />
      <CompaniesListResult
        changeHanlder={handleChange}
        searchObject={searchObject}
      />
    </div>
  );
};

export default CompaniesGuest;
