import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import RectangleButton from "../shared/RectangleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouteLoaderData } from "react-router-dom";
import { addUserToCompany } from "@/utils/http";

const AddMemberDialog = forwardRef(({}, ref) => {
  const token = useRouteLoaderData("root");
  const [isLoading, setIsLoading] = useState(false);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    formData.token = token;
    setIsLoading(true);
    try {
      const data = await addUserToCompany(formData);
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
              disabled={isLoading}
              className="text-lg font-semibold px-8 pt-2.5 pb-3 text-white bg-custom-violet border-none h-fit"
            >
              {!isLoading ? "Thêm" : "Loading..."}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
});

export default AddMemberDialog;
