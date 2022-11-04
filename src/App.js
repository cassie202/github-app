import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repo from "./repo";
import Home from "./home";
import Error from "./error";
import Data from "./data";
import Css from "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Repo" element={<Repo />} />
        <Route exact path="/Data" element={<Data />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
