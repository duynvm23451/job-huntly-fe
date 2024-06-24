import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

const SideBarDropDown = ({ items, title, isShowed, onClick, name }) => {
  return (
    <div className="mb-6">
      <div
        className="flex items-center cursor-pointer mb-4"
        onClick={() => onClick(name)}
      >
        <h2 className="text-xl font-semibold mr-4">{title}</h2>
        {isShowed[name] ? (
          <ArrowUpIcon className="w-5 h-5 mt-1" />
        ) : (
          <ArrowDownIcon className="w-5 h-5 mt-1" />
        )}
      </div>
      {isShowed[name] && (
        <ul>
          {items.map((el) => (
            <li key={el} className="mb-2">
              <input
                className="w-6 h-6 text-custom-violet rounded-md border-2 border-slate-300 mr-4"
                type="checkbox"
                id={el}
                name={el}
                value={el}
              />
              <label className="text-lg text-gray-600" htmlFor={el}>
                {el}
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
