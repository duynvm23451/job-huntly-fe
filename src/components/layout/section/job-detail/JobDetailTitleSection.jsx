import Content from "@/components/shared/Content";
import React from "react";
import { Link } from "react-router-dom";

const JobDetailTitleSection = ({ job }) => {
  console.log(job);
  return (
    <section className="bg-custom-neutral">
      <Content className={"pt-24  h-96"}>
        <ul>
          <Link to={"/"}>Trang chủ</Link>
          <Link to={"/companies"}>Công ty</Link>
          <Link to={"/companies/" + job.company.id}>{job.company.name}</Link>
        </ul>
      </Content>
    </section>
  );
};

export default JobDetailTitleSection;
