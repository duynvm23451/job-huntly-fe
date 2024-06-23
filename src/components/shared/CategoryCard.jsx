import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const CategoryCard = ({ icon, text, availableNumber, ...props }) => {
  let Icon = icon;
  return (
    <div
      className="group flex flex-col p-8 border-1 border-custom-neutral-2 hover:bg-custom-violet cursor-pointer"
      {...props}
    >
      {/* <img src={icon} alt={text} className="fill-custom-violet" width="64px" /> */}

      <Icon className="text-custom-violet group-hover:text-white w-12 h-12" />
      <p className="text-2xl font-bold group-hover:text-white text-gray-800 mt-8">
        {text}
      </p>
      <div className="flex mt-4">
        <span className="text-xl w-4/5 text-gray-500 group-hover:text-white">
          {availableNumber} vị trí tuyển
        </span>
        <ArrowRightIcon className="ml-2 w-7 h-7 text-gray-800 group-hover:text-white" />
      </div>
    </div>
  );
};

export default CategoryCard;
