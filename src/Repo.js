import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Repo() {
  let { repoId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [githubRepo, setGithubRepo] = useState({});

  console.log('repoId', repoId)

  const fetchRepo = () => {
    setIsLoading(true)
    return fetch(`https://api.github.com/repos/cassie202/${repoId}`)
      .then((response) => response.json())
      .then((data) => {
        setGithubRepo(data)
        setIsLoading(false)
      });
  };

  console.log(githubRepo)

  useEffect(() => {
    fetchRepo()
    // eslint-disable-next-line
  }, []);

  return (
    <div className='repo-wrapper'>
      {
        isLoading ? <p>Loading ...</p> :
          <div className='repo-div'>
            <p className='get-data'>Repository: {githubRepo?.name}</p>
            <p className="language">Language: {githubRepo?.language}</p>
            <p className="language">Stars: {githubRepo?.stargazers_count}</p>
            <p className="language">Forks: {githubRepo?.forks_count}</p>
            <p className="language">Default Branch: {githubRepo?.default_branch}</p>
            <div>
              <Link to='/'>Go To Repos</Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Repo