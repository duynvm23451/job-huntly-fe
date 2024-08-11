import AddMemberDialog from "@/components/disposable/AddMemberDialog";
import RectangleButton from "@/components/shared/RectangleButton";
import React, { useRef } from "react";

const EditMembersRecruiterSection = () => {
  const dialog = useRef();
  const handleClick = () => {
    dialog.current.open();
  };
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
              <h2 className="text-xl font-bold">8 thành viên</h2>
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
                    Ngày vào công ty
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={`text-gray-700`}>
                  <td className="px-3 py-4 tracking-wider font-semibold text-blue-500">
                    1
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    duynvm1711@gmail.com
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    Nguyễn Văn Mạnh Duy
                  </td>
                  <td className="px-3 py-4 tracking-wider">27-11-2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMembersRecruiterSection;
