import WarningIcon from "@/components/icons/WarningIcon";
import Pagination from "@/components/shared/Pagination";
import RectangleButton from "@/components/shared/RectangleButton";
import useGetData from "@/hooks/useGetData";
import { logOut } from "@/services/authenitcationService";
import {
  convertToReadableJobLevel,
  convertToReadableJobType,
  formatTimestampToDate,
} from "@/utils/hepler";
import { getConfiguration, getJobsByCompany } from "@/utils/http";
import { mappingColor } from "@/utils/mappingColor";
import renderPaginationItems from "@/utils/pagination";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const JobsListRecruiter = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") - 1 || 0;
  const size = searchParams.get("size") || 1;
  const queryParams = useMemo(
    () => ({
      id: loggedInUser?.company?.id || null,
      page,
      size,
      sort: "createdAt,desc",
    }),
    [loggedInUser, page, size]
  );

  let error, data;

  if (queryParams.id !== null) {
    ({ error, data } = useGetData(getJobsByCompany, queryParams));
  }
  const { data: config } = useGetData(getConfiguration);
  let jobLevels = {};
  let jobTypes = {};
  if (config) {
    jobLevels = mappingColor(config.jobLevels);
    jobTypes = mappingColor(config.jobTypes);
  }
  return (
    <div>
      {" "}
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
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold mb-1">
              Xin chào, {loggedInUser && loggedInUser.fullName}
            </h2>
            <p className="mb-6">
              Đây là nơi bạn có thể xem các công việc mình đã đăng tải
            </p>
          </div>
          <Link to={"/create-job"}>
            <RectangleButton>Đăng tải công việc</RectangleButton>
          </Link>
        </div>

        <table className="w-full border-b-1 border-custom-neutral-2">
          <thead className="border-b-1 border-custom-neutral-2">
            <tr>
              <th className="p-3 font-semibold tracking-wide text-left">
                Tiêu đề
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Ngày đăng
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Ngày hết hạn
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Loại hình tuyển dụng
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Số lượng tuyển dụng
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Cấp bậc
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.content.map((el, index) => (
                <tr
                  key={el.id}
                  className={`${
                    index % 2 == 1 ? "bg-violet-50" : ""
                  } text-gray-700`}
                >
                  <td className="px-3 py-4 tracking-wider max-w-80">
                    <Link to={"/edit-job/" + el.id}>{el.title}</Link>
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    {formatTimestampToDate(el.createdAt)}
                  </td>
                  <td className="px-3 py-4 tracking-wider max-w-48">
                    {formatTimestampToDate(el.deadline)}
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    <span
                      className={`py-1.5 text-sm px-3 border-1 rounded-full`}
                      style={{
                        borderColor: jobTypes[el.type],
                        color: jobTypes[el.type],
                      }}
                    >
                      {convertToReadableJobType(el.type)}
                    </span>
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    {el.numberOfRecruits}
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    <span
                      className={`py-1.5 text-sm px-3 border-1 rounded-full`}
                      style={{
                        borderColor: jobLevels[el.jobLevel],
                        color: jobLevels[el.jobLevel],
                      }}
                    >
                      {convertToReadableJobLevel(el.jobLevel)}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!error && data && (
          <div className="w-full flex justify-center col-span-12 mt-12">
            <Pagination
              navigatePath="/jobs-list"
              pagination={renderPaginationItems(
                data.page.number + 1,
                data.page.totalPages
              )}
            />
          </div>
        )}
        {error && (
          <p className="col-span-12 flex flex-col justify-center items-center p-8 text-xl font-medium text-red-500">
            <WarningIcon className="w-20 h-20 mb-4 text-center" />
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default JobsListRecruiter;
