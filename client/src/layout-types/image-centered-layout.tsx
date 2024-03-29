import React from "react";
import styled from "styled-components";
import {iPoster} from "../types";
import PageFooter from "../shared/footer";
import {getImageAttribute} from "../helpers/get-image-attribute";
import {getBgImageData} from "../helpers/get-bg-image";

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
    padding: 20px;
    background-color: #49475B;
    //max-width: 824px;
`;

const BottomBarContent= styled.div`
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
    height: 650px;
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
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Audiowide', cursive;
    font-size: 100px;
    color: white;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #423d74;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function ImageCenteredLayout(props: iPoster) {
    const {title, description, directorCredit, actors} = props;
    const imageName = getBgImageData().imageName;
    const {author, type, siteName, siteUrl} = getImageAttribute(imageName);
    return (
        <Wrapper>
            <PosterContainer>
                <TitleContainer>
                    <Title>{title.toUpperCase()}</Title>
                    <Spacer/>
                </TitleContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <Spacer/>
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <Spacer/>
                </BgImage>
                <BottomBarContainer>
                    {actors.map((actor: string, idx: number) =>
                        <BottomBarContent key={idx}>{actor} </BottomBarContent>
                    )}
                </BottomBarContainer>
            </PosterContainer>
            <PageFooter author={author} type={type} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}