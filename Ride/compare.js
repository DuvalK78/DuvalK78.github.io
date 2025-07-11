document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('compare-container');
    const motos = JSON.parse(localStorage.getItem('compare') || '[]');

    if (motos.length === 0) {
        container.innerHTML = '<p class="text-gray-400">Aucune moto sélectionnée pour comparaison.</p>';
        return;
    }

    motos.forEach(moto => {
        const card = document.createElement('div');
        card.className = 'bg-gray-800 rounded-lg p-4 shadow-md';

        card.innerHTML = `
            <img src="${moto.image}" alt="${moto.model}" class="mb-2 rounded w-full h-40 object-cover">
            <h3 class="text-lg font-bold">${moto.model}</h3>
            <p class="text-sm text-gray-400">
                ${moto.year} <br>
                ${moto.displacement} <br>
                ${moto.power}
            </p>
        `;

        container.appendChild(card);
    });
});
