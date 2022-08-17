import React, { useState, useEffect } from "react";
import "../Style/UserProfile.css";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import UserProfileHome from "./UserProfileHome";
import UserProfileDetails from "./UserProfileDetails";
import PaymentDetails from "./PaymentDetails";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [clickSectionValue, setClickSectionValue] = useState("דף הבית");

  const [allOrdersArr, setAllOrdersArr] = useState(
    localStorage.getItem("allOrders")
  );
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("CurrentUser")
  );

  let defaultUser = new PaymentDetails(
    JSON.parse(currentUser).name,
    JSON.parse(currentUser).email,
    "NaN",
    JSON.parse(currentUser).address,
    "NaN",
    "NaN",
    "NaN",
    "NaN",
    require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_blue/m3_blue_sport1.jpeg"),
    "NaN",
    "NaN",
    "NaN",
    "NaN",
    "NaN"
  );

  const [logedUser, setLogedUser] = useState(defaultUser);

  const checkUserOrder = () => {
    let filterd = JSON.parse(allOrdersArr).filter(
      (mod) => mod.email === JSON.parse(currentUser).email
    );
    let temp = filterd[0];

    if (temp !== undefined) {
      setLogedUser(temp);
    }
  };

  let sectionType;
  const showProfileSection = () => {
    if (clickSectionValue === "דף הבית") {
      sectionType = <UserProfileHome logedUser={logedUser} />;
    } else if (clickSectionValue === "פרופיל") {
      sectionType = <UserProfileDetails logedUser={logedUser} />;
    } else if (clickSectionValue === "התנתקות") {
      navigate("/");
      sessionStorage.clear();
      return;
    }
    return sectionType;
  };

  useEffect(() => {
    checkUserOrder();
  }, []);

  return (
    <div>
      <div className="containerProfile">
        <ul className="sidebarProfile">
          <li>
            <span style={{ color: "white", fontSize: 17 }}>ברוך הבא !</span>
          </li>
          <button onClick={() => setClickSectionValue("דף הבית")}>
            <li>
              <span>
                <i link="/" className="fa fa-home"></i>
              </span>
              דף הבית&nbsp;&nbsp;&nbsp;
              <span>
                <HomeIcon />
              </span>
            </li>
          </button>
          <button onClick={() => setClickSectionValue("פרופיל")}>
            <li>
              <span>
                <i link="/" className="fa fa-dashboard"></i>
              </span>
              <span>פרופיל&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>
                <PersonIcon />
              </span>
            </li>
          </button>

          <button onClick={() => setClickSectionValue("התנתקות")}>
            <li>
              <span>
                <i className="fa fa-users"></i>
              </span>
              <span>התנתק&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>
                {" "}
                <LogoutIcon />
              </span>
            </li>
          </button>
        </ul>
        <div className="profileTitle">
          <h1>שלום {logedUser.fullName}</h1>
        </div>
        <h5
          style={{
            margin: 20,
            alignItems: "right",
            textDecoration: "underline",
          }}
        ></h5>
        <div className="containTableProfile">
          <div>{showProfileSection()}</div>
        </div>
      </div>
    </div>
  );
}
