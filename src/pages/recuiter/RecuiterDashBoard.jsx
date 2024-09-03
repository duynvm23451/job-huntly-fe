import NotInCompanyModal from "@/components/disposable/NotInCompanyModal";
import UpdatedJobs from "@/components/disposable/UpdatedJobs";
import NewsCardSection from "@/components/layout/section/home/NewsCardSection";
import { logOut } from "@/services/authenitcationService";
import React from "react";
import { useSelector } from "react-redux";

const RecuiterDashBoard = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const handleClick = () => {
    logOut();
  };

  return (
    <>
      {loggedInUser.company && (
        <div>
          <div className="mx-6 my-4 flex justify-between">
            <div className="flex items-center">
              {loggedInUser?.company && (
                <img
                  src={loggedInUser.company.logo}
                  alt="company logo"
                  className="w-12 h-12 rounded-full mr-4"
                />
              )}

              <h1 className="text-xl font-bold">
                {loggedInUser?.company
                  ? loggedInUser.company.name
                  : "Không có công ty"}
              </h1>
            </div>
            <button
              className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
              onClick={handleClick}
            >
              Đăng xuất
            </button>
          </div>
          <div className="px-6 py-4 border-t-1 border-custom-neutral-2">
            <h2 className="text-lg font-semibold mb-1">
              Xin chào, {loggedInUser && loggedInUser.fullName}
            </h2>
            <p className="mb-6">
              Đây là nơi bạn có thể xem được tình trạng ứng tuyển của các công
              việc mình đã đăng tải
            </p>
            <NewsCardSection />
            <UpdatedJobs />
          </div>
        </div>
      )}
      {!loggedInUser.company && <NotInCompanyModal />}
    </>
  );
};

export default RecuiterDashBoard;
