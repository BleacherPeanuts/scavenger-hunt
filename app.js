/**
 * Scavenger Hunt — App Logic
 */

(function () {
  "use strict";

  // --- State ---
  const state = {
    level: 1,
    stars: 0,
    missionIndex: 0,
    shuffledMissions: [],
  };

  // --- DOM refs ---
  const screenStart = document.getElementById("screen-start");
  const screenGame = document.getElementById("screen-game");
  const levelBtns = document.querySelectorAll(".level-btn");
  const btnPlay = document.getElementById("btn-play");
  const missionText = document.getElementById("mission-text");
  const colorSwatch = document.getElementById("color-swatch");
  const btnNext = document.getElementById("btn-next");

  // --- Helpers ---
  function showScreen(screen) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    screen.classList.add("active");
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // --- Level Selection ---
  levelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      levelBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.level = parseInt(btn.dataset.level, 10);
    });
  });

  // --- Mission Display ---
  function showMission() {
    var mission = state.shuffledMissions[state.missionIndex];
    missionText.textContent = mission.text;

    if (mission.visual) {
      colorSwatch.style.backgroundColor = mission.visual;
      colorSwatch.setAttribute("data-color", mission.visual);
      colorSwatch.hidden = false;
    } else {
      colorSwatch.hidden = true;
    }
  }

  // --- Play Button ---
  btnPlay.addEventListener("click", () => {
    state.stars = 0;
    state.missionIndex = 0;
    state.shuffledMissions = shuffle(MISSIONS[state.level]);
    showMission();
    showScreen(screenGame);
  });

  // --- Next Button ---
  btnNext.addEventListener("click", () => {
    state.missionIndex++;
    if (state.missionIndex >= state.shuffledMissions.length) {
      state.missionIndex = 0;
      state.shuffledMissions = shuffle(MISSIONS[state.level]);
    }
    showMission();
  });
})();
