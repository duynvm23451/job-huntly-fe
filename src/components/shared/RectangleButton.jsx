const RectangleButton = ({
  type,
  isTypeButton = false,
  children,
  className,
  ...props
}) => {
  let style = "";
  if (type == "outline") {
    style = `text-lg font-semibold px-8 pt-2.5 pb-3 text-custom-violet bg-white border-1 border-custom-violet h-fit ${className}`;
  } else if (type == "white") {
    style = `text-lg font-semibold px-8 pt-4 pb-5 text-custom-violet bg-white border-none h-fit ${className}`;
  } else {
    style = `text-lg font-semibold px-8 pt-2.5 pb-3 text-white bg-custom-violet border-none h-fit ${className}`;
  }
  return (
    <button
      type={isTypeButton ? "button" : "submit"}
      className={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default RectangleButton;
