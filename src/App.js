import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { AuthContext } from "./context";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import ApplicationHome from "./components/ApplicationHome/ApplicationHome";

import "./App.css";
import "../src/assets/css/argon-dashboard-react.css";

const App = () => {
  let context = React.useContext(AuthContext);

  useEffect(() => {
    context.isUserLoggedIn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        return (
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/app">
                <ApplicationHome />
              </Route>
              <Route exact path="/app/collections/:collectionId">
                <ApplicationHome />
              </Route>
              <Route exact path="/app/user-profile">
                <ApplicationHome />
              </Route>
            </Switch>
            {isLoggedIn ? "" : <Footer />}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default App;
