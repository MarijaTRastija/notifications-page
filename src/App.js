import React from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div className="AppContainer">
      <header className="AppHeader">
        <h1>Notifications</h1>
        <a href="/" className="button">
          3
        </a>
        <a href="/" className="read">
          Mark all as read{" "}
        </a>
      </header>
      <Cards />
    </div>
  );
}

export default App;
