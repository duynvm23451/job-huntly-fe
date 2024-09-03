import SmallCategoryCard from "@/components/shared/SmallCategoryCard";
import RectangleButton from "@/components/shared/RectangleButton";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { convertToReadableJobType } from "@/utils/hepler";
import useGetData from "@/hooks/useGetData";
import { applyJob, getConfiguration } from "@/utils/http";
import { mappingColor } from "@/utils/mappingColor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useState } from "react";
const JobsListItemCard = ({ job }) => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const applyHandle = async () => {
    if (!token) {
      navigate("/auth/login");
    }
    setIsLoading(true);
    const queryParams = {
      jobId: job.id,
      userId: loggedInUser.id,
      token,
    };
    try {
      const data = await applyJob(queryParams);
      toast.success(data.message, {
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
      const errorData = error.response.data;
      toast.error(errorData.message, {
        position: "bottom-right",
      });
    }
    setIsLoading(false);
  };
  const { data: config } = useGetData(getConfiguration);

  let jobTypes = {};
  if (config) {
    jobTypes = mappingColor(config.jobTypes);
  }
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-12 px-6 py-6 mb-6 w-11/12 border-1 border-custom-neutral-2">
        <Link
          to={"/jobs/" + job.id}
          className="grid grid-cols-10 col-span-9 gap-x-4"
        >
          <div className="col-span-2">
            <img
              src={job.company.logo}
              alt="logo"
              className="w-24 h-24 rounded-md"
            />
          </div>

          <div className="col-span-8">
            <h1 className="text-xl font-semibold">{job.title}</h1>
            <div className="flex items-center text-lg text-gray-400">
              <p>{job.company.name}</p>
              <p className="text-xl">・</p>
              <p>{job.company.location}</p>
            </div>
            <div className="flex items-center mt-2">
              <SmallCategoryCard isCustom={true}>
                <span
                  className={`py-1.5 text-sm px-3 border-1 rounded-full`}
                  style={{
                    borderColor: jobTypes[job.type],
                    color: jobTypes[job.type],
                    whiteSpace: "nowrap",
                  }}
                >
                  {convertToReadableJobType(job.type)}
                </span>
              </SmallCategoryCard>
              <span className="w-0.5 h-8 mr-3 bg-gray-200 mt-2" />
              {job.categories.map((el) => (
                <SmallCategoryCard
                  textColor={"text-white"}
                  bgColor={"bg-custom-violet"}
                  key={el}
                >
                  {el}
                </SmallCategoryCard>
              ))}
            </div>
          </div>
        </Link>

        <div className="flex flex-col col-span-3 w-fit">
          <RectangleButton onClick={applyHandle}>
            {isLoading ? "isLoading" : "Ứng tuyển"}
          </RectangleButton>
          <progress
            value={job.numberOfHired}
            max={job.numberOfRecruits}
            className="w-full mt-2.5 h-2 progress-unfilled:bg-custom-neutral-2 progress-filled:bg-[#68cbad]"
          >
            32%
          </progress>
          <p className="mt-3">
            Đã có <span className="font-semibold">{job.numberOfHired} đơn</span>{" "}
            trên {job.numberOfRecruits} vị trí
          </p>
        </div>
      </div>
    </>
  );
};

export default JobsListItemCard;
