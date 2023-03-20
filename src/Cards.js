import React from "react";
import "./Cards.css";
import webber from "./images/avatar-mark-webber.webp";
import gray from "./images/avatar-angela-gray.webp";
import thompson from "./images/avatar-jacob-thompson.webp";
import hasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import smith from "./images/avatar-kimberly-smith.webp";
import peterson from "./images/avatar-nathan-peterson.webp";
import kim from "./images/avatar-anna-kim.webp";
import you from "./images/image-chess.webp";

// const cards = [
//   {
//     name: "Mark Webber",
//     action: "reacted to your recent post today",
//     item: "My first tournament today!",
//     date: "1m ago",
//   },
//   { name: "Angela Gray", action: "followed you", date: "5m ago" },
// ];

export default function Cards(props) {
  const readClassName = props.read ? undefined : "unread";

  return (
    <ul className="container">
      {/* {cards.map((card) => (
        <li className="unread" key={card.date}>
          <img
            alt=""
            src={angela}
            width="50"
            height="50"
            style={{ borderRadius: "100%" }}
          />
          <a href="/" className="nameLink">
            {card.name}
          </a>{" "}
          {card.action}
          <a href="/" className="postLink">
            {" "}
            {card.item}
          </a>
          <p>{card.date}</p>
        </li>
      ))} */}
      {/* <table> */}
      <li className={readClassName}>
        <div className="rowLi">
          <img src={webber} alt="Mark Webber" />

          <div className="notificationText">
            <a href="/" className="nameLink">
              Mark Webber
            </a>{" "}
            reacted to your recent post today{" "}
            <a href="/" className="postLink">
              My first tournament today!
            </a>
            <div className="redDot"></div>
            <p>1m ago</p>
          </div>
        </div>
      </li>{" "}
      <li className={readClassName}>
        <div className="rowLi">
          <img src={gray} alt="Angela Gray" />
          <div className="notificationText">
            <a href="/" className="nameLink">
              Angela Gray
            </a>{" "}
            followed you
            <div className="redDot"></div>
            <p>5m ago</p>
          </div>
        </div>
      </li>
      <li className={readClassName}>
        <div className="rowLi">
          <img src={thompson} alt="Jacob Thompson" />
          <div className="notificationText">
            <a href="/" className="nameLink">
              Jacob Thompson
            </a>{" "}
            has joined your group{" "}
            <a href="/" className="chessLink">
              Chess Club
            </a>
            <div className="redDot"></div>
            <p>1 day ago</p>
          </div>
        </div>
      </li>
      <li className="notification">
        <div className="rowLi">
          <img src={hasanuddin} alt="Rizky Hasanuddin" />
          <div className="notificationText">
            <a href="/" className="nameLink">
              Rizky Hasanuddin
            </a>{" "}
            sent you a private message
            <p>5 days ago</p>
            <br />
            <a href="/" className="message">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </a>
          </div>
        </div>
      </li>
      <li className="notification">
        <div className="rowLi">
          <img src={smith} alt="Kimberly Smith" />
          <div className="notificationText">
            <a href="/" className="nameLink">
              Kimberly Smith
            </a>{" "}
            commented on your picture
            <img src="" alt="" />
            <p>1 week ago</p>
          </div>{" "}
          <img src={you} alt="" className="yourImage" />{" "}
        </div>
      </li>
      <li className="notification">
        <div className="rowLi">
          <img src={peterson} alt="Nathan Peterson" />
          <div className="notificationText">
            <a href="/" className="nameLink">
              Nathan Peterson
            </a>{" "}
            reacted to your recent post today{" "}
            <a href="/" className="postLink">
              5 end-game strategies to increase your win rate
            </a>
            <p>2 weeks ago</p>
          </div>
        </div>
      </li>
      <li className="notification">
        <div className="rowLi">
          <img src={kim} alt="Anna Kim" />
          <div className="notificationText">
            <a href="/" className="nameLink">
              Anna Kim
            </a>{" "}
            left the group{" "}
            <a href="/" className="chessLink">
              Chess club
            </a>
            <p>2 weeks ago</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
