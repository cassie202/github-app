import React, { useState, useEffect } from "react";
import App from "./App.js";
import Css from "./App.css";

function repo() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("cassie202");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (number) => {
    setPage(number);
  };

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${cassie202}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };
}
useEffect(() => {
    fetchData()
  }, [page]);


  return (
    <div>
      
    </div>

  )
export default repo;
