import { useLocation } from "react-router-dom";

function Logout() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Logout Page</h1>
      <h2>{location.state.name} Logged out!</h2>
    </div>
  );
}

export default Logout;
