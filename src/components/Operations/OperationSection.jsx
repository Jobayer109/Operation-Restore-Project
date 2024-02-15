/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {
  CgMathDivide,
  CgMathMinus,
  CgMathPercent,
  CgMathPlus,
} from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import shortid from "shortid";
import Button from "../UI/Button";
import "./operations.css";

const OperationSection = ({ handleOperations, disabled, handleClearState }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: <CgMathPlus />,
      onClick: () => handleOperations("+"),
    },
    {
      id: shortid.generate(),
      text: <CgMathMinus />,
      onClick: () => handleOperations("-"),
    },
    {
      id: shortid.generate(),
      text: <RxCross2 />,
      onClick: () => handleOperations("*"),
    },
    {
      id: shortid.generate(),
      text: <CgMathDivide />,
      onClick: () => handleOperations("/"),
    },
    {
      id: shortid.generate(),
      text: <CgMathPercent />,
      onClick: () => handleOperations("%"),
    },

    {
      id: shortid.generate(),
      text: "Clear",
      onClick: handleClearState,
    },
  ];

  return (
    <div className="operation__btn">
      {operations.map((ops) => (
        <Button
          key={ops.id}
          type="button"
          text={ops.text}
          onClick={ops.onClick}
          disabled={disabled}
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
