"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyleOl = styled.ol`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    column-gap: 1.5rem;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
`;

const StyledLi = styled.li`
    color: black;
    text-align: center;
`;

const StyledLink = styled(Link)`
    padding: 0.5rem;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 18px;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0%;
        left: 0;
        background-color: #ffbf47;
        transform-origin: center;
        transition: transform 0.35s ease-in-out;
    }
    
    &:hover::after {
        transform: scaleX(1);
        transform-origin: center;
    }
`;

const StyledLineContainer = styled.div`
    padding: 4px 0px;
    position: relative;
    width: 100%;
`;

const StyledLine = styled.div`
    border-bottom: 2px solid #ff817553;
    z-index: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: throw 7s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
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
    border-top: 2px solid #ff817553;
    z-index: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: throwReversed 7s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
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

export default function Header() {
    return (
        <header className="m-auto py-8 z-50 bg-white">
            <nav>
                <StyledLineContainer>
                    <StyledLine></StyledLine>
                </StyledLineContainer>
                <StyleOl>
                    <StyledLi>
                        <StyledLink href={"#hero"}>00. Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink href={"#about"}>01. About</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink href={"#projects"}>02. Projects</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink href={"#contact"}>03. Contacts</StyledLink>
                    </StyledLi>
                </StyleOl>
                <StyledLineContainer>
                    <StyledLineReversed></StyledLineReversed>
                </StyledLineContainer>
            </nav>
        </header>
    );
}
