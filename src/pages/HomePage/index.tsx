import React from "react";
import logo from "../../assets/logo1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="view">
        <div className="content">
          <div className="d-flex align-items-center mb-3">
            <div className="img-container">
              <img src={logo} alt="logo.png" />
            </div>
            <div className="ms-2 d-flex">
              <h2>Talent</h2>
              <h2 className="ms-2">Exploriz</h2>
            </div>
          </div>
          <div style={{ marginLeft: "90px" }}>
            <h1>We are coming soon...</h1>
            <span
              style={{
                letterSpacing: "2px",
                fontSize: " 25px",
                marginTop: "20px",
              }}
            >
              Find us on:
            </span>
            <div className="social-media-container mt-2 d-flex">
              <div className="links d-flex justify-content-center align-items-center">
                <a>
                  <FacebookIcon />
                </a>
              </div>{" "}
              <div className="links d-flex justify-content-center align-items-center">
                <a>
                  <InstagramIcon />
                </a>
              </div>
              <div className="links d-flex justify-content-center align-items-center">
                <a>
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
