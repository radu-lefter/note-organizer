import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import Navbar from "./Navbar";

function NewSession(){

    const [state, setState] = useState(["TEST", "TEST AGAIN"]);

    return(
        <>
        <Navbar></Navbar>
        <input style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
        <button>Add note</button>
        {state.map((text)=>(<p>{text}</p>))}
        </>
        
    )
}

export default NewSession;