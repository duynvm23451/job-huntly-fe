import searchIcon from "../../assets/icons/search-icon.svg";
const SearchIcon = ({ ...props }) => {
  return <img src={searchIcon} width={"30px"} alt="search-icon" {...props} />;
};

export default SearchIcon;
