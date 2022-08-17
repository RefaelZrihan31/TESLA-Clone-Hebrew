import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "../Style/CarDetailsM3.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function CarDetailsMS() {
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
          backgroundImage: `url(${require("../Photos/Model_S/ms-main-hero-desktop.jpeg")})`,
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
                  Model S
                </Typography>
              </div>
              <div className="social">
                <div>
                  <span>2.1 שניות</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>637 ק״מ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>322 קמ״ש</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>1020 כ״ס</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CustomOrderBtn onClick={() => navigate("/designTeslaMS")}>
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
                src={require("../Photos/Model_S/MS-Safety-Hero-Desktop.jpeg")}
              />
            </div>
            <div className="right-side">
              <div className="heading">
                <h3>נבנה לבטיחות</h3>
                <p>
                  Model S בנוי מהיסוד כרכב חשמלי, עם מארז סוללות ממוקם ברצפת
                  הרכב לסיכון גלגול נמוך מאוד ובעל ארכיטקטורה מחוזקת להגנה
                  מירבית של הנוסעים. כל Model S חדש כולל את מאפייני הבטיחות
                  האקטיביים החדשים ביותר של Tesla, כמו בלימת חירום אוטומטית, ללא
                  עלות נוספת.
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
                  <CustomOrderBtn2 onClick={() => navigate("/designTeslaMS")}>
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
              backgroundImage: `url(${require("../Photos/Model_S/MS-Specs-Hero-Desktop.jpeg")})`,
            }}
          ></div>
          <form>
            <h2 class="text-center">
              <strong>מפרט Model S</strong>{" "}
            </h2>
            <div class="form-check">
              <section
                id="specifications-showcase-2-panel"
                class="tds-tab-panel tcl-tab__panel "
                role="tabpanel"
                data-tab-index="2"
                aria-labelledby="specifications-showcase-2"
              >
                <div class="tcl-tab__panel-items">
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>טווח</strong>
                        <div>652 ק&quot;מ (משוער)</div>
                      </li>
                      <li>
                        <strong>כוח מירבי</strong>
                        <div>670 כ&quot;ס</div>
                      </li>
                      <li>
                        <strong>גלגלים</strong>
                        <div>19 או 21 אינץ'</div>
                      </li>
                      <li>
                        <strong>מטען</strong>
                        <div>793 ליטר</div>
                      </li>
                      <li>
                        <strong>האצה</strong>
                        <div>3.2 שניות 0-100 קמ&quot;ש</div>
                      </li>
                    </ul>
                  </div>
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>מהירות מרבית</strong>
                        <div>250 קמ&quot;ש</div>
                      </li>
                      <li>
                        <strong>מקדם חיכוך</strong>
                        <div>
                          0.208 <em>Cd</em>
                        </div>
                      </li>
                      <li>
                        <strong>משקל</strong>
                        <div>2,069 ק&quot;ג</div>
                      </li>
                      <li>
                        <strong>מערכת הנעה</strong>
                        <div>Dual Motor</div>
                      </li>
                      <li>
                        <strong>מקסימום Supercharging</strong>
                        <div>250 קילוואט</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tcl-tab__panel-footer"></div>
              </section>
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
