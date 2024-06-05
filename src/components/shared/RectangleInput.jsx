const RectangleInput = ({ type = "text", text = "", ...props }) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={text}
      className="w-full px-6 pt-2 pb-3 text-2xl text-custom-neutral-2"
    />
  );
};

export default RectangleInput;
