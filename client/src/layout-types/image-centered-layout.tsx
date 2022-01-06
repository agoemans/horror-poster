import React from "react";
import styled from "styled-components";
import {iPoster} from "../types";
import PageFooter from "../shared/footer";
import {getImageAttribute} from "../helpers/get-image-attribute";
import {getBgImageData} from "../helpers/get-bg-image";
import {getFontStyles} from "../helpers/get-font-style";

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

const BottomBar = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: #49475B;
`;

const BottomBarContainer = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 40px;
    color: white;
    padding-left: 12px;
`;


const BgImage = styled.div`
    background-size: cover;
    background-image: none;
    background-repeat: no-repeat;
    width: auto;
    min-width: 850px;
    height: 569px;
    display: flex;
    flex-direction: column;
`;

const DescriptionContainer = styled.div`
    display: flex;
    font-family: 'Audiowide', cursive;
    font-size: 22px;
    color: white;
    justify-content: left;
    width: 150px;
    margin-left: 50px;
    margin-top: 30px;
    text-shadow: 1px -3px #bc6c25;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Audiowide';
    font-size: 140px;
    color: #BC6C25;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #DDA15E;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function ImageCenteredLayout(props: iPoster) {
    const {title, description, directorCredit, actors} = props;
    const imageName = getBgImageData().imageName;
    const {author, authorUrl, siteName, siteUrl} = getImageAttribute(imageName);
    let directorName: string[] = directorCredit.split(' ');
    return (
        <Wrapper>
            <PosterContainer>
                <TitleContainer>
                    <Title>{title.toUpperCase()}</Title>
                </TitleContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <Spacer/>
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <Spacer/>
                </BgImage>
                <BottomBar>
                    {actors.map((actor: string, idx: number) =>
                        <BottomBarContainer key={idx}>{actor} </BottomBarContainer>
                    )}
                </BottomBar>
            </PosterContainer>
            <PageFooter author={author} authorUrl={authorUrl} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}