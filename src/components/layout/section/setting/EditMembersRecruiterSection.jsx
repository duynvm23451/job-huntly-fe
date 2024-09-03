import AddMemberDialog from "@/components/disposable/AddMemberDialog";
import RectangleButton from "@/components/shared/RectangleButton";
import useGetData from "@/hooks/useGetData";
import { formatTimestampToDate } from "@/utils/hepler";
import { getUsersInCompany } from "@/utils/http";
import React, { useRef } from "react";
import { useRouteLoaderData } from "react-router-dom";

const EditMembersRecruiterSection = () => {
  const dialog = useRef();
  const handleClick = () => {
    dialog.current.open();
  };
  const token = useRouteLoaderData("root");
  const { data } = useGetData(getUsersInCompany, token);
  return (
    <>
      <AddMemberDialog ref={dialog} />
      <div className="col-span-12">
        <div className="py-4 grid grid-cols-12">
          <div className="col-span-3">
            <h3 className="text-lg font-semibold">Thành viên</h3>
            <p>Thêm thành viên vào công ty của bạn</p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-8">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">
                {data && data.data.length} thành viên
              </h2>
              <RectangleButton onClick={handleClick}>
                Thêm thành viên
              </RectangleButton>
            </div>
            <table className="w-full border-b-1 border-custom-neutral-2 mt-4">
              <thead className="border-b-1 border-custom-neutral-2">
                <tr>
                  <th className="p-3 font-semibold tracking-wide text-left">
                    #
                  </th>
                  <th className="p-3 font-semibold tracking-wide text-left">
                    Email
                  </th>
                  <th className="p-3 font-semibold tracking-wide text-left">
                    Họ và tên
                  </th>
                  <th className="p-3 font-semibold tracking-wide text-left">
                    Ngày tạo tài khoản
                  </th>
                </tr>
              </thead>
              {data && (
                <tbody>
                  {data.data.map((el) => (
                    <tr key={el.id} className={`text-gray-700`}>
                      <td className="px-3 py-4 tracking-wider font-semibold text-blue-500">
                        {el.id}
                      </td>
                      <td className="px-3 py-4 tracking-wider">{el.email}</td>
                      <td className="px-3 py-4 tracking-wider">
                        {el.fullName}
                      </td>
                      <td className="px-3 py-4 tracking-wider">
                        {formatTimestampToDate(el.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMembersRecruiterSection;
