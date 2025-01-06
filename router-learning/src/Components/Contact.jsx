import { Link, NavLink, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li> */}

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <h2>Contact Page</h2>
      <div>
        <NavLink to="youtube">Youtube</NavLink>
        <br />
        <NavLink to="github"> Github</NavLink>
        <br />
        <NavLink to="twitter"> Twitter</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Contact;
