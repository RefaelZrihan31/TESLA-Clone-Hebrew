import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "../Style/CarDetailsM3.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function CarDetailsMX() {
  const CustomOrderBtn = styled(Button)({
    fontSize: 14,
    padding: "10px 22px",
    border: "3px solid",
    borderRadius: "22px",
    lineHeight: 1,
    width: 200,
    backgroundColor: "rgba(54, 56, 59,0)",
    borderColor: "rgb(255,255,255)",
    color: "white",
    fontFamily: ["Arial"].join(","),
    "&:hover": {
      backgroundColor: "rgb(255,255,255)",
      borderColor: "rgb(255,255,255)",
      color: "black",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(54, 56, 59,15)",
      borderColor: "rgb(255,255,255)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(255,255,255)",
    },
  });

  const CustomOrderBtn2 = styled(Button)({
    fontSize: 14,
    padding: "10px 22px",
    border: "3px solid",
    borderRadius: "22px",
    lineHeight: 1,
    width: 200,
    marginTop: 200,
    backgroundColor: "rgb(0, 0, 0)",
    borderColor: "rgb(0,0,0)",
    color: "white",
    fontFamily: ["Arial"].join(","),
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0)",
      borderColor: "rgb(0,0,0)",
      color: "black",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(54, 56, 59,15)",
      borderColor: "rgb(255,255,255)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(255,255,255)",
    },
  });

  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${require("../Photos/Model_X/MX-Hero-Desktop.jpeg")})`,
          backgroundPosition: "center",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="containerCarModel">
          <div className="cardCarModel">
            <div>
              <div>
                <Typography gutterBottom variant="h3">
                  Model X
                </Typography>
              </div>
              <div className="social">
                <div>
                  <span>2.6 שניות</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>536 ק״מ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>1020 כ״ס</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CustomOrderBtn onClick={() => navigate("/designTeslaMX")}>
                    הזמינו כעת
                  </CustomOrderBtn>
                </div>
              </div>
              <div>
                <Button
                  style={{
                    marginTop: 20,
                    color: "white",
                    textDecoration: "underline",
                  }}
                  variant="text"
                  onClick={() => navigate("/testdrive")}
                >
                  תיאום נסיעת מבחן
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" style={{ border: "none" }}>
          <div className="form">
            <div className="left-side">
              <img
                src={require("../Photos/Model_X/MX-Safety-Hero-Desktop.jpeg")}
              />
            </div>
            <div className="right-side">
              <div className="heading">
                <h3>נבנה לבטיחות</h3>
                <p>
                  Model X בנוי מהיסוד כרכב חשמלי, עם ארכיטקטורה בעלת חוזק גבוה
                  ומארז סוללות ממוקם ברצפת הרכב להגנה מדהימה של הנוסעים וסיכון
                  גלגול נמוך. כל Model X כולל את מאפייני הבטיחות האקטיביים
                  החדשים ביותר של Tesla, כמו בלימת חירום אוטומטית, ללא עלות
                  נוספת.{" "}
                </p>
              </div>
              <form>
                <h4>דירוג בטיחות של 5 כוכבים</h4>
                <div className="input-text">
                  <label>נוסע מבוגר</label>
                  &nbsp;&nbsp;
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="input-text">
                  <label>נוסע ילד</label>
                  &nbsp;&nbsp;
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="input-text">
                  <label>הולך רגל</label>
                  &nbsp;&nbsp;
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="input-text">
                  <label>Safety Assist</label>
                  &nbsp;&nbsp;
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div>
                  <CustomOrderBtn2 onClick={() => navigate("/designTeslaMX")}>
                    הזמינו כעת
                  </CustomOrderBtn2>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="register-photo">
        <div class="form-container">
          <div
            class="image-holder"
            style={{
              backgroundImage: `url(${require("../Photos/Model_X/MX-Specs-Hero-Desktop.jpeg")})`,
            }}
          ></div>
          <form>
            <h2 class="text-center">
              <strong>מפרט Model X</strong>{" "}
            </h2>
            <div class="form-check">
              <section
                id="specifications-showcase-1-panel"
                class="tds-tab-panel tcl-tab__panel tds-tab-panel--active"
                role="tabpanel"
                data-tab-index="1"
                aria-labelledby="specifications-showcase-1"
              >
                <div class="tcl-tab__panel-items">
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>טווח</strong>
                        <div>536 ק&quot;מ (משוער)</div>
                      </li>
                      <li>
                        <strong>1/4 מייל</strong>
                        <div>9.9 שנ’</div>
                      </li>
                      <li>
                        <strong>כוח מירבי</strong>
                        <div>1020 כ&quot;ס</div>
                      </li>
                      <li>
                        <strong>גלגלים</strong>
                        <div>20 או 22 אינץ'</div>
                      </li>
                      <li>
                        <strong>גרירה</strong>
                        <div>2,268 ק&quot;ג</div>
                      </li>
                      <li>
                        <strong>מושבים</strong>
                        <div>עד 6</div>
                      </li>
                    </ul>
                  </div>
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>האצה</strong>
                        <div>
                          2.6 שניות 0-100 קמ&quot;ש*
                          <br />
                          <em>*עם הפחתת גלגול</em>
                        </div>
                      </li>
                      <li>
                        <strong>מהירות מרבית</strong>
                        <div>262 קמ&quot;ש</div>
                      </li>
                      <li>
                        <strong>מקדם חיכוך</strong>
                        <div>
                          0.24 <em>Cd</em>
                        </div>
                      </li>
                      <li>
                        <strong>משקל</strong>
                        <div>2,455 ק&quot;ג</div>
                      </li>
                      <li>
                        <strong>מערכת הנעה</strong>
                        <div>Tri Motor</div>
                      </li>
                      <li>
                        <strong>מקסימום Supercharging</strong>
                        <div>250 קילוואט</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tcl-tab__panel-footer">
                  <p>הדגם והמפרט האמריקאי מוצגים</p>
                </div>
              </section>{" "}
            </div>
            <CustomOrderBtn onClick={() => navigate("/testdrive")}>
              תאם נסיעת מבחן
            </CustomOrderBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
