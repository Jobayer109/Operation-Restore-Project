/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const TextInput = ({ name, value, onChange }) => {
  const style = {
    padding: ".5rem",
    border: "1px solid gray",
    borderRadius: " 4px",
    outline: "none",
    marginLeft: "3rem",
    marginBottom: ".5rem",
    fontSize: "1rem",
    fontWeight: "600",
  };

  return (
    <input
      style={style}
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
