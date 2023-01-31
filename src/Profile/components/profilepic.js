import React, { useState } from "react";

const Profilepic = ({ photo }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClickImg = () => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <img
        src={photo}
        style={{
          width: "200px",
          height: "150px",
          borderRadius: "50%",
          border: " solid 2px black",
          transition: isActive ? "0.5s all ease" : "0",
          zIndex: isActive ? "999" : "0",
          transform: isActive ? "scale(2.5)" : "scale(1)",
          position: "relative",
          left: isActive ? "100px" : "0",
          top: isActive ? "100px" : "0",
        }}
        alt="myPic"
        onClick={handleClickImg}
      />
    </div>
  );
};
export default Profilepic;

//function enlarge() {
//  let img = document.querySelector({ photo });
//  img.style.Transform = "scale(1.5)";
//  console.log("a7a");
//}
