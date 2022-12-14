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
                  <span>3.3 ??????????</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>602 ??????</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>AWD</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CustomOrderBtn onClick={() => navigate("/designTeslaM3")}>
                    ???????????? ??????
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
                  ?????????? ?????????? ????????
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
                <h3>???????? ??????????????</h3>
                <p>
                  ???????????? ?????? ???????? ?????????? ?????????? ???????????? ?????????? ???? Model 3. ????????
                  ?????????? ?????? ?????????? ???? ?????????????????? ??????????, ???????????? ???????? ?????? ????????.
                  ?????????? ?????????? ????, Model 3 ?????? ?????? ???????? ????????????, ?????????? ???? ???? ??????????
                  ??????????????: ???????? ???? ???????? ?????? ???????? ?????????? ???????????????? ????????????
                </p>
              </div>
              <form>
                <h4>?????????? ???????????? ???? 5 ????????????</h4>
                <div className="input-text">
                  <label>???????? ??????????</label>
                  &nbsp;&nbsp;
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="input-text">
                  <label>???????? ??????</label>
                  &nbsp;&nbsp;
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="input-text">
                  <label>???????? ??????</label>
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
                    ???????????? ??????
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
              <strong>???????? 3 Model</strong>{" "}
            </h2>
            <div class="form-check">
              <section class="tds-tab-panel tcl-tab__panel tds-tab-panel--active">
                <div class="tcl-tab__panel-items">
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>??????????</strong>
                        <div>Long Range</div>
                      </li>
                      <li>
                        <strong>????????</strong>
                        <div>
                          3.3 ?????????? 0-100 ????&quot;??*
                          <br /> <i>*???? ?????????? ??????????</i>
                        </div>
                      </li>
                      <li>
                        <strong>???????? (WLTP)</strong>
                        <div>547 ??&quot;??</div>
                      </li>
                      <li>
                        <strong>????????</strong>
                        <div>Dual Motor All-Wheel Drive</div>
                      </li>
                      <li>
                        <strong>????????????</strong>
                        <div>5 ??????????????</div>
                      </li>
                      <li>
                        <strong>????????????</strong>
                        <div>20&quot;</div>
                      </li>
                    </ul>
                  </div>
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>????????</strong>
                        <div>1,836 ??&quot;??</div>
                      </li>
                      <li>
                        <strong>????????</strong>
                        <div>649 ????????</div>
                      </li>
                      <li>
                        <strong>??????????</strong>
                        <div>?????? ?????? 15&quot;</div>
                      </li>
                      <li>
                        <strong>Supercharging</strong>
                        <div>?????????? ?????? ??????????</div>
                      </li>
                      <li>
                        <strong>????????????</strong>
                        <div>
                          ???????? ???????????? - 4 ???????? ???? 80,000 ??&quot;??, ????????????
                          ??????????????
                          <br /> ???????????? ???????????? ?????????? - 8 ???????? ???? 192,000
                          ??&quot;??, ???????????? ??????????????
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            <CustomOrderBtn onClick={() => navigate("/testdrive")}>
              ?????? ?????????? ????????
            </CustomOrderBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
