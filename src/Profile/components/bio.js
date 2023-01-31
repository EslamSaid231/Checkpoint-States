import React from "react";
const Bio = ({ bio, profession }) => {
  return (
    <div>
      <p>{bio}</p>
      <p style={{ fontSize: "18px" }}>Profession: {profession}</p>
    </div>
  );
};
export default Bio;
