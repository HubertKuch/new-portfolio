import React from "react";
import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";

function ContactView() {
    return (
        <PageLayout title={"Contact"}>
            <div>
                Got <ColorizedText classColor={"text-primary-yellow"} content={" ideas"}/>? I’ve got <ColorizedText
                classColor={"text-primary-red"} content={" skills"}/>. We can do it
                <ColorizedText classColor={"text-primary-blue"} content={" together"}/>.
            </div>
            <div>
                <form className={"contact"}>
                    <section className={"inputs-section"}>
                        <label>
                            <input spellCheck={false} placeholder={""} type="text" required/>
                            <span className={"floating-label"}>Your name</span>
                        </label>

                        <label>
                            <input spellCheck={false} placeholder={""} type="email" required/>
                            <span className={"floating-label"}>your@company.com</span>
                        </label>

                        <label>
                            <textarea spellCheck={false} required></textarea>
                            <span className={"floating-label"}>Tell me about your project...</span>
                        </label>
                    </section>

                    <section className={"checkboxes-section"}>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            UI Design
                        </label>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            Client
                        </label>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            UX Design
                        </label>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            Database
                        </label>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            Server
                        </label>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            Suggest
                        </label>
                        <label>
                            <input type="checkbox" name="" id=""/>
                            <span className="checkbox"></span>
                            Other
                        </label>
                    </section>

                    <section className={"submit-section"}>
                        <button type="submit">Let's do it together!</button>
                    </section>
                </form>
            </div>
        </PageLayout>
    );
}

export default ContactView;