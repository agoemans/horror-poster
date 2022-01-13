import React from "react";
import styled from "styled-components";
import {iPoster} from "../types";
import PageFooter from "../shared/footer";
import {getImageAttribute} from "../helpers/get-image-attribute";
import {getBgImageData} from "../helpers/get-bg-image";
import {getRandomNumber} from "../helpers/get-random-number";

const fontColor: string = '#ff9e00';

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

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
`;

const BgImage = styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-image: none;
    background-repeat: no-repeat;
    width: auto;
    min-width: 850px;
    height: 850px;    
    align-self: center;
    margin: 10px 0;
`;

const CreditContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 350px;
    flex-wrap: wrap;
    justify-content: flex-end;    
`;

const CreditContent = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 22px;
    color: ${fontColor};
    margin-right: 10px;
    text-shadow: 1px 1px #523000;
`;

const DirectorContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const DirectorContent = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    color: ${fontColor};
    text-shadow: 1px 1px #523000;
`;

const SecondDescriptionContent = styled.div`
    display: flex;
    font-family: 'Anton', cursive;
    font-size: 24px;
    justify-content: center;
    padding: 10px;
    color: ${fontColor};
    text-shadow: 1px 1px #523000;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Anton', sans-serif;
    font-size: 90px;
    color: ${fontColor};
    text-shadow: 1px 1px #523000;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function MinimalistLeftAligned(props: iPoster) {
    const {title, actors, directedBy, secondDescription} = props;
    const imageName = getBgImageData().imageName;
    const {author, type, siteName, siteUrl} = getImageAttribute(imageName);
    const filmBy: string  = 'A FILM BY';
    return (
        <Wrapper>
            <PosterContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <Spacer/>
                    <ContentContainer>
                        <DirectorContainer>
                            <DirectorContent>{filmBy}</DirectorContent>
                            <DirectorContent>{directedBy.toUpperCase()}</DirectorContent>
                        </DirectorContainer>
                        <TitleContainer>
                            <Title>{title.toUpperCase()}</Title>
                        </TitleContainer>
                        <CreditContainer>
                            {actors.map((actor: string, idx: number) =>
                                <CreditContent key={idx}>{actor.toUpperCase()} </CreditContent>
                            )}
                        </CreditContainer>
                        <SecondDescriptionContent>{secondDescription.toUpperCase()}</SecondDescriptionContent>
                    </ContentContainer>
                </BgImage>
            </PosterContainer>
            <PageFooter author={author} type={type} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}