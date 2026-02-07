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
  const btnStar = document.getElementById("btn-star");
  const gameLevelBtns = document.querySelectorAll(".game-level-btn");
  const timerBar = document.getElementById("timer-bar");
  const missionCard = document.querySelector(".mission-card");
  const jarFill = document.getElementById("jar-fill");
  const jarCount = document.getElementById("jar-count");
  const starJar = document.getElementById("star-jar");

  // --- Audio Context (lazy init on first user tap) ---
  var audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTick(remaining) {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    // Pitch rises and duration shortens as time runs out
    var freq = 600 + (7 - remaining) * 100;
    var dur = 0.04 + remaining * 0.01;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + dur);
  }

  function playTimesUp() {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;

    // Silly descending "wah wah waaah" trombone
    var notes = [
      { freq: 350, start: 0, dur: 0.2 },
      { freq: 300, start: 0.22, dur: 0.2 },
      { freq: 200, start: 0.44, dur: 0.5 },
    ];

    notes.forEach(function (n) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(n.freq, now + n.start);
      // Slide down for the last note
      if (n.freq === 200) {
        osc.frequency.linearRampToValueAtTime(140, now + n.start + n.dur);
      }
      gain.gain.setValueAtTime(0.15, now + n.start);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.start + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + n.start);
      osc.stop(now + n.start + n.dur);
    });
  }

  function playWoohoo() {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;

    // Quick ascending celebration jingle
    var notes = [
      { freq: 523, start: 0, dur: 0.1 },
      { freq: 659, start: 0.1, dur: 0.1 },
      { freq: 784, start: 0.2, dur: 0.1 },
      { freq: 1047, start: 0.3, dur: 0.25 },
    ];

    notes.forEach(function (n) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n.freq, now + n.start);
      gain.gain.setValueAtTime(0.2, now + n.start);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.start + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + n.start);
      osc.stop(now + n.start + n.dur + 0.05);
    });
  }

  // --- Confetti ---
  var confettiContainer = document.getElementById("confetti-container");
  var CONFETTI_COLORS = ["#EF4444", "#3B82F6", "#22C55E", "#EAB308", "#A855F7", "#EC4899", "#F97316"];

  function spawnConfetti() {
    var count = 40;
    for (var i = 0; i < count; i++) {
      var piece = document.createElement("div");
      piece.classList.add("confetti-piece");
      piece.style.left = Math.random() * 100 + "%";
      piece.style.backgroundColor = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      piece.style.animationDuration = (1 + Math.random() * 1.5) + "s";
      piece.style.animationDelay = (Math.random() * 0.4) + "s";
      piece.style.width = (6 + Math.random() * 8) + "px";
      piece.style.height = (6 + Math.random() * 8) + "px";
      confettiContainer.appendChild(piece);
    }
    // Clean up after animation
    setTimeout(function () {
      confettiContainer.innerHTML = "";
    }, 3000);
  }

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

      if (state.timerRemaining <= 7 && state.timerRemaining > 0) {
        playTick(state.timerRemaining);
      }

      if (state.timerRemaining <= 5 && state.timerRemaining > 0) {
        timerBar.classList.add("warning");
      }

      if (state.timerRemaining <= 0) {
        stopTimer();
        timerBar.classList.remove("warning");
        timerBar.classList.add("expired");
        missionCard.classList.add("pulse");
        playTimesUp();
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

  // --- Star Jar ---
  var STAR_COOLDOWN = 2500;
  var MAX_JAR_STARS = 20;

  function playStarChime() {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    [880, 1108, 1320].forEach(function (freq, i) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      gain.gain.setValueAtTime(0.15, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  }

  function updateJar() {
    jarCount.textContent = state.stars;
    var pct = Math.min((state.stars / MAX_JAR_STARS) * 100, 100);
    jarFill.style.height = pct + "%";
  }

  function flyStarToJar() {
    var star = document.createElement("div");
    star.classList.add("flying-star");
    star.textContent = "\u2B50";
    // Start from star button position
    var btnRect = btnStar.getBoundingClientRect();
    var jarRect = starJar.getBoundingClientRect();
    star.style.left = btnRect.left + btnRect.width / 2 - 16 + "px";
    star.style.top = btnRect.top - 10 + "px";
    // Animate toward jar
    var dx = jarRect.left + jarRect.width / 2 - (btnRect.left + btnRect.width / 2);
    var dy = jarRect.top + jarRect.height / 2 - btnRect.top;
    star.style.setProperty("--dx", dx + "px");
    star.style.setProperty("--dy", dy + "px");
    document.body.appendChild(star);
    // Use rAF to set end position after element is placed
    requestAnimationFrame(function () {
      star.style.transform = "translate(" + dx + "px, " + dy + "px) scale(0.3)";
      star.style.opacity = "0";
      star.style.transition = "all 0.5s ease-in";
    });
    setTimeout(function () { star.remove(); }, 600);
  }

  btnStar.addEventListener("click", function () {
    if (btnStar.classList.contains("cooldown")) return;
    state.stars++;
    updateJar();
    playStarChime();
    flyStarToJar();

    // Cooldown
    btnStar.classList.add("cooldown");
    setTimeout(function () {
      btnStar.classList.remove("cooldown");
    }, STAR_COOLDOWN);
  });

  // --- Play Button ---
  btnPlay.addEventListener("click", () => {
    state.stars = 0;
    state.missionIndex = 0;
    state.shuffledMissions = shuffle(MISSIONS[state.level]);
    updateJar();
    showMission();
    showScreen(screenGame);
  });

  // --- Next Button ---
  btnNext.addEventListener("click", () => {
    playWoohoo();
    spawnConfetti();
    state.missionIndex++;
    if (state.missionIndex >= state.shuffledMissions.length) {
      state.missionIndex = 0;
      state.shuffledMissions = shuffle(MISSIONS[state.level]);
    }
    showMission();
  });
})();
