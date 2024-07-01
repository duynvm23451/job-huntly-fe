import ArrowUpRightOpenIcon from "@/components/icons/ArrowUpRightOpenIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import Content from "@/components/shared/Content";
import SmallCategoryCard from "@/components/shared/SmallCategoryCard";
import { formatTimestampToDate, convertJobType } from "@/utils/hepler";
import React from "react";
import { Link } from "react-router-dom";

const JobDetailContentSection = ({ job }) => {
  return (
    <section className="bg-white pt-16 pb-24">
      <Content className={"grid grid-cols-12"}>
        <div className="col-span-8">
          <h1 className="text-2xl font-semibold mb-3">Mô tả</h1>
          <p>{job.description}</p>
          <h1 className="text-2xl font-semibold mt-8 mb-4">Trách nghiệm</h1>
          <p>{job.responsibilities}</p>
          <h1 className="text-2xl font-semibold mt-8 mb-4">Bạn là ai ?</h1>
          <p>{job.preferredQualifications}</p>
          <h1 className="text-2xl font-semibold mt-8 mb-4">Ưu tiên nếu có</h1>
          <p>{job.niceToHaves}</p>
          <h1 className="text-2xl font-semibold mt-8 mb-4">
            Phúc lợi và lợi ích
          </h1>
          <p>{job.perkAndBenefits}</p>
        </div>
        <div className="col-span-4 ml-16">
          <h1 className="text-2xl font-semibold mb-6">Mô tả</h1>
          <div className="bg-custom-neutral p-4">
            <p>
              Đã có <span className="font-semibold">5 đơn</span> trên 10 vị trí
            </p>
            <progress
              value="5"
              max="10"
              className="w-full mt-2.5 h-2 progress-unfilled:bg-custom-neutral-2 progress-filled:bg-[#68cbad]"
            >
              32%
            </progress>
          </div>
          <ul>
            <li className="flex justify-between mt-6">
              <span>Ứng tuyển trước</span>
              <span className="font-medium">{job.deadline}</span>
            </li>
            <li className="flex justify-between mt-4">
              <span>Được đăng vào</span>
              <span className="font-medium">
                {formatTimestampToDate(job.createdAt)}
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span>Hình thức</span>
              <span className="font-medium">{convertJobType(job.type)}</span>
            </li>
            <li className="flex justify-between mt-4">
              <span>Cấp bậc</span>
              <span className="font-medium">
                {convertJobType(job.jobLevel)}
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span>Lương</span>
              <span className="font-medium">
                {job.minSalary}-{job.maxSalary}
              </span>
            </li>
          </ul>
          <div className="border-t-2 mt-12 border-custom-neutral-2">
            <h1 className="text-2xl font-semibold mt-6">Phân loại</h1>
            <div className="flex flex-wrap mt-2">
              {job.categories.map((el) => (
                <SmallCategoryCard
                  textColor={"text-white"}
                  bgColor={"bg-custom-violet"}
                  key={el}
                >
                  {el}
                </SmallCategoryCard>
              ))}
            </div>
          </div>
          <div className="border-t-2 mt-12 border-custom-neutral-2">
            <div className="flex mt-8">
              <img
                src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
                alt="company"
                className="w-16 h-16"
              />
              <div className="ml-4 flex-1 w-3/5">
                <h2 className="text-xl font-semibold break-words">
                  {job.title}
                </h2>
              </div>
            </div>
            <p className="grid grid-cols-12 mt-4">
              <span className="flex items-start col-span-4">
                <PeopleIcon className="w-5 h-5 mr-2" />
                Quy mô:
              </span>
              <span className="col-span-8 font-medium">
                {job.company.employees} nhân viên
              </span>
            </p>
            <p className="grid grid-cols-12 mt-2">
              <span className="flex items-start col-span-4">
                <LocationIcon className="w-6 h-6 mr-2" />
                Địa chỉ:
              </span>
              <span className="col-span-8 font-medium">
                {job.company.location}
              </span>
            </p>
            <div className="flex justify-center mt-4">
              <Link
                to={"/companies/" + job.company.id}
                className="flex text-custom-violet-2 font-bold"
              >
                Xem trang công ty
                <ArrowUpRightOpenIcon className="w-5 h-5 ml-2 text-custom-violet" />
              </Link>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default JobDetailContentSection;
