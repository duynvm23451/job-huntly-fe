import { formatTimestampToDate, convertJobType } from "@/utils/hepler";
import React from "react";

const JobApplicationCard = ({ application, isEven = false }) => {
  console.log(application);
  return (
    <li
      className={`${
        isEven && "bg-violet-50"
      } grid grid-cols-12 px-6 py-4 first:rounded-tr-lg first:rounded-tl-lg last:rounded-bl-lg last:rounded-br-lg`}
    >
      <img
        src={application.job.company.logo}
        alt="company logo"
        className="w-12 h-12 rounded-full col-span-1"
      />
      <div className="col-span-4">
        <h3 className="text-lg font-medium">{application.job.title}</h3>
        <div className="flex items-center text-gray-400 mt-t">
          <p>{application.job.company.name}</p>
          <p>・</p>
          <p>{application.job.company.location}</p>
          <p>・</p>
          <p>{convertJobType(application.job.type)}</p>
        </div>
      </div>
      <div className="col-span-4 text-center">
        <strong>Ngày ứng tuyển</strong>
        <p>{formatTimestampToDate(application.createdAt)}</p>
      </div>
      <div className="col-span-3"></div>
    </li>
  );
};

export default JobApplicationCard;
