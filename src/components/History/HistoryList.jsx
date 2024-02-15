import PropTypes from "prop-types";
import { useState } from "react";
import { IoTimeSharp } from "react-icons/io5";
import Button from "../UI/Button";

/* eslint-disable react/prop-types */
const HistoryList = ({ historyItem, handleRestore, disabled }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <li key={historyItem.id}>
      <p>
        Operation:{" "}
        <span style={{ color: "yellow" }}>{historyItem.inputs.a}</span>{" "}
        {historyItem.operator}{" "}
        <span style={{ color: "yellow" }}>{historyItem.inputs.b}</span>{" "}
      </p>
      <p>
        Result:{" "}
        <span style={{ color: "greenyellow" }}>
          {historyItem.result.toFixed(2)}
        </span>
      </p>
      {show && (
        <p>
          <small style={{ letterSpacing: ".5px", color: "lightgray" }}>
            Date: {historyItem.date.toLocaleDateString()}
          </small>{" "}
          <br />
          <small style={{ letterSpacing: ".5px", color: "lightgray" }}>
            Time: {historyItem.date.toLocaleTimeString()}
          </small>
        </p>
      )}

      <br />
      <div className="show__div">
        <Button
          text="Restore"
          type="button"
          onClick={() => handleRestore(historyItem)}
          disabled={disabled}
          customStyle={{
            padding: ".15rem .5rem",
            fontSize: ".9rem",
            fontWeight: "400",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "3px",
          }}
        >
          Restore
        </Button>
        <IoTimeSharp title="Click to Show date & time" onClick={handleShow} />
      </div>
    </li>
  );
};

HistoryList.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }),
    operator: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  handleRestore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default HistoryList;
