import React, { useState } from "react";
import "../Style/DesignTeslaM3.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import CarouselTeslaPic from "./CarouselTeslaPic";
import { useNavigate } from "react-router-dom";
import OrderPayment from "./OrderPayment";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import PreOrder from "./PreOrder";

export default function DesignTeslaM3() {
  const navigate = useNavigate();

  const PRICE = 174990;
  let totalPrice = PRICE;
  const TeslaArrayModel3 = [
    {
      //Aero
      // אדום
      tireId: 1,
      colorId: 1,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_red/m3_red_aero1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_red/m3_red_aero2.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_red/m3_red_aero4.jpeg"),
      extraColor: 7500,
      extraTire: 0,
    },
    {
      //Aero
      // כחול
      tireId: 1,
      colorId: 2,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_blue/m3_blue_aero1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_blue/m3_blue_aero4.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_blue/m3_blue_aero2.jpeg"),
      extraColor: 4000,
      extraTire: 0,
    },
    {
      //Aero
      // אפור
      tireId: 1,
      colorId: 3,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_gray/m3_gray_aero1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_gray/m3_gray_aero4.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_gray/m3_gray_aero2.jpeg"),
      extraColor: 4000,
      extraTire: 0,
    },
    {
      //Aero
      // שחור
      tireId: 1,
      colorId: 4,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_black/m3_black_aero1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_black/m3_black_aero4.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_black/m3_black_aero2.jpeg"),
      extraColor: 4000,
      extraTire: 0,
    },
    {
      //Aero
      // לבן
      tireId: 1,
      colorId: 5,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_white/m3_white_aero1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_white/m3_white_aero2.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 aeroW/m3_aero_white/m3_white_aero4.jpeg"),
      extraColor: 0,
      extraTire: 0,
    },
    {
      //Sport
      // אדום
      tireId: 2,
      colorId: 1,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_red/m3_red_sport1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_red/m3_red_sport2.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_red/m3_red_sport4.jpeg"),
      extraColor: 7500,
      extraTire: 5500,
    },
    {
      //Sport
      // כחול
      tireId: 2,
      colorId: 2,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_blue/m3_blue_sport1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_blue/m3_blue_sport2.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_blue/m3_blue_sport4.jpeg"),
      extraColor: 4000,
      extraTire: 5500,
    },
    {
      //Sport
      // אפור
      tireId: 2,
      colorId: 3,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_gray/m3_gray_sport1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_gray/m3_gray_sport4.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_gray/m3_gray_sport2.jpeg"),
      extraColor: 4000,
      extraTire: 5500,
    },
    {
      //Sport
      // שחור
      tireId: 2,
      colorId: 4,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_black/m3_black_sport1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_black/m3_black_sport3.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_black/m3_black_sport4.jpeg"),
      extraColor: 4000,
      extraTire: 5500,
    },
    {
      //Sport
      // לבן
      tireId: 2,
      colorId: 5,
      imgFront: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_white/m3_white_sport1.jpeg"),
      imgBack: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_white/m3_white_sport2.jpeg"),
      imgSide: require("../Photos/Model_3/Model3-Configurator/M3 sportW/m3_sport_white/m3_white_sport4.jpeg"),
      extraColor: 0,
      extraTire: 5500,
    },
  ];

  const [TeslaModels, setTeslaModels] = useState(TeslaArrayModel3);
  const [YourDesgin, setYourDesgin] = useState(TeslaModels[4]);
  const [colorDescription, setColorDescription] = useState(
    "לבן פנינה בציפוי רב-שכבתי כלול"
  );

  const [tireDescription, setTireDescription] = useState('18" Aero');

  const personalDesgin = (tireId, colorId) => {
    let filterd = TeslaModels.filter(
      (mod) => mod.tireId === tireId && mod.colorId === colorId
    );
    let temp = filterd[0];
    setYourDesgin(temp);
  };

  totalPrice += YourDesgin.extraColor + YourDesgin.extraTire;

  const formatToCurrency = (amount) => {
    return "₪" + amount.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  let ord = [
    {
      colorDes: colorDescription,
      tireDes: tireDescription,
      totalP: totalPrice,
      imgFrontOrd: YourDesgin.imgFront,
      imgSideOrd: YourDesgin.imgSide,
      imgBackOrd: YourDesgin.imgBack,
    },
  ];
  const [orderTesla, setOrderTesla] = useState(ord[0]);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setOrderTesla([
      colorDescription,
      tireDescription,
      totalPrice,
      YourDesgin.imgFront,
      YourDesgin.imgSide,
      YourDesgin.imgBack,
    ]);
  };

  const saveOrderCar = () => {
    if (checked) {
      let order = new PreOrder(
        colorDescription,
        tireDescription,
        totalPrice,
        YourDesgin.imgFront,
        YourDesgin.imgSide,
        YourDesgin.imgBack
      );
      sessionStorage.setItem("OrderDetails", JSON.stringify(order));
      alert("הזמנתך נשמרה בהצלחה , הנך מועבר לדף תשלום");
      navigate("/orderpayment");
    } else {
      alert("נא לאשר את השלב המעבר לדף הבא!");
      return;
    }
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
        {/* פה תמונה */}
        <div className="car_carousel">
          <CarouselTeslaPic YourDesgin={YourDesgin} />
        </div>

        <div className="block_design">
          <div className="inner_block_desgin">
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <h2>Model 3</h2>
              </div>
            </div>

            <span className="description_desgin">
              מועד האספקה המשוער: אוגוסט 2022
            </span>

            <div className="space_line"></div>
            <div className="block_title_out">
              <div className="block_title_inline">
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>491 ק״מ</h4>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>225 קמ״ש</h4>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  <h4 style={{ fontSize: "1.3em" }}>6.1 שניות</h4>
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
                <span className="description_desgin"> Rear-Wheel Drive</span>
              </div>
            </div>

            <SubModelBtn>
              <span>Model 3</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>174,990 ש״ח</span>
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
                      setColorDescription("לבן פנינה בציפוי רב-שכבתי כלול"),
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
                      setColorDescription("שחור מלא 4,000 ₪"),
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
                      setColorDescription("אפור כהה מטאלי 4,000 ₪"),
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
                      setColorDescription("כחול עמוק מטאלי 4,000 ₪"),
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
                      setColorDescription("אדום בציפוי רב-שכבתי 7,500 ₪"),
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
                      setTireDescription('18" Aero'),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3-wheels/option-wheels-18-aero.png")}
                    />
                  </ColorBtn>

                  <ColorBtn
                    onClick={() => [
                      personalDesgin(2, YourDesgin.colorId),
                      setTireDescription(' 5,500₪ 19" Sport'),
                    ]}
                  >
                    <img
                      className="btn_img_color_size"
                      src={require("../Photos/Model_3/Model3-Configurator/M3-wheels/option-wheels-19-sport.png")}
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
                  <h4 style={{ fontSize: "1.3em" }}>הזמינו את Model 3</h4>
                  <h4 style={{ fontSize: "1em" }}>
                    מועד אספקה משוער: אוגוסט 2022
                  </h4>
                </span>
              </div>
            </div>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
              label="מסכים לעבור לשלב ההזמנה הבא"
            />
            <OrderModelBtn onClick={() => saveOrderCar()}>
              {" "}
              הזמינו כעת
            </OrderModelBtn>
            <div className="space_line"></div>
            <div className="space_line"></div>
            <div className="space_line"></div>
          </div>
        </div>
        <ToastContainer position="bottom-center">
          <Toast>
            <Toast.Body>
              מחיר במזומן&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {formatToCurrency(totalPrice)}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}
