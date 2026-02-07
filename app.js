/**
 * Scavenger Hunt — App Logic
 */

(function () {
  "use strict";

  // --- Constants ---
  var TIMER_DURATION = 20;

  // --- State ---
  const state = {
    level: 1,
    stars: 0,
    missionIndex: 0,
    shuffledMissions: [],
    timerRemaining: TIMER_DURATION,
    timerInterval: null,
  };

  // --- DOM refs ---
  const screenStart = document.getElementById("screen-start");
  const screenGame = document.getElementById("screen-game");
  const levelBtns = document.querySelectorAll(".level-btn");
  const btnPlay = document.getElementById("btn-play");
  const missionText = document.getElementById("mission-text");
  const colorSwatch = document.getElementById("color-swatch");
  const btnNext = document.getElementById("btn-next");
  const gameLevelBtns = document.querySelectorAll(".game-level-btn");
  const timerBar = document.getElementById("timer-bar");
  const missionCard = document.querySelector(".mission-card");

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

  // --- Sync all level buttons (start screen + game screen) ---
  function selectLevel(level) {
    state.level = level;
    levelBtns.forEach((b) => b.classList.toggle("selected", parseInt(b.dataset.level, 10) === level));
    gameLevelBtns.forEach((b) => b.classList.toggle("selected", parseInt(b.dataset.level, 10) === level));
  }

  // --- Level Selection (start screen) ---
  levelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectLevel(parseInt(btn.dataset.level, 10));
    });
  });

  // --- Level Selection (game screen) ---
  gameLevelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      var newLevel = parseInt(btn.dataset.level, 10);
      if (newLevel === state.level) return;
      selectLevel(newLevel);
      state.missionIndex = 0;
      state.shuffledMissions = shuffle(MISSIONS[state.level]);
      showMission();
    });
  });

  // --- Timer ---
  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function startTimer() {
    stopTimer();
    state.timerRemaining = TIMER_DURATION;
    timerBar.style.width = "100%";
    timerBar.classList.remove("warning", "expired");
    missionCard.classList.remove("pulse");

    state.timerInterval = setInterval(function () {
      state.timerRemaining--;
      var pct = (state.timerRemaining / TIMER_DURATION) * 100;
      timerBar.style.width = pct + "%";

      if (state.timerRemaining <= 5 && state.timerRemaining > 0) {
        timerBar.classList.add("warning");
      }

      if (state.timerRemaining <= 0) {
        stopTimer();
        timerBar.classList.remove("warning");
        timerBar.classList.add("expired");
        missionCard.classList.add("pulse");
      }
    }, 1000);
  }

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

    startTimer();
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
