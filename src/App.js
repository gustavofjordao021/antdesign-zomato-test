import React from "react";
import "./App.css";

// import LandingPage from "./views/LandingPage/LandingPage.js";

function App() {
  return (
    // <LandingPage />
    <>
      <div className="App" style={{ height: "100px" }}>
        <a href="http://localhost:3001/auth/facebook">Login with Facebook</a>
        <a href="http://localhost:3001/auth/google">Login with Google</a>
      </div>
    </>
  );
}

export default App;
