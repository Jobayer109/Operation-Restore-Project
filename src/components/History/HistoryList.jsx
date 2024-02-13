import PropTypes from "prop-types";
import Button from "../UI/Button";

/* eslint-disable react/prop-types */
const HistoryList = ({ historyItem, handleRestore, disabled }) => {
  return (
    <li key={historyItem.id}>
      <p>
        Operation: {historyItem.inputs.a} {historyItem.operator}{" "}
        {historyItem.inputs.b}{" "}
      </p>
      <p>Result:{historyItem.result}</p>
      <small>Date: {historyItem.date.toLocaleDateString()}</small> <br />
      <small>Time: {historyItem.date.toLocaleTimeString()}</small> <br />
      <Button
        text="Restore"
        type="button"
        onClick={() => handleRestore(historyItem)}
        disabled={disabled}
      >
        Restore
      </Button>
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
