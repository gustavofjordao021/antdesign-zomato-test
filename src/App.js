import React from "react";
import "./App.css";

import HomeLayout from "./HomeLayout/homeLayout.js";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <a href="http://localhost:3001/auth/facebook">Login with Facebook</a>
    </div>
  );
}

export default App;
