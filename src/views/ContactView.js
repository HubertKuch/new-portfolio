import React from "react";
import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";
import Checkbox from "../components/Checkbox";
import ContactElement from "../components/ContactElement";
import phoneIcon from "../assets/svg/icons/phone.svg";
import emailIcon from "../assets/svg/icons/email.svg";
import fbIcon from "../assets/svg/icons/fb.svg";

function ContactView() {
    return (<PageLayout title={"Contact"}>
        <div className={"text-xl contact-header-text"}>
            Got <ColorizedText classColor={"text-primary-yellow"} content={" ideas"}/>? I’ve got <ColorizedText
            classColor={"text-primary-red"} content={" skills"}/>. We can do it
            <ColorizedText classColor={"text-primary-blue"} content={" together"}/>.
        </div>

        <section className={"additional-contact"}>
            <ContactElement description={"You can call on every hour"} header={"Call me"}
                            contact={"+48 730 071 565"} contactHref={"tel:+48730071565"}
                            icon={phoneIcon}/>
            <ContactElement description={"I’ll replay as fast as possible"} header={"Send me a email"}
                            contact={"kuchhubert@gmail.com"} contactHref={"mailto:kuchhubert@gmail.com"}
                            icon={emailIcon}/>
            <ContactElement description={"I will reply at any hour"} header={"Write to me on Messenger"}
                            contact={"Hubert Kuch"} contactHref={"https://www.facebook.com/monia.dawid/"}
                            icon={fbIcon}/>
        </section>

        <form className={"contact-form"}>
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
                    <textarea spellCheck={false} required rows={10}></textarea>
                    <span className={"floating-label"}>Tell me about your project...</span>
                </label>
            </section>

            <section className={"checkboxes-section"}>
                <Checkbox label={"UI Design"} name={"ui-design"}/>
                <Checkbox label={"UX Design"} name={"ux-design"}/>
                <Checkbox label={"Client"} name={"client"}/>
                <Checkbox label={"Database"} name={"database"}/>
                <Checkbox label={"Server"} name={"server"}/>
                <Checkbox label={"Suggest"} name={"suggest"}/>
                <Checkbox label={"Other"} name={"other"}/>
            </section>

            <section className={"submit-section"}>
                <button type="submit">Let's do it together!</button>
            </section>
        </form>
    </PageLayout>);
}

export default ContactView;