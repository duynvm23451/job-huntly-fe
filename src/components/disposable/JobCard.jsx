import { formatTimestampToDate, convertJobType } from "@/utils/hepler";
import React from "react";

const JobCard = ({ job, isEven = false }) => {
  return (
    <li
      className={`${
        isEven && "bg-violet-50"
      } grid grid-cols-12 px-6 py-4 first:rounded-tr-lg first:rounded-tl-lg last:rounded-bl-lg last:rounded-br-lg`}
    >
      <img
        src={job.company.logo}
        alt="company logo"
        className="w-12 h-12 rounded-full col-span-1"
      />
      <div className="col-span-4">
        <h3 className="text-lg font-medium">{job.title}</h3>
        <div className="flex items-center text-gray-400 mt-t">
          <p>{job.company.name}</p>
          <p>・</p>
          <p>{job.company.location}</p>
          <p>・</p>
          <p>{convertJobType(job.type)}</p>
        </div>
      </div>
      <div className="col-span-4 text-center">
        <strong>Cập nhật lúc</strong>
        <p>{formatTimestampToDate(job.updatedAt)}</p>
      </div>
    </li>
  );
};

export default JobCard;
