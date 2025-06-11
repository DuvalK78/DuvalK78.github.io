document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        { name: "Yuji Itadori", image: "yuji.jpg", link: "ItadoriYuji.html" },
        { name: "Megumi Fushiguro", image: "megumi.jpg", link: "MegumiFushiguro.html" },
        { name: "Nobara Kugisaki", image: "nobara.jpg", link: "NobaraKugisaki.html" },
        { name: "Satoru Gojo", image: "gojo.jpg", link: "SatoruGojo.html" }
    ];

    const charactersContainer = document.querySelector(".characters-container");

    // Dynamically add character cards to the page
    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character-card");

        // Create a link for each character
        const characterLink = document.createElement("a");
        characterLink.href = character.link;

        characterLink.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <h3 class="character-name">${character.name}</h3>
        `;

        characterDiv.appendChild(characterLink);
        charactersContainer.appendChild(characterDiv);
    });
});
