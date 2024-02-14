import { useState } from "react";
import shortid from "shortid";
import "./App.css";
import HistorySection from "./components/History/HistorySection";
import InputSection from "./components/InputSection/InputSection";
import OperationSection from "./components/Operations/OperationSection";
const inputObject = {
  a: 0,
  b: 0,
};

function App() {
  const [inputState, setInputState] = useState({ ...inputObject });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRestoreHistory] = useState({});

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperations = (operator) => {
    if (!inputState.a || !inputState.b) {
      alert("Input a valid number without '0'");
      return;
    }

    const f = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b} `
    );
    const result = f(operator);
    setResult(result);

    const newHistory = {
      id: shortid.generate(),
      inputs: { ...inputState },
      operator,
      result,
      date: new Date(),
    };

    setHistories([newHistory, ...histories]);
  };

  const handleClearState = () => {
    setInputState(inputObject);
    setResult(0);
  };

  const handleRestore = (historyItem) => {
    setInputState(historyItem.inputs);
    setResult(historyItem.result);
    setRestoreHistory(historyItem);
  };

  return (
    <div className="container">
      <h1>Mathematic Operations and Restore</h1>
      <hr />
      <div className="input__section">
        <h3>
          Result: <span>{result}</span>
        </h3>
        <InputSection inputState={inputState} handleChange={handleChange} />
      </div>
      <OperationSection
        handleOperations={handleOperations}
        handleClearState={handleClearState}
      />
      <HistorySection
        histories={histories}
        handleRestore={handleRestore}
        restoreHistory={restoreHistory}
      />
    </div>
  );
}

export default App;

/*
TODO: Handle user input fields    -----> Done
TODO: Handle operations           -----> Done
TODO: Handle a list of histories  -----> Done
TODO: Render history list         -----> Done
TODO: Restore the history         -----> Done
*/
