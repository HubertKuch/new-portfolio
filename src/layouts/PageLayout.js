import React from "react";
import Menu from "../components/Menu";

export default function PageLayout({
                                       title,
                                       customHeaderContent,
                                       children
                                   }) {
    return (<>
        <main className={"page-layout"}>
            <header>
                {customHeaderContent ? customHeaderContent : <h1>{title}</h1>}
            </header>
            <article>
                {children}
            </article>
            <Menu/>
        </main>
    </>);
}
