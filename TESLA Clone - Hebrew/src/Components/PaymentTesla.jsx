import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button as kyd } from "react-bootstrap/Button";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PaymentDetails from "./PaymentDetails";
import { useNavigate } from "react-router-dom";
import "../Style/PaymentTesla.css";

export default function PaymentTesla({ orderCurrent }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [ccMonth, setCcMonth] = useState("");
  const [ccYear, setCcYear] = useState("");

  const [warning_fullName, set_warningfullName] = useState(false);
  const [warning_email, set_warningemail] = useState(false);
  const [warning_phoneNumber, set_warningphoneNumber] = useState(false);
  const [warning_address, set_warningaddress] = useState(false);
  const [warning_city, set_warningcity] = useState(false);
  const [warning_ccNumber, set_warningccNumber] = useState(false);
  const [warning_ccMonth, set_warningccMonth] = useState(false);
  const [warning_ccYear, set_warningccYear] = useState(false);

  const input_name = (name_event) => {
    setFullName(name_event.target.value);
  };
  const input_email = (email_event) => {
    setEmail(email_event.target.value);
  };
  const input_phoneNumber = (phoneNumber_event) => {
    setPhoneNumber(phoneNumber_event.target.value);
  };
  const input_address = (address_event) => {
    setAddress(address_event.target.value);
  };
  const input_city = (city_event) => {
    setCity(city_event.target.value);
  };
  const input_ccNumber = (ccNumber_event) => {
    setCcNumber(ccNumber_event.target.value);
  };
  const input_ccMonth = (ccMonth_event) => {
    setCcMonth(ccMonth_event.target.value);
  };
  const input_ccYear = (ccYear_event) => {
    setCcYear(ccYear_event.target.value);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const OrderModelBtn = styled(Button)({
    fontSize: 16,
    padding: "8px 20px",
    border: "2px solid",
    borderRadius: "22px",
    lineHeight: 1.5,
    minWidth: "60%",
    backgroundColor: "rgba(54,95,215)",
    borderColor: "rgba(54,95,215)",
    color: "white",
    fontFamily: ["Arial"].join(","),
    "&:hover": {
      backgroundColor: "rgb(54,95,215)",
      borderColor: "rgb(54,95,215)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(54,95,215",
      borderColor: "rgb(54,95,215)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(54,95,215)",
    },
  });
  const Started = () => {
    set_warningfullName(false);
    set_warningemail(false);
    set_warningphoneNumber(false);
    set_warningaddress(false);
    set_warningcity(false);
    set_warningccNumber(false);
    set_warningccMonth(false);
    set_warningccYear(false);

    if (fullName == "") {
      set_warningfullName(true);
    } else if (email == "") {
      set_warningemail(true);
    } else if (phoneNumber == "") {
      set_warningphoneNumber(true);
    } else if (address == "") {
      set_warningaddress(true);
    } else if (city == "") {
      set_warningcity(true);
    } else if (ccNumber == "") {
      set_warningccNumber(true);
    } else if (ccMonth == "") {
      set_warningccMonth(true);
    } else if (ccYear == "") {
      set_warningccYear(true);
    } else if (!checked) {
      alert("?????? ??????????!");
    } else {
      alert("???????????? ?????????? ????????????! Tesla");
      addOrder();
    }
  };

  const addOrder = () => {
    var vinGenerator = require("vin-generator");
    var randomVin = vinGenerator.generateVin();

    var uniqid = require("uniqid");
    let un = uniqid();

    let newOrder = new PaymentDetails(
      fullName,
      email,
      phoneNumber,
      address,
      city,
      ccNumber,
      ccMonth,
      ccYear,
      orderCurrent.imgFrontOrd,
      orderCurrent.colorDes,
      orderCurrent.tireDes,
      orderCurrent.totalP,
      randomVin,
      un
    );
    if (localStorage.allOrders !== undefined) {
      let allOrders = JSON.parse(localStorage.allOrders);
      let currentOrder = [...allOrders, newOrder];
      localStorage.allOrders = JSON.stringify(currentOrder);
    } else {
      localStorage.allOrders = JSON.stringify([newOrder]);
    }
    navigate("/");
  };

  return (
    <div>
      <OrderModelBtn onClick={handleShow}> ????????????</OrderModelBtn>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-4">
              <Modal.Title style={{ textAlign: "center" }}>??????????</Modal.Title>

              <Form.Label style={{ fontWeight: "bold" }}>
                ?????? ???????? ??????????:
              </Form.Label>

              <Form.Group controlId="formGridEmail">
                <Form.Label>???? ??????</Form.Label>

                <Form.Control
                  value={fullName}
                  onChange={input_name}
                  className={`${warning_fullName ? "input_warning" : ""}`}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>????????????</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  onChange={input_email}
                  className={`${warning_email ? "input_warning" : ""}`}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>???????? ??????????</Form.Label>
                <Form.Control
                  value={phoneNumber}
                  onChange={input_phoneNumber}
                  className={`${warning_phoneNumber ? "input_warning" : ""}`}
                  required
                />
              </Form.Group>
            </Row>

            <Modal.Footer></Modal.Footer>
            <Form.Label style={{ fontWeight: "bold" }}>?????????? ??????????:</Form.Label>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>??????????</Form.Label>
              <Form.Control
                placeholder="?????????????? 17"
                value={address}
                onChange={input_address}
                className={`${warning_address ? "input_warning" : ""}`}
                required
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group controlId="formGridCity">
                <Form.Label>??????</Form.Label>
                <Form.Control
                  placeholder="????????????"
                  value={city}
                  onChange={input_city}
                  className={`${warning_city ? "input_warning" : ""}`}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>???????? ??????????</Form.Label>
                <Form.Control
                  placeholder="458012345678912"
                  value={ccNumber}
                  onChange={input_ccNumber}
                  className={`${warning_ccNumber ? "input_warning" : ""}`}
                  required
                />
              </Form.Group>

              <Modal.Footer></Modal.Footer>
              <Form.Label style={{ fontWeight: "bold" }}>
                ?????????? ??????????:
              </Form.Label>
              <Form.Group controlId="formGridState">
                <Form.Label>????????</Form.Label>
                <Form.Select
                  value={ccMonth}
                  defaultValue={"?????? ????????"}
                  onChange={input_ccMonth}
                  className={`${warning_ccMonth ? "input_warning" : ""}`}
                  required
                >
                  <option>?????? ????????</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Label>??????</Form.Label>
                <Form.Select
                  value={ccYear}
                  defaultValue={"?????? ??????"}
                  onChange={input_ccYear}
                  className={`${warning_ccYear ? "input_warning" : ""}`}
                  required
                >
                  <option>?????? ??????</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="???????? ???? ???????????? ???????????? ????????????"
                checked={checked}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label style={{ fontWeight: "bold", marginRight: 250 }}>
              ???????????? ???????? &nbsp;&nbsp;&nbsp; 500???
            </Form.Label>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ????????
          </Button>
          <Button variant="primary" onClick={Started}>
            ?????? ??????????
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
