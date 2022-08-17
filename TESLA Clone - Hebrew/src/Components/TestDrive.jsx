import React, { useState } from "react";
import TestDriveC from "../Components/TestDriveC";
import { useNavigate } from "react-router-dom";
import "../Style/TestDrive.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function TestDrive() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [checked, setChecked] = useState(false);

  const [warning_email, set_warningemail] = useState(false);
  const [warning_name, set_warningname] = useState(false);
  const [warning_address, set_warningaddress] = useState(false);
  const [warning_phoneNumber, set_warningphoneNumber] = useState(false);

  const input_email = (email_event) => {
    setEmail(email_event.target.value);
  };
  const input_name = (name_event) => {
    setName(name_event.target.value);
  };

  const inputAddress = (address_event) => {
    setAddress(address_event.target.value);
  };

  const input_phoneNumber = (phoneNumber_event) => {
    setPhoneNumber(phoneNumber_event.target.value);
  };

  const Started = () => {
    set_warningemail(false);
    set_warningname(false);
    set_warningaddress(false);
    set_warningphoneNumber(false);

    if (email == "") {
      set_warningemail(true);
    } else if (name == "") {
      set_warningname(true);
    } else if (address == "") {
      set_warningaddress(true);
    } else if (phoneNumber == "") {
      set_warningphoneNumber(true);
    } else if (!checked) {
      alert("אשר תנאים!");
    } else {
      alert(
        "פרטיך נקלטו במערכת בהצלחה ! נציג יצור עמך קשר בהקדם האפשרי. תודה!"
      );
      addTestDrive();
    }
  };

  const navigate = useNavigate();

  const addTestDrive = () => {
    let t = new TestDriveC(email, name, phoneNumber, address); //יצירת משתמש חדש

    //אם קיים במערך אובייקטים משתמשים, הוא יכנס לתוך הבלוק של התנאי
    if (localStorage.testDrive !== undefined) {
      let testDrive = JSON.parse(localStorage.testDrive); //המרה לאובייקט את המערך אובייקטים של המשתמשים
      let newTD = [...testDrive, t]; //הוספה למערך כל פעם שיתווסף אובייקט של משתמש חדש
      localStorage.testDrive = JSON.stringify(newTD); //localStorage -המרה למחרוזת לכל המערך כל פעם שיש משתמש חדש ושמירה ב
    }

    //אחרת הוא יכניס לתוך המערך אובייקטים של המשתמשים את המשתמש החדש שנרשם
    else {
      localStorage.testDrive = JSON.stringify([t]);
    }
    navigate("/"); //מעבר לדף הבית לאחר לחיצה על הכפתור הרשמה
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="containerTD">
        <div className="cardTD">
          <div className="text">
            <h2>תיאום נסיעת מבחן</h2>
            <h6>
              על הנהגים להחזיק בכל עת ברישיון נהיגה בתוקף. הגיל מינימלי לנהיגה
              הוא 24.
            </h6>
          </div>
          <img
            src={require("../Photos/Model_3/Model 3 Performance - Configurator/M3_Performance_gray/M3_Perfo_gray2.jpeg")}
          ></img>
          <h3>פרטי יצירת קשר</h3>
          <div className="input_text">
            <input
              type="text"
              className={`${warning_email ? "input_warning" : ""}`}
              value={email}
              onChange={input_email}
              required
            />
            <label>אימייל</label>
            <span>{warning_email}</span>
          </div>
          <div className="input_text">
            <input
              type="text"
              className={`${warning_name ? "input_warning" : ""}`}
              value={name}
              onChange={input_name}
              required
            />
            <label>שם מלא</label>
            <span>{warning_name}</span>
          </div>
          <div className="input_text">
            <input
              type="text"
              className={`${warning_address ? "input_warning" : ""}`}
              value={address}
              onChange={inputAddress}
              required
            />
            <label>כתובת</label>
            <span>{warning_address}</span>
          </div>

          <div className="input_text">
            <input
              type="text"
              className={`${warning_phoneNumber ? "input_warning" : ""}`}
              value={phoneNumber}
              onChange={input_phoneNumber}
              required
            />
            <label>מספר טלפון</label>
            <span>{warning_phoneNumber}</span>
          </div>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label="מאשר כי כל הפרטים שמסרתי נכונים"
          />
          <label className="descripAgree">
            על ידי לחיצה על 'שליחה והמשך', מובעת הסכמתי כי הנתונים שמסרתי ישותפו
            עם Tesla על מנת שיוכלו לספק לי מידע נוסף או להציע לי מוצרים נוספים
            של Tesla. מובן לי כי התקשרויות או הודעות אלו עשויות להימסר לידי
            באמצעות חיוג ממוחשב או הודעות מוקלטות. הסכמה זו אינה מהווה תנאי
            לנסיעת המבחן.
          </label>
          <div className="buttonTD">
            <button onClick={Started}>שלח והמשך</button>
          </div>
          <div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
