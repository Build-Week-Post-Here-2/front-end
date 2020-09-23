import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Saved from "./components/Saved";
import PrivateRoute from "./components/PrivateRoute";
import AccountSettings from "./components/AccountSettings";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LoginForm} />
      <Route path="/home" component={Home} />
      <Route path="/account" component={AccountSettings} />
      <Route path="/saved" component={Saved} />
    </div>
  );
}

export default App;
