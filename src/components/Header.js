import React from "react";
import "../styles/Header.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


function Header() {
  return (
    <header>
      <Container>
        <Navbar bg="transparent" expand="lg" className="my-3 p-3 navbar-bg fixed-top">
          <Navbar.Brand href="#" className="brand">
            <img
              src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/c_scale,h_64,w_60/v1599156841/arena/assets/arena.png"
              alt="SIESGSTarena Logo"
            />
            SIESGSTarena
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">

          <Form className="d-flex mx-auto" inline>
              <FormControl
                type="search"
                className="mr-2 search-bar"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-dark" className="search-btn btn">
              <i class="fas fa-search"></i>
              </Button>
            </Form>

            <Nav
              className=" my-2 my-lg-0 box navlink-sec"
              style={{ maxHeight: "100px" }}
              navbarScroll
              inline
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
