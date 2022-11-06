import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [githubData, setGithubData] = useState([]);
  const [githubRepos, setGithubRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (number) => {
    setPage(number);
  };

  const fetchData = () => {
    setIsLoading(true)
    return fetch(`https://api.github.com/users/cassie202`)
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data)
        setIsLoading(false)
      });
  };

  const fetchRepos = () => {
    setIsLoading(true)
    return fetch(`https://api.github.com/users/cassie202/repos?page=${page}&per_page=5`)
      .then((response) => response.json())
      .then((data) => {
        setGithubRepos(data)
        setIsLoading(false)
      });
  };

  console.log(githubRepos)

  useEffect(() => {
    fetchData()
    fetchRepos()
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      {
        isLoading ? <p>Loading...</p> :
          <div>
            <div className="container">
              <div className="side-bar">
                <img src={githubData?.avatar_url} className="avatar" alt='avatar' />
                <h1 className="full-name">{githubData?.name}</h1>
                <p className="user-name">{githubData?.login}</p>
                <p className="description">{githubData?.bio}</p>
                <p>{`${githubData?.followers} Followers ${githubData?.following} Following`} </p>
              </div>
              <div className="main">
                <h1 className="heading">List of all my {githubData?.public_repos} Repositories </h1>
                {
                  githubRepos?.map(repo => {
                    return (
                      <div>
                        <Link to={`/repo/${repo.name}`} className="get-data">{repo?.name}</Link>
                        <p className="public">{repo?.private ? "Private" : "Public"}</p>
                        <p className="language">Language: {repo?.language}</p>
                        <p className="language">Stars: {repo?.stargazers_count}</p>
                        <p className="language">Forks: {repo?.forks_count}</p>
                        <p className="language">Default Branch: {repo?.default_branch}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="btn-div">
              <button
                onClick={() => handleClick(page - 1)}
                className="previous-btn"
                aria-label="previous-slide"
                disabled={page === 1}
              >
                Prev
              </button>
              <button
                onClick={() => handleClick(page + 1)}
                className="button-next"
                aria-label="next Slide"
                disabled={githubRepos.length < 5}
              >
                Next
              </button>
            </div>
          </div>
      }
    </>
  );
}
export default Home;
