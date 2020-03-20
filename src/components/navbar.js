import React from "react"

import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const Navigationbar = ({ MenuItems }) => (
  //   {
  //     MenuItems
  //   }

  <Navbar bg="light" expand="lg" fixed="top">
    <Navbar.Brand href="#home">
      <Link
        to="/"
        style={{
          color: `Black`,
          textDecoration: `none`,
        }}
      >
        <img src="../images/Dahla.jpg" alt="Img not found" />
        My website
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Doggos" id="basic-nav-dropdown">
          <NavDropdown.Item href="/doggos">Doggos section</NavDropdown.Item>
          <NavDropdown.Item href="/doggos/subpage">
            some subpage
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigationbar
