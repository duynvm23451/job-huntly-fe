const SearchInput = ({
  icon,
  type = "text",
  text = "enter somthing",
  className,
  ...props
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {icon && <span>{icon}</span>}
      <input
        className={`ml-2 pt-2 pb-3 border-b-2 min-w-72 border-gray-300 focus:border-custom-blue outline-0 text-xl`}
        type={type}
        placeholder={text}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
