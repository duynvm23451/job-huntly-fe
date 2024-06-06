import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

const SideBarDropDown = ({ items, title, isShowed, onClick, name }) => {
  return (
    <div className="mb-10">
      <div
        className="flex items-center cursor-pointer mb-8"
        onClick={() => onClick(name)}
      >
        <h2 className="text-2xl font-semibold mr-4">{title}</h2>
        {isShowed[name] ? (
          <ArrowUpIcon className="w-6 h-6 mt-1" />
        ) : (
          <ArrowDownIcon className="w-6 h-6 mt-1" />
        )}
      </div>
      {isShowed[name] && (
        <ul>
          {items.map((el) => (
            <li key={el} className="mb-8">
              <input
                className="w-8 h-8 text-custom-violet rounded-md border-3 border-slate-300 mr-4 "
                type="checkbox"
                id={el}
                name={el}
                value={el}
              />
              <label className="text-xl text-gray-600" htmlFor={el}>
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
