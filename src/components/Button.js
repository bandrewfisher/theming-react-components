import themeProps from "./themeProps";

const Button = ({ children, color, ...rest }) => {
  return (
    <button className={`rounded-md bg-${color} text-white px-3 py-1`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  ...themeProps,
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
