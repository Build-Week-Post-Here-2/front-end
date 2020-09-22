import React from 'react'
import styled from 'styled-components'

import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'

const NavigationBar = () => {
    return (
        <StyledNavbar>
                  <StyledA href="#">Home</StyledA>
                  <StyledA href="#">Log In</StyledA>
                  <StyledA href="#">Sign Up</StyledA>
                  <StyledA href="#">Account Settings</StyledA>
        </StyledNavbar>
      );
    };
  
  const StyledNavbar = styled.div`
    background: rgb(252, 140, 3);
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  
  const StyledA = styled.a `
    margin: 0 10% 0 3%;
    font-size: 2em;
    color: white;
    text-decoration: none;
  `

export default NavigationBar