const RectangleInput = ({ type = "text", text = "", ...props }) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={text}
      className="w-full px-4 pt-1 pb-1.5 text-xl"
    />
  );
};

export default RectangleInput;
