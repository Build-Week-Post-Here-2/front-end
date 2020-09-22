import React from "react";
import { Route } from "react-router-dom";
// import Saved from './components/Saved'
import "./App.css";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import AccountSettings from "./components/AccountSettings";
import NavigationBar from "./components/NavigationBar";
// import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/protected" component={Home} />
      <PrivateRoute path="/account" component={AccountSettings} />
    </div>
  );
}

export default App;
