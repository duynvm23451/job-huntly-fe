import ArrowRightIcon from "../icons/ArrowRightIcon";

const CategoryCard = ({ icon, text, availableNumber, ...props }) => {
  let Icon = icon;
  return (
    <div
      className="group flex flex-col p-10 border-2 border-gray-300 hover:bg-custom-violet cursor-pointer"
      {...props}
    >
      {/* <img src={icon} alt={text} className="fill-custom-violet" width="64px" /> */}

      <Icon className="text-custom-violet group-hover:text-white w-16 h-16" />
      <p className="text-3xl font-bold group-hover:text-white text-gray-800 mt-12">
        {text}
      </p>
      <div className="flex mt-4">
        <span className="text-2xl w-4/5 text-gray-500 group-hover:text-white">
          {availableNumber} công việc có sẵn
        </span>
        <ArrowRightIcon className="ml-2 w-8 h-8 text-gray-800 group-hover:text-white" />
      </div>
    </div>
  );
};

export default CategoryCard;
