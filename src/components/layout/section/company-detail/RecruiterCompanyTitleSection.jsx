import CompanyIcon from "@/components/icons/CompanyIcon";
import IndustryIcon from "@/components/icons/IndustryIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import Content from "@/components/shared/Content";
import RectangleButton from "@/components/shared/RectangleButton";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RecruiterCompanyTitleSection = ({ company }) => {
  const navigate = useNavigate();
  const industryNames = company.industries.map((industry) => industry.name);
  const joinedIndustryNames = industryNames.join(" & ");
  const handleClick = () => {
    navigate("/setting");
  };
  return (
    <section className="border-t-1 border-b-1 border-custom-neutral-2">
      <Content className={"pt-4 pb-12"}>
        <div className="mt-4 flex">
          <img
            src={company.logo}
            alt="company log"
            className="w-32 h-32 rounded-sm"
          />
          <div className="ml-8 w-4/5">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
                <a
                  href={company.websiteLink}
                  className="text-custom-violet font-semibold"
                >
                  {company.websiteLink}
                </a>
              </div>
              <RectangleButton type={"outline"} onClick={handleClick}>
                Chỉnh sửa hồ sơ
              </RectangleButton>
            </div>

            <div className="flex justify-between w-full mt-4">
              <div className="flex justify-start">
                <CompanyIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Thành lập</p>
                  <p className="font-semibold">{company.dateFounded}</p>
                </div>
              </div>
              <div className="flex justify-start">
                <PeopleIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Quy mô</p>
                  <p className="font-semibold">{company.employees} nhân viên</p>
                </div>
              </div>

              <div className="flex justify-start">
                <LocationIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Địa chỉ</p>
                  <p className="font-semibold max-w-xs">{company.location}</p>
                </div>
              </div>
              <div className="flex justify-start">
                <IndustryIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Ngành nghề</p>
                  <p className="font-semibold max-w-xs">
                    {joinedIndustryNames}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default RecruiterCompanyTitleSection;
