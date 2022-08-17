import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "../Style/CarDetailsM3.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function CarDetailsM3() {
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
          backgroundImage: `url(${require("../Photos/Model_3/model-3-main-hero-b-desktop.jpeg")})`,
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
                  Model 3
                </Typography>
              </div>
              <div className="social">
                <div>
                  <span>3.3 שניות</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>602 ק״מ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>AWD</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CustomOrderBtn onClick={() => navigate("/designTeslaM3")}>
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
                src={require("../Photos/Model_3/model-3-hero-a-desktop.jpeg")}
              />
            </div>
            <div className="right-side">
              <div className="heading">
                <h3>נבנה לבטיחות</h3>
                <p>
                  בטיחות היא החלק החשוב ביותר בתכנון הכולל של Model 3. מבנה
                  המתכת הוא שילוב של אלומיניום ופלדה, לחיזוק מרבי בכל אזור.
                  במבחן ריסוק גג, Model 3 עמד בפי ארבע ממשקלו, אפילו עם גג הבנוי
                  מזכוכית: משקל זה שווה ערך לשני פילים אפריקאים בוגרים
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
                  <CustomOrderBtn2 onClick={() => navigate("/designTeslaM3")}>
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
          <div class="image-holder"></div>
          <form>
            <h2 class="text-center">
              <strong>מפרט 3 Model</strong>{" "}
            </h2>
            <div class="form-check">
              <section class="tds-tab-panel tcl-tab__panel tds-tab-panel--active">
                <div class="tcl-tab__panel-items">
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>סוללה</strong>
                        <div>Long Range</div>
                      </li>
                      <li>
                        <strong>האצה</strong>
                        <div>
                          3.3 שניות 0-100 קמ&quot;ש*
                          <br /> <i>*עם הפחתת גלגול</i>
                        </div>
                      </li>
                      <li>
                        <strong>טווח (WLTP)</strong>
                        <div>547 ק&quot;מ</div>
                      </li>
                      <li>
                        <strong>הנעה</strong>
                        <div>Dual Motor All-Wheel Drive</div>
                      </li>
                      <li>
                        <strong>מושבים</strong>
                        <div>5 מבוגרים</div>
                      </li>
                      <li>
                        <strong>גלגלים</strong>
                        <div>20&quot;</div>
                      </li>
                    </ul>
                  </div>
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>משקל</strong>
                        <div>1,836 ק&quot;ג</div>
                      </li>
                      <li>
                        <strong>מטען</strong>
                        <div>649 ליטר</div>
                      </li>
                      <li>
                        <strong>מסכים</strong>
                        <div>מסך מגע 15&quot;</div>
                      </li>
                      <li>
                        <strong>Supercharging</strong>
                        <div>תשלום לפי שימוש</div>
                      </li>
                      <li>
                        <strong>אחריות</strong>
                        <div>
                          הרכב הבסיסי - 4 שנים או 80,000 ק&quot;מ, המוקדם
                          מביניהם
                          <br /> הסוללה ויחידת ההנעה - 8 שנים או 192,000
                          ק&quot;מ, המוקדם מביניהם
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
