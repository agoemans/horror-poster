import React from "react";
import styled from "styled-components";
import {iActor, iPoster} from "../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    font-family: 'Squada One', cursive;
    font-size: 22px;
    color: white;
`;

export default function Actors(props: iActor) {
    const {actors} = props;
    return (
        <Wrapper>
            <Content>
                {actors}
            </Content>
        </Wrapper>
    );
}