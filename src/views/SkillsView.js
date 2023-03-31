import React from "react";
import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";

import alpine from "../assets/svg/technologies/alpine.svg"
import css from "../assets/svg/technologies/css.svg"
import html from "../assets/svg/technologies/html.svg"
import java from "../assets/svg/technologies/java.svg"
import js from "../assets/svg/technologies/js.svg"
import mongodb from "../assets/svg/technologies/mongodb.svg"
import mysql from "../assets/svg/technologies/mysql.svg"
import php from "../assets/svg/technologies/php.svg"
import picocss from "../assets/svg/technologies/picocss.svg"
import postgresql from "../assets/svg/technologies/postgresql.svg"
import react from "../assets/svg/technologies/react.svg"
import tailwindcss from "../assets/svg/technologies/tailwindcss.svg"
import typescript from "../assets/svg/technologies/typescript.svg"
import rust from "../assets/svg/technologies/rust.svg"

function SkillsView() {
    return (<PageLayout title={<ColorizedText content={"Skills"}/>}>
        <div>
            Currently I use Java, PHP, MySQL, PostgreSQL, MongoDB, JavaScript with TypeScript, React, Alpine.js,
            PicoCSS, TailwindCSS, HTML and clean CSS. Now I am learning Rust.
            <br/>
            <br/>
            I know a lot of design pattern, apply DDD for my bigger projects, I use e2e and unit tests using JUnit
            (Jupiter), Mockito and PHPUnit.
            <br/>
            <br/>
            In past I used to use C++ and NodeJS with ExpressJS but I don’t like those technologies.
        </div>
        <br/>
        <div className={"technologies-icons"}>
            <img src={alpine} alt=""/>
            <img src={css} alt=""/>
            <img src={html} alt=""/>
            <img src={java} alt=""/>
            <img src={rust} alt=""/>
            <img src={js} alt=""/>
            <img src={mongodb} alt=""/>
            <img src={mysql} alt=""/>
            <img src={php} alt=""/>
            <img src={picocss} alt=""/>
            <img src={postgresql} alt=""/>
            <img src={react} alt=""/>
            <img src={tailwindcss} alt=""/>
            <img src={typescript} alt=""/>
        </div>
    </PageLayout>)
}

export default SkillsView;