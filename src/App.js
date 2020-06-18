import React from "react";
import "./App.css";

// import LandingPage from "./views/LandingPage/LandingPage.js";

function App() {
  return (
    // <LandingPage />
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=3105981866124788&autoLogAppEvents=1"
        nonce="9RgUmugy"
      ></script>
      <div className="App" style={{ height: "100px" }}>
        <div
          className="fb-login-button"
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-width=""
        ></div>
        <a href="http://localhost:3001/auth/facebook">Login with Facebook</a>
      </div>
    </>
  );
}

export default App;
