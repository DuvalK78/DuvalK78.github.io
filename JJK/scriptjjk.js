document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        { name: "Yuji Itadori", image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/jjk-yuji-power-ups-article-cover.jpg", link: "ItadoriYuji.html" },
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
        characterLink.classList.add("character-link");

        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.alt = character.name;
        characterImage.classList.add("character-image");

        const characterName = document.createElement("h3");
        characterName.textContent = character.name;
        characterName.classList.add("character-name");

        characterLink.appendChild(characterImage);
        characterLink.appendChild(characterName);

        characterDiv.appendChild(characterLink);
        charactersContainer.appendChild(characterDiv);
    });
});
