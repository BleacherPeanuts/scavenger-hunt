# Scavenger Hunt — Product Requirements Document

**Created:** February 7, 2026
**Project Type:** Personal Tool
**SaaS Aspiration:** No
**Build Mode:** MVP
**Status:** Active

---

## 1. Problem Statement

Video calls between toddlers and remote grandparents go flat quickly. Adults talk while the kid zones out. There's no shared activity to keep everyone engaged across the distance.

**Target User:** Teddy (almost 4 years old) playing with Grammy, Grandpa, and DiDi over FaceTime. A parent operates the game locally.

**Current Alternatives:** Unstructured FaceTime calls where adults try to hold a toddler's attention by talking.

---

## 2. Solution Overview

A simple web-based game that gives Teddy "missions" — find something RED, find a SOCK — that get him running around the house and bringing items back to show the camera. Grandparents watch via FaceTime on a separate device, cheering him on. A parent operates the game on a second device near Teddy.

**Core Value:** Turns passive video calls into active, shared play between a toddler and remote grandparents.

**Success Criteria (30-day):**
- [ ] Used during at least 3 FaceTime calls with grandparents
- [ ] Teddy stays engaged for 5+ minutes per session
- [ ] Grandparents can follow along without confusion

---

## 3. Scope

### In Scope (v1)
- Start screen with level selector and Play button
- Mission card display with text (and color swatches for Level 1)
- 3 difficulty levels: Colors, Shapes/Properties, Categories
- 20-second gentle visual timer (no penalty)
- Star button with cooldown to prevent mashing
- Animated star jar with number overlay
- Done button leading to celebration screen with total stars
- Sequential mission order (no repeats until all used)
- PWA support (installable from browser)
- Mobile-first design, 64px minimum touch targets

### Out of Scope
- Multiplayer sync / room codes — Why: No backend, single device is sufficient
- Text-to-speech — Why: Adult reads missions aloud on FaceTime
- User accounts or saved progress — Why: Personal tool, stars reset each session
- Backend / database — Why: All content hardcoded, no data to persist
- Frameworks or build tools — Why: Vanilla HTML/CSS/JS, just open the file

---

## 4. User Journey

**Primary Flow:** FaceTime Scavenger Hunt Session

1. Family starts FaceTime call on Device 1 (phone/tablet)
2. Parent opens Scavenger Hunt app on Device 2, props it near Teddy
3. Parent selects difficulty level and taps "Play"
4. Mission card appears: "Find something RED!" (with red swatch)
5. 20-second timer starts — gentle visual countdown, no penalty
6. Teddy runs to find the item, brings it back to the FaceTime camera
7. Grandparent sees the item via FaceTime and cheers: "Yes! That's red! Give him a star!"
8. Parent taps the Star button — star animates into the jar, counter increments
9. Parent taps "Next" (or next mission auto-loads after star) — new mission appears
10. Repeat until call winds down
11. Parent taps "Done" — celebration screen shows total stars with confetti/fanfare
12. Session ends, everyone says goodbye on FaceTime

---

## 5. Data Model

No database. All content is hardcoded in JavaScript arrays.

| Entity | Structure | Notes |
|--------|-----------|-------|
| Mission | `{ text: string, visual: string/null, level: 1\|2\|3 }` | visual = color hex for Level 1, null for others |
| Session State | `{ level: number, stars: number, missionIndex: number, usedMissions: array }` | In-memory only, resets on close |

---

## 6. Technical Decisions

| Decision | Choice | Notes |
|----------|--------|-------|
| Framework | None | Vanilla HTML + CSS + JS |
| Build Tools | None | No npm, no bundler — open the HTML file |
| Backend | None | Everything client-side |
| Database | None | Content hardcoded in JS |
| Auth | None | No accounts |
| Hosting | GitHub Pages or Render (free) | Static files only |
| Launch Method | PWA | Installable, tap icon to open |
| Testing | Manual | Parent tests before calls |
| Compliance | Tier 0 | No data collected |

---

## 7. Features

### Feature 1: Project Skeleton + Start Screen (Start Here)

**What:** Create the HTML/CSS/JS file structure and the start screen with a level selector (Colors / Shapes / Categories) and a big "Play" button. Mobile-first layout, 64px touch targets.

**Why first:** Foundation for everything else. Nothing works without this.

**Acceptance:**
- [ ] Single index.html file opens in browser
- [ ] Start screen shows game title, level selector (3 options), and Play button
- [ ] Touch targets are at least 64px
- [ ] Looks good on mobile (375px width) and tablet
- [ ] Level selector defaults to Level 1 (Colors)

### Feature 2: Mission Card Display

**What:** After tapping Play, show a mission card with large text. Level 1 cards include a color swatch. Cards pull sequentially from the selected level's mission list with no repeats until all are used.

**Depends on:** Feature 1

**Acceptance:**
- [ ] Mission card displays with large, readable text
- [ ] Level 1 missions show a colored circle/swatch matching the color
- [ ] Levels 2 and 3 show text only
- [ ] Missions appear sequentially, no repeats until all used
- [ ] Shuffled order each session

### Feature 3: Timer

**What:** A gentle 20-second visual countdown that starts with each mission. No penalty when it expires — just a visual pulse or color change to signal time's up. The game does NOT auto-advance.

**Depends on:** Feature 2

**Acceptance:**
- [ ] Timer starts at 20 seconds when mission appears
- [ ] Visual countdown is clear but not stressful (progress bar, not a flashing clock)
- [ ] When timer hits 0, a gentle visual signal (pulse, color shift) — no alarm sound
- [ ] Game does not auto-advance or penalize when timer expires
- [ ] Timer resets on next mission

### Feature 4: Star Button + Animated Star Jar

**What:** A large Star button the parent taps to award a point. Star animates into a jar visual. Jar shows a number overlay of total stars. Button has a 2-3 second cooldown (grayed out) to prevent accidental rapid taps.

**Depends on:** Feature 2

**Acceptance:**
- [ ] Star button is large (64px+), clearly labeled
- [ ] Tapping triggers a star animation (star flies into jar)
- [ ] Jar visual fills up as stars accumulate
- [ ] Number overlay shows total star count
- [ ] Button grays out for 2-3 seconds after each tap
- [ ] Star count persists throughout session

### Feature 5: Session Flow (Next Mission + Done)

**What:** A "Next" button to advance to the next mission. A "Done" button to end the session and show a celebration screen with total stars and a fun visual (confetti, big number, etc.). Stars reset when starting a new session.

**Depends on:** Features 2, 3, 4

**Acceptance:**
- [ ] "Next" button loads next mission in sequence, resets timer
- [ ] "Done" button shows celebration screen
- [ ] Celebration screen displays total stars prominently
- [ ] Celebration screen has fun visual feedback (confetti, animation)
- [ ] "Play Again" button returns to start screen
- [ ] Stars reset on new session

### Feature 6: Level Switching Mid-Session

**What:** A small, unobtrusive button to change difficulty level during a session without resetting stars. Mission sequence resets for the new level.

**Depends on:** Feature 5

**Acceptance:**
- [ ] Level switcher visible but not prominent (parent-facing, not kid-facing)
- [ ] Changing level does not reset star count
- [ ] New level starts its own sequential mission list
- [ ] Transition is smooth, no jarring screen changes

### Feature 7: PWA Setup

**What:** Add a manifest.json and service worker so the app can be installed on phones and tablets. Users tap "Add to Home Screen" and get an app icon.

**Depends on:** Feature 5

**Acceptance:**
- [ ] manifest.json with app name, icons, theme color
- [ ] Service worker for offline caching
- [ ] App installable on iOS Safari and Android Chrome
- [ ] Opens full-screen (no browser chrome) when launched from home screen
- [ ] Works offline after first load

---

## 8. Content Lists

### Level 1 — Colors (with color swatches)

| Mission Text | Swatch Color |
|-------------|-------------|
| Find something RED! | #EF4444 |
| Find something BLUE! | #3B82F6 |
| Find something GREEN! | #22C55E |
| Find something YELLOW! | #EAB308 |
| Find something ORANGE! | #F97316 |
| Find something PURPLE! | #A855F7 |
| Find something WHITE! | #FFFFFF (with border) |
| Find something BLACK! | #171717 |
| Find something PINK! | #EC4899 |
| Find something BROWN! | #92400E |
| Find something GRAY! | #6B7280 |

### Level 2 — Shapes/Properties (text only)

Find something ROUND, SQUARE, LONG, TINY, FLAT, SOFT, BUMPY, BIG, HEAVY, SQUISHY, SMOOTH, POINTY, FUZZY, COLD, STRETCHY

### Level 3 — Categories (text only)

**Clothing:** SOCK, SHOE, HAT, JACKET, GLOVE, SCARF, BELT, SHIRT

**Around the house:** PILLOW, BLANKET, TOWEL, REMOTE CONTROL, KEY, WASHCLOTH, SPONGE, BAG, RUBBER BAND, MAGNET, TISSUE BOX

**Kitchen (safe items):** SPOON, CUP, PLATE, BOWL, NAPKIN, LID, WATER BOTTLE

**Toys/Play:** DINOSAUR, TRUCK, STUFFED ANIMAL, BALL, BLOCK, CRAYON, STICKER, PUZZLE PIECE, ACTION FIGURE, CAR

**Learning/Creative:** BOOK, PENCIL, BRUSH, PAPER, ENVELOPE, MARKER

**Body/Silly:** YOUR ELBOW, YOUR NOSE, YOUR TOES, A BELLY BUTTON

---

## 9. Cost Estimate

| Service | Monthly | Notes |
|---------|---------|-------|
| GitHub Pages | $0 | Free static hosting |
| **Total** | **$0** | |

---

## 10. Open Questions

All resolved during planning.

---

## 11. Future Ideas

- Sound effects (cheering when star awarded, drumroll for new mission)
- Custom mission input (grandparent types in a custom mission)
- Photo capture (Teddy takes a photo of what he found)
- Themed rounds (dinosaur hunt, kitchen adventure)
- Multiple players (cousins join with their own star count)
- Grandparent "challenge mode" (grandparent picks specific items)
- Seasonal content packs (holiday-themed missions)

---

## 12. Safety Rules for Content

All items in the mission database must be:
- **Safe:** No sharp, breakable, heavy, or hot items
- **Accessible:** Found in common areas (living room, bedroom, kitchen counters) — not garages, basements, or high shelves
- **Age-appropriate:** A nearly 4-year-old can identify and carry the item
- **Household-common:** Likely to exist in any family home

---

## Revision History

| Date | Change | Reason |
|------|--------|--------|
| 2026-02-07 | Created | Planning kickoff with Dad |
