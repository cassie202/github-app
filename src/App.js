import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repo from "./Repo";
import Home from "./Home";
import Error from "./Error";
import Css from "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
    
 function App() {
      return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Repo" element={<Repo />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </Router>
      );
    }
   
      // <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/Repo">Repo</Link>
      //       </li>
      //       <li>
      //         <Link to="*">Error</Link>
      //       </li>
      //     </ul>
  
      //     <Switch>
      //       <Route path="/Repo">
      //         <About />
      //       </Route>
      //       <Route path="*">
      //         <Topics />
      //       </Route>
      //       <Route path="/">
      //         <Home />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
   

export default App;
