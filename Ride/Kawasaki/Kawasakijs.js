document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('moto-container');

    fetch('../data/motos.json')
        .then(response => response.json())
        .then(data => {
            const motosKawasaki = data.filter(moto => moto.brand.toLowerCase() === 'kawasaki');

            motosKawasaki.forEach(moto => {
                const card = document.createElement('div');
                card.className = 'bg-gray-800 rounded-lg p-4 w-72 flex-shrink-0 shadow-md';

                card.innerHTML = `
                    <img src="../${moto.image}" alt="${moto.model}" class="mb-2 rounded w-full h-40 object-cover">
                    <h3 class="text-lg font-bold">${moto.model}</h3>
                    <p class="text-sm text-gray-400">${moto.year} — ${moto.displacement} — ${moto.power}</p>
                    <div class="flex justify-between mt-2 text-sm">
                        <button class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">Comparer</button>
                        <button class="bg-green-600 hover:bg-green-700 px-2 py-1 rounded">Garage</button>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des motos :', error);
            container.innerHTML = '<p class="text-red-500">Erreur de chargement des motos.</p>';
        });
});
