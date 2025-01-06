import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();
  let data = { name: "Harshil" };
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button
        onClick={() => {
          navigate("/logout", { state: data });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
