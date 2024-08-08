import JobsAppliedStatus from "@/components/disposable/JobsAppliedStatus";
import BackgroundInterviewingIcon from "@/components/icons/BackgroundInterviewingIcon";
import BackgroundTotalIcon from "@/components/icons/BackgroundTotalIcon";
import DashboardRecentApplicationsSection from "@/components/layout/section/home/DashboardRecentApplicationsSection";
import { logOut } from "@/services/authenitcationService";
import { formatTimestampToDate, formatTimestampToTime } from "@/utils/hepler";
import {
  countApplications,
  getLatestInterviewingApplications,
} from "@/utils/http";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeDashBoard = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const token = useRouteLoaderData("root");
  const [countResult, setCountResult] = useState(null);
  const [upcomingInterviewJobs, setUpComingInterviewJobs] = useState(null);
  const handleClick = () => {
    logOut();
  };
  useEffect(() => {
    if (loggedInUser) {
      const count = async () => {
        try {
          const response = await countApplications(token, loggedInUser.id);
          setCountResult(response.data);
        } catch (error) {
          const errorData = error.response.data;
          toast.error(errorData.message, {
            position: "bottom-right",
          });
        }
      };
      count();
    }
  }, [token, loggedInUser]);

  useEffect(() => {
    const fetchLatestInterviewingJobs = async () => {
      try {
        const response = await getLatestInterviewingApplications(token);
        setUpComingInterviewJobs(response.data.content);
      } catch (error) {
        const errorData = error.response.data;
        toast.error(errorData.message, {
          position: "bottom-right",
        });
      }
    };

    fetchLatestInterviewingJobs();
  }, [token]);
  return (
    <div>
      <ToastContainer />
      <div className="m-6 flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Đăng xuất
        </button>
      </div>

      {loggedInUser && (
        <div className="px-6 py-4 border-t-1 border-custom-neutral-2">
          <h2 className="text-lg font-semibold mb-1">
            Xin chào, {loggedInUser.fullName}
          </h2>
          <p className="mb-6">
            Đây là nơi bạn có thể cập nhật được trạng thái mới nhất về đơn ứng
            tuyển của mình
          </p>
          {countResult && (
            <div className="grid grid-cols-12 space-x-6">
              <div className="col-span-3">
                <div className="border-1 border-custom-neutral-2 p-4 relative rounded-lg">
                  <h2 className="text-lg font-semibold ">
                    Tổng số công việc đã ứng tuyển
                  </h2>
                  <p className="text-5xl mt-4 ml-8">{countResult.total}</p>
                  <BackgroundTotalIcon className="absolute bottom-0 right-4" />
                </div>
                <div className="border-1 border-custom-neutral-2 p-4 mt-4 rounded-lg relative">
                  <h2 className="text-lg font-semibold ">
                    Đang trong quá trình phỏng vấn
                  </h2>
                  <p className="text-5xl mt-4 ml-8">
                    {countResult.interviewing ? countResult.interviewing : 0}
                  </p>
                  <BackgroundInterviewingIcon className="absolute bottom-0 right-4" />
                </div>
              </div>
              <div className="col-span-4">
                <JobsAppliedStatus
                  total={countResult.total}
                  interviewing={
                    countResult.interviewing ? countResult.interviewing : 0
                  }
                />
              </div>
              <div className="col-span-5 border-1 border-custom-neutral-2 rounded-lg">
                <p className="text-lg font-semibold p-4 border-b-1 border-custom-neutral-2">
                  Buổi phỏng vấn sắp diễn ra
                </p>
                {upcomingInterviewJobs && (
                  <ul className="p-2">
                    {upcomingInterviewJobs.map((el) => (
                      <li
                        key={el.id}
                        className="px-2 py-1 my-1 flex items-center "
                      >
                        <p className="text-lg text-gray-500 h-full font-semibold w-36">
                          <span className="block">
                            {formatTimestampToDate(el.interviewTime)}
                          </span>
                          <span>{formatTimestampToTime(el.interviewTime)}</span>
                        </p>
                        <div className="flex items-start p-3 w-full bg-violet-50 rounded-md">
                          <img
                            src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg"
                            alt="logo comapny"
                            className="w-14 h-14 object-cover rounded-full mr-4"
                          />
                          <div className="">
                            <p className="mb-1 text-lg font-semibold">
                              {el.job.company.name}
                            </p>
                            <p>{el.job.title}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          <DashboardRecentApplicationsSection />
        </div>
      )}
    </div>
  );
};

export default EmployeeDashBoard;
