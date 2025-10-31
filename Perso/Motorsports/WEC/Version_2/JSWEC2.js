document.addEventListener("DOMContentLoaded", () => {
  const teams = [
    { name: "AF Corse", link: "../WEC_Teams/AF_Corse.html" },
    { name: "Alpine Endurance Team", link: "../WEC_Teams/Alpine_Endurance_Team.html" },
    { name: "Aston Martin", link: "../WEC_Teams/Aston_Martin.html" },
    { name: "BMW M Team WRT", link: "../WEC_Teams/BMW_M_Team_WRT.html" },
    { name: "Cadillac Racing", link: "../WEC_Teams/Cadillac_Racing.html" },
    { name: "Ferrari AF Corse", link: "../WEC_Teams/Ferrari_AF_Corse.html" },
    { name: "Peugeot TotalEnergies", link: "../WEC_Teams/Peugeot_TotalEnergies.html" },
    { name: "Porsche Penske Motorsport", link: "../WEC_Teams/Porsche_Penske_Motorsport.html" },
    { name: "Proton Competition", link: "../WEC_Teams/Proton_Competition.html" },
    { name: "Toyota Gazoo Racing", link: "../WEC_Teams/Toyota_Gazoo_Racing.html" }
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
