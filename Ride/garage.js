document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('garage-container');
    const motos = JSON.parse(localStorage.getItem('garage') || '[]');

    if (motos.length === 0) {
        container.innerHTML = '<p class="text-gray-400">Aucune moto dans votre garage.</p>';
        return;
    }

    motos.forEach(moto => {
        const card = document.createElement('div');
        card.className = 'bg-gray-800 rounded-lg p-4 shadow-md';

        card.innerHTML = `
            <img src="${moto.image}" alt="${moto.model}" class="mb-2 rounded w-full h-40 object-cover">
            <h3 class="text-lg font-bold">${moto.model}</h3>
            <p class="text-sm text-gray-400">${moto.year} — ${moto.displacement} — ${moto.power}</p>
            <button class="mt-3 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm remove-btn">Retirer</button>
        `;

        // Supprimer la moto du garage
        card.querySelector('.remove-btn').addEventListener('click', () => {
            const updated = motos.filter(m => m.model !== moto.model);
            localStorage.setItem('garage', JSON.stringify(updated));
            location.reload();
        });

        container.appendChild(card);
    });
});
