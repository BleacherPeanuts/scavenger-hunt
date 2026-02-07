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

  // --- Play Button ---
  btnPlay.addEventListener("click", () => {
    state.stars = 0;
    state.missionIndex = 0;
    state.shuffledMissions = shuffle(MISSIONS[state.level]);
    showScreen(screenGame);
  });
})();
