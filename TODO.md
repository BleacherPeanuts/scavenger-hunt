# Scavenger Hunt — Development TODO

**Last Updated:** February 7, 2026
**Current Sprint:** Feature 1 — Project Skeleton + Start Screen

---

## Current Sprint: Feature 1 — Project Skeleton + Start Screen

### Setup
- [x] Create project folder and file structure
- [x] Create index.html with basic HTML5 boilerplate
- [x] Create style.css with CSS reset and base styles
- [x] Create app.js with app shell
- [x] Create missions.js with all mission data from PRD
- [x] Create .gitignore
- [ ] Create GitHub repo
- [ ] Push initial commit

### Feature Tasks
- [x] Build start screen layout (title, level selector, Play button)
- [x] Style level selector — 3 large buttons: Colors, Shapes, Categories
- [x] Style Play button — big, obvious, 64px+ touch target
- [x] Add mobile-first responsive layout (375px base)
- [x] Verify all touch targets are 64px minimum
- [ ] Test on mobile viewport

### Git Checkpoint
- [ ] Commit and push: `feat: add start screen with level selector`

---

## Up Next

### Feature 2 — Mission Card Display
- [ ] Create mission card component (large text, centered)
- [ ] Add color swatch for Level 1 missions (colored circle)
- [ ] Implement sequential mission selection (shuffle at session start, no repeats)
- [ ] Wire up Play button to show first mission
- [ ] Test all three levels display correctly
- [ ] Commit and push: `feat: add mission card display`

### Feature 3 — Timer
- [ ] Add 20-second visual countdown (progress bar)
- [ ] Timer starts when mission appears
- [ ] Gentle visual signal at 0 (pulse/color shift, no alarm)
- [ ] Timer does NOT auto-advance the game
- [ ] Timer resets on next mission
- [ ] Commit and push: `feat: add gentle countdown timer`

### Feature 4 — Star Button + Animated Star Jar
- [ ] Add large Star button (64px+)
- [ ] Implement 2-3 second cooldown (gray out after tap)
- [ ] Create star jar visual
- [ ] Animate star flying into jar on tap
- [ ] Add number overlay showing total stars
- [ ] Jar fills up visually as stars accumulate
- [ ] Commit and push: `feat: add star button and animated jar`

### Feature 5 — Session Flow
- [ ] Add "Next" button to advance mission and reset timer
- [ ] Add "Done" button to end session
- [ ] Build celebration screen (total stars, confetti/animation)
- [ ] Add "Play Again" button that returns to start screen
- [ ] Stars reset on new session
- [ ] Commit and push: `feat: add session flow and celebration screen`

### Feature 6 — Level Switching Mid-Session
- [ ] Add small level-switch control (unobtrusive, parent-facing)
- [ ] Changing level preserves star count
- [ ] New level starts fresh mission sequence
- [ ] Smooth transition, no jarring screen change
- [ ] Commit and push: `feat: add mid-session level switching`

### Feature 7 — PWA Setup
- [ ] Create manifest.json (name, icons, theme color, display: standalone)
- [ ] Create app icons (192px and 512px)
- [ ] Create service worker for offline caching
- [ ] Test "Add to Home Screen" on iOS Safari
- [ ] Test "Install" on Android Chrome
- [ ] Verify offline functionality
- [ ] Deploy to GitHub Pages
- [ ] Commit and push: `feat: add PWA support`

---

## Completed

(Nothing yet — development not started)

---

## Parking Lot

Ideas to consider later (don't derail current work):

- [ ] Sound effects (cheer on star, drumroll on new mission) — Why: Fun polish, not critical for v1
- [ ] Custom mission input (adult types in a mission) — Why: Nice for variety, add after core works
- [ ] Photo capture mode — Why: Fun idea but adds complexity
- [ ] Themed rounds (dinosaur hunt, kitchen adventure) — Why: Content expansion, easy to add later
- [ ] Seasonal content packs — Why: Fun for holidays

### Bugs
(None yet)

### Tech Debt
(None yet)

---

## Sprint History

| Sprint | Feature | Started | Completed |
|--------|---------|---------|-----------|
| 1 | Project Skeleton + Start Screen | | |
| 2 | Mission Card Display | | |
| 3 | Timer | | |
| 4 | Star Button + Star Jar | | |
| 5 | Session Flow | | |
| 6 | Level Switching | | |
| 7 | PWA Setup | | |
