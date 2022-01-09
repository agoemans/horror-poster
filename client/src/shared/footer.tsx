import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {iAttribute} from "../types";

const Footer = styled.footer`
    justify-content: center;        
    margin-top: 0.3em;
    display: flex;
`;

const Para = styled.p`
    padding: 5px;
    color: #edede9;        
    font-size: 16px;   
    text-align: center;
    font-family: 'Itim',serif;
    margin: 0;
`;

const Link = styled.a`
    color: #edede9;
    text-decoration: none;
`;

export default function PageFooter(props: iAttribute) {
    const {imageName, author, siteName, siteUrl, type} = props;

    const attribUrl: string = `${siteUrl}/${type}/${imageName}`;

    return (
        <Footer>
            <Para>

                <Link href={attribUrl} title={author}> {imageName} {type} created by {author} </Link>
                -
                <Link href={siteUrl} title={siteName}> {siteName} </Link>
            </Para>
        </Footer>
    );
}