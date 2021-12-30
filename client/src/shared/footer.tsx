import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {iAttribute} from "../types";

const Footer = styled.footer`
    width: 100%;       
    justify-content: center;        
    margin-top: 0.3em;
    display: flex;
`;

const Para = styled.p`
    background-color: #f3f3f3;
    padding: .5em calc(1.5em + .5vw);
    color: #607744;        
    font-size: 16px;   
    text-align: center;
    font-family: 'Itim',serif;
    border-radius: 11px;
    width: 250px;
`;

const Link = styled.a`
    color: #ccaa22;
    text-decoration: none;
`;

export default function PageFooter(props: iAttribute) {
    const {imageName, author, authorUrl, siteName, siteUrl} = props;

    return (
        <Footer>
            <Para>
                {imageName} photo created by
                <Link href={authorUrl} title={author}> {author} </Link>
                -
                <Link href={siteUrl} title={siteName}> {siteName} </Link>
            </Para>
        </Footer>
    );
}