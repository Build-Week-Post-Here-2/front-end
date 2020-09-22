import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'

const NavigationBar = (user) => {
    return (
        <StyledNav>
            { !window.localStorage.getItem('token') ?
                <StyledNavLink to='/login'>Log In</StyledNavLink>
                : <></>
            }
            { !window.localStorage.getItem('token') ?
                <StyledNavLink to='/home'>Home</StyledNavLink>
                : <></>
            }
            { !window.localStorage.getItem('token') ?
                <StyledNavLink to='/signup'>Sign Up</StyledNavLink>
                : <></>
            }
            { !window.localStorage.getItem('token') ?
                <StyledNavLink to='/account'>Account Settings</StyledNavLink>
                : <></>
            }
            { !window.localStorage.getItem('token') ?
                <StyledNavLink to='/savedposts'>Saved Posts</StyledNavLink>
                : <></>
            }
        </StyledNav>
      );
    };

    const StyledNav = styled.nav`
    background: rgb(252, 140, 3);
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const StyledNavLink = styled(NavLink)`
    margin: 0 10% 0 3%;
    font-size: 1.3em;
    color: white;
    text-decoration: none;
    `

export default NavigationBar