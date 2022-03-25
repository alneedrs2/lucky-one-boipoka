import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { BiBookHeart } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>
            <BiBookHeart/> Boi Poka
            </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
