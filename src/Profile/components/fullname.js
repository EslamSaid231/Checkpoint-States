import React from "react";

export const Fullname = ({ fullname }) => {
  //  const [alert, setAlert] = useState(false);
  //  const handleAlert = () => {
  //    (current) => !current;
  //  };

  return (
    <div
      onClick={alert("User name is : " + fullname)}
      style={{ fontSize: "25px" }}
    >
      {fullname}
    </div>
  );
};

export default Fullname;
