import BackgroundInterviewingIcon from "@/components/icons/BackgroundInterviewingIcon";
import BackgroundTotalIcon from "@/components/icons/BackgroundTotalIcon";
import { logOut } from "@/services/authenitcationService";
import { countApplications } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashBoard = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const token = useRouteLoaderData("root");
  const [countResult, setCountResult] = useState(null);
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
          <h2 className="text-lg">Xin chào, {loggedInUser.fullName}</h2>
          <p>
            Đây là nơi bạn có thể cập nhật được trạng thái mới nhất về đơn ứng
            tuyển của mình
          </p>
          <div className="grid grid-cols-12 space-x-6">
            {countResult && (
              <div className="col-span-3">
                <div className="border-1 border-custom-neutral-2 p-4 relative">
                  <h2 className="text-lg font-semibold ">
                    Tổng số công việc đã ứng tuyển
                  </h2>
                  <p className="text-5xl mt-4 ml-8">{countResult.total}</p>
                  <BackgroundTotalIcon className="absolute bottom-0 right-4" />
                </div>
                <div className="border-1 border-custom-neutral-2 p-4 mt-4 relative">
                  <h2 className="text-lg font-semibold ">
                    Đang trong quá trình phỏng vấn
                  </h2>
                  <p className="text-5xl mt-4 ml-8">
                    {countResult.interviewing}
                  </p>
                  <BackgroundInterviewingIcon className="absolute bottom-0 right-4" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
