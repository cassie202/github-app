import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repo from "./Repo";
import Home from "./Home";
import Error from "./Error";
import "./App.css";

    
 function App() {
      return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/repo/:repoId" element={<Repo />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </Router>
      );
    }

   

export default App;
