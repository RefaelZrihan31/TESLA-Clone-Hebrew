import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [eye, seteye] = useState(true);
  const [inputtext, set_inputtext] = useState("password");
  const [warning, setwarning] = useState(false);

  const [warning_email, set_warningemail] = useState(false);
  const [warning_password, set_warningpassword] = useState(false);

  const input_email = (email_event) => {
    setEmail(email_event.target.value);
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
    set_warningpassword(false);

    if (email == "") {
      set_warningemail(true);
    } else if (pass == "") {
      set_warningpassword(true);
    } else {
      LoginUser();
    }
  };

  const LoginUser = () => {
    let userEmailCurrent = email;
    let userPassCurrent = pass;
    let tempUserArr = JSON.parse(localStorage.getItem("users"));

    for (let i = 0; i < tempUserArr.length; i++) {
      if (
        tempUserArr[i].email == userEmailCurrent &&
        tempUserArr[i].pass == userPassCurrent
      ) {
        //session storage שמירת פרטי המשתמש ב
        sessionStorage.setItem("CurrentUser", JSON.stringify(tempUserArr[i]));
        if (
          tempUserArr[i].email === "Admin@tesla.com" &&
          tempUserArr[i].pass === "102030"
        ) {
          navigate("/adminpage");
          return;
        }
        alert("שלום " + tempUserArr[i].name + " התחברותך בוצעה בהצלחה!");
        navigate("/userprofile");
        return;
      }
    }
    alert("כנראה שחלק מהנתונים שהזנת אינם תקינים...");
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="containerLogin">
        <div className="cardLogin">
          <div className="text">
            <h3>היכנס</h3>
          </div>
          <div className="input_text">
            <input
              type="text"
              className={`${warning_email ? "input_warning" : ""}`}
              value={email}
              onChange={input_email}
              required
            />
            <label>כתובת אימייל</label>
            <span>{warning_email}</span>
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
          <div className="buttonLogin">
            <button onClick={Started}>היכנס</button>
          </div>
          <div>
            <hr />
          </div>
          <div className="buttonLoginRG">
            <button onClick={() => navigate("/register")}>צור חשבון</button>
          </div>
        </div>
      </div>
    </div>
  );
}
