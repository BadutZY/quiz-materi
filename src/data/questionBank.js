import matematika from "./questions/matematika.js";
import bahasaIndonesia from "./questions/bahasaIndonesia.js";
import bahasaInggris from "./questions/bahasaInggris.js";
import sejarah from "./questions/sejarah.js";
import ipa from "./questions/ipa.js";

// Peta subjectId -> { easy: [...], normal: [...], hard: [...], veryhard: [...] }
export const QUESTION_BANK = {
  matematika,
  "bahasa-indonesia": bahasaIndonesia,
  "bahasa-inggris": bahasaInggris,
  sejarah,
  ipa,
};

export function getQuestions(subjectId, difficultyId) {
  return QUESTION_BANK[subjectId]?.[difficultyId] ?? [];
}
