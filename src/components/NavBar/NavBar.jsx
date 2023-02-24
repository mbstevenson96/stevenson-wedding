import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styles from './NavBar.module.css'

import "bootstrap/dist/css/bootstrap.min.css";
  
  const NavBar = () => {

  return (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to='/'>Home</Link>
          <Link to='/our-story'>Our Story</Link>
          <Link to='/photos'>Photos</Link>
          <Link to='/wedding-party'>Wedding Party</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/travel'>Travel</Link>
          <Link to='/things-to-do'>Things to Do</Link>
          <Link to='/registry'>Registry</Link>
          <Link to='/rsvp'>RSVP</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
}

export default NavBar;