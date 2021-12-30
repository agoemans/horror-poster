import React from "react";
import styled from "styled-components";
import {iDirectorCredit, iPoster} from "../types";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    font-family: 'Squada One';
    font-size: 32px;
    color: white;
`;

export default function DirectorCredit(props: iDirectorCredit) {
    const {directorCredit, directorCreditFont} = props;
    return (
        <Wrapper>
            <Content style={{fontFamily: `${directorCreditFont}, cursive`}}>
                {directorCredit}
            </Content>
        </Wrapper>
    );
}