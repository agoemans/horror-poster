import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import ImageHeavy from "./layout-types/image-heavy";
import {getMovie} from "./helpers/get-movie";
import SideBarLayout from "./layout-types/side-bar-layout";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 100px;
    min-height: 75vh;
`;

export default function Poster() {
    const {title, actors, directorCredit, description} = getMovie();
    return (
        <Wrapper>
           {/*<ImageHeavy title={title} description={description} directorCredit={directorCredit} actors={actors}/>*/}
            <SideBarLayout title={title} description={description} directorCredit={directorCredit} actors={actors}/>
        </Wrapper>
    );
}