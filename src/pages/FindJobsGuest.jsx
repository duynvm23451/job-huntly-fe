import FindJobsCompaniesHeroGuestSection from "@/components/layout/section/FindJobsCompaniesHeroGuestSection";
import FindJobsListGuest from "@/components/layout/section/jobs/FindJobsListGuest";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FindJobsGuest = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchObject, setSearchObject] = useState({
    title: "",
    location: "",
    types: [],
    categories: [],
    levels: [],
    salaryRange: [],
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
    <>
      <FindJobsCompaniesHeroGuestSection
        highlightText={"công việc"}
        description={
          "Tìm sự nghiệp tiếp theo của bạn tại các công ty như HubSpot, Nike và Dropbox"
        }
        formSubmitHanlder={handleFormSubmit}
      />
      <FindJobsListGuest
        changeHanlder={handleChange}
        searchObject={searchObject}
      />
    </>
  );
};

export default FindJobsGuest;
