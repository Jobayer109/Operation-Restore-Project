import { useState } from "react";
import "./App.css";

/*
TODO: Handle user input fields    -----> Done
TODO: Handle operations           -----> Done
TODO: Handle a list of histories  -----> 
TODO: Render history list         -----> 
TODO: Restore the history         -----> 
*/

const inputObject = {
  a: 0,
  b: 0,
};

function App() {
  const [inputState, setInputState] = useState({ ...inputObject });
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperations = (operator) => {
    const f = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b} `
    );
    setResult(f(operator));
  };

  return (
    <>
      <h1>Operation and Restore project</h1>
      <div>
        <h3>Result: {result}</h3>
        <div>
          <input
            type="number"
            name="a"
            value={inputState.a}
            onChange={handleChange}
          />
          <input
            type="number"
            name="b"
            value={inputState.b}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={() => handleOperations("+")}>+</button>
          <button onClick={() => handleOperations("-")}>-</button>
          <button onClick={() => handleOperations("*")}>*</button>
          <button onClick={() => handleOperations("/")}>/</button>
        </div>
      </div>
      <div>
        <h4>Operation Histories</h4>
        <ul>
          <li>
            <p>Operation: 10 + 20 </p>
            <p>Result:23</p>
            <small>Date: 2/13/2024</small> <br />
            <small>Time: 9:24:13 AM</small> <br />
            <button>Restore</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
