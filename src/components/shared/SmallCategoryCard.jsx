const SmallCategoryCard = ({ textColor, bgColor, children }) => {
  return (
    <div
      className={`text-xl w-fit h-fit font-medium rounded-3xl px-4 py-2 mr-3 mt-2 ${textColor} ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default SmallCategoryCard;
