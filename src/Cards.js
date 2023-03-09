import React from "react";
import "./Cards.css";
import webber from "./images/avatar-mark-webber.webp";
import gray from "./images/avatar-angela-gray.webp";
import thompson from "./images/avatar-jacob-thompson.webp";
import hasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import smith from "./images/avatar-kimberly-smith.webp";
import peterson from "./images/avatar-nathan-peterson.webp";
import kim from "./images/avatar-anna-kim.webp";

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
      <table>
        <li className={readClassName}>
          <tr>
            <td>
              <img src={webber} alt="Mark Webber" />
            </td>
            <td>
              <div className="redDot">
                <a href="/" className="nameLink">
                  Mark Webber
                </a>{" "}
                reacted to your recent post today{" "}
                <a href="/" className="postLink">
                  My first tournament today!
                </a>
              </div>
              <p>1m ago</p>
            </td>
          </tr>
        </li>

        <li className={readClassName}>
          <tr>
            <td>
              <img src={gray} alt="Angela Gray" />
            </td>
            <td>
              <a href="/" className="nameLink">
                Angela Gray
              </a>{" "}
              followed you
              <p>5m ago</p>
            </td>
          </tr>
        </li>

        <li className={readClassName}>
          <tr>
            <td>
              <img src={thompson} alt="Jacob Thompson" />
            </td>
            <td>
              <a href="/" className="nameLink">
                Jacob Thompson
              </a>{" "}
              has joined your group{" "}
              <a href="/" className="chessLink">
                Chess Club
              </a>
              <p>1 day ago</p>
            </td>
          </tr>
        </li>

        <li className="notification">
          <tr>
            <td>
              <img src={hasanuddin} alt="Rizky Hasanuddin" />
            </td>
            <td>
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
            </td>
          </tr>
        </li>

        <li className="notification">
          <tr>
            <td>
              <img src={smith} alt="Kimberly Smith" />
            </td>
            <td>
              <a href="/" className="nameLink">
                Kimberly Smith
              </a>{" "}
              commented on your picture
              <img src="" alt="" />
              <p>1 week ago</p>
            </td>
          </tr>
        </li>
        <li className="notification">
          <tr>
            <td>
              <img src={peterson} alt="Nathan Peterson" />
            </td>
            <td>
              <a href="/" className="nameLink">
                Nathan Peterson
              </a>{" "}
              reacted to your recent post today{" "}
              <a href="/" className="postLink">
                5 end-game strategies to increase your win rate
              </a>
              <p>2 weeks ago</p>
            </td>
          </tr>
        </li>
        <li className="notification">
          <tr>
            <td>
              <img src={kim} alt="Anna Kim" />
            </td>
            <td>
              <a href="/" className="nameLink">
                Anna Kim
              </a>{" "}
              left the group{" "}
              <a href="/" className="chessLink">
                Chess club
              </a>
              <p>2 weeks ago</p>
            </td>
          </tr>
        </li>
      </table>
    </ul>
  );
}
