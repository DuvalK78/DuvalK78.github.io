const teams = document.querySelectorAll('.team');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const returnBtn = document.getElementById('returnBtn');
let current = 0;

function showTeam(index) {
  teams.forEach((team, i) => {
    team.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % teams.length;
  showTeam(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + teams.length) % teams.length;
  showTeam(current);
});

returnBtn.addEventListener('click', () => {
  window.history.back();
});
