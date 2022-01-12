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
    max-width: 800px;
`;

const BottomBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #9b2226;
    justify-content: center;
    align-items: center;    
`;

const BottomBarContent = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 35px;
    color: white;
    padding-left: 12px;
    display: flex;
    line-height: 50px;
`;

const BottomBarLabel = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    color: white;
    padding-left: 12px;
    font-variant: all-small-caps;
`;

const BottomBarValue = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    color: white;
    padding-left: 12px;
`;

const BgImage = styled.div`
    background-size: cover;
    background-image: none;
    background-repeat: no-repeat;
    //width: auto;
    height: 350px;
    width: 430px;
    display: flex;
    flex-direction: column;
    align-self: center;
    clip-path: circle(170px at center);
    //clip-path: inset(10px 20px 30px 40px);
    margin: 10px 0;
`;

const DirectorContainer = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    color: white;
`;

const DescriptionContainer = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 24px;
    color: white;
    justify-content: center;
    padding: 10px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Audiowide', cursive;
    font-size: 90px;
    color: #9b2226;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function ClippedImage(props: iPoster) {
    const {title, description, directorCredit, actors, directedBy, producedBy} = props;
    const imageName = getBgImageData().imageName;
    const {author, type, siteName, siteUrl} = getImageAttribute(imageName);
    return (
        <Wrapper>
            <PosterContainer>
                <TitleContainer>
                    <Spacer/>
                    <DirectorContainer>{directorCredit.toUpperCase()}</DirectorContainer>
                    <Title>{title.toUpperCase()}</Title>
                </TitleContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}/>
                <DescriptionContainer>{description}</DescriptionContainer>
                <BottomBarContainer>
                    {actors.map((actor: string, idx: number) =>
                        <BottomBarContent key={idx}>{actor} </BottomBarContent>
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