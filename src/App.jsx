import { useState } from "react";
import shortid from "shortid";
import "./App.css";
import Button from "./components/UI/Button";
import TextInput from "./components/UI/TextInput";

const inputObject = {
  a: 30,
  b: 10,
};

function App() {
  const [inputState, setInputState] = useState({ ...inputObject });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRestoreHistory] = useState(null);

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
    setResult(result.toFixed(2));

    const newHistory = {
      id: shortid.generate(),
      inputs: { ...inputState },
      operator,
      result,
      date: new Date(),
    };

    setHistories([newHistory, ...histories]);
  };

  const handleRestore = (historyItem) => {
    setInputState(historyItem.inputs);
    setResult(historyItem.result);
    setRestoreHistory(historyItem);
  };

  return (
    <>
      <h1>Operation and Restore project</h1>
      <div>
        <h3>Result: {result}</h3>
        <div>
          {Object.entries(inputState).map((i, index) => (
            <TextInput
              key={index}
              name={i[0]}
              value={i[1]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div>
          <Button
            type="button"
            text="+"
            onClick={() => handleOperations("+")}
          />
          <Button
            type={"button"}
            text={"-"}
            onClick={() => handleOperations("-")}
          />
          <Button
            type={"button"}
            text={"*"}
            onClick={() => handleOperations("*")}
          />
          <Button
            type={"button"}
            text={"/"}
            onClick={() => handleOperations("/")}
          />
        </div>
      </div>
      <div>
        <h4>Operation Histories</h4>
        {histories.length === 0 ? (
          <p>
            <small>No Histories Found</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operation: {historyItem.inputs.a} {historyItem.operator}{" "}
                  {historyItem.inputs.b}{" "}
                </p>
                <p>Result:{historyItem.result.toFixed(2)}</p>
                <small>
                  Date: {historyItem.date.toLocaleDateString()}
                </small>{" "}
                <br />
                <small>
                  Time: {historyItem.date.toLocaleTimeString()}
                </small>{" "}
                <br />
                <button
                  onClick={() => handleRestore(historyItem)}
                  disabled={
                    restoreHistory !== null &&
                    restoreHistory.id === historyItem.id
                  }
                >
                  Restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
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
