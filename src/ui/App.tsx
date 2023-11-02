import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { sum } from "../utils/calc";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.text())
      .then((text) => {
        setData(text);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {sum(1, 2)}
        </button>
        <p>
          Data from server:
          <div>
            <b>{data}</b>
          </div>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMRfasdss
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
