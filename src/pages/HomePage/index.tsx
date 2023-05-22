import React from "react";
import logo from "../../assets/logo1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="view">
        <div className="content">
          <div className="title d-flex align-items-center mb-3">
            <div className="img-container">
              <img src={logo} alt="logo.png" />
            </div>
            <div className="ms-2 d-flex">
              <h2>Talent</h2>
              <h2 className="ms-2">Exploriz</h2>
            </div>
          </div>
          <div style={{ marginLeft: "90px" }} className="message">
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
                <a
                  href="https://www.facebook.com/profile.php?id=100089151873202&mibextid=ZbWKwL"
                  className="text-white"
                  target="__blank"
                >
                  <FacebookIcon />
                </a>
              </div>{" "}
              {/* <div className="links d-flex justify-content-center align-items-center">
                <a
                  href="https://www.instagram.com/invites/contact/?i=8bnq4gz7vrso&utm_content=q9miv1j"
                  className="text-white"
                  target="__blank"
                >
                  <InstagramIcon />
                </a>
              </div> */}
              <div className="links d-flex justify-content-center align-items-center">
                <a
                  href="https://www.youtube.com/watch?v=YyUaj13VSD0"
                  target="__blank"
                  className="text-white"
                >
                  <YouTubeIcon />
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
