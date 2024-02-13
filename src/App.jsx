import "./App.css";

function App() {
  return (
    <>
      <h1>Operation and Restore project</h1>
      <div>
        <h3>Result: 20</h3>
        <div>
          <input type="number" />
          <input type="number" />
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
