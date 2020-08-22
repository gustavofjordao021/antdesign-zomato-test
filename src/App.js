import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import GoalDetails from "./components/GoalDetails/GoalDetails";
import UserProfile from "./components/UserProfile/UserProfile";
import { AuthContext } from "./context";
import ApplicationHome from "./components/ApplicationHome/ApplicationHome";

import "./App.css";
import "../src/assets/css/argon-dashboard-react.css";

const App = () => {
  let context = React.useContext(AuthContext);

  React.useEffect(() => {
    context.isUserLoggedIn();
  });

  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        return (
          <div className="App">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/app" component={ApplicationHome} />
              <Route
                path="/app/collections/:collectionId"
                component={GoalDetails}
              />
              <Route path="/app/user-profile" component={UserProfile} />
            </Switch>
            {isLoggedIn ? <span /> : <Footer />}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default App;
