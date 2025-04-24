// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".info-button");
    const messageElement = document.getElementById("message1");

    // Fonction pour mettre à jour le contenu
    const updateContent = (text, imgSrc) => {
        messageElement.innerHTML = ''; // Réinitialise le contenu

        const textContent = document.createElement('p');
        textContent.textContent = text;
        messageElement.appendChild(textContent);

        if (imgSrc) {
            const imageElement = document.createElement('img');
            imageElement.src = imgSrc;
            imageElement.alt = "Image d'écurie FIA WEC";
            messageElement.appendChild(imageElement);
        }
    };

    // Attache un événement à chaque bouton
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const text = button.dataset.text || "Pas d'information disponible";
            const imgSrc = button.dataset.img || "";
            updateContent(text, imgSrc);
        });
    });
});
