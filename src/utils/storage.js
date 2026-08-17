import { SUBJECTS, DIFFICULTIES } from "../data/subjects.js";

const STORAGE_KEY = "quizpixel_save_v1";

function buildDefaultProgress() {
  const progress = {};
  SUBJECTS.forEach((subject) => {
    progress[subject.id] = {};
    DIFFICULTIES.forEach((diff, index) => {
      progress[subject.id][diff.id] = {
        unlocked: index === 0, // hanya Easy yang terbuka di awal
        passed: false,
        bestCorrect: 0,
        bestTotal: 0,
        attempts: 0,
      };
    });
  });
  return progress;
}

function buildDefaultSave() {
  return {
    playerName: "",
    progress: buildDefaultProgress(),
  };
}

export function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildDefaultSave();
    const parsed = JSON.parse(raw);
    const base = buildDefaultSave();
    // merge supaya kalau ada subject/level baru di data, tetap muncul
    return {
      playerName: parsed.playerName || "",
      progress: {
        ...base.progress,
        ...Object.fromEntries(
          Object.entries(base.progress).map(([subjectId, diffs]) => [
            subjectId,
            { ...diffs, ...(parsed.progress?.[subjectId] || {}) },
          ])
        ),
      },
    };
  } catch (e) {
    return buildDefaultSave();
  }
}

export function saveSave(save) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
  } catch (e) {
    // localStorage mungkin penuh/diblokir, abaikan saja agar app tetap jalan
  }
}

export function resetSave() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* noop */
  }
  return buildDefaultSave();
}
