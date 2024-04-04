/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Github from "@/app/icons/Github";

const StyledSection = styled.section`
    background: radial-gradient(#1e1d4e, #161637);
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
    justify-content: center;
    padding: 0px 10%;
    font-size: clamp(35px, 6vw, 60px);
    margin: 15px 0px 50px;
`;

const StyledH2 = styled.h2`
    font-size: clamp(20px, 4vw, 30px);
`;

const StyledH3 = styled.h3`
    display: flex;
    font-size: clamp(15px, 3vw, 25px);
    padding: 10rem 0px;
    text-align: center;
    justify-content: center;
`;

const StyledLi = styled.li`
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    gap: 10px;
    padding: 2vw 0px;

    @media screen and (max-width: 1200px) {
        display: block;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 60px;
        padding: 0px 4vw;
    }
`;

const StyledP = styled.p`
    background-color: #2e2e5c;
    padding: 25px;
    text-align: justify;
    color: white;
    border-radius: 4px;
    font-size: 18px;

    &:hover {
        box-shadow: 0 10px 15px -10px black;
    }
`;

const StyledPUtility = styled.p`
    font-size: 16px;
    font-weight: 600;
    padding: 0.5rem;
    margin: 0.5rem;
    color: #ff8175;
    text-align: center;
    position: relative;

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
        transform-origin: left;
    }
`;

const StyledA = styled.a`
    display: flex;
    text-align: right;
    justify-content: flex-end;
    align-items: center;

    &:hover {
        filter: brightness(0) saturate(100%) invert(96%) sepia(94%)
            saturate(5159%) hue-rotate(318deg) brightness(99%) contrast(100%);
    }

    @media screen and (max-width: 1200px) {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

const OrangeHighlight = styled.span`
    color: #ffbf47;
`;

const StyledExternal = styled.div`
    display: flex;
    
    @media screen and (max-width: 1200px) {
        display: inline-block;
    }
`;

const Projects = () => {
    return (
        <StyledSection id="projects">
            <StyledH1 className="text-white">02. Projects</StyledH1>
            <ul>
            <StyledLi>
                    <div>
                        <Image
                            src={"/website_preview.png"}
                            width={800}
                            height={800}
                            alt="Picture of my portfolio"
                            className="p-8"
                        />
                    </div>
                    <div>
                        <StyledH2 className="text-coral text-center font-bold py-6">
                            This Website
                        </StyledH2>
                        <StyledP>
                            This was the first time I created a website, it
                            helped me to better learn and use
                            <OrangeHighlight>
                                {" "}
                                TypeScript, HTML, CSS, and React
                            </OrangeHighlight>
                            . This website was created using the{" "}
                            <OrangeHighlight>Next.js framework</OrangeHighlight>
                            . The portfolio developed was designed to be
                            minimalistic. Additionally,{" "}
                            <OrangeHighlight>accessibility</OrangeHighlight> was
                            kept in mind to ensure{" "}
                            <OrangeHighlight>readability</OrangeHighlight>.
                            Please contact me so that I can better improve my
                            website.
                        </StyledP>
                        <StyledPUtility>
                            TypeScript Tailwind CSS Styled-Components HTML & CSS
                            React Next.js Design
                        </StyledPUtility>
                        <StyledExternal className="justify-end">
                            <div>
                                <StyledA
                                    href="https://github.com/LiZeLim/Portfolio"
                                    aria-label="Github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github />
                                </StyledA>
                            </div>
                        </StyledExternal>
                    </div>
                </StyledLi>
                <StyledLi>
                    <div>
                        <StyledH2 className="text-coral text-center font-bold py-6">
                            F1 Web scraping Discord bot
                        </StyledH2>
                        <StyledP>
                            The Discord Bot application was created through the{" "}
                            <OrangeHighlight>Discord.py API</OrangeHighlight> in
                            Python. Utilizes web scraping through the{" "}
                            <OrangeHighlight>BeautifulSoup4</OrangeHighlight>{" "}
                            library in conjunction with{" "}
                            <OrangeHighlight>
                                Regular Expression Patterns{" "}
                            </OrangeHighlight>
                            to find, extract, and finally display results of
                            current and previous seasons of Formula 1.
                            Additionally, to better extract and deal with data,
                            the <OrangeHighlight>NumPy</OrangeHighlight> python
                            library was utilized to better deal with displaying
                            data.
                        </StyledP>
                        <StyledPUtility>
                            Python NumPy BeautifulSoup4 REGEX Discord
                        </StyledPUtility>
                        <StyledExternal>
                            <div>
                                <StyledA
                                    href="https://github.com/LiZeLim/F1DiscordBot"
                                    aria-label="Github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github />
                                </StyledA>
                            </div>
                        </StyledExternal>
                    </div>
                    <div>
                        <Image
                            src={"/discord_bot.png"}
                            width={800}
                            height={800}
                            alt="Picture of my discord bot"
                            className="p-8"
                        />
                    </div>
                </StyledLi>
    
                <StyledLi>
                    <div>
                        <Image
                            src={"/space_invaders_preview.png"}
                            width={800}
                            height={800}
                            alt="Picture of my Space Invaders game"
                            className="p-8"
                        />
                    </div>
                    <div>
                        <StyledH2 className="text-coral text-center font-bold py-6">
                            Space Invaders
                        </StyledH2>
                        <StyledP>
                            Taking a Software Construction and Design class, I
                            learned about{" "}
                            <OrangeHighlight>design patterns</OrangeHighlight>.
                            It has helped me better apply object-oriented design
                            principles to any implementation of OO languages.
                            The recreation of Space Invaders was developed using
                            the <OrangeHighlight>JavaFX</OrangeHighlight>{" "}
                            Library whilst implementing{" "}
                            <OrangeHighlight>
                                Factory, State, Builder, and Strategy
                            </OrangeHighlight>{" "}
                            patterns.
                        </StyledP>
                        <StyledPUtility>
                            GoF Grasp OOD OOP JavaFX
                        </StyledPUtility>
                    </div>
                </StyledLi>
                <StyledLi>
                    <div>
                        <StyledH2 className="text-coral text-center font-bold py-6">
                            Wizard Game
                        </StyledH2>
                        <StyledP>
                            As a part of a university project, I had to create a
                            develop a Wizard Arcade game where we followed{" "}
                            <OrangeHighlight>
                                Object-oriented design principles
                            </OrangeHighlight>{" "}
                            in Java. Using the{" "}
                            <OrangeHighlight>Gradle</OrangeHighlight> package
                            manager in conjunction with{" "}
                            <OrangeHighlight>PApplet</OrangeHighlight>, the game
                            is finalized with{" "}
                            <OrangeHighlight>
                                sounds, animation, power-ups, and additional
                                levels
                            </OrangeHighlight>
                            . Any layout of the level could be made using a text
                            file.
                        </StyledP>
                        <StyledPUtility>
                            Java Gradle OOP PApplet Design
                        </StyledPUtility>
                    </div>
                    <div>
                        <Image
                            src={"/wizard_game_preview.png"}
                            width={800}
                            height={800}
                            alt="Picture of my Wizard Game"
                            className="p-8"
                        />
                    </div>
                </StyledLi>
            </ul>
            <StyledH3 className="text-white">
                I'm always learning and working on a project, so please feel
                free to ask me about it.
            </StyledH3>
        </StyledSection>
    );
};

export default Projects;
