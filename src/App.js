import React from "react";
import "./App.css";
import Cards from "./Cards";
import { useState } from "react";

function App() {
  let [read, setRead] = useState(false);

  function handleRead() {
    setRead(true);
  }

  return (
    <div className="appContainer">
      <header className="appHeader">
        <div className="leftHeader">
          <div className="notifications">
            <h1>Notifications</h1>
          </div>
          {read === false && <div className="button">3</div>}
        </div>
        <div className="markAsRead">
          <button type="button" onClick={handleRead}>
            Mark all as read{" "}
          </button>
        </div>
      </header>
      <Cards read={read} />
      <footer>
        This project was coded by Marija Tržić Rastija via Frontend Mentor
        challenge
      </footer>
    </div>
  );
}

export default App;
