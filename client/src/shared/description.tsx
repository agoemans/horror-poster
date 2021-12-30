import React from "react";
import styled from "styled-components";
import {iDescription, iPoster} from "../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    font-family: 'Squada One', cursive;
    font-size: 32px;
    color: white;  
`;

export default function Description(props: iDescription) {
    const {description, descriptionFont} = props;
    return (
        <Wrapper>
            <Content style={{fontFamily: `${descriptionFont}, cursive`}}>
                {description}
            </Content>
        </Wrapper>
    );
}