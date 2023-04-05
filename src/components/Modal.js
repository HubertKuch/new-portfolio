import React, {useRef} from "react";
import closeIcon from "../assets/svg/icons/close.svg";

function Modal({
    title,
    description
}) {
    const modalRef = useRef();
    const overlayRef = useRef();

    const close = () => {
        overlayRef.current?.remove();
        modalRef.current?.remove();
    };

    return <>
        <div
            ref={modalRef}
            className={`modal p-4 rounded shadow-lg shadow-black h-1/3 w-1/4 min-w-fit absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 text-black`}
        >
            <header className={"flex justify-between mb-4"}>
                <h1 className={"text-2xl"}>{title}</h1>
                <img
                    className={"h-8 cursor-pointer"}
                    src={closeIcon}
                    alt="Close"
                    onClick={close}
                    aria-label={"closes modal"}
                />
            </header>
            <div className={"font-normal"}>{description}</div>
        </div>
        <div
            ref={overlayRef}
            onClick={close}
            className={"overlay fixed h-full w-full top-0 left-0 bg-alpha-modal z-10"} aria-label={"closes modal"}
        />
    </>
}

export default Modal;