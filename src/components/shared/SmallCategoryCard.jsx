const SmallCategoryCard = ({
  textColor,
  bgColor,
  children,
  isCustom = false,
}) => {
  return (
    <div
      className={`font-medium rounded-3xl ${
        isCustom ? "" : "px-4"
      } pt-1.5 pb-2 mr-3 mt-2 ${textColor} ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default SmallCategoryCard;
