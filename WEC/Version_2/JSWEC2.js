document.addEventListener("DOMContentLoaded", () => {
  const teams = [
    { name: "AF Corse", link: "../WEC_Teams/AF_Corse.html" },
    { name: "Alpine Endurance Team", link: "../WEC_Teams/Alpine.html" },
    { name: "BMW M Team WRT", link: "../WEC_Teams/BMW.html" },
    { name: "Cadillac Racing", link: "../WEC_Teams/Cadillac.html" },
    { name: "Ferrari AF Corse", link: "../WEC_Teams/Ferrari.html" },
    { name: "Hertz Team Jota", link: "../WEC_Teams/Jota.html" },
    { name: "Isotta Fraschini", link: "../WEC_Teams/Isotta.html" },
    { name: "Lamborghini Iron Lynx", link: "../WEC_Teams/Lamborghini.html" },
    { name: "Peugeot TotalEnergies", link: "../WEC_Teams/Peugeot.html" },
    { name: "Porsche Penske Motorsport", link: "../WEC_Teams/Porsche_Penske.html" },
    { name: "Proton Competition", link: "../WEC_Teams/Proton.html" },
    { name: "Toyota Gazoo Racing", link: "../WEC_Teams/Toyota.html" }
  ];

  let currentIndex = 0;
  const teamCard = document.getElementById("team-card");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  function updateTeam() {
    const team = teams[currentIndex];
    teamCard.textContent = team.name;
    teamCard.href = team.link;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + teams.length) % teams.length;
    updateTeam();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teams.length;
    updateTeam();
  });

  // Afficher l'équipe initiale
  updateTeam();
});
