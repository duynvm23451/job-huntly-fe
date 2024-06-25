const Content = ({ className, children, ...props }) => {
  return (
    <div className={`3xl:w-3/4 w-11/12 px-28 mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Content;
