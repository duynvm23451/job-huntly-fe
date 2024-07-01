import CompanyIcon from "@/components/icons/CompanyIcon";
import IndustryIcon from "@/components/icons/IndustryIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import Content from "@/components/shared/Content";
import React from "react";
import { Link } from "react-router-dom";

export const CompanyDetailTitleSection = ({ company }) => {
  return (
    <section className="bg-custom-neutral">
      <Content className={"pt-32 pb-12"}>
        <ul className="text-neutral-400">
          <Link to={"/"}>Trang chủ / </Link>
          <Link to={"/companies"}> Công ty /</Link>
          <Link to={"/companies/" + company.id} className="text-neutral-800">
            {" "}
            {company.name}
          </Link>
        </ul>
        <div className="mt-10 flex">
          <img
            src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
            alt="company"
            className="w-32 h-32"
          />
          <div className="ml-8 w-4/5">
            <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
            <Link
              to={company.websiteLink}
              className="text-custom-violet font-semibold"
            >
              {company.websiteLink}
            </Link>
            <div className="flex justify-between w-full mt-4">
              <div className="flex justify-start">
                <CompanyIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Thành lập</p>
                  <p className="text-custom-violet font-semibold">
                    {company.dateFounded}
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <PeopleIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Quy mô</p>
                  <p className="text-custom-violet font-semibold">
                    {company.employees} nhân viên
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <LocationIcon className="w-10 h-10 p-2 rounded-full bg-white" />
                <div className="ml-3">
                  <p>Địa chỉ</p>
                  <p className="text-custom-violet font-semibold max-w-xs">
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
                  <p className="text-custom-violet font-semibold max-w-xs">
                    {company.industries[0].name}
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
