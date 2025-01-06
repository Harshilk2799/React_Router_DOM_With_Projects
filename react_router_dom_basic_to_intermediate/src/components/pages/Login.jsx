import { useLocation } from "react-router-dom";

function Login() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Login Page</h1>
      <h2>State: {location.state.st}</h2>
    </div>
  );
}

export default Login;
