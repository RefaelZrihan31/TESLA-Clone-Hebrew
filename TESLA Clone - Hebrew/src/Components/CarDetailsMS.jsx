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
                  <span>2.1 ??????????</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>637 ??????</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>322 ????????</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>1020 ??????</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CustomOrderBtn onClick={() => navigate("/designTeslaMS")}>
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
                src={require("../Photos/Model_S/MS-Safety-Hero-Desktop.jpeg")}
              />
            </div>
            <div className="right-side">
              <div className="heading">
                <h3>???????? ??????????????</h3>
                <p>
                  Model S ???????? ???????????? ???????? ??????????, ???? ???????? ???????????? ?????????? ??????????
                  ???????? ???????????? ?????????? ???????? ???????? ???????? ???????????????????? ???????????? ??????????
                  ???????????? ???? ??????????????. ???? Model S ?????? ???????? ???? ?????????????? ??????????????
                  ?????????????????? ???????????? ?????????? ???? Tesla, ?????? ?????????? ?????????? ????????????????, ??????
                  ???????? ??????????.
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
                  <CustomOrderBtn2 onClick={() => navigate("/designTeslaMS")}>
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
          <div
            class="image-holder"
            style={{
              backgroundImage: `url(${require("../Photos/Model_S/MS-Specs-Hero-Desktop.jpeg")})`,
            }}
          ></div>
          <form>
            <h2 class="text-center">
              <strong>???????? Model S</strong>{" "}
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
                        <strong>????????</strong>
                        <div>652 ??&quot;?? (??????????)</div>
                      </li>
                      <li>
                        <strong>?????? ??????????</strong>
                        <div>670 ??&quot;??</div>
                      </li>
                      <li>
                        <strong>????????????</strong>
                        <div>19 ???? 21 ????????'</div>
                      </li>
                      <li>
                        <strong>????????</strong>
                        <div>793 ????????</div>
                      </li>
                      <li>
                        <strong>????????</strong>
                        <div>3.2 ?????????? 0-100 ????&quot;??</div>
                      </li>
                    </ul>
                  </div>
                  <div class="tcl-tab__panel-item">
                    <ul class="tds-list tds-list--small-borders">
                      <li>
                        <strong>???????????? ??????????</strong>
                        <div>250 ????&quot;??</div>
                      </li>
                      <li>
                        <strong>???????? ??????????</strong>
                        <div>
                          0.208 <em>Cd</em>
                        </div>
                      </li>
                      <li>
                        <strong>????????</strong>
                        <div>2,069 ??&quot;??</div>
                      </li>
                      <li>
                        <strong>?????????? ????????</strong>
                        <div>Dual Motor</div>
                      </li>
                      <li>
                        <strong>?????????????? Supercharging</strong>
                        <div>250 ??????????????</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tcl-tab__panel-footer"></div>
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
