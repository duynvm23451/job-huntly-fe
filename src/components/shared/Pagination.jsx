import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRight2Icon from "@/components/icons/ArrowRight2Icon";
import { createSearchParams, useNavigate } from "react-router-dom";

const Pagination = ({ pagination }) => {
  const navigate = useNavigate();
  console.log(pagination);
  const changePage = (pageNumber) => {
    navigate({
      pathname: "/find-jobs",
      search: createSearchParams({ page: pageNumber }).toString(),
    });
  };
  console.log(pagination.current);
  return (
    <ul className="flex items-center">
      <li>
        <ArrowLeftIcon
          className="w-4 h-4 mr-4 cursor-pointer"
          hidden={pagination.isLeft}
        />
      </li>
      {pagination.items.map((el) => (
        <li key={el}>
          <button
            disabled={el == pagination.current || el == "..."}
            className={`w-12 h-12 flex justify-center items-center rounded-xl text-gray-500 hover:text-white cursor-pointer hover:bg-custom-violet ${
              el == pagination.current
                ? "bg-custom-violet text-custom-neutral"
                : ""
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
        />
      </li>
    </ul>
  );
};

export default Pagination;
