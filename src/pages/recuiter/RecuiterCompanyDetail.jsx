import WarningIcon from "@/components/icons/WarningIcon";
import CompanyDetailContentSection from "@/components/layout/section/company-detail/CompanyDetailContentSection";
import CompanyDetailJobsSection from "@/components/layout/section/company-detail/CompanyDetailJobsSection";
import RecruiterCompanyTitleSection from "@/components/layout/section/company-detail/RecruiterCompanyTitleSection";
import useGetData from "@/hooks/useGetData";
import { getComapnyDetail } from "@/utils/http";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const RecuiterCompanyDetail = () => {
  const handleClick = () => {
    logOut();
  };
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const queryParams = useMemo(
    () => ({
      id: loggedInUser && loggedInUser.company.id,
    }),
    [loggedInUser]
  );
  const { isLoading, error, data } = useGetData(getComapnyDetail, queryParams);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <div className="h-screen bg-custom-neutral flex flex-col justify-center items-center text-xl font-medium text-red-500">
        <WarningIcon className="w-20 h-20 mb-4 text-center" />
        {error.message}
      </div>
    );
  }
  if (!data) {
    return <p>No company data found</p>;
  }
  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="flex items-center">
          <img
            src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
            alt="company logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h1 className="text-xl font-bold">Company JSC</h1>
        </div>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Đăng xuất
        </button>
      </div>
      <RecruiterCompanyTitleSection company={data} />
      <CompanyDetailContentSection company={data} />
      <CompanyDetailJobsSection companyId={data.id} />
    </>
  );
};

export default RecuiterCompanyDetail;
