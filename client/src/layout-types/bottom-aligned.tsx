import React from "react";
import styled from "styled-components";
import {iPoster} from "../types";
import PageFooter from "../shared/footer";
import {getImageAttribute} from "../helpers/get-image-attribute";
import {getBgImageData} from "../helpers/get-bg-image";
import {getRandomNumber} from "../helpers/get-random-number";
import {movies} from "../data/movies";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const PosterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const BottomBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    padding: 20px;
    background-color: black;
    justify-content: center;
    align-items: center;    
    max-width: 800px;
`;

const BottomBarContent = styled.div`
    font-family: 'Pompiere', cursive;
    font-size: 35px;
    color: white;
    padding-left: 12px;
    display: flex;
    letter-spacing: -2px;
    line-height: 31px;
    font-variant: all-small-caps;
`;

const BottomBarLabel = styled.div`
    font-family: 'Pompiere', cursive;
    font-size: 30px;
    color: white;
    padding-left: 12px;
    font-variant: all-small-caps;
`;

const BottomBarValue = styled.div`
    font-family: 'Pompiere', cursive;
    font-size: 30px;
    color: white;
    padding-left: 12px;
`;

const BgImage = styled.div`
    background-size: cover;
    background-image: none;
    background-repeat: no-repeat;
    width: auto;
    min-width: 850px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 10px 0;
`;

const DirectorContainer = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    color: #ff9e00;    
`;

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    min-height: 200px;
    align-items: center;
`;

const DescriptionContent= styled.div`
    display: flex;
    font-family: 'Special Elite', cursive;
    font-size: 16px;
    color: white;
    max-width: 200px;
    line-height: 32px;
`;

const SecondDescriptionContent = styled.div`
    display: flex;
    font-family: 'Titan One', cursive;
    font-size: 24px;
    justify-content: center;
    padding: 10px;
    color: #ff9e00;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 470px;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Audiowide';
    font-size: 90px;
    color: #ff9e00;
    border-top: 1px solid #ff9e00;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function BottomAligned(props: iPoster) {
    const {title, description, directorCredit, actors, directedBy, producedBy, extraDescription} = props;
    const imageName = getBgImageData().imageName;
    const {author, type, siteName, siteUrl} = getImageAttribute(imageName);
    const secondDescription = extraDescription[getRandomNumber(0, extraDescription.length)]
    return (
        <Wrapper>
            <PosterContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <DescriptionContainer>
                        <DescriptionContent>{description}</DescriptionContent>
                    </DescriptionContainer>
                    <TitleContainer>
                        <Spacer/>
                        <DirectorContainer>{directorCredit.toUpperCase()}</DirectorContainer>
                        <Title>{title.toUpperCase()}</Title>
                        <SecondDescriptionContent>{secondDescription.toUpperCase()}</SecondDescriptionContent>
                    </TitleContainer>
                </BgImage>

                <BottomBarContainer>
                    {actors.map((actor: string, idx: number) =>
                        <BottomBarContent key={idx}>{actor.toUpperCase()} </BottomBarContent>
                    )}
                    {directedBy &&
                    <BottomBarContent>
                        <BottomBarLabel>DIRECTED BY:</BottomBarLabel> <BottomBarValue>{directedBy.toUpperCase()}</BottomBarValue>
                    </BottomBarContent>
                    }
                    {producedBy &&
                    <BottomBarContent>
                        <BottomBarLabel>PRODUCED BY:</BottomBarLabel> <BottomBarValue>{producedBy.toUpperCase()}</BottomBarValue>
                    </BottomBarContent>
                    }
                </BottomBarContainer>
            </PosterContainer>
            <PageFooter author={author} type={type} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}