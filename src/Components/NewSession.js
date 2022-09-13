import React from "react";
import styled from "styled-components";
import { useState } from 'react';

function NewSession(){

    const [state, setState] = useState(["TEST", "TEST AGAIN"]);

    return(
        <>
        <input style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
        <button>Add note</button>
        {state.map((text)=>(<p>{text}</p>))}
        </>
        
    )
}

export default NewSession;