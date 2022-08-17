import React from "react";
import "../Style/MenuItems.css";
import { useNavigate } from "react-router-dom";

export default function MenuItems(props) {
  const navigate = useNavigate();
  const { title, pathName } = props;

  return (
    <div className="menuItems">
      <h4 onClick={() => navigate(pathName)}>{title}</h4>
    </div>
  );
}
