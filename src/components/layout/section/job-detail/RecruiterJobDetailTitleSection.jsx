import Content from "@/components/shared/Content";
import RectangleButton from "@/components/shared/RectangleButton";
import { convertJobType } from "@/utils/hepler";
import React from "react";
import { Link } from "react-router-dom";

const RecruiterJobDetailTitleSection = ({ job }) => {
  return (
    <section className="bg-custom-neutral">
      <Content className={"pt-4 pb-8"}>
        <div className="flex items-center bg-white p-5 border-1 border-custom-neutral-2 shadow-md mt-8">
          <img
            src={job.company.logo}
            alt="company logo"
            className="w-20 h-20"
          />
          <div className="flex-grow ml-6">
            <h1 className="text-3xl font-semibold">{job.title}</h1>
            <p className="text-neutral-500 mt-1">
              {job.company.name} ・ {job.company.location}・{" "}
              {convertJobType(job.type)}
            </p>
          </div>
          <div className="flex h-fit">
            <div className="bg-custom-neutral-2 w-0.5 mr-6" />
            <Link to={"/create-job"}>
              <RectangleButton>Tạo thêm công việc</RectangleButton>
            </Link>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default RecruiterJobDetailTitleSection;
