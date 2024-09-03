import SmallCategoryCard from "@/components/shared/SmallCategoryCard";

const LastestJobGuestCard = ({
  logo,
  title,
  type,
  company,
  location,
  categories,
  className,
}) => {
  return (
    <div className={`grid grid-cols-7 bg-white px-8 py-4 ${className}`}>
      <img src={logo} alt="logo" className="w-24 h-24 rounded-md col-span-1" />
      <div className="col-span-6">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center text-lg text-gray-400">
          <p>{company}</p>
          <p className="text-xl">・</p>
          <p>{location}</p>
        </div>
        <div className="flex items-center mt-2">
          <SmallCategoryCard
            textColor={"text-green-600"}
            bgColor={"bg-green-100"}
          >
            {type}
          </SmallCategoryCard>
          <span className="w-0.5 h-8 mr-3 bg-gray-200 mt-2" />
          {categories.map((el) => (
            <SmallCategoryCard
              textColor={"text-white"}
              bgColor={"bg-custom-violet"}
              key={el}
            >
              {el}
            </SmallCategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastestJobGuestCard;
