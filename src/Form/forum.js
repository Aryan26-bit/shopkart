import React, { useState } from "react";
import "./forum.css";

function Forum() {
  const [Name, setName] = useState("");

  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");

  return (
    <>
      <div className="back_image">
        <span>
          <p className="news">Newslleter</p>
          <p className="news">
            Get news about articles and updates in your inbox.{" "}
          </p>
        </span>
        <div className="main">
          <form>
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Message"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            {/* <button type="submit" className="button_image">
              SEND
            </button> */}

            {/* <div className="btn">SEND</div> */}
          </form>
        </div>
        <div className="btn">SEND</div>
        <h1 className="get">
          GET <br />
          IN TOUCH
        </h1>

        {/* <h1 className="in_touch">IN TOUCH</h1> */}
      </div>
    </>
  );
}

export default Forum;
