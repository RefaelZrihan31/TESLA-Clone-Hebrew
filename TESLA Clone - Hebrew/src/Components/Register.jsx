import React, { useState } from "react";
import User from "../Components/User";
import { useNavigate } from "react-router-dom";
import "../Style/Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");

  const [eye, seteye] = useState(true);
  const [inputtext, set_inputtext] = useState("password");
  const [warning, setwarning] = useState(false);

  const [warning_email, set_warningemail] = useState(false);
  const [warning_name, set_warningname] = useState(false);
  const [warning_address, set_warningaddress] = useState(false);
  const [warning_password, set_warningpassword] = useState(false);

  const input_email = (email_event) => {
    setEmail(email_event.target.value);
  };
  const input_name = (name_event) => {
    setName(name_event.target.value);
  };

  const inputAddress = (address_event) => {
    setAddress(address_event.target.value);
  };

  const input_password = (password_event) => {
    setPass(password_event.target.value);
  };

  const Eye = () => {
    if (inputtext == "password") {
      set_inputtext("text");
      seteye(false);
      setwarning(true);
    } else {
      set_inputtext("password");
      seteye(true);
      setwarning(false);
    }
  };

  const Started = () => {
    set_warningemail(false);
    set_warningname(false);
    set_warningaddress(false);
    set_warningpassword(false);

    if (email == "") {
      set_warningemail(true);
    } else if (name == "") {
      set_warningname(true);
    } else if (address == "") {
      set_warningaddress(true);
    } else if (pass == "") {
      set_warningpassword(true);
    } else {
      addUser();
    }
  };

  const navigate = useNavigate();

  const checkEmailRegister = (email) => {
    let arrayLocal = JSON.parse(localStorage.getItem(`users`));
    let temp = arrayLocal.find((user) => user.email == email);
    if (temp) {
      alert("כתובת המייל קיימת במערכת! נסה שנית !");
      return false;
    } else {
      return true;
    }
  };
  const addUser = () => {
    if (!checkEmailRegister(email)) {
      return;
    }

    let u = new User(email, name, pass, address); //יצירת משתמש חדש
    //אם קיים במערך אובייקטים משתמשים, הוא יכנס לתוך הבלוק של התנאי
    if (localStorage.users !== undefined) {
      let users = JSON.parse(localStorage.users); //המרה לאובייקט את המערך אובייקטים של המשתמשים
      let newUsers = [...users, u]; //הוספה למערך כל פעם שיתווסף אובייקט של משתמש חדש
      localStorage.users = JSON.stringify(newUsers); //localStorage -המרה למחרוזת לכל המערך כל פעם שיש משתמש חדש ושמירה ב
    }
    //אחרת הוא יכניס לתוך המערך אובייקטים של המשתמשים את המשתמש החדש שנרשם
    else {
      localStorage.users = JSON.stringify([u]);
    }
    alert("הרשמתך למערכת טסלה בוצעה בהצלחה !");
    navigate("/"); //מעבר לדף הבית לאחר לחיצה על הכפתור הרשמה
  };

  return (
    <div>
      <div className="containerRG">
        <div className="cardRG">
          <div className="text">
            <h3>צור חשבון</h3>
            <h6>צור חשבון פעיל והזמן את הטסלה שלך עוד היום !</h6>
          </div>
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
              type={inputtext}
              className={`${warning ? "warning" : ""} ${
                warning_password ? "input_warning" : ""
              }`}
              value={pass}
              onChange={input_password}
              required
            />
            <label>סיסמה</label>
            <span>{warning_password}</span>
            <i
              onClick={Eye}
              className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
          <div className="buttonRG">
            <button onClick={Started}>צור חשבון</button>
          </div>
          <div>
            <hr />
          </div>
          <div className="buttonRGLog">
            <button onClick={() => navigate("/login")}>התחברות</button>
          </div>
        </div>
      </div>
    </div>
  );
}
