import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./components/pages/Error";
import Post from "./components/pages/Post";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Logout from "./components/pages/Logout";

function App() {
  let isLogged = true;
  let data = {
    st: "User is not logged in",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<h1>Hello World</h1>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/* Dynamic URL */}
          <Route path="/post/:category" element={<Post />} />
          <Route path="/post/:category/:id" element={<Post />} />

          {/* Conditional Route */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
