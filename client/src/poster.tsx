import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import ImageHeavy from "./layout-types/image-heavy";
import {getMovie} from "./helpers/get-movie";
import SideBarLayout from "./layout-types/side-bar-layout";
import ImageCenteredLayout from "./layout-types/image-centered-layout";
import ClippedImage from "./layout-types/clipped-image";
import BottomAligned from "./layout-types/bottom-aligned";
import {getRandomNumber} from "./helpers/get-random-number";
import MinimalistLeftAligned from "./layout-types/minimalist-left-aligned";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 100px;
    min-height: 75vh;
`;

export default function Poster() {
    const {title, actors, directorCredit, description, directedBy, producedBy, extraDescription} = getMovie();

    const getRandomPosterType = (title: string, description: string, directorCredit: string, actors: string[], extraDescription: string[], directedBy?: string, producedBy?: string) => {
      const random = getRandomNumber(1,5);
      switch (random) {
          case 1:
              return <SideBarLayout title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} extraDescription={extraDescription}/>
          case 2:
              return <ImageCenteredLayout title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} extraDescription={extraDescription}/>
          case 3:
              return <ClippedImage title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} extraDescription={extraDescription}/>
          case 4:
          default:
              return <BottomAligned title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} extraDescription={extraDescription}/>
      }
    }
    return (
        <Wrapper>
           {/*{getRandomPosterType(title, description, directorCredit, actors, extraDescription, directedBy, producedBy)}*/}
            <MinimalistLeftAligned title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} extraDescription={extraDescription}/>
        </Wrapper>
    );
}