import "./App.css";
import Address from "./Components/Profile/Address";
import Fullname from "./Components/Profile/Fullname";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";

function BasicExample() {
  return (
    <>
      <ProfilePhoto />
      <Fullname />
      <Address />
    </>
  );
}

export default BasicExample;
