import PropTypes from "prop-types";
import TextInput from "../UI/TextInput";

/* eslint-disable react/prop-types */
const InputSection = ({ inputState, handleChange }) => {
  return (
    <div>
      {Object.entries(inputState).map((i, index) => (
        <TextInput
          key={index}
          name={i[0]}
          value={parseInt(i[1])}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

InputSection.propTypes = {
  inputState: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSection;
