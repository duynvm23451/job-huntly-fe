import { useRouteLoaderData } from "react-router-dom";

const Content = ({ className, children, ...props }) => {
  const token = useRouteLoaderData("root");
  return (
    <div
      className={`3xl:w-3/4 ${!token && "w-11/12"} px-24 mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Content;
