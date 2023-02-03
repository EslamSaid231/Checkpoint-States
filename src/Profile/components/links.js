import React from "react";
import arrow from "../arrow.png";
const Links = ({ logo, logo2 }) => {
  return (
    <div>
      <p>
        Follow me on{" "}
        <img
          alt="arrow"
          src={arrow}
          style={{ height: "12px", width: "8px", marginLeft: "8px" }}
        />
        <a href="https://www.facebook.com">
          <img alt="facebook" src={logo} style={{ marginLeft: "20px" }} />
        </a>
        <a href="https://www.instagram.com">
          <img
            alt="insta"
            src={logo2}
            style={{ width: "20px", height: "17.5px", marginLeft: "10px" }}
          />
        </a>
      </p>
    </div>
  );
};

export default Links;
