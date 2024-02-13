/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import HistoryList from "./HistoryList";

const HistorySection = ({ histories, restoreHistory, handleRestore }) => {
  return (
    <div>
      <h4>Operation Histories</h4>
      {histories.length === 0 ? (
        <p>
          <small>No Histories Found</small>
        </p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <HistoryList
              key={historyItem.id}
              disabled={restoreHistory === historyItem.id}
              handleRestore={handleRestore}
              historyItem={historyItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }),
      operator: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ),
  restoreHistory: PropTypes.object.isRequired,
  handleRestore: PropTypes.func.isRequired,
};

export default HistorySection;
