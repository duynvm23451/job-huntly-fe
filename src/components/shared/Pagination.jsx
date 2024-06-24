import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRight2Icon from "@/components/icons/ArrowRight2Icon";

const pageNumbers = [1, 2, 3, 4, 5];
const Pagination = () => {
  return (
    <ul className="flex items-center">
      <li>
        <ArrowLeftIcon className="w-4 h-4 mr-4 cursor-pointer" />
      </li>
      {pageNumbers.map((el) => (
        <li
          className="w-12 h-12 flex justify-center items-center rounded-xl text-gray-500 hover:text-white cursor-pointer hover:bg-custom-violet"
          key={el}
        >
          <span>{el}</span>
        </li>
      ))}
      <li className="w-12 h-12 flex justify-center items-center rounded-xl text-gray-500 hover:text-white cursor-pointer hover:bg-custom-violet">
        <span className="text-2xl">...</span>
      </li>
      <li className="w-12 h-12 flex justify-center items-center rounded-xl text-gray-500 hover:text-white cursor-pointer hover:bg-custom-violet">
        <span>10</span>
      </li>
      <li>
        <ArrowRight2Icon className="w-4 h-4 ml-4 cursor-pointer" />
      </li>
    </ul>
  );
};

export default Pagination;
