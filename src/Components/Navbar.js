import React from 'react';
import {  Link } from "react-router-dom";
import styled from 'styled-components'

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #A9A9A9;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2)`;

function Navbar(){

    return (
        <PrimaryNav>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </PrimaryNav>
        );

}

export default Navbar