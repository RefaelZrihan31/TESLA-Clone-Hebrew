import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "../Style/HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  
  const navigate = useNavigate();

  let backgroundImageModel = [
    {
      background: require("../Photos/Model_3/Desktop-Model3.jpeg"),
      modelName: "Model 3",
      idCar: 1,
      pathCD: "/carDetailsM3",
      pathDS: "/designTeslaM3",
    },
    {
      background: require("../Photos/Model_S/ms-homepage-desktop.jpeg"),
      modelName: "Model S",
      idCar: 2,
      pathCD: "/carDetailsMS",
      pathDS: "/designTeslaMS",
    },
    {
      background: require("../Photos/Model_X/mx-homepage-desktop.jpeg"),
      modelName: "Model X",
      idCar: 3,
      pathCD: "/carDetailsMX",
      pathDS: "/designTeslaMX",
    },
  ];

  const CustomOrderBtn = styled(Button)({
    fontSize: 14,
    padding: "12px 24px",
    border: "1px solid",
    borderRadius: "22px",
    lineHeight: 1,
    width: 250,
    backgroundColor: "rgb(54, 56, 59)",
    borderColor: "rgb(54, 56, 59)",
    color: "white",
    fontFamily: ["Arial"].join(","),
    "&:hover": {
      backgroundColor: "rgb(54, 56, 59)",
      borderColor: "rgb(54, 56, 59)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(54, 56, 59)",
      borderColor: "rgb(54, 56, 59)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(54, 56, 59)",
    },
  });

  const MoreInfoBtn = styled(Button)({
    fontSize: 14,
    padding: "12px 24px",
    border: "1px solid",
    borderRadius: "22px",
    lineHeight: 1,
    width: 250,
    backgroundColor: "rgb(222, 222, 222)",
    borderColor: "rgb(222, 222, 222)",
    color: "rgb(54, 56, 59)",
    fontFamily: ["Arial"].join(","),
    "&:hover": {
      backgroundColor: "rgb(222, 222, 222)",
      borderColor: "rgb(222, 222, 222)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(222, 222, 222)",
      borderColor: "rgb(222, 222, 222)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgb(222, 222, 222)",
    },
  });

  return (
    <div>
      {backgroundImageModel.map((img, i) => (
        <div
          style={{
            backgroundImage: `url(${img.background})`,
            backgroundPosition: "center",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="containerHome">
            <div className="cardHome">
              <div>
                <div>
                  <Typography gutterBottom variant="h3">
                    {img.modelName}
                  </Typography>
                </div>
                <div className="social">
                  <div>
                    <CustomOrderBtn onClick={() => navigate(img.pathDS)}>
                      הזמנה מותאמת אישית
                    </CustomOrderBtn>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <MoreInfoBtn onClick={() => navigate(img.pathCD)}>
                      מידע נוסף
                    </MoreInfoBtn>
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
                    onClick={() => navigate("/newsletter")}
                  >
                    הירשמו כדי לקבל ידיעות חדשות של Tesla ועדכוני מוצרים
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
