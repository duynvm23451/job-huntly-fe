import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRight2Icon from "@/components/icons/ArrowRight2Icon";
import { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Pagination = ({ pagination, navigatePath }) => {
  const navigate = useNavigate();
  const changePage = (pageNumber) => {
    navigate({
      pathname: navigatePath,
      search: createSearchParams({ page: pageNumber }).toString(),
    });
  };
  return (
    <ul className="flex items-center">
      <li>
        <ArrowLeftIcon
          onClick={() => changePage(pagination.current - 1)}
          className="w-4 h-4 mr-4 cursor-pointer"
          hidden={pagination.isLeft}
        />
      </li>
      {pagination.items.map((el) => (
        <li key={el}>
          <button
            disabled={el == pagination.current || el == "..."}
            className={`w-12 h-12 flex justify-center items-center rounded-xl text-gray-500 hover:text-white cursor-pointer hover:bg-custom-violet ${
              el == pagination.current ? "bg-custom-violet text-white" : ""
            }`}
            onClick={() => changePage(el)}
          >
            {el}
          </button>
        </li>
      ))}
      <li>
        <ArrowRight2Icon
          className="w-4 h-4 ml-4 cursor-pointer"
          hidden={pagination.isRight}
          onClick={() => changePage(pagination.current + 1)}
        />
      </li>
    </ul>
  );
};

export default Pagination;
