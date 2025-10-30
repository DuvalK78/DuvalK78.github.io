document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let index = 0;

    function showSlide(newIndex) {
        if (newIndex < 0) {
            index = totalItems - 1;
        } else if (newIndex >= totalItems) {
            index = 0;
        } else {
            index = newIndex;
        }

        // Masquer tous les éléments
        items.forEach((item) => (item.style.display = "none"));

        // Afficher uniquement l'élément actif
        items[index].style.display = "block";
    }

    document.querySelector(".prev").addEventListener("click", function () {
        showSlide(index - 1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        showSlide(index + 1);
    });

    // Afficher le premier élément au chargement
    showSlide(index);
});
