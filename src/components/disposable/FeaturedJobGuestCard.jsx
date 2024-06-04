import SmallCategoryCard from "../shared/SmallCategoryCard";

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
    <div className="flex flex-col p-8 border-2 border-gray-300  cursor-pointer">
      <div className="flex justify-between">
        <img src={logo} alt="logo" />
        <p className="text-custom-violet text-2xl px-3 py-1.5 border-2 border-custom-violet w-fit h-fit">
          {type}
        </p>
      </div>
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <div className="flex items-center text-2xl text-gray-400 mt-2">
        <p>{company}</p>
        <p className="text-3xl">・</p>
        <p>{location}</p>
      </div>
      <p className="text-2xl text-gray-500 mt-8">{`${description.substring(
        0,
        60
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
