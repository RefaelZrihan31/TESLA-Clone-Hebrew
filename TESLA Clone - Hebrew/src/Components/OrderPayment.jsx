import React, { useState } from "react";
import "../Style/DesignTeslaM3.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import CaruselOrderPayment from "./CaruselOrderPayment";
import PaymentTesla from "./PaymentTesla";

export default function OrderPayment() {
  let orderDet = JSON.parse(sessionStorage.getItem("OrderDetails"));

  const [orderCurrent, setOrderCurrent] = useState(orderDet);

  console.log(orderCurrent);

  const formatToCurrency = (amount) => {
    return "₪" + amount.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
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

  return (
    <div>
      <div className="container">
        <div className="car_carousel">
          <CaruselOrderPayment orderCurrent={orderCurrent} />
        </div>

        <div className="block_design">
          <div className="inner_block_desgin">
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <h2>ה - Model 3 שלך</h2>
              </div>
            </div>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div style={{ textAlign: "right" }}>
              <span className="description_desgin">
                מועד האספקה המשוער: אוגוסט 2022
              </span>
              <div className="space_line"></div>
              <span className="description_desgin">
                {orderCurrent.colorDes}
              </span>
              <span className="description_desgin">{orderCurrent.tireDes}</span>
              <span className="description_desgin">פנים שחור חלק</span>

              <span className="description_desgin">Autopilot</span>
              <span className="description_desgin">
                גרסת נסיון של שירות קישורית פרמיום ל-30 יום
              </span>
            </div>
            <div className="space_line"></div>
            <div className="space_line"></div>

            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <p style={{ fontSize: "1.3em" }}>מחיר רכישה</p>
                </span>
              </div>
              <div className="block_title_inline">
                <span>
                  <p style={{ fontSize: "1.3em" }}>
                    {formatToCurrency(orderCurrent.totalP)}
                  </p>
                </span>
              </div>
            </div>

            <span className="description_desgin">
              * המחיר כולל אגרת רישוי על סך ‏530 ₪
            </span>
            <span className="description_desgin">
              {" "}
              ** כולל מיסים בסך ‏35,880.93 ₪
            </span>

            <div className="space_line"></div>
            <div className="space_line"></div>

            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <p style={{ fontSize: "1.3em" }}>לתשלום היום</p>
                </span>
              </div>
              <div className="block_title_inline">
                <span>
                  <p style={{ fontSize: "1.3em" }}>
                    <p style={{ fontSize: "1.3em" }}>500 ₪</p>
                  </p>
                </span>
              </div>
            </div>
            <div style={{ textAlign: "right", fontSize: 10 }}>
              <span className="description_desgin">
                אין החזר כספי על דמי ההזמנה
              </span>

              <div className="space_line"></div>

              <span className="description_desgin">
                <br />
                ללא החזר כספי, למעט מקרים שבהם סיבת הביטול מוגנת בזכויות הביטול
                <br /> המעוגנות בחוק. אם זו הזמנת ליסינג שתושלם דרך צד שלישי,
                דמי
                <br />
                ההזמנה יוחזרו לאחר המסירה.
              </span>
              <span className="description_desgin">
                <br />
                *דמי הרישוי לא כוללים הנחות לקטגוריות מסוימות של לקוחות וייתכן
                <br />
                שהם ישתנו, בהתאם לשיקול הדעת של המחוקק.{" "}
              </span>
              <span className="description_desgin">
                <br /> **סכומי המכס, מס הקנייה ומס היוקרה המופיעים בפרוט לעיל
                אינם
                <br />
                סופיים ומבוססים על הערכה בלבד. חבות המס הסופית תיקבע בפועל בעת
                <br />
                הייבוא, ולא תשפיע על מחיר הרכב ללא מיסים. למען הסר ספק, המחיר
                <br />
                הסופי ייקבע בהתאם לעלויות המס בפועל.{" "}
              </span>
            </div>

            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <PaymentTesla orderCurrent={orderCurrent} />
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
          </div>
        </div>
        <ToastContainer position="bottom-center">
          <Toast>
            <Toast.Body>
              מחיר במזומן&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {formatToCurrency(orderCurrent.totalP)}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}
