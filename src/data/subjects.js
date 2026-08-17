// Daftar 5 mata pelajaran yang tersedia di quiz ini.
// "icon" mengacu pada key komponen ikon pixel di src/components/PixelIcon.jsx (dipakai sebagai fallback).
// "image" adalah path gambar mata pelajaran di folder public/images/subjects/.
export const SUBJECTS = [
  { id: "matematika", name: "Matematika", icon: "math", image: "/images/subjects/matematika.png", tagline: "Angka, rumus & logika" },
  { id: "bahasa-indonesia", name: "Bahasa Indonesia", icon: "bookId", image: "/images/subjects/bahasa-indonesia.png", tagline: "Tata bahasa & sastra" },
  { id: "bahasa-inggris", name: "Bahasa Inggris", icon: "letterA", image: "/images/subjects/bahasa-inggris.png", tagline: "Grammar & vocabulary" },
  { id: "sejarah", name: "Sejarah", icon: "landmark", image: "/images/subjects/sejarah.png", tagline: "Peristiwa masa lampau" },
  { id: "ipa", name: "IPA", icon: "flask", image: "/images/subjects/ipa.png", tagline: "Ilmu Pengetahuan Alam" },
];

// Urutan tingkat kesulitan menentukan urutan pembukaan level (unlock).
export const DIFFICULTIES = [
  { id: "easy", name: "Easy", short: "EZ" },
  { id: "normal", name: "Normal", short: "NM" },
  { id: "hard", name: "Hard", short: "HD" },
  { id: "veryhard", name: "Very Hard", short: "VH" },
];

// Ambang kelulusan: minimal 73% soal benar (≈ 11 dari 15 soal) untuk lolos & membuka level berikutnya.
// Ubah nilai ini jika ingin kriteria kelulusan yang berbeda.
export const PASS_RATIO = 0.73;

export function getSubject(id) {
  return SUBJECTS.find((s) => s.id === id);
}

export function getDifficulty(id) {
  return DIFFICULTIES.find((d) => d.id === id);
}

export function getDifficultyIndex(id) {
  return DIFFICULTIES.findIndex((d) => d.id === id);
}

// Jumlah soal minimal benar untuk lulus, dibulatkan ke atas.
export function minCorrectToPass(totalQuestions) {
  return Math.ceil(totalQuestions * PASS_RATIO);
}