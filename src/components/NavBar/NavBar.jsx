import { Link } from "react-router-dom";

const NavBar = () => {

  return ( 
    <div>
      <Link to='/'>Home</Link>
      <Link to='/our-story'>Our Story</Link>
      <Link to='/photos'>Photos</Link>
      <Link to='/wedding-party'>Wedding Party</Link>
      <Link to='/faq'>FAQ</Link>
      <Link to='/travel'>Travel</Link>
      <Link to='/things-to-do'>Things to Do</Link>
      <Link to='/registry'>Registry</Link>
      <Link to='/rsvp'>RSVP</Link>
    </div>
  );
}

export default NavBar;