import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Style/Newsletter.css";
import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  
  const [warning, setwarning] = useState(false);
  const [warning_email, set_warningemail] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const input_email = (email_event) => {
    setEmail(email_event.target.value);
  };

  const Started = () => {
    set_warningemail(false);
    if (email == "") {
      set_warningemail(true);
    } else {
      alert("תודה שנרשמת לקבלת עדכונים");
      navigate("/");
    }
  };

  return (
    <div className="containNewsletterBody">
      <div className="containNewsletter">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontSize: "1.3em",
                textDecoration: "bold",
                textShadow: "2px 2px 6px #000000",
              }}
            >
              {" "}
              תהיו ראשונים לקבל את החדשות, האירועים ועדכוני המוצרים החדשים ביותר
              של Tesla
            </Form.Label>
            <br />
            <br />
            <br />
            <br />

            <Form.Control
              style={{ width: "50%", marginRight: "25%" }}
              type="email"
              placeholder="Enter email"
              className={`${warning_email ? "input_warning" : ""}`}
              value={email}
              onChange={input_email}
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit" onClick={() => Started()}>
            לקבלת ניוזלטר
          </Button>
        </Form>
      </div>
    </div>
  );
}

// require("../Photos/Model_X/MX-Range-Hero-Desktop.jpeg")}
