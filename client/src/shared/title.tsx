import React from "react";
import styled from "styled-components";
import {iPoster, iTitle} from "../types";
import DirectorCredit from "./director-credit";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    height: 600px;
`;

const Header = styled.div`
    font-family: 'Bowlby One SC', cursive;
    font-size: 72px;
    color: white;
    font-variant: all-small-caps;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #14080E;
    text-shadow: 2px 2px #2c2929;
`;

export default function MovieTitle(props: iTitle) {
    const {title, directorCredit, titleFont, directorCreditFont} = props;
    return (
        <Wrapper>
            <DirectorCredit directorCredit={directorCredit} directorCreditFont={directorCreditFont}/>
            <Header style={{fontFamily: `${titleFont}, cursive`}}>
                {title}
            </Header>
        </Wrapper>
    );
}