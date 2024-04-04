"use client";

import React from "react";
import styled from "styled-components";

import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/contact";

const StyledMain = styled.main`
    width: 100%;
`;

export default function Home() {
    return (
        <StyledMain>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </StyledMain>
    );
}
