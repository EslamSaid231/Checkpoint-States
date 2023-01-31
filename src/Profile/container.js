import Address from "./components/address";
import Fullname from "./components/fullname";
import Profilepic from "./components/profilepic";
import pic from "./mypic.jpg";

import Bio from "./components/bio";
import Links from "./components/links";
import facebook from "./icon_facebook.png";
import instagram from "./instagram.png";

const Container = () => {
  // const handleClick = (fullname) => {
  //   alert(`User name is : ` + fullname);
  // };
  const handleClickimg = () => {
    return (
      <>
        <img src={pic} />
      </>
    );
  };

  return (
    <div
      className="profile"
      style={{
        display: "flex",
        height: "fit-content",
        flexDirection: "column",
        padding: "20px 20px",
        textAlign: "left",
        width: "300px",
        border: "1px black solid",
        borderRadius: "5%",
        marginLeft: "10px",
      }}
    >
      <div>
        <div style={{ textAlign: "center" }} className="mypic">
          <Profilepic photo={pic} />
        </div>
        <div>
          <div style={{ marginTop: "20px" }}>
            <Fullname fullname={"Eslam"} />
          </div>
          <div>
            <Address address={"Cairo, Egypt"} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Bio
              bio={
                "My name is Eslam, 27 years old working as a Civil Engineer and looking forward to participate in Web Development career"
              }
              profession={"Civil Engineer"}
            />
            <div>
              <Links logo={facebook} logo2={instagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
