import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Saved from "./components/Saved";
import PrivateRoute from "./components/PrivateRoute";
import AccountSettings from "./components/AccountSettings";
import NavigationBar from "./components/NavigationBar";
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Route exact path="/">
        <Redirect to="/landing" />
      </Route>
      <Route path='/landing' component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/account" component={AccountSettings} />
      <PrivateRoute path="/savedposts" component={Saved} />
    </div>
  );
}

export default App;
