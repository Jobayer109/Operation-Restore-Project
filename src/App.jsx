import { useState } from "react";
import "./App.css";

/*
TODO: Handle user input fields    -----> 
TODO: Handle operations           -----> 
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

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Operation and Restore project</h1>
      <div>
        <h3>Result: 20</h3>
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
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div>
      </div>
      <div>
        <h4>Operation Histories</h4>
        <ul>
          <li>
            <p>Operation: 10 + 20 </p>
            <p>Result: 10</p>
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
