import Content from "@/components/shared/Content";
import RectangleButton from "@/components/shared/RectangleButton";
import { convertJobType } from "@/utils/hepler";
import React from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

const JobDetailTitleSection = ({ job }) => {
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();
  const applyHandle = () => {
    if (!token) {
      navigate("/auth/login");
    }
  };
  return (
    <section className="bg-custom-neutral">
      <Content className={"pt-32 pb-20"}>
        <ul className="text-neutral-400">
          <Link to={"/"}>Trang chủ / </Link>
          <Link to={"/companies"}> Công ty /</Link>
          <Link to={"/companies/" + job.company.id}> {job.company.name} /</Link>
          <Link to={"/jobs/" + job.id} className="text-neutral-800">
            {" "}
            {job.title}
          </Link>
        </ul>
        <div className="flex items-center bg-white p-5 border-1 border-custom-neutral-2 shadow-md mt-8">
          <img
            src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
            alt="company"
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
            <RectangleButton onClick={applyHandle}>Ứng tuyển</RectangleButton>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default JobDetailTitleSection;
