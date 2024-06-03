import locationIcon from "../../assets/icons/location-icon.svg";

const LocationIcon = ({ ...props }) => {
  return (
    <img src={locationIcon} width={"30px"} alt="location-icon" {...props} />
  );
};

export default LocationIcon;
