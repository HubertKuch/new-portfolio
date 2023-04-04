function ContactElement({
                            icon,
                            header,
                            description,
                            contact,
                            contactHref
                        }) {
    return <div className={"contact-element"}>
        <div className={"contact-element__icon"}>
            <img src={icon} alt=""/>
        </div>
        <div className={"contact-element__header"}>
            {header}
        </div>
        <div className={"contact-element__description"}>
            {description}
        </div>
        <div className={"contact-element__contact"}>
            <a href={contactHref} target={"_blank"} className={"text-primary decoration-[var(--primary)]"}
               rel="noreferrer">{contact}</a>
        </div>
    </div>;
}

export default ContactElement;