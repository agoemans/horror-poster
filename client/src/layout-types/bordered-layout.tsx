import React from "react";
import styled from "styled-components";
import {iAttribute, iNameInfo, iPoster} from "../types";
import PageFooter from "../shared/footer";
import {getImageAttribute} from "../helpers/get-image-attribute";
import {getBgImageData} from "../helpers/get-bg-image";
import {getRandomNumber} from "../helpers/get-random-number";
import {getVectorAttribute} from "../helpers/get-vector-attribute";

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

const PosterContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 850px;
`;

const BorderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./assets/border.png");
    height: 85px;
    width: 84px;
`;

const AlignmentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;   
`;

const BorderTopLeft = styled(BorderContainer)`
    transform: rotate(270deg);
`;

const SecondDescriptionContent = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    justify-content: center;
    padding: 10px;
    color: ${fontColor};
    text-shadow: 1px 1px #6e4f22;
`;

const BorderTopRight = styled(BorderContainer)`
    height: 85px;
    width: 84px;
`;

const MiddleContainer = styled(AlignmentContainer)`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 680px;
    justify-content: flex-end;    
`;

const FeaturedActorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 350px;
    justify-content: space-between;
`;

const FeaturedActorsContent = styled.div`
    margin: 5px 0 5px 5px;
    padding: 5px;
`;

const ActorBaseContent = styled.div`
    display: flex;
    font-family: 'Merriweather', serif;
    color: white;
`;

const ActorFirstNameContent = styled(ActorBaseContent)`    
    font-size: 15px;
    transform: scale(1, 1.1);  
    font-weight: 300;
    letter-spacing: 1px;
    font-variant: all-petite-caps;
`;

const ActorSecondNameContent = styled(ActorBaseContent)`    
    font-size: 20px;
    font-weight: 700;
    transform: scale(1, 1.2);
`;

const DirectorContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const BaseExtraCreditContent = styled.div`
    display: flex;
    font-family: 'Libre Baskerville', serif;
    color: ${fontColor};
    transform: scale(1, 1.2);
    text-shadow: 1px 1px #523000;
`;

const DirectorContent = styled(BaseExtraCreditContent)`
    font-size: 20px;
    font-weight: 700;
    margin:0 10px;
`;

const ExtraCreditContent = styled(BaseExtraCreditContent)`    
    font-size: 14px;    
    margin-right: 10px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Libre Baskerville', serif;
    font-size: 90px;
    color: ${fontColor};
    text-shadow: 1px 1px #523000;
`;

const BorderBottomLeft = styled(BorderContainer)`
    transform: rotate(180deg);
`;

const CreditContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

const CastContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 350px;
    flex-wrap: wrap;
    justify-content: flex-end;
    line-height: 16px;
`;

const CastCreditLabel = styled(BaseExtraCreditContent)`    
    font-size: 14px;
    font-variant: all-petite-caps;
    margin-right: 10px;
`;

const NonCastCreditLabel = styled(BaseExtraCreditContent)`  
    font-size: 14px;    
    margin-right: 10px;
    max-width: 48px;
    line-height: 12px;
    font-variant: all-petite-caps;
`;

const CastContent = styled(BaseExtraCreditContent)`  
    font-size: 14px;    
    margin-right: 10px;
`;

const BorderBottomRight = styled(BorderContainer)`
   transform: rotate(90deg);
`;
const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function BorderedLayout(props: iPoster) {
    const {title, actors, directedBy, secondDescription} = props;
    const imageName = getBgImageData().imageName;
    const {author, type, siteName, siteUrl} = getImageAttribute(imageName);
    const featuredActors = actors.slice(0, 2);
    const cast: string = 'FEATURING';
    const directorLabel: string = 'DIRECTED BY';
    const producerLabel: string = 'PRODUCED BY';
    const borderImageName: string = 'border';
    const borderAttribute: iAttribute = getVectorAttribute(borderImageName);
    const borderAuthor = borderAttribute.author;
    const borderType = borderAttribute.type;
    const borderSiteName = borderAttribute.siteName;
    const borderSiteUrl = borderAttribute.siteUrl;

    const curateActors = () => {
        return featuredActors.map((actor: string) => {
            let nameArray: string [] = actor.split(' ');
            let firstName: string = nameArray[0].toUpperCase(), surName: string = nameArray[1].toUpperCase();
            return {firstName, surName};
        })
    }

    //todo adjust type here
    const curatedActors: any[] = curateActors();

    return (
        <Wrapper>
            <PosterContainer>
                <BgImage style={{ backgroundImage: `url(./assets/${imageName}.png)` }}>
                    <PosterContent>
                        <AlignmentContainer>
                            <BorderTopLeft/>
                            <SecondDescriptionContent>{secondDescription.toUpperCase()}</SecondDescriptionContent>
                            <BorderTopRight/>
                        </AlignmentContainer>
                        <Spacer/>
                        <MiddleContainer>
                            <FeaturedActorsContainer>
                                {curatedActors.map((actor: iNameInfo, idx: number) =>
                                    <FeaturedActorsContent key={idx}>
                                        <ActorFirstNameContent>{actor.firstName}</ActorFirstNameContent>
                                        <ActorSecondNameContent>{actor.surName}</ActorSecondNameContent>
                                    </FeaturedActorsContent>
                                )}
                            </FeaturedActorsContainer>
                            <DirectorContainer>
                                <DirectorContent>{directedBy.toUpperCase()}</DirectorContent>
                            </DirectorContainer>
                            <TitleContainer>
                                <Title>{title.toUpperCase()}</Title>
                            </TitleContainer>
                        </MiddleContainer>
                        <AlignmentContainer>
                            <BorderBottomLeft/>
                            <CreditContent>
                                <CastContainer>
                                    <CastCreditLabel>{cast}</CastCreditLabel>
                                    {actors.map((actor: string, idx: number) =>
                                        <CastContent key={idx}>{actor.toUpperCase()} </CastContent>
                                    )}
                                </CastContainer>
                                <NonCastCreditLabel>{directorLabel}</NonCastCreditLabel>
                                <ExtraCreditContent>{directedBy.toUpperCase()}</ExtraCreditContent>
                                <NonCastCreditLabel>{producerLabel}</NonCastCreditLabel>
                                <ExtraCreditContent>{directedBy.toUpperCase()}</ExtraCreditContent>
                            </CreditContent>
                            <BorderBottomRight/>
                        </AlignmentContainer>
                    </PosterContent>
                </BgImage>
            </PosterContainer>
            <FooterContainer>
                <PageFooter author={author} type={type} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/> &&
                <PageFooter author={borderAuthor} type={borderType} siteName={borderSiteName} siteUrl={borderSiteUrl} imageName={borderImageName}/>
            </FooterContainer>
        </Wrapper>
    );
}