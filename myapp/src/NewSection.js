import React from "react";
import { tns } from "tiny-slider";
import Carousel from "react-bootstrap/Carousel";
import "./NewSection.css";
import Button from "react-bootstrap/esm/Button";

function NewSection() {
  return (
    <div>
      <div
        className="text-center"
        style={{ marginTop: "40rem", marginBottom: "5rem" }}
      >
        <h2 style={{ color: "#036", fontWeight: "500" }}>Experience Kerala</h2>
      </div>

      <Carousel className="slideCar container-fluid">
        <Carousel.Item>
          <a href="keralatourism.org">
            <span class="container">
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/en_uru.jpg"
                alt="First slide"
                style={{ width: "23%", height: "33rem"}}
              />
              <div class="overlay">
                <div class="text">Natural Valley</div>
              </div>
            </span>
          </a>
          <a href="keralatourism.org">
            <span class="container">
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/oppana.jpg"
                alt="First slide"
                style={{ width: "23%", height: "33rem"}}
              />
              <div class="overlay">
                <div class="text">Natural Valley</div>
              </div>
            </span>
          </a>
          <a href="keralatourism.org">
            <span class="container">
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/wayanadu-churam.jpg"
                alt="First slide"
                style={{ width: "23%", height: "33rem"}}
              />
              <div class="overlay">
                <div class="text">Natural Valley</div>
              </div>
            </span>
          </a>
          <a href="keralatourism.org">
            <span class="container">
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda3.jpg"
                alt="First slide"
                style={{ width: "23%", height: "33rem"}}
              />
              <div class="overlay">
                <div class="text">Natural Valley</div>
              </div>
            </span>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.keralatourism.org/images/homecontentimage/desktop/en_uru.jpg"
            alt="First slide"
            style={{ width: "25%" }}
          />
          <img
            style={{ width: "25%" }}
            src="https://www.keralatourism.org/images/homecontentimage/desktop/oppana.jpg"
            alt="First slide"
          />
          <img
            style={{ width: "25%" }}
            src="https://www.keralatourism.org/images/homecontentimage/desktop/wayanadu-churam.jpg"
            alt="First slide"
          />
          <img
            style={{ width: "25%" }}
            src="https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.keralatourism.org/images/homecontentimage/desktop/en_uru.jpg"
            alt="First slide"
            style={{ width: "25%" }}
          />
          <img
            style={{ width: "25%" }}
            src="https://www.keralatourism.org/images/homecontentimage/desktop/oppana.jpg"
            alt="First slide"
          />
          <img
            style={{ width: "25%" }}
            src="https://www.keralatourism.org/images/homecontentimage/desktop/wayanadu-churam.jpg"
            alt="First slide"
          />
          <img
            style={{ width: "25%" }}
            src="https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div
        className="text-center"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Button className="btn">Find More Experiences <i class="arrow right"></i></Button>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default NewSection;
