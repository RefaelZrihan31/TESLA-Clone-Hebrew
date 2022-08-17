import * as React from "react";
import Figure from "react-bootstrap/Figure";

export default function UserProfileHome({ logedUser }) {
  return (
    <div>
      <Figure>
        <Figure.Image width={"100%"} height={"100%"} src={logedUser.frontImg} />
        <Figure.Caption>מספר שלדה : {logedUser.vin}</Figure.Caption>
      </Figure>
    </div>
  );
}
