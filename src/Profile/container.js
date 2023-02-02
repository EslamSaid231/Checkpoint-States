import Address from "./components/address";
import Fullname from "./components/fullname";
import Profilepic from "./components/profilepic";
import pic from "./mypic.jpg";

import Bio from "./components/bio";
import Links from "./components/links";
import facebook from "./icon_facebook.png";
import instagram from "./instagram.png";
import Contact from "./components/contact";
import Sidebar from "./components/sidebar";

const Container = () => {
  // const handleClick = (fullname) => {
  //   alert(`User name is : ` + fullname);
  // };

  return (
    <div
      className="profile"
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "fit-content",
        flexDirection: "row",

        textAlign: "left",
        width: "100%",
        border: "1px black solid",
        borderRadius: "5%",
        marginLeft: "10px",
      }}
    >
      <div
        style={{ backgroundColor: "wheat", borderRadius: "5%", width: "320px" }}
      >
        <Profilepic photo={pic} />
        <p style={{ marginLeft: "10px", fontSize: "25px", color: "black" }}>
          Skills:
        </p>
        <hr />
        <Sidebar skills={"AutoCAD"} />
        <Sidebar skills={"Autodesk Civil 3d"} />
        <Sidebar skills={"Microsoft Office"} />
        <Sidebar skills={"HTML"} />
        <Sidebar skills={"CSS"} />
        <Sidebar skills={"JavaScript"} />
        <Sidebar skills={"React.JS"} />
        <Sidebar skills={"Photoshop"} />
        <Sidebar skills={"Road Design"} />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "50px",
          }}
          className="mypic"
        >
          <Contact
            phoneNumber="+201024045537"
            email="eslamsayed2607@gmail.com"
          />
        </div>
        <div style={{ marginLeft: "50px" }}>
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
