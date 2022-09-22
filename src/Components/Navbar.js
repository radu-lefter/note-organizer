import React from 'react';
import {  Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from 'styled-components'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #A9A9A9;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2)`;

function Navbar(){

  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <PrimaryNav>
          <li>
            <Link to="/home">Home</Link>
            <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
          </li>
          
        </PrimaryNav>
        );

}

export default Navbar