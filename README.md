# ⚽ KickStats

KickStats is a lightweight application designed for soccer coaches to manage team rosters, record post-game statistics quickly, and track player performance over a season.

The goal of KickStats is to make **stat entry fast**, **data easy to understand**, and **coaching workflows simple** — without unnecessary complexity.

---

## 🚀 Features

### Current (Planned / In Progress)
- Team roster management
  - Add, edit, and remove players
  - Jersey number and position tracking
- Game management
  - Create games with date and opponent
- Post-game stat entry
  - Goals
  - Assists
  - Shots
  - Minutes played
  - Discipline (yellow/red cards)
- Player stat summaries
  - Per-game stats
  - Season totals

---

## 🧭 Project Vision

KickStats is being built with a **coach-first mindset**:
- Minimal typing
- Fast post-game data entry
- Clear, readable stats
- Scalable design for future features

While the initial focus is soccer, the architecture is designed to allow expansion into:
- Multiple teams
- Multiple seasons
- Advanced analytics
- Additional sports

---

## 🗂️ Data Model (Conceptual)

The app is structured around three core entities:

- **Player**
  - id
  - name
  - jerseyNumber
  - position

- **Game**
  - id
  - date
  - opponent

- **GameStats**
  - playerId
  - gameId
  - goals
  - assists
  - shots
  - minutesPlayed
  - yellowCards
  - redCards

This separation keeps data clean, flexible, and easy to scale.

---

## 🛠️ Tech Stack

Editor: Windsurf
Platform: iOS (via Xcode toolchain)
Framework: React Native
Language: TypeScript
Runtime: Node.js

Planned goals for the tech stack:
- Simple local-first storage
- Clear separation of data, logic, and UI
- Easy transition to cloud storage in the future

---

## 📌 Roadmap

### v0.1 – Core Coach Workflow
- [ ] Create and manage roster
- [ ] Create games
- [ ] Enter post-game stats
- [ ] View per-player totals

### v0.2 – Quality of Life
- [ ] Edit/delete games
- [ ] Improved stat entry UI
- [ ] Data validation and error handling

### v0.3 – Insights
- [ ] Season summaries
- [ ] Player comparison views
- [ ] Export stats (CSV/PDF)

### Future Ideas
- Multiple teams
- Cloud sync
- User accounts
- Read-only parent/player views
- Support for additional sports

---

## 🤝 Contributing

KickStats is currently a solo project.  
Contributions may be welcomed in the future once the core feature set is stable.

---

## 📄 License

License to be determined.

---

## 🏁 Status

KickStats is under active development.
This repository represents the early stages of the project and will evolve over time.

