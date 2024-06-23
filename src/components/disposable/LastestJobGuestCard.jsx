import SmallCategoryCard from "@/components/shared/SmallCategoryCard";

const LastestJobGuestCard = ({
  logo,
  title,
  type,
  company,
  location,
  categories,
}) => {
  return (
    <div className="flex bg-white px-8 py-6">
      <img src={logo} alt="logo" className="w-28 mr-4" />
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="flex items-center text-2xl text-gray-400 mt-2 ">
          <p>{company}</p>
          <p className="text-3xl">・</p>
          <p>{location}</p>
        </div>
        <div className="flex items-center mt-2 ">
          <SmallCategoryCard
            textColor={"text-green-600"}
            bgColor={"bg-green-100"}
          >
            {type}
          </SmallCategoryCard>
          <span className="w-0.5 h-11 mr-3 bg-gray-200 mt-2" />
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
