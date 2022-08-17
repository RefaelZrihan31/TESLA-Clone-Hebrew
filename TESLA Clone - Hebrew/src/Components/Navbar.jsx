import React from "react";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar(props) {
  const { setIsMenuOpen, isMenuOpen } = props;
  return (
    <div>
      <BootstrapNavbar style={{ overflow: "hidden" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          mt={1}
        >
          <Grid xs={1}>
            <Link
              style={{
                fontSize: 20,
                fontFamily: "TeslaFontLogo",
                textDecoration: "none",
                color: "black",
              }}
              to="/"
            >
              TESLA
            </Link>
          </Grid>
          <Grid xs={4} container justifyContent="space-evenly">
            <div className="navbar_links">
              <Link to="/carDetailsMX"> Model X </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/carDetailsM3"> Model 3 </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/carDetailsMS"> Model S </Link>
            </div>
          </Grid>
          <Grid xs={1} container justifyContent="space-evenly">
            <div className="navbar_links">
              <Link to="/login"> חשבון </Link>
            </div>
            <div
              className="navbar_menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </Grid>
        </Grid>
      </BootstrapNavbar>
    </div>
  );
}
