import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import {getMovies, getMovie} from "./api/routes";
import SideBarLayout from "./layout-types/side-bar-layout";
import ImageCenteredLayout from "./layout-types/image-centered-layout";
import ClippedImage from "./layout-types/clipped-image";
import BottomAligned from "./layout-types/bottom-aligned";
import {getRandomNumber} from "./helpers/get-random-number";
import MinimalistLeftAligned from "./layout-types/minimalist-left-aligned";
import BorderedLayout from "./layout-types/bordered-layout";
import {MovieModel} from "../../server/src/models";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 100px;
    min-height: 75vh;
`;

export default function Poster() {
    let emptyMovie: MovieModel = {
        title: '', producedBy: '', directedBy: '', actors: [], directorCredit: '',
        description: '', extraDescription: []
    };
    const [movie, setMovie] = useState(emptyMovie);
    let secondDescription: string = '';

    useEffect(() => {
        const getMovieData: () => Promise<void> = async () => {
            const results = await getMovie();
            setMovie(JSON.parse(results));
            secondDescription = movie.extraDescription[getRandomNumber(0, movie.extraDescription.length)]
        };

        getMovieData().catch( e => console.log(e));
    }, [setMovie]);

    const getRandomPosterType = (title: string, description: string, directorCredit: string, actors: string[], extraDescription: string[], directedBy?: string, producedBy?: string) => {
      const random = getRandomNumber(1,7);
      switch (random) {
          case 1:
              return <SideBarLayout title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} secondDescription={secondDescription}/>
          case 2:
              return <ImageCenteredLayout title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} secondDescription={secondDescription}/>
          case 3:
              return <ClippedImage title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} secondDescription={secondDescription}/>
          case 4:
              return <BottomAligned title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} secondDescription={secondDescription}/>
          case 5:
              return <BorderedLayout title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} secondDescription={secondDescription}/>
          case 6:
          default:
              return <MinimalistLeftAligned title={title} description={description} directorCredit={directorCredit} actors={actors} directedBy={directedBy} producedBy={producedBy} secondDescription={secondDescription}/>
      }
    }
    return (
        <Wrapper>
           {getRandomPosterType(movie.title, movie.description, movie.directorCredit, movie.actors, movie.extraDescription, movie.directedBy, movie.producedBy)}
        </Wrapper>
    );
}