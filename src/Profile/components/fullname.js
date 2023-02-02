import React from "react";

export const Fullname = ({ fullname }) => {
  //  const [alert, setAlert] = useState(false);
  //  const handleAlert = () => {
  //    (current) => !current;
  //  };

  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "25px", marginBottom: "-3px" }}>{fullname}</p>
    </div>
  );
};

export default Fullname;
