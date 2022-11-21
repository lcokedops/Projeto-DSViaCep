import * as modalController from "./modal-controller.js"

export function init() {

    const contacLink = document.querySelector(".contact-link");
    contacLink.addEventListener('click', handleContactLinkClick);

    console.log("Page controller iniciado");
}

function handleContactLinkClick(event) {
    event.preventDefault();
    modalController.showModal();
}