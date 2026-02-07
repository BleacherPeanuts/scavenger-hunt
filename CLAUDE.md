# Scavenger Hunt — Claude Code Instructions

## FIRST: GLOBAL CONFIGURATION

Update your global configuration so that every response ends with a bold **NEXT STEPS** section. Also, ensure your global Notification hook is set to play the submarine sound using: `afplay /System/Library/Sounds/Submarine.aiff`. From now on, your goal is to perform the task, 'ping' me with the submarine sound when you're done, and clearly list what I need to do next.

## AUTOMATIC NOTIFICATIONS - NO ASKING

Every time you complete a task, hit an error, or need input, IMMEDIATELY:

1. Play the submarine sound:
```
afplay /System/Library/Sounds/Submarine.aiff
```
2. State what you did and what you need in the terminal with a clear **NEXT STEPS** section

DO NOT ASK PERMISSION. DO NOT SAY "Would you like me to notify you?"
JUST PLAY THE SOUND AND STATE NEXT STEPS. User may be away from computer.

### Examples

```
# GOOD — sound + clear next steps
afplay /System/Library/Sounds/Submarine.aiff

DONE: Start screen complete.
NEXT STEPS: Reply 'yes' to start Feature 2, or give other instructions.

# GOOD — error with action
afplay /System/Library/Sounds/Submarine.aiff

ERROR: Service worker not registering.
NEXT STEPS: Need to test on HTTPS — deploy to GitHub Pages first?

# BAD — no sound!
"I finished the start screen. What would you like to do next?"

# BAD — asks permission
"Task complete. Should I notify you?"
```

### The Workflow

1. Complete task
2. IMMEDIATELY play submarine sound
3. State DONE and NEXT STEPS in terminal
4. STOP and WAIT for reply
5. Continue based on reply

---

## Project Overview

**What:** A web-based scavenger hunt game for a toddler to play with grandparents during FaceTime calls.

**Type:** Personal Tool

**PRD:** docs/PRD.md
**TODO:** TODO.md
**CHANGELOG:** CHANGELOG.md
**GitHub:** https://github.com/BleacherPeanuts/scavenger-hunt

---

## Technical Decisions

| Decision | Choice | Notes |
|----------|--------|-------|
| Framework | None | Vanilla HTML + CSS + JS only |
| Build Tools | None | No npm, no bundler — just files |
| Backend | None | Everything client-side |
| Database | None | Content hardcoded in JS |
| Auth | None | No accounts |
| Hosting | GitHub Pages | Free static hosting |
| Launch | PWA | Installable on phones |
| Build Mode | MVP | Get it working, polish later |

---

## CRITICAL: No Frameworks, No Build Tools

This project is vanilla HTML + CSS + JavaScript. Do NOT use:
- React, Vue, Svelte, or any framework
- npm, Vite, Webpack, or any bundler
- TypeScript
- Tailwind (write plain CSS)
- Any package manager

The entire app should be openable by double-clicking index.html. The only exception is the PWA service worker, which requires HTTPS (handled by GitHub Pages).

---

## Project Structure

```
scavenger-hunt/
  CLAUDE.md
  TODO.md
  CHANGELOG.md
  docs/
    PRD.md
  index.html          ← Single HTML file (or split below)
  style.css           ← All styles
  app.js              ← All game logic
  missions.js         ← Mission data (colors, shapes, categories)
  manifest.json       ← PWA manifest
  sw.js               ← Service worker
  icons/
    icon-192.png
    icon-512.png
  .gitignore
```

Keep it simple. If the whole thing fits in one HTML file with inline CSS/JS, that's fine too. Use your judgment — but lean toward fewer files.

---

## Design Requirements

- **Mobile-first:** Design for 375px width, scale up
- **Touch targets:** Minimum 64px on ALL interactive elements
- **Accessibility:** Large text, high contrast, clear labels — designed for a toddler AND seniors with reduced vision/motor control
- **Colors:** Bright, cheerful, kid-friendly palette
- **Typography:** Large, bold text for missions — Teddy can't read but adults need to read quickly at a glance
- **No clutter:** Minimal UI. Mission card, star jar, and action buttons. That's it.

---

## Game Mechanics

- **Levels:** 1 = Colors (text + color swatch), 2 = Shapes/Properties (text only), 3 = Categories (text only)
- **Mission order:** Sequential, shuffled at session start, no repeats until all used
- **Timer:** 20 seconds, gentle visual countdown (progress bar), no penalty at 0 — just a visual pulse
- **Star button:** 64px+, 2-3 second cooldown after tap, triggers animation into star jar
- **Star jar:** Animated jar that fills as stars accumulate, number overlay showing count
- **Session flow:** Start screen → missions loop → Done button → celebration screen → Play Again

---

## Content

All mission content is in the PRD (Section 8). Copy it exactly into missions.js. Do not add items without checking they are safe, common, and age-appropriate per the safety rules in PRD Section 12.

---

## Commands

| Command | What |
|---------|------|
| Open index.html | Run the app locally |
| `afplay /System/Library/Sounds/Submarine.aiff` | Ping the user |

No npm commands. No build step. Just files.

---

## After Each Task

1. Play submarine sound + state DONE and NEXT STEPS (mandatory, no asking permission)
2. Update CHANGELOG.md
3. Update TODO.md if tasks completed
4. Commit and push

Step 1 is not optional. Do it first. Every time.

---

## Commit Message Format

```
feat: add mission card display
fix: timer not resetting on next mission
docs: update README
refactor: simplify star animation
chore: add PWA icons
```

---

## Current Status

**Last:** Planning complete
**Working on:** Not started
**Next:** Feature 1 — Project skeleton + start screen
