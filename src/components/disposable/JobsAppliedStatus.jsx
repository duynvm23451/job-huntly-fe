import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
import { Link } from "react-router-dom";

Chart.register(ArcElement, Tooltip, Legend);

const JobsAppliedStatus = ({ total, interviewing }) => {
  const interviewingPercent = ((interviewing / total) * 100).toFixed(2);
  const remainPercent = (100 - interviewingPercent).toFixed(2);
  console.log(interviewingPercent, remainPercent);

  const data = {
    labels: ["Đang phỏng vấn", "Trạng thái khác"],
    datasets: [
      {
        data: [interviewingPercent, remainPercent],
        backgroundColor: ["#4640de", "#E6E8FD"],
        hoverBackgroundColor: ["#4640de", "#E6E8FD"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-fit border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg mb-6 font-semibold">Trạng thái đơn ứng tuyển</h3>
      <div className="flex">
        <div
          className="relative"
          style={{ width: "130px", height: "130px", margin: "0 auto" }}
        >
          <Doughnut data={data} options={options} />
        </div>
        <div className="ml-4 flex flex-col items-start">
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-custom-violet rounded-sm mr-4"></div>
            <div className="flex flex-col">
              <strong>{interviewingPercent} %</strong>
              <span>Đang phỏng vấn</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-[#E6E8FD] rounded-sm mr-4"></div>
            <div className="flex flex-col">
              <strong>{remainPercent} %</strong>
              <span>Trạng thái khác</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/applications"
        className="mt-6 inline-block text-lg font-semibold text-custom-violet"
      >
        Xem tất cả đơn ứng tuyển →
      </Link>
    </div>
  );
};

export default JobsAppliedStatus;
