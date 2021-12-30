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

const Outline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const BgImage = styled.div`
  background-size: cover;
  background-image: none;
  background-repeat: no-repeat;
  width: auto;
  min-width: 850px;
  height: 700px;
`;

export default function ImageHeavy(props: iPoster) {
    const {title, description, directorCredit, actors} = props;
    const imageName = getBgImageData().imageName;
    const {author, authorUrl, siteName, siteUrl} = getImageAttribute(imageName);
    const fontStyles: any = getFontStyles();
    return (
        <Wrapper>
            <Description description={description} descriptionFont={fontStyles.descriptionFont}/>
            <Outline>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <MovieTitle title={title} directorCredit={directorCredit} titleFont={fontStyles.titleFont} directorCreditFont={fontStyles.directorCreditFont}/>
                </BgImage>
            </Outline>
            <Actors actors={actors}/>
            <PageFooter author={author} authorUrl={authorUrl} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}