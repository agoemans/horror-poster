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

export const App = () => {
    return(
        <Router>
            <Wrapper className='app'>
                <div className='app-content'>
                    <Switch>
                        <Route path='/'>
                            <Poster/>
                        </Route>
                    </Switch>

                </div>
            </Wrapper>
        </Router>
    )
}