"use strict";

const doc = window.document;

const ComenzarSaludos = () => {
    const button1 = doc.getElementById("button1");

    button1.addEventListener(
        "click",
        () => {
            const h1 = doc.createElement("h1");
            h1.appendChild(doc.getElementById("button2"));
        },
        false
    );
}

const PararSaludos = () => {

}

export {ComenzarSaludos};
export {PararSaludos};