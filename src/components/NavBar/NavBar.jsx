import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styles from './NavBar.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

  const NavBar = () => {

  return (
  <>
    <Navbar collapseOnSelect expand="lg" className={styles.container}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className={styles.links} to='/'>Home</Link>
          <Link className={styles.links} to='/our-story'>Our Story</Link>
          <Link className={styles.links} to='/photos'>Photos</Link>
          <Link className={styles.links} to='/wedding-party'>Wedding Party</Link>
          <Link className={styles.links} to='/faq'>FAQ</Link>
          <Link className={styles.links} to='/travel'>Travel</Link>
          <Link className={styles.links} to='/things-to-do'>Things to Do</Link>
          <Link className={styles.links} to='/registry'>Registry</Link>
          <Link className={styles.links} to='/rsvp'>RSVP</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
}

export default NavBar;