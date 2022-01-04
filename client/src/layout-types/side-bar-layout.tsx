import React from "react";
import styled from "styled-components";
import {iAttribute, iFontStyle, iPoster} from "../types";
import PageFooter from "../shared/footer";
import MovieTitle from "../shared/title";
import Description from "../shared/description";
import {attrib} from "../data/attributes";
import {getImageAttribute} from "../helpers/get-image-attribute";
import Actors from "../shared/actors";
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
    flex-direction: row;
`;

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 20px;
    background-color: #49475B;
`;

const SideBarContainer = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 72px;
    color: white;
`;

const BgImage = styled.div`
    background-size: cover;
    background-image: none;
    background-repeat: no-repeat;
    width: auto;
    min-width: 850px;
    height: 824px;
    display: flex;
    flex-direction: column;
`;

const DescriptionContainer = styled.div`
    display: flex;
    font-family: 'Audiowide', cursive;
    font-size: 22px;
    color: white;
    transform: rotate(-5deg);
    justify-content: left;
    width: 150px;
    margin-left: 50px;
    margin-top: 30px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    //height: 55%;
    justify-content: end;
    align-items: flex-start;
    margin-left: 40px;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Titan One', cursive;
    font-size: 140px;
    color: #ACC196;
    //font-variant: all-small-caps;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #14080E;
    text-shadow: 2px 2px #2c2929;
`;

const DirectorFirstName = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    color: white;
    //font-variant: all-small-caps;
`;

const DirectorSecondName = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display',cursive;
    font-size: 50px;
    font-weight: 700;
    color: white;
    //font-variant: all-small-caps;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function SideBarLayout(props: iPoster) {
    const {title, description, directorCredit, actors} = props;
    const imageName = getBgImageData().imageName;
    const {author, authorUrl, siteName, siteUrl} = getImageAttribute(imageName);
    let directorName: string[] = directorCredit.split(' ');
    const directorFirstName: string = directorName.shift().toUpperCase();
    const directorSecondName: string = directorName.join(' ').toUpperCase();
    const fontStyles: any = getFontStyles();
    return (
        <Wrapper>
            <PosterContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <Spacer/>
                    <TitleContainer>
                        <DirectorFirstName>{directorFirstName}</DirectorFirstName>
                        <DirectorSecondName>{directorSecondName}</DirectorSecondName>
                        <Title>{title.toUpperCase()}</Title>
                    </TitleContainer>
                </BgImage>
                <SideBar>
                    {actors.map((actor: string, idx: number) =>
                        <SideBarContainer key={idx}>{actor}</SideBarContainer>
                    )}

                </SideBar>
            </PosterContainer>
            <PageFooter author={author} authorUrl={authorUrl} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}