const RectangleButton = ({ type, children, className, ...props }) => {
  let style = "";
  if (type == "outline") {
    style = "";
  } else if (type == "white") {
    style = `text-2xl font-semibold px-8 pt-4 pb-5 text-custom-violet bg-white border-none h-fit ${className}`;
  } else {
    style = `text-2xl font-semibold px-8 pt-4 pb-5 text-white bg-custom-violet border-none h-fit ${className}`;
  }
  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

export default RectangleButton;
