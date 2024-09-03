import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import {
  convertToReadableJobLevel,
  convertToReadableJobType,
} from "@/utils/hepler";
import { useEffect, useState } from "react";

const SideBarDropDown = ({
  items,
  title,
  name,
  type = "checkbox",
  changeHanlder,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    [name]: [],
  });

  const handleInputChange = (event) => {
    const { checked, value } = event.target;
    setInputValues((prev) => {
      if (type === "checkbox") {
        const values = prev[name];
        if (checked) {
          return { ...prev, [name]: [...values, value] };
        } else {
          return { ...prev, [name]: values.filter((val) => val !== value) };
        }
      } else {
        const { min, max } = JSON.parse(value);
        return { ...prev, [name]: [min, max] };
      }
    });
  };
  useEffect(() => {
    changeHanlder(name, inputValues[name]);
  }, [inputValues]);

  return (
    <div className="mb-6">
      <div
        className="flex items-center cursor-pointer mb-4"
        onClick={() => setIsShow((preValue) => !preValue)}
      >
        <h2 className="text-xl font-semibold mr-4">{title}</h2>
        {isShow ? (
          <ArrowUpIcon className="w-5 h-5 mt-1" />
        ) : (
          <ArrowDownIcon className="w-5 h-5 mt-1" />
        )}
      </div>
      {isShow && (
        <ul>
          {items.map((el, index) => (
            <li key={name + index} className="mb-2">
              <input
                className={`w-6 h-6 text-custom-violet border-2 ${
                  type == "checkbox" ? "rounded-md " : "rounded-full"
                } border-slate-300 mr-4`}
                type={type}
                id={index}
                name={name}
                value={type == "radio" ? JSON.stringify(el) : el}
                onChange={handleInputChange}
                checked={
                  type === "checkbox"
                    ? inputValues[name]?.includes(el)
                    : inputValues[name][0] == el.min &&
                      inputValues[name][1] == el.max
                }
              />
              <label className="text-lg text-gray-600" htmlFor={index}>
                {type == "radio"
                  ? el.max == null
                    ? `Trên ${el.min}`
                    : `${el.min}-${el.max}`
                  : convertToReadableJobType(convertToReadableJobLevel(el))}
              </label>
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBarDropDown;
