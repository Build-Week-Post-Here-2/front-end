import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const NavBar = withStyles ({
  root: {
    backgroundColor: 'rgb(252,140,3, .8)'
      }
})(AppBar);

const LinkContainer = withStyles ({
  root: {
    display: 'flex',
    justifyContent: 'center',
      }
})(Toolbar);

const NavLink = withStyles ({
  root: {
    margin: '0 10% 0 3%',
    fontSize: '1.3em',
    color: 'white',
    textDecoration: 'none',
      "&:hover": {
        color: 'white',
      }
  },
})(Link);

const NavigationBar = (user) => {

  return (
    <div>
      <NavBar position="static">
        <LinkContainer>
          {!window.localStorage.getItem("token") ? (
            <NavLink href="/login">Log In</NavLink>
          ) : (
            <></>
          )}
          {!window.localStorage.getItem("token") ? (
            <NavLink href="/signup">Sign Up</NavLink>
          ) : (
            <></>
          )}
          {window.localStorage.getItem("token") ? (
            <NavLink href="/home">Home</NavLink>
          ) : (
            <></>
          )}
          {window.localStorage.getItem("token") ? (
            <NavLink href="/account">Account Settings</NavLink>
          ) : (
            <></>
          )}
          {window.localStorage.getItem("token") ? (
            <NavLink href="/savedposts">Saved Posts</NavLink>
          ) : (
            <></>
          )}
        </LinkContainer>
      </NavBar>
    </div>
  );
};

export default NavigationBar