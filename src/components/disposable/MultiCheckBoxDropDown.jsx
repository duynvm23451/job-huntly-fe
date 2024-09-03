import React, { useState } from "react";

const MultiCheckboxDropdown = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block relative">
      <button onClick={toggleDropdown} type="button">
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Chọn lĩnh vực "}
        <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <li key={index} className="px-4 py-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxDropdown;
