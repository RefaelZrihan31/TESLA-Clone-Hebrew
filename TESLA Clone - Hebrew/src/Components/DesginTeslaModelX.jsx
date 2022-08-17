import React, { useState } from "react";
import "../Style/DesignTeslaM3.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CarouselTeslaPic from "./CarouselTeslaPic";

export default function DesginTeslaModelX() {
  const TeslaArrayModelX = [
    {
      //Cyberstream‏
      // אדום
      tireId: 1,
      colorId: 1,
      imgFront: require("../Photos/Model_X/wheel20-red/compositor (13).jpeg"),
      imgBack: require("../Photos/Model_X/wheel20-red/compositor (14).jpeg"),
      imgSide: require("../Photos/Model_X/wheel20-red/compositor (15).jpeg"),
    },
    {
      //Cyberstream‏
      // כחול
      tireId: 1,
      colorId: 2,
      imgFront: require("../Photos/Model_X/wheel20-blue/compositor (9).jpeg"),
      imgBack: require("../Photos/Model_X/wheel20-blue/compositor (10).jpeg"),
      imgSide: require("../Photos/Model_X/wheel20-blue/compositor (12).jpeg"),
    },
    {
      //Cyberstream‏
      // אפור
      tireId: 1,
      colorId: 3,
      imgFront: require("../Photos/Model_X/wheel20-gray/compositor (6).jpeg"),
      imgBack: require("../Photos/Model_X/wheel20-gray/compositor (7).jpeg"),
      imgSide: require("../Photos/Model_X/wheel20-gray/compositor (8).jpeg"),
    },
    {
      //Cyberstream‏
      // שחור
      tireId: 1,
      colorId: 4,
      imgFront: require("../Photos/Model_X/wheel20-black/compositor (3).jpeg"),
      imgBack: require("../Photos/Model_X/wheel20-black/compositor (4).jpeg"),
      imgSide: require("../Photos/Model_X/wheel20-black/compositor (5).jpeg"),
    },
    {
      //Cyberstream‏
      // לבן
      tireId: 1,
      colorId: 5,
      imgFront: require("../Photos/Model_X/wheel20-white/compositor.jpeg"),
      imgBack: require("../Photos/Model_X/wheel20-white/compositor (1).jpeg"),
      imgSide: require("../Photos/Model_X/wheel20-white/compositor (2).jpeg"),
    },
    {
      //Turbine
      // אדום
      tireId: 2,
      colorId: 1,
      imgFront: require("../Photos/Model_X/wheel22-red/compositor (28).jpeg"),
      imgBack: require("../Photos/Model_X/wheel22-red/compositor (29).jpeg"),
      imgSide: require("../Photos/Model_X/wheel22-red/compositor (30).jpeg"),
    },
    {
      //Turbine
      // כחול
      tireId: 2,
      colorId: 2,
      imgFront: require("../Photos/Model_X/wheel22-blue/compositor (25).jpeg"),
      imgBack: require("../Photos/Model_X/wheel22-blue/compositor (26).jpeg"),
      imgSide: require("../Photos/Model_X/wheel22-blue/compositor (27).jpeg"),
    },
    {
      //Turbine
      // אפור
      tireId: 2,
      colorId: 3,
      imgFront: require("../Photos/Model_X/wheel22-gray/compositor (22).jpeg"),
      imgBack: require("../Photos/Model_X/wheel22-gray/compositor (23).jpeg"),
      imgSide: require("../Photos/Model_X/wheel22-gray/compositor (24).jpeg"),
    },
    {
      //Turbine
      // שחור
      tireId: 2,
      colorId: 4,
      imgFront: require("../Photos/Model_X/wheel22-black/compositor (19).jpeg"),
      imgBack: require("../Photos/Model_X/wheel22-black/compositor (20).jpeg"),
      imgSide: require("../Photos/Model_X/wheel22-black/compositor (21).jpeg"),
    },
    {
      //Turbine
      // לבן
      tireId: 2,
      colorId: 5,
      imgFront: require("../Photos/Model_X/wheel22-white/compositor (16).jpeg"),
      imgBack: require("../Photos/Model_X/wheel22-white/compositor (17).jpeg"),
      imgSide: require("../Photos/Model_X/wheel22-white/compositor (18).jpeg"),
    },
  ];

  const [TeslaModels, setTeslaModels] = useState(TeslaArrayModelX);
  const [YourDesgin, setYourDesgin] = useState(TeslaModels[4]);
  const [colorDescription, setColorDescription] = useState(
    "לבן פנינה בציפוי רב-שכבתי כלול"
  );

  const [tireDescription, setTireDescription] = useState('20" Cyberstream‏ ');

  const personalDesgin = (tireId, colorId) => {
    let filterd = TeslaModels.filter(
      (mod) => mod.tireId === tireId && mod.colorId === colorId
    );
    let temp = filterd[0];
    setYourDesgin(temp);
  };

  const SubModelBtn = styled(Button)({
    fontSize: 16,
    padding: "8px 20px",
    border: "1px solid",
    borderRadius: "22px",
    lineHeight: 2,
    minWidth: "60%",
    backgroundColor: "rgba(54, 56, 59,0)",
    borderColor: "#747474",
    color: "black",
    fontFamily: ["Arial"].join(","),

    "&:active": {
      border: "3.5px solid",
      backgroundColor: "rgba(54, 56, 59,0)",
      borderColor: "rgb(54,95,215)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(54,95,215)",
    },
  });

  const ColorBtn = styled(Button)({
    padding: 2,
    border: "3px solid",
    borderRadius: "50%",
    backgroundColor: "rgba(54, 56, 59,0)",
    borderColor: "rgba(54, 56, 59,0)",
    fontFamily: ["Arial"].join(","),
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(54,95,215)",
    },
  });

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
          <CarouselTeslaPic YourDesgin={YourDesgin} />
        </div>
        <div className="block_design">
          <div className="inner_block_desgin">
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <h2>Model X</h2>
              </div>
            </div>
            <span className="description_desgin">אין צפי מדוייק לאספקה</span>

            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>650 ק״מ</h4>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>250 קמ״ש</h4>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>3.9 שניות</h4>
                </span>
              </div>
            </div>
            <span className="description_desgin">
              &nbsp;&nbsp; טווח
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              מהירות מרבית &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0-100 קמ״ש
            </span>
            <div className="space_line"></div>
            <div className="outgoing_msg">
              <div className="sent_msg">
                <span className="description_desgin">
                  {" "}
                  Dual Motor All-Wheel Drive
                </span>
              </div>
            </div>

            <SubModelBtn>
              <span>Model X</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </SubModelBtn>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>צבע</h4>
                </span>
              </div>
            </div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <ColorBtn
                    onClick={() => [
                      personalDesgin(YourDesgin.tireId, 5),
                      setColorDescription("לבן פנינה בציפוי רב-שכבתי"),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3 color/Paint_White.png")}
                    />
                  </ColorBtn>

                  <ColorBtn
                    onClick={() => [
                      personalDesgin(YourDesgin.tireId, 4),
                      setColorDescription("שחור מלא"),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3 color/Paint_Black.png")}
                    />
                  </ColorBtn>

                  <ColorBtn
                    onClick={() => [
                      personalDesgin(YourDesgin.tireId, 3),
                      setColorDescription("אפור כהה מטאלי"),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3 color/Paint_MidnightSilver.png")}
                    />
                  </ColorBtn>

                  <ColorBtn
                    onClick={() => [
                      personalDesgin(YourDesgin.tireId, 2),
                      setColorDescription("כחול עמוק מטאלי"),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3 color/Paint_Blue.png")}
                    />
                  </ColorBtn>

                  <ColorBtn
                    onClick={() => [
                      personalDesgin(YourDesgin.tireId, 1),
                      setColorDescription("אדום בציפוי רב-שכבתי"),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3 color/Paint_Red.png")}
                    />
                  </ColorBtn>
                </span>
              </div>
            </div>

            <span className="description_desgin">{colorDescription}</span>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>גלגלים</h4>
                </span>
              </div>
            </div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <ColorBtn
                    onClick={() => [
                      personalDesgin(1, YourDesgin.colorId),
                      setTireDescription('20" Cyberstream‏ '),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_X/wheelsModelx/20Cyberstream.png")}
                    />
                  </ColorBtn>

                  <ColorBtn
                    onClick={() => [
                      personalDesgin(2, YourDesgin.colorId),
                      setTireDescription('22" Turbine'),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_X/wheelsModelx/22Turbine.png")}
                    />
                  </ColorBtn>
                </span>
              </div>
            </div>
            <span className="description_desgin">{tireDescription}</span>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>הזמינו את Model X</h4>
                </span>
              </div>
            </div>

            <OrderModelBtn
              onClick={() =>
                alert("אין צפי אספקה לרכב זה , נסה במועד מאוחר יותר !")
              }
            >
              {" "}
              הזמינו כעת
            </OrderModelBtn>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
