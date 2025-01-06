import {
  Link,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

function Login() {
  const location = useLocation();
  console.log("Location: ", location);
  const navigate = useNavigate();
  const { fname, lname } = useParams();
  console.log("First Name: ", fname, "Last Name: ", lname);

  function goAbout() {
    navigate("/about");
  }
  // Go back one page
  const goBack = () => {
    navigate(-1);
  };
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
      <h2>Login Page</h2>
      <button onClick={goAbout}>Go to About</button>
      <button onClick={goBack}>Go Back</button>
      <h2>
        First Name: {fname} and Last Name: {lname}
      </h2>
      <div>
        <h3>Current Path: {location.pathname}</h3>
        <h3>Key: {location.key}</h3>
        <h3>Search Query: {location.search}</h3>
        <h3>Hash: {location.hash}</h3>
        <h3>State: {JSON.stringify(location.state)}</h3>
      </div>
    </>
  );
}

export default Login;
