import React from "react";
import styled from "styled-components";
import {iNameInfo, iPoster} from "../types";
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
    flex-direction: row;
`;

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 178px;
    padding: 20px;
    background-color: #1C829C;
    max-height: 785px;
    overflow: hidden;
`;

const SideBarContent = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 60px;
    color: white;
    margin: 5px 0 5px 5px;
    padding: 5px;
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
    font-family: 'Teko',sans-serif;
    font-size: 26px;
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
    justify-content: end;
    align-items: flex-start;
    margin-left: 40px;
`;

const Title = styled.div`
    display: flex;
    font-family: 'Teko', sans-serif;
    letter-spacing: -5px;
    font-size: 140px;
    color: #B88400;
    text-shadow: 2px 2px #2c2929;
`;

const DirectorFirstName = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display',cursive;
    font-size: 20px;
    color: white;
    transform: scale(1, 1.1);  
    font-weight: 300;
    letter-spacing: 1px;
`;

const DirectorSecondName = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display',cursive;
    font-size: 50px;
    font-weight: 700;
    color: white;
    transform: scale(1, 1.2);
`;

const ActorFirstNameContent = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display',cursive;
    font-size: 30px;
    color: white;
    transform: scale(1, 1.1);  
    font-weight: 300;
    letter-spacing: 1px;
`;

const ActorSecondNameContent = styled.div`
    display: flex;
    font-family: 'Big Shoulders Display',cursive;
    font-size: 60px;
    font-weight: 500;
    color: white;
    transform: scale(1, 1.2);
    letter-spacing: 1px;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function SideBarLayout(props: iPoster) {
    const {title, description, directorCredit, actors} = props;
    const imageName = getBgImageData().imageName;
    const {author, type, siteName, siteUrl} = getImageAttribute(imageName);
    let directorName: string[] = directorCredit.split(' ');
    const directorFirstName: string = directorName.shift().toUpperCase();
    const directorSecondName: string = directorName.join(' ').toUpperCase();

    const curateActors = () => {
        return actors.map((actor: string) => {
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
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <Spacer/>
                    <TitleContainer>
                        <DirectorFirstName>{directorFirstName}</DirectorFirstName>
                        <DirectorSecondName>{directorSecondName}</DirectorSecondName>
                        <Title>{title.toUpperCase()}</Title>
                    </TitleContainer>
                </BgImage>
                <SideBarContainer>
                    {curatedActors.map((actor: iNameInfo, idx: number) =>
                        <SideBarContent key={idx}>
                            <ActorFirstNameContent>{actor.firstName}</ActorFirstNameContent>
                            <ActorSecondNameContent>{actor.surName}</ActorSecondNameContent>
                        </SideBarContent>
                    )}
                </SideBarContainer>
            </PosterContainer>
            <PageFooter author={author} type={type} siteName={siteName} siteUrl={siteUrl} imageName={imageName}/>
        </Wrapper>
    );
}