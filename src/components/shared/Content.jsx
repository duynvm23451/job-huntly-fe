const Content = ({ className, children, ...props }) => {
  return (
    <div className={`max-w-106 px-12 mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Content;
