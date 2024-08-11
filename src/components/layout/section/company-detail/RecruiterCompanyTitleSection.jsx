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
            src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
            alt="company"
            className="w-32 h-32"
          />
          <div className="ml-8 w-4/5">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
                <Link
                  to={company.websiteLink}
                  className="text-custom-violet font-semibold"
                >
                  {company.websiteLink}
                </Link>
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
                  <p className="font-semibold max-w-xs">
                    Số 14, đường số 7, KĐT Him Lam, phường Tân Hưng, Quận 7, Hồ
                    Chí Minh / Tòa nhà Time Tower, Số 35 Lê Văn Lương, quận
                    Thanh Xuân, Hà Nội
                  </p>
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
