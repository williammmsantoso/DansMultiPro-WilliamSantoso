import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
        <div className="loader-blocking-bg"/>
        <div className="loader-wrapper">
          <img className="loader" src="/loading.gif" alt="loading" />
          <div className="text">Loading...</div>
        </div>
    </div>
  );
};

export default Loader;
