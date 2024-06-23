const SmallCategoryCard = ({ textColor, bgColor, children }) => {
  return (
    <div
      className={`font-medium rounded-3xl px-4 pt-1.5 pb-2 mr-3 mt-2 ${textColor} ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default SmallCategoryCard;
