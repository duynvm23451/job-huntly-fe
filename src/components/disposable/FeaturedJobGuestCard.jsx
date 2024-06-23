import SmallCategoryCard from "@/components/shared/SmallCategoryCard";

const FeaturedJobGuestCard = ({
  logo,
  type,
  title,
  company,
  location,
  description,
  categories,
}) => {
  return (
    <div className="flex flex-col p-6 border-1 border-custom-neutral-2  cursor-pointer">
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <p className="text-custom-violet text-lg px-2.5 py-1 pb-1.5 border-1 border-custom-violet w-fit h-fit">
          {type}
        </p>
      </div>
      <h2 className="text-xl font-semibold mt-6">{title}</h2>
      <div className="flex items-center text-lg text-gray-400 mt-2">
        <p>{company}</p>
        <p className="text-lg">・</p>
        <p>{location}</p>
      </div>
      <p className="text-lg text-gray-500 mt-8">{`${description.substring(
        0,
        50
      )}${description.length > 60 && "..."}`}</p>
      <div className="flex flex-wrap mt-4">
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
  );
};

export default FeaturedJobGuestCard;
