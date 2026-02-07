# Scavenger Hunt — Development TODO

**Last Updated:** February 7, 2026
**Current Sprint:** All features complete!

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
- [x] Accelerating tick sound from 7s countdown
- [x] Committed and pushed

### Feature 4 — Star Button + Animated Star Jar
- [x] Add large Star button (64px+)
- [x] Implement 2.5 second cooldown (gray out after tap)
- [x] Create star jar visual (fills with gold)
- [x] Animate star flying into jar on tap
- [x] Add number overlay showing total stars
- [x] Jar fills up visually as stars accumulate
- [x] Star chime sound on tap
- [x] Committed and pushed

### Feature 5 — Session Flow
- [x] Next button advances mission and resets timer
- [x] Done button ends session
- [x] Celebration screen with total stars, fanfare, and confetti
- [x] Play Again button returns to start screen
- [x] Stars reset on new session
- [x] Committed and pushed

### Feature 6 — Level Switching Mid-Session
- [x] In-game level switcher (Colors, Shapes & Sizes, Things)
- [x] Changing level preserves star count
- [x] New level starts fresh mission sequence
- [x] Smooth transition
- [x] Committed and pushed (built during Feature 2)

### Feature 7 — PWA Setup
- [x] Create manifest.json (name, icons, theme color, display: standalone)
- [x] Create app icons (192px and 512px)
- [x] Create service worker for offline caching
- [ ] Test "Add to Home Screen" on iOS Safari
- [ ] Test "Install" on Android Chrome
- [ ] Verify offline functionality
- [x] Deploy to GitHub Pages
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
| 4 | Star Button + Star Jar | 2026-02-07 | 2026-02-07 |
| 5 | Session Flow | 2026-02-07 | 2026-02-07 |
| 6 | Level Switching | 2026-02-07 | 2026-02-07 |
| 7 | PWA Setup | 2026-02-07 | 2026-02-07 |
