import matematika from "./materi/matematika.js";
import bahasaIndonesia from "./materi/bahasaIndonesia.js";
import bahasaInggris from "./materi/bahasaInggris.js";
import sejarah from "./materi/sejarah.js";
import ipa from "./materi/ipa.js";
import { QUESTION_BANK } from "./questionBank.js";

// Peta subjectId -> { easy: [...blok], normal: [...blok], hard: [...blok], veryhard: [...blok] }
// Isi/format tiap blok materi dijelaskan lengkap di src/data/materi/matematika.js.
const MATERI_CONTENT = {
  matematika,
  "bahasa-indonesia": bahasaIndonesia,
  "bahasa-inggris": bahasaInggris,
  sejarah,
  ipa,
};

// Kalau materi manual untuk suatu subject+tingkat belum diisi (array kosong),
// otomatis dibuatkan 1 blok daftar poin dari field "materi" di bank soal,
// supaya halamannya tidak kosong sampai kamu isi manual di src/data/materi/.
function buildFallbackBlocks(subjectId, difficultyId) {
  const questions = QUESTION_BANK[subjectId]?.[difficultyId] ?? [];
  const seen = new Set();
  const items = [];
  questions.forEach((q) => {
    if (q.materi && !seen.has(q.materi)) {
      seen.add(q.materi);
      items.push(q.materi);
    }
  });
  if (items.length === 0) return [];
  return [{ type: "list", items }];
}

// Mengembalikan array blok materi siap-render untuk satu subject+tingkat kesulitan.
export function getMateri(subjectId, difficultyId) {
  const manual = MATERI_CONTENT[subjectId]?.[difficultyId];
  if (manual && manual.length > 0) return manual;
  return buildFallbackBlocks(subjectId, difficultyId);
}