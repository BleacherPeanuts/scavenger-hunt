# Scavenger Hunt — Development TODO

**Last Updated:** February 7, 2026
**Current Sprint:** Feature 4 — Star Button + Animated Star Jar

---

## Current Sprint: Feature 4 — Star Button + Animated Star Jar

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

### Feature 1 — Project Skeleton + Start Screen
- [x] All setup tasks
- [x] Start screen with level selector and Play button
- [x] Mobile-first layout, 64px+ touch targets
- [x] Committed and pushed

### Feature 2 — Mission Card Display
- [x] Create mission card component (large text, centered)
- [x] Add color swatch for Level 1 missions (colored circle)
- [x] Implement sequential mission selection (shuffle at session start, no repeats)
- [x] Wire up Play button to show first mission
- [x] Test all three levels display correctly
- [x] Committed and pushed

### Feature 3 — Timer
- [x] Add 20-second visual countdown (progress bar)
- [x] Timer starts when mission appears
- [x] Gentle visual signal at 0 (pulse/color shift, no alarm)
- [x] Timer does NOT auto-advance the game
- [x] Timer resets on next mission
- [x] Committed and pushed

---

## Parking Lot

Ideas to consider later (don't derail current work):

- [ ] How-to-play instructions popup on first open — Why: Helps grandparents/parents understand the game without explanation

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
| 1 | Project Skeleton + Start Screen | 2026-02-07 | 2026-02-07 |
| 2 | Mission Card Display | 2026-02-07 | 2026-02-07 |
| 3 | Timer | 2026-02-07 | 2026-02-07 |
| 4 | Star Button + Star Jar | | |
| 5 | Session Flow | | |
| 6 | Level Switching | | |
| 7 | PWA Setup | | |
