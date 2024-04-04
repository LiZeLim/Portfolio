/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import styled from "styled-components";

import Github_black from "@/app/icons/Github_black";
import Linkedin_black from "@/app/icons/Linkedin_black";

const StyledSection = styled.section`
    background: white;
    padding: 0px clamp(25px, 10%, 150px);
    padding-top: 8rem;

    @media screen and (max-width: 1200px) {
        display: block;
        padding: 16rem 0px;
        align-items: center;
        justify-content: center;
    }
`;

const StyledH1 = styled.h1`
    display: flex;
    padding: 0px 10%;
    font-size: clamp(35px, 6vw, 60px);
    margin: 15px 0px 50px;
    justify-content: flex-end;
`;

const StyledH2 = styled.h2`
    padding: 0px 10%;
    font-size: clamp(20px, 4vw, 40px);
    text-align: center;
`;

const StyledP = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-size: 18px;
    text-align: justify;
    padding: 0 clamp(5%, 15%, 150px);
    padding-bottom: 2vw;
`;

const StyledA = styled.a`
    align-items: center;
    position: relative;
    padding: 1vw;
    margin: 1vw;
    text-align: center;
    border-radius: 4px;

    @media screen and (max-width: 1200px) {
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    &:hover {
        background-color: #f1f1ee;
    }
`;

const Contact = () => {
    return (
        <StyledSection id="contact">
            <StyledH1>03. Contact</StyledH1>
            <StyledH2>Reach out.</StyledH2>
            <StyledP>
                Currently, I'm looking for a Software Engineering internship. If
                you have any opportunities available or know someone who does,
                don't hesitate to contact me as my inbox is always open.
            </StyledP>
            <StyledP>
                <StyledA
                    href="https://github.com/LiZeLim"
                    aria-label="Github Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github_black />
                </StyledA>
                <StyledA
                    href="https://www.linkedin.com/in/lizelim/"
                    aria-label="LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin_black />
                </StyledA>
            </StyledP>
        </StyledSection>
    );
};

export default Contact;
