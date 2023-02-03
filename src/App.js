import React from "react";
import { useState } from "react";
import "./App.css";
import arrow from "./Profile/arrow.png";
import ReactDOM from "react-dom/client";
import Container from "./Profile/container";
import Sidebar from "./Profile/components/sidebar";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "transparent",
      }}
    >
      <div className="App">
        <button
          className={`show-${isActive ? "inactive" : "active"}`}
          onClick={() => setIsActive(true)}
        >
          Who's There
          <img className="arrow" src={arrow} />
        </button>
        {isActive ? (
          <div>
            <div
              className={`components-${isActive ? "active" : "inactive"}`}
              style={{ display: "flex" }}
            >
              <Container />
            </div>
            <p>
              This component was mounted{" "}
              {setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
              }, 1000)}{" "}
              milliseconds ago
            </p>
          </div>
        ) : null}
        <button
          onClick={() => setIsActive(false)}
          className={`wrap-${isActive ? "active" : "inactive"}`}
        >
          WRAP ME UP!
          <img className="arrow2" src={arrow} />
        </button>
      </div>
    </div>
  );
}

export default App;
