import React from "react";
import "./../Header/header.css";
import {
  FaTruck,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function header() {
  return (
    <>
      {/* <div>header</div> */}
      <div className="back">
        <ul
          type="none"
          className="list_horizontal"
          style={{ marginTop: "14Px", marginLeft: "10Px" }}
        >
          <FaTruck style={{ color: "#626262" }} />
          <li>Free delivery</li>

          <li>return Policy</li>
        </ul>

        <ul
          type="none"
          className="list_horizontal2"
          style={{ marginTop: "14Px", paddingRight: "21Px" }}
        >
          <li>Login</li>
          <li>Follow US</li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </>
  );
}

export default header;
