document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        { name: "Yuji Itadori", image: "yuji.jpg" },
        { name: "Megumi Fushiguro", image: "megumi.jpg" },
        { name: "Nobara Kugisaki", image: "nobara.jpg" },
        { name: "Satoru Gojo", image: "gojo.jpg" }
    ];

    const episodes = [
        { title: "Épisode 1 - Le départ", link: "#", date: "2025-06-10" },
        { title: "Épisode 2 - Le combat", link: "#", date: "2025-06-17" }
    ];

    const charactersContainer = document.querySelector(".characters-container");
    const episodeList = document.querySelector(".episode-list");

    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character-card");
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        charactersContainer.appendChild(characterDiv);
    });

    episodes.forEach(episode => {
        const episodeDiv = document.createElement("div");
        episodeDiv.classList.add("episode-card");
        episodeDiv.innerHTML = `
            <h3>${episode.title}</h3>
            <p>Diffusion : ${episode.date}</p>
            <a href="${episode.link}">Voir</a>
        `;
        episodeList.appendChild(episodeDiv);
    });
});
