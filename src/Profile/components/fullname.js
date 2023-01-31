import React from "react";

export const Fullname = ({ fullname, handleClick }) => {
  return (
    <div onMouseOver={handleClick(fullname)} style={{ fontSize: "25px" }}>
      {fullname}
    </div>
  );
};

export default Fullname;
