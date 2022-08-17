import React, { useState } from "react";
import "../Style/AdminPage.css";
import GroupIcon from "@mui/icons-material/Group";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import UsersTable from "./UsersTable";
import TestDriveTable from "./TestDriveTable";
import OrdersTable from "./OrdersTable";

export default function AdminPage() {
  const [clickTableValue, setClickTableValue] = useState("משתמשים");
  let talbeType;

  const showTable = () => {
    if (clickTableValue === "משתמשים") {
      talbeType = <UsersTable />;
    } else if (clickTableValue === "נסיעות מבחן") {
      talbeType = <TestDriveTable />;
    } else if (clickTableValue === "הזמנות") {
      talbeType = <OrdersTable />;
    }
    return talbeType;
  };

  return (
    <div>
      <div className="containerAdmin">
        <ul className="sidebarAdmin">
          <li>
            <span style={{ color: "red", fontSize: 17 }}>Tesla Manager</span>
          </li>
          <button onClick={() => setClickTableValue("משתמשים")}>
            <li>
              <span>
                <i link="/" className="fa fa-home"></i>
              </span>
              משתמשים&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <GroupIcon />
              </span>
            </li>
          </button>
          <button onClick={() => setClickTableValue("נסיעות מבחן")}>
            <li>
              <span>
                <i link="/" className="fa fa-dashboard"></i>
              </span>
              <span>נסיעות מבחן&nbsp;</span>
              <span>
                <DriveEtaIcon />
              </span>
            </li>
          </button>
          <button onClick={() => setClickTableValue("הזמנות")}>
            <li>
              <span>
                <i className="fa fa-users"></i>
              </span>
              <span>
                הזמנות&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>
                {" "}
                <AutoAwesomeMotionIcon />
              </span>
            </li>
          </button>
        </ul>
        <div className="mangerTitle">
          <h1>ניהול מערכת</h1>
        </div>
        <h5
          style={{
            margin: 20,
            alignItems: "right",
            textDecoration: "underline",
          }}
        >
          {clickTableValue}
        </h5>
        <div className="containTable">
          <div>{showTable()}</div>
        </div>
      </div>
    </div>
  );
}
