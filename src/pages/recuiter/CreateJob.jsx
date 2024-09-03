import BagIcon from "@/components/icons/BagIcon";
import GiftIcon from "@/components/icons/GiftIcon";
import ListIcon2 from "@/components/icons/ListIcon2";
import JobCreationBenifitSection from "@/components/layout/section/job-detail/JobCreationBenifitSection";
import JobCreationDescriptionSection from "@/components/layout/section/job-detail/JobCreationDescriptionSection";
import JobCreationInfoSection from "@/components/layout/section/job-detail/JobCreationInfoSection";
import { createJob } from "@/utils/http";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateJob = () => {
  const token = useRouteLoaderData("root");
  const [isLoading, setIsLoading] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [tab, setTab] = useState("info"); // info && description && benefit
  const handleSubmit = async (perkAndBenefits) => {
    formData.perkAndBenefits = perkAndBenefits;
    formData.token = token;
    setIsLoading(true);
    try {
      const data = await createJob(formData);
      toast.success(data.message, {
        position: "bottom-right",
      });
      navigate("/jobs-list");
    } catch (error) {
      const errorData = error.response.data;
      toast.error(errorData.message, {
        position: "bottom-right",
      });
    }
    setIsLoading(false);
  };

  const handleSaveFormData = (objects) => {
    setFormData((prev) => ({
      ...objects,
      ...prev,
    }));
  };
  return (
    <div>
      <ToastContainer />
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
          Trở về dashboard
        </button>
      </div>
      <div className="border-t-1 border-custom-neutral-2 px-6 py-4">
        <h2 className="text-2xl font-bold mb-1">Đăng tải việc làm</h2>
        <div className="grid grid-cols-12 mt-6 space-x-6">
          <div
            className="col-span-4 flex pl-4 cursor-pointer border-r border-custom-neutral-2"
            onClick={() => setTab("info")}
          >
            <div
              className={`p-2.5 w-fit ${
                tab == "info" ? "bg-custom-violet" : "bg-slate-200"
              } rounded-full`}
            >
              <BagIcon className="w-8 h-8" isActive={tab == "info"} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 font-medium">Bước 1/3</p>
              <p className="text-custom-black text-lg font-semibold">
                Thông tin cơ bản
              </p>
            </div>
          </div>
          <div
            className="col-span-4 flex pl-4 cursor-pointer border-r border-custom-neutral-2"
            onClick={() => setTab("description")}
          >
            <div
              className={`p-2.5 w-fit ${
                tab == "description" ? "bg-custom-violet" : "bg-slate-200"
              } rounded-full`}
            >
              <ListIcon2 className="w-8 h-8" isActive={tab == "description"} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 font-medium">Bước 2/3</p>
              <p className="text-custom-black text-lg font-semibold">
                Mô tả công việc
              </p>
            </div>
          </div>
          <div
            className="col-span-4 flex pl-4 cursor-pointer"
            onClick={() => setTab("benifit")}
          >
            <div
              className={`p-2.5 w-fit ${
                tab == "benifit" ? "bg-custom-violet" : "bg-slate-200"
              } rounded-full`}
            >
              <GiftIcon className="w-8 h-8" isActive={tab == "benifit"} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 font-medium">Bước 3/3</p>
              <p className="text-custom-black text-lg font-semibold">
                Phúc lợi và lợi ích
              </p>
            </div>
          </div>
        </div>
        {tab == "info" && (
          <JobCreationInfoSection
            onSaveData={handleSaveFormData}
            onChangeTab={() => setTab("description")}
          />
        )}
        {tab == "description" && (
          <JobCreationDescriptionSection
            onSaveData={handleSaveFormData}
            onChangeTab={() => setTab("benifit")}
          />
        )}
        {tab == "benifit" && (
          <JobCreationBenifitSection
            onSaveData={handleSaveFormData}
            onFinalSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default CreateJob;
