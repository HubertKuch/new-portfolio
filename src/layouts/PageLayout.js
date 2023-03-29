import React from "react";
import Menu from "../components/Menu";

export default function PageLayout({title, children}) {
    return (<>
        <main className={"page-layout"}>
            <header>
                <h1>{title}</h1>
            </header>
            <article>
                {children}
            </article>
            <Menu/>
        </main>
    </>);
}
