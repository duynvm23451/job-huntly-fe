import React, { forwardRef, useImperativeHandle, useRef } from "react";
import RectangleButton from "../shared/RectangleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMemberDialog = forwardRef(({}, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    toast.error(data.email, {
      position: "bottom-right",
    });
  };
  return (
    <>
      <dialog ref={dialog} className="p-6 rounded-lg">
        <ToastContainer />
        <h1 className="text-xl font-bold">Thêm thành viên</h1>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            name="email"
            className="px-4 py-2 border-1 mt-2 min-w-80 border-custom-neutral-2 rounded-sm block"
          />
          <div className="flex items-center mt-6 justify-end">
            <RectangleButton
              type={"white"}
              onClick={() => dialog.current.close()}
            >
              Đóng
            </RectangleButton>
            <button
              type="submit"
              className="text-lg font-semibold px-8 pt-2.5 pb-3 text-white bg-custom-violet border-none h-fit"
            >
              Thêm
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
});

export default AddMemberDialog;
