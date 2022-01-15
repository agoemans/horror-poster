import React, { useState } from 'react';
import styled from "styled-components";
import Poster from "./poster";

import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

const Wrapper = styled.div`
    background-color: black;
    min-width: 76vw;
    height: 100%;
    margin: 0;
`;

const Button = styled.button`
    position: absolute;
    top: 50px;
    left: 10%;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    transform: rotate(342deg);  
    padding: 10px;
    background-color: #1C829C;
    color: white;
    font-size: 1em;        
    border: 2px solid white;
`;

export const App = () => {
    return(
        <Wrapper className='app'>
            <div className='app-content'>
                <Button onClick={() => window.location.reload()}>GET NEW POSTER</Button>
                <Poster/>
            </div>
        </Wrapper>
    )
}