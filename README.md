<div align="center">

<img src="public/icon.png" height="120">

# Quiz

**An Interactive Quiz Web Application**

[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)]()
[![Platform](https://img.shields.io/badge/Platform-Web-0078D6?style=for-the-badge)]()
[![Type](https://img.shields.io/badge/Type-Educational%20Project-FF6B35?style=for-the-badge)]()
[![Built With](https://img.shields.io/badge/Built%20With-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)]()
[![Bundler](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)]()

[About](#about) • [Features](#core-features) • [Getting Started](#getting-started) • [Deployment](#deployment)

---

## About

Quiz is an interactive quiz web application built with a monochrome. It is designed to help users test their knowledge across five academic subjects through a structured, level-based learning experience. Each subject offers a short reading passage before every question, encouraging users to learn as they play rather than simply guessing answers.

The project is built entirely with plain React (JSX, not TypeScript) and Vite, without relying on frameworks such as Next.js or TanStack. Routing is handled with `react-router-dom` using a hash-based router, which allows the application to be deployed safely as a static site without any additional server configuration.

---

## Getting Started

No account creation is required to use the application locally. Clone the repository and install the dependencies to begin:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
npm run preview   # optional, used to preview the production build locally
```

The production-ready output is generated in the `dist/` folder.

---

## Subjects Covered

Quiz organizes its content into five academic subjects, each with its own icon, illustration, and set of reading material:

| Subject | Description |
|---|---|
| Matematika | Numbers, formulas, and logical reasoning |
| Bahasa Indonesia | Grammar and literature |
| Bahasa Inggris | Grammar and vocabulary |
| Sejarah | Historical events |
| IPA | Natural sciences |

---

## Core Features

| Feature | Description |
|---|---|
| Five Subjects | Choose from five distinct academic subjects, each with its own set of questions |
| Four Difficulty Levels | Progress through Easy, Normal, Hard, and Very Hard, unlocked sequentially upon passing |
| Materi Reading | Every question is paired with a short reading passage to reinforce learning |
| Skip and Revisit | Questions can be skipped and answered later using the question map navigation |
| Progress Persistence | Pass status and progress are automatically saved to the browser's local storage |
| Result Summary | A results modal displays the final score, pass or fail status, and the next unlocked level |
| Materi Library | A separate section allows browsing subject material independently of the quiz |
| Pixel Visual Theme | A monochrome interface with pixelated panels, hard shadows, and cut corners |
| No Account Required | The application can be used freely without signing up or logging in |

---

## Application Flow

1. **Main Menu** (`/`) — the player enters a name and selects Start.
2. **Subject Selection** (`/subjects`) — five subject cards are presented, each with an icon.
3. **Difficulty Selection** (`/subjects/:subjectId`) — four levels are available: Easy, Normal, Hard, and Very Hard. A new level is unlocked only after the previous level has been passed. Pass status and progress are stored automatically in the browser's local storage on a per-device basis, so progress persists across page refreshes.
4. **Quiz** (`/quiz/:subjectId/:difficultyId`):
   - Each question begins with a short **Materi** passage, followed by a multiple-choice **Pertanyaan** with four options (A through D).
   - Questions may be skipped using the Skip button and answered later.
   - A Back button and a question map (a grid of question numbers) allow navigation between questions and answer changes.
   - A floating Finish button is available at any time. If any question remains unanswered, a confirmation prompt appears before the quiz is submitted.
   - Upon completion, a results modal displays the score, pass or fail status, and the next available level if the player has passed.

---

## Passing Criteria and Level Unlocking

The passing criteria are configured in `src/data/subjects.js`:

```js
export const PASS_RATIO = 0.73; // approximately 11 out of 15 correct answers
```

The `PASS_RATIO` value (ranging from 0 to 1) can be adjusted as needed. The `minCorrectToPass(totalQuestions)` function automatically calculates the minimum number of correct answers required based on the number of questions available in a given level.

---
</div>

## Managing Questions

All questions are stored in `src/data/questions/`, with one file per subject:

- `matematika.js`
- `bahasaIndonesia.js`
- `bahasaInggris.js`
- `sejarah.js`
- `ipa.js`

Each file exports four arrays of questions, corresponding to the four difficulty levels: `easy`, `normal`, `hard`, and `veryhard`. The format of a single question is as follows:

```js
{
  id: "mtk-e-9",              // a unique identifier, any format as long as it is not duplicated
  materi: "A short reading passage before the question...",
  pertanyaan: "The question text",
  opsi: ["Option A", "Option B", "Option C", "Option D"],
  jawaban: 1,                  // index of the correct option (0 = A, 1 = B, and so on)
}
```

Each level currently contains eight questions as a starter set, which can be expanded to fifteen or more as needed. New questions can be added directly to the relevant array without requiring changes elsewhere in the codebase, since the number of questions per level is handled dynamically. The progress bar, question map, and score calculation automatically adjust to match the number of questions present in each array.

---

## Project Structure

```
src/
  data/
    subjects.js          # list of subjects, difficulty levels, and passing ratio
    questionBank.js       # combines all question banks into a single source
    questions/             # question banks, one file per subject
    materi.js              # subject reading material definitions
    materiBank.js          # combines all subject reading material
  context/
    GameContext.jsx       # player name and progress state, persisted to local storage
  components/
    PixelButton.jsx
    PixelIcon.jsx          # pixel-style icon components (SVG, monochrome)
    Modal.jsx
    Confetti.jsx
    LoadingScreen.jsx
    BottomNav.jsx
    MateriInfoButton.jsx
  pages/
    MainMenu.jsx
    SubjectSelect.jsx
    DifficultySelect.jsx
    Quiz.jsx
    MateriSubjectSelect.jsx
    MateriDifficultySelect.jsx
    MateriDetail.jsx
  utils/
    storage.js             # local storage helper functions
  index.css                 # monochrome heme styling
```

---

<div align="center">

## Technology

| Layer | Technology |
|---|---|
| Frontend | React 19 (JSX) |
| Build Tool | Vite |
| Routing | react-router-dom (HashRouter) |
| Icons | lucide-react |
| Linting | oxlint |
| Data Persistence | Browser local storage |
| Hosting & Deployment | Vercel |

---

## Design Notes

The application uses a monochrome color theme, transitioning from dark to light gray, paired with pixelated panels and buttons. This includes thick borders, hard block shadows, and clipped pixel corners rather than rounded edges. Standard, readable typography (Plus Jakarta Sans) is used throughout the interface for legibility, while a pixel font (Press Start 2P) is reserved exclusively for the decorative "QUIZ" logo on the Main Menu.

---

## Disclaimer

Quiz is an independent educational project built for learning and practice purposes. The reading material and questions included in the application are intended for general educational use and may be modified, expanded, or corrected as needed.

---

*Built for learning.*

[Back to Top](#quiz)

</div>