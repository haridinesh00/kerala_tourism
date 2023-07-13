import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import './Navigbar.css'

function Navigbar() {
  return (
    <div className="mega row">
      <Navbar
        expand="lg"
        className="bg-body-tertiary barnav"
      >
        <Container>
          <Navbar.Brand href="#home" className="col-7">
            <img
              src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017"
              alt="Kerala Tourism"
              style={{ width: "17rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="col-5">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{color: "white"}}>Experience Kerala</Nav.Link>
              <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
              <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
              <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
              <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
              <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
              <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
              <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel indicators="false" className="cartop">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.keralatourism.org/images/banner/desktop/riverreafting-1920x650.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.keralatourism.org/images/banner/desktop/kumarakom-1920x6502.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.keralatourism.org/images/banner/desktop/destination-wedding-1920x6503.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.keralatourism.org/images/banner/desktop/nelliyampathy-1920x650.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.keralatourism.org/images/banner/desktop/painting-1920x650.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default Navigbar;
