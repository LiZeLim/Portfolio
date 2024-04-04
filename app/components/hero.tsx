/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const selfImageStyle = {
    borderRadius: "50%",
    borderColor: "white",
    borderWidth: "4px",
};

const StyledCircleDiv = styled.div`
    transition: transform 0.3s linear;

    &:hover {
        animation: pulse 1s infinite alternate;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(1.1);
        }
    }
`;

const StyledSection = styled.section`
    background: radial-gradient(#1e1d4e, #161637);
    padding: 0px clamp(25px, 10%, 150px);
    padding-bottom: 16rem;

    @media screen and (max-width: 1200px) {
        display: block;
        padding: 16rem 0px;
        align-items: center;
        justify-content: center;
    }
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    place-items: center;
    gap: 50px;
    height: 100vh;
    min-height: 100vh;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        display: block;
        align-items: center;
        justify-content: center;
    }
`;

const StyledH1 = styled.h1`
    font-size: clamp(14px, 5vw, 16px);
    margin-bottom: 1rem;
`;

const StyledH2 = styled.h2`
    display: inline-block;
    font-size: clamp(40px, 8vw, 80px);

    white-space: nowrap;
    overflow: hidden;
    margin: 0 auto;

    animation: typing 3s;

    @keyframes typing {
        0% {
            width: 0;
            border-right: 2em solid #ffbf47;
        }

        40% {
            width: 40%;
            border-right: 1em solid #ffbf47;
        }

        70% {
            width: 60%;
            border-right: 2em solid #ffbf47;
        }

        100% {
            width: 100%;
            border-color: transparent;
        }
    }
`;

const StyledH3 = styled.h3`
    font-size: clamp(40px, 8vw, 80px);
    //max-width: 90%;
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
    max-width: 70%;
`;

const Hero = () => {
    return (
        <StyledSection id="hero" className="relative z-20">
            <StyledDiv className="z-20">
                <div>
                    <div>
                        <StyledH1 className="text-coral">
                            Hey there, I'm
                        </StyledH1>
                    </div>
                    <div className="inline-block">
                        <StyledH2 className="text-slate-50">
                            Li Ze Lim<span className="text-coral">.</span>
                        </StyledH2>
                    </div>
                    <div>
                        <StyledH3 className="text-slate-300">
                            A{" "}
                            <span className="text-bright-yellow-orange">
                                penultimate
                            </span>{" "}
                            year student<span className="text-coral">.</span>
                        </StyledH3>
                    </div>
                    <div className="">
                        <StyledP className="text-coral">
                            Hello, I'm a penultimate year student at The
                            University of Sydney studying Bachelor of
                            Engineering Honours (Software Engineering). My
                            favorite sport is Formula 1.
                        </StyledP>
                    </div>
                </div>
                <div className="w-full">
                    <StyledCircleDiv className="relative bg-coral rounded-full w-20 h-20 border-4 border-white z-20"></StyledCircleDiv>
                    <StyledCircleDiv className="relative bg-bright-yellow-orange rounded-full w-12 h-12 border-4 border-white z-20"></StyledCircleDiv>
                </div>
            </StyledDiv>
        </StyledSection>
    );
};

export default Hero;
