import SmallCategoryCard from "@/components/shared/SmallCategoryCard";

const CompanyCard = ({ logo, title, jobNumber, description, categories }) => {
  return (
    <div className=" p-8 border-2">
      <div className="flex justify-between ">
        <div>
          <img src={logo} alt="logo" className="w-24" />
          <h2 className="text-4xl font-bold mt-2 text-custom-violet-2">
            {title}
          </h2>
        </div>
        <span className="bg-violet-100 h-fit px-4 pt-1.5 pb-2 text-2xl text-custom-violet rounded-sm">
          {jobNumber} vị trí
        </span>
      </div>
      <p className="text-2xl mt-4 text-gray-600">{description}</p>
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

export default CompanyCard;
