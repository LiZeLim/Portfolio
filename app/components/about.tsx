/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    padding: 10% clamp(0%, 10%, 150px);
    text-align: center;
`;

const StyledH1 = styled.h1`
    padding: 0px 10%;
    font-size: clamp(35px, 6vw, 60px);
`;

const StyledH2 = styled.h2`
    padding: 0px 10%;
    font-size: clamp(20px, 4vw, 40px);
`;

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    place-items: center;
    justify-content: center;
    text-align: left;
    padding: 2vw;
    font-size: 16px;

    @media screen and (max-width: 1200) {
        display: block;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

const StyledP = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-size: 18px;
    text-align: justify;
    padding: 0 clamp(5%, 15%, 150px);
`;

const StyledLineContainer = styled.div`
    position: relative;
    width: 100%;
`;

const StyledLine = styled.div`
    border-bottom: 2px solid #ffbf47;
    z-index: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: throw 15s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
    transition: transform 10s linear;

    @keyframes throw {
        0% {
            width: 0%;
            transform: scaleX(0);
        }

        50% {
            width: 100%;
            transform: scaleX(0.5);
        }

        100% {
            width: 0%;
            transform: scaleX(0);
        }
    }
`;

const StyledLineReversed = styled.div`
    position: absolute;
    border-bottom: 2px solid #ffbf47;
    z-index: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: throwReversed 25s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
    transition: transform 10s linear;

    @keyframes throwReversed {
        0% {
            width: 0;
            left: 100%;
            transform: scaleX(0);
        }

        50% {
            left: 0%;
            width: 100%;
            transform: scaleX(0.5);
        }

        100% {
            width: 0;
            left: 100%;
            transform: scaleX(0);
        }
    }
`;

const StyledLi = styled.li`
    font-size: 18px;
`

const About = () => {
    return (
        <StyledSection id="about">
            <StyledLineContainer>
                <StyledLine></StyledLine>
            </StyledLineContainer>
            <StyledH1>01. About Me</StyledH1>
            <StyledLineContainer>
                <StyledLineReversed></StyledLineReversed>
            </StyledLineContainer>
            <div className="py-10">
                <StyledP>
                    Hello, I'm a highly motivated and curious person who is
                    always ready to challenge technical and complex problems.
                    I'm always keen on learning new topics and willing to give
                    my 110% to everything. I hope through my work, I will one
                    day make a positive impact on our planet and all
                    communities.
                </StyledP>
            </div>
            <StyledH2>My Tool kit</StyledH2>
            <StyledGridDiv>
                <div>
                    <ol>
                        <StyledLi>&bull; Communication</StyledLi>
                        <StyledLi>&bull; Teamwork</StyledLi>
                        <StyledLi>&bull; Leadership</StyledLi>
                        <StyledLi>&bull; Time Management</StyledLi>
                    </ol>
                </div>
                <div>
                    <ol>
                        <StyledLi>&bull; Java</StyledLi>
                        <StyledLi>&bull; Python</StyledLi>
                        <StyledLi>&bull; HTML & CSS</StyledLi>
                        <StyledLi>&bull; Machine Learning</StyledLi>
                    </ol>
                </div>
            </StyledGridDiv>
        </StyledSection>
    );
};

export default About;
