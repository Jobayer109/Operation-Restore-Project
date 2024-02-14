/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const Button = ({ text, type, onClick, disabled, customStyle }) => {
  const disableStyle = {
    backgroundColor: "#999",
    color: "#333",
  };

  const style = {
    padding: ".3rem .6rem",
    fontSize: "1.2rem",
    fontWeight: "800",
    marginRight: "5px",
    border: "1px solid gray",
    borderRadius: "4px",
    cursor: "pointer",
    ...customStyle,
    ...(disabled && disableStyle),
  };

  return (
    <button disabled={disabled} style={style} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  customStyle: PropTypes.object,
};

Button.defaultProps = {
  disabled: false,
  customStyle: {},
};

export default Button;
