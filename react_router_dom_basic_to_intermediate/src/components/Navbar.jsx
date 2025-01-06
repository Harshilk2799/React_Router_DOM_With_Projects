import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li> */}

        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}

        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                border: "none",
                textDecoration: "none",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                border: "none",
                textDecoration: "none",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                border: "none",
                textDecoration: "none",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post/mobile"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                border: "none",
                textDecoration: "none",
              };
            }}
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post/mobile/1"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                border: "none",
                textDecoration: "none",
              };
            }}
          >
            Post ID
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
