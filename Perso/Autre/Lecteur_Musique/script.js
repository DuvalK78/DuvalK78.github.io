// Exemple de données pour les musiques
const musiques = [
    {
        titre: "Titre 1",
        artiste: "Artiste 1",
        cover: "assets/images/album1.jpg",
        fichier: "assets/musiques/musique1.mp3"
    },
    {
        titre: "Titre 2",
        artiste: "Artiste 2",
        cover: "assets/images/album2.jpg",
        fichier: "assets/musiques/musique2.mp3"
    }
];

// Sélection des éléments du DOM
const trackList = document.querySelector('.track-list');
const currentTrackTitle = document.querySelector('.track-details h3');
const currentTrackArtist = document.querySelector('.track-details p');
const currentTrackCover = document.querySelector('.current-track img');
const playButton = document.querySelector('.player-controls .fa-play');
const audioPlayer = new Audio();

// Fonction pour afficher les musiques
function afficherMusiques() {
    trackList.innerHTML = '';
    musiques.forEach((musique, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track';
        trackElement.innerHTML = `
            <img src="${musique.cover}" alt="${musique.titre}">
            <div class="track-info">
                <h3>${musique.titre}</h3>
                <p>${musique.artiste}</p>
            </div>
            <div class="track-duration">
                <p>3:45</p>
                <i class="fas fa-play" data-index="${index}"></i>
            </div>
        `;
        trackList.appendChild(trackElement);
    });

    // Ajouter les écouteurs d'événements
    document.querySelectorAll('.track-duration .fa-play').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            jouerMusique(index);
        });
    });
}

// Fonction pour jouer une musique
function jouerMusique(index) {
    const musique = musiques[index];
    currentTrackTitle.textContent = musique.titre;
    currentTrackArtist.textContent = musique.artiste;
    currentTrackCover.src = musique.cover;
    audioPlayer.src = musique.fichier;
    audioPlayer.play();
    playButton.classList.replace('fa-play', 'fa-pause');
}

// Écouteur pour le bouton de lecture/pause
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.classList.replace('fa-play', 'fa-pause');
    } else {
        audioPlayer.pause();
        playButton.classList.replace('fa-pause', 'fa-play');
    }
});

// Initialisation
afficherMusiques();
