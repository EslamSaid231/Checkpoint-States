import React from "react";
import phone from "../phone.png";
import gmail from "../gmail.png";
const Contact = ({ phoneNumber, email }) => {
  return (
    <div style={{ marginLeft: "50px" }}>
      <p>
        <img
          src={phone}
          style={{
            backgroundColor: "transparent",
            width: "30px",
            height: "30px",
            marginRight: "15px",
          }}
        />
        Phone Number: {phoneNumber}
      </p>
      <p>
        <img
          src={gmail}
          style={{
            backgroundColor: "transparent",
            width: "30px",
            height: "30px",
            marginRight: "15px",
          }}
        />
        Email: {email}
      </p>
    </div>
  );
};

export default Contact;
