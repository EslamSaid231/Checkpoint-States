import React from "react";
const Sidebar = ({ skills }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <p style={{ paddingLeft: "10px", color: "black" }}>{skills} </p>
      <input type="range" min="1" max="100" style={{ marginRight: "10px" }} />
    </div>
  );
};
export default Sidebar;
