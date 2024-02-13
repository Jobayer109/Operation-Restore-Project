/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import shortid from "shortid";
import Button from "../UI/Button";

const OperationSection = ({ handleOperations, handleClearState }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleOperations("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleOperations("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleOperations("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleOperations("/"),
    },
    {
      id: shortid.generate(),
      text: "Clear",
      onClick: handleClearState,
    },
  ];

  return (
    <div>
      {operations.map((ops) => (
        <Button
          key={ops.id}
          type="button"
          text={ops.text}
          onClick={ops.onClick}
        />
      ))}
    </div>
  );
};

OperationSection.propTypes = {
  handleOperations: PropTypes.func.isRequired,
  handleClearState: PropTypes.func.isRequired,
};

export default OperationSection;
