import { Link, NavLink, useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  console.log("Navigate: ", navigate);

  function goContact() {
    navigate("/contact");
  }
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
      <h2>About Page</h2>

      <button onClick={goContact}>Go to Contact</button>
    </>
  );
}

export default About;
