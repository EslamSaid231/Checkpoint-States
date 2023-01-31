import PropTypes from "prop-types";
import React from "react";

//let pic = document.querySelector(".mypic");
//let picenlarge = document.querySelector("Mypic2");
//pic.addEventListener("click", function () {
//  picenlarge.classList.add("Mypic2en");
//});

const Profilepic = ({ photo }) => {
  return (
    <div>
      <img
        className="mypic"
        src={photo}
        style={{
          width: "200px",
          height: "150px",
          borderRadius: "50%",
          border: " solid 2px black",
        }}
        alt="myPic"
      />
      <img
        className="Mypic2"
        src={photo}
        style={{ display: "none", zIndex: "1" }}
      />
    </div>
  );
};
export default Profilepic;

Profilepic.propTypes = {
  photo: PropTypes.string,
};

//function enlarge() {
//  let img = document.querySelector({ photo });
//  img.style.Transform = "scale(1.5)";
//  console.log("a7a");
//}
