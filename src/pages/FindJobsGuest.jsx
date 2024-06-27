import FindJobsCompaniesHeroGuestSection from "@/components/layout/section/FindJobsCompaniesHeroGuestSection";
import FindJobsListGuest from "@/components/layout/section/FindJobsListGuest";
import { useState } from "react";

const FindJobsGuest = () => {
  const [searchObject, setSearchObject] = useState({
    name: "",
    location: "",
    types: [],
    industries: [],
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
  };

  const handleChange = (name, value) => {
    setSearchObject((preValue) => ({
      ...preValue,
      [name]: value,
    }));
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
