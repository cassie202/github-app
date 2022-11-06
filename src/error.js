import React from 'react'
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="Error-container">
      <h2>Oops! Something Went Wrong!</h2>
      <p>Check the url and try again.</p>
      <button className="Home-btn" onClick={handleRedirectToHome}>Back to Home</button>
    </div>
  );

}

export default Error;