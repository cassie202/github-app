import React, { useState, useEffect } from "react";
import App from "./App.js";
import HomeCss from "./Home.css";


  
  // function Home() {
  //   return <h2>Home</h2>;
  // }
 
  //   return (
  //     <div>
  //       <h2>Select Repositories</h2>
  
  //       <ul>
  //         <li>
  //           <Link to={`${match.url}/components`}>Components</Link>
  //         </li>
  //         <li>
  //           <Link to={`${match.url}/props-v-state`}>
  //             Props v. State
  //           </Link>
  //         </li>
  //       </ul>
  
  //       {/* The Topics page has its own <Switch> with more routes
  //           that build on the /topics URL path. You can think of the
  //           2nd <Route> here as an "index" page for all topics, or
  //           the page that is shown when no topic is selected */}
  //       <Switch>
  //         <Route path={`${match.path}/:repoId`}>
  //           <Topic />
  //         </Route>
  //         <Route path={match.path}>
  //           <h3>Please select a repository.</h3>
  //         </Route>
  //       </Switch>
  //     </div>
  //   );
  // }



// function Home() {
//   const [githubData, setGithubData] = useState([]);
//   const [githubUser, setGithubUser] = useState("cassie202");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const handleClick = (number) => {
//     setPage(number);
//   };

//   const fetchData = () => {
//     return fetch(`https://api.github.com/users/${cassie202}`)
//       .then((response) => response.json())
//       .then((data) => setGithubData(data));
//   };

// useEffect(() => {
//     fetchData()
//   }, [page]);

// return(
//   <div>

//   </div>
// )
    
function Home() {
  return (
    <div>
      <div className="side-bar">
        <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'className = "avatar" alt='avatar'/>
        <h1 className="full-name">Cassandra Umeh</h1>
        <p className="user-name">Cassie202</p>
        <p className="description">Iam a software developer and a technical writer</p>
       <button className="edit-button">Edit 
       </button>
<p>21 followers. 18 following</p>
</div>


      <div className="main">
        <h1 className="heading"> Repositories. 42</h1>
        <input type="text" value="find a repository..."/>

        <h3 className="get-data">github-app</h3>
        <p className="public">public</p>
        <p className="language">javascript</p>
        <button className="star-btn">Star</button>

        <h3 className="get-data">random-user-app</h3>
        <p className="public">public</p>
        <p className="language">javascript</p>
        <button className="star-btn">Star</button>

        <h3 className="get-data">Typing-game</h3>
        <p className="public">public</p>
        <p className="language">javascript</p>
        <button className="star-btn">Star</button>

        <h3 className="get-data">React-page-clone</h3>
        <p className="public">public</p>
        <p className="language">javascript</p>
        <button className="star-btn">Star</button>

        <h3 className="get-data">google-clone</h3>
        <p className="public">public</p>
        <p className="language">javascript</p>
        <button className="star-btn">Star</button>

        <h3 className="get-data">calculator-app</h3>
        <p className="public">public</p>
        <p className="language">javascript</p>
        <button className="star-btn">Star</button>
      </div>
    </div>
  );
}
export default Home;
