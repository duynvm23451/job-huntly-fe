import locationIcon from "../../assets/icons/location-icon.svg";

const LocationIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7604 14.0005C19.7604 12.1588 18.2681 10.6665 16.4278 10.6665C14.5861 10.6665 13.0938 12.1588 13.0938 14.0005C13.0938 15.8409 14.5861 17.3332 16.4278 17.3332C18.2681 17.3332 19.7604 15.8409 19.7604 14.0005Z"
        stroke="#25324B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.429 28C14.8311 28 6.42969 21.1978 6.42969 14.0844C6.42969 8.51552 10.9058 4 16.429 4C21.9523 4 26.4297 8.51552 26.4297 14.0844C26.4297 21.1978 18.027 28 16.429 28Z"
        stroke="#25324B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default LocationIcon;
