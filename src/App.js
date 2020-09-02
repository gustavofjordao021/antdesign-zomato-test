import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import GoalDetails from "./components/GoalDetails/GoalDetails";
import { AuthContext } from "./context";
import ApplicationHome from "./components/ApplicationHome/ApplicationHome";

import "./App.css";
import "../src/assets/css/argon-dashboard-react.css";

const App = () => {
  let context = React.useContext(AuthContext);

  useEffect(() => {
    context.isUserLoggedIn();
  }, []);

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
              <Route
                exact
                path="/app"
                render={() => <ApplicationHome visibleUserProfile={false} />}
              />
              <Route
                exact
                path="/app/collections/:collectionId"
                component={GoalDetails}
              />
              <Route
                exact
                path="/app/user-profile"
                render={() => <ApplicationHome visibleUserProfile={true} />}
              />
            </Switch>
            {isLoggedIn ? "" : <Footer />}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default App;
