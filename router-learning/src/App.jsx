import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Youtube from "./Components/Youtube";
import Github from "./Components/Github";
import Twitter from "./Components/Twitter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Nesting Routing */}
        <Route path="/contact/" element={<Contact />}>
          <Route path="youtube" element={<Youtube />} />
          <Route path="twitter" element={<Twitter />} />
          <Route path="github" element={<Github />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/:fname/:lname" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
