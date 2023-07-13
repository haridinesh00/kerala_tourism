import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./Sectionfour.css"

function Sectionfour() {
  return (
    <div>
      <div className="text-center" style={{ width: "100%", height: "25rem" }}>
        <h2
          style={{
            color: "#036",
            fontSize: "37px",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          }}
        >
          What's New
        </h2>
        <hr
          style={{
            color: "solid #EEEEEE",
            width: "80%",
            margin: "0 auto",
            height: "1px",
            opacity: "0.1",
          }}
        ></hr>
        <div
          className="container-fluid row"
          style={{ width: "50%", margin: "0 auto", paddingTop: "2rem" }}
        >
          <div className="col-6">
            <a style={{ textDecoration: "none" }} href="keralatourism.com">
              <p style={{ fontSize: "15px" }}>
                International Trade Fairs and Roadshows | Sep 2023 - Mar 2024 |
                Register Now
              </p>
            </a>
          </div>
          <div className="col-6">
            <a style={{ textDecoration: "none" }} href="keralatourism.com">
              <p style={{ fontSize: "15px" }}>
                Domestic Trade Fairs 2023-24 | Register Now
              </p>
            </a>
          </div>
        </div>
        <div
          className="text-center"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Button className="btn">
            MORE NEWS <i class="arrow right"></i>
          </Button>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className="videomain">
      <video autoPlay loop muted height="750" width="1915" style={{objectFit: "fill"}}>
        <source
          src="https://www.keralatourism.org/images/kt/videos/Loop_video_Rain-MP41.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="videodesc">
        <span id="exp">EXPLORE OUR VIDEOS</span>
        <p style={{marginTop: "1rem"}}>Take a peek at what God's Own Country has to offer you. Be awed.</p>
      </div>
      </div>
    </div>
  );
}

export default Sectionfour;
