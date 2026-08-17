// Materi pembelajaran manual untuk Matematika, per tingkat kesulitan.
// Silakan edit / tambah isi array easy, normal, hard, veryhard di bawah ini.
//
// Setiap tingkat adalah ARRAY berisi "blok konten", ditampilkan berurutan dari atas ke bawah
// persis seperti urutan array-nya. Ada 4 jenis blok yang bisa dipakai:
//
// 1) Paragraf teks:
//    { type: "paragraph", text: "Penjelasan materinya di sini..." }
//
// 2) Judul kecil (untuk memecah materi jadi beberapa bagian):
//    { type: "heading", text: "Judul Sub-bagian" }
//
// 3) Gambar (opsional pakai caption/keterangan di bawah gambar):
//    { type: "image", src: "/images/materi/matematika/contoh.png", caption: "Keterangan gambar (opsional)" }
//    -> taruh file gambarnya di folder public/images/materi/... lalu isi path-nya di "src"
//
// 4) Daftar poin-poin:
//    { type: "list", items: ["Poin pertama", "Poin kedua", "Poin ketiga"] }
//
// 5) Kotak "Contoh" (boleh isi teks biasa ATAU beberapa poin):
//    { type: "example", title: "Contoh Soal", text: "Contoh tunggal dalam satu paragraf." }
//    atau
//    { type: "example", title: "Contoh", items: ["Contoh 1", "Contoh 2"] }
//
// Kalau untuk suatu tingkat kesulitan array-nya dikosongkan ( [] ), aplikasi otomatis
// menampilkan rangkuman sementara dari field "materi" pada soal (src/data/questions/matematika.js)
// supaya halamannya tidak kosong sampai kamu isi manual di sini.

// =====================================================================================
// EASY — Setara SD kelas rendah/menengah.
// =====================================================================================
const easy = [
  {
    type: "paragraph",
    text: "Selamat datang di level Easy! Di level ini kamu akan belajar dasar-dasar matematika yang jadi fondasi untuk semua materi berikutnya: nilai tempat bilangan, empat operasi hitung, bilangan genap/ganjil, pecahan sederhana, satuan pengukuran, dan bangun datar dasar. Baca pelan-pelan dan coba kerjakan sendiri setiap contoh soalnya sebelum melihat jawabannya, ya!",
  },

  { type: "heading", text: "1. Nilai Tempat Bilangan" },
  {
    type: "paragraph",
    text: "Setiap angka dalam suatu bilangan punya 'nilai tempat' yang berbeda-beda, tergantung posisinya. Memahami nilai tempat membantu kita membaca dan menghitung bilangan besar dengan benar.",
  },
  {
    type: "list",
    items: [
      "Satuan: posisi paling kanan (nilai × 1)",
      "Puluhan: posisi kedua dari kanan (nilai × 10)",
      "Ratusan: posisi ketiga dari kanan (nilai × 100)",
      "Ribuan: posisi keempat dari kanan (nilai × 1.000)",
    ],
  },
  {
    type: "example",
    title: "Contoh Nilai Tempat",
    text: "Pada bilangan 3.452: angka 3 bernilai 3.000 (ribuan), 4 bernilai 400 (ratusan), 5 bernilai 50 (puluhan), dan 2 bernilai 2 (satuan).",
  },

  { type: "heading", text: "2. Empat Operasi Hitung Dasar" },
  {
    type: "paragraph",
    text: "Ada 4 operasi hitung dasar dalam matematika, yaitu penjumlahan, pengurangan, perkalian, dan pembagian. Semua operasi lain di matematika dibangun dari 4 operasi ini.",
  },
  {
    type: "list",
    items: [
      "Penjumlahan (+): menggabungkan dua bilangan atau lebih menjadi satu jumlah total. Contoh: 3 + 4 = 7.",
      "Pengurangan (-): mencari selisih (perbedaan nilai) antara dua bilangan. Contoh: 10 - 4 = 6.",
      "Perkalian (×): penjumlahan berulang dari suatu bilangan. Contoh: 4 × 3 = 4 + 4 + 4 = 12.",
      "Pembagian (÷): membagi suatu bilangan menjadi beberapa bagian yang sama besar. Contoh: 12 ÷ 3 = 4.",
      "Urutan pengerjaan (jika ada beberapa operasi): kerjakan perkalian/pembagian dulu, baru penjumlahan/pengurangan, kecuali ada tanda kurung ( ) yang harus dikerjakan lebih dulu.",
    ],
  },
  {
    type: "example",
    title: "Contoh Soal Operasi Hitung",
    items: [
      "7 + 8 = 15",
      "20 - 12 = 8",
      "6 × 7 = 42",
      "36 ÷ 6 = 6",
      "100 - 45 = 55",
      "2 + 3 × 4 = 2 + 12 = 14 (perkalian dikerjakan dulu)",
      "(2 + 3) × 4 = 5 × 4 = 20 (kurung dikerjakan dulu)",
    ],
  },

  { type: "heading", text: "3. Bilangan Genap dan Ganjil" },
  {
    type: "paragraph",
    text: "Bilangan genap adalah bilangan yang habis dibagi 2 (sisa bagi = 0). Bilangan ganjil adalah bilangan yang jika dibagi 2 masih bersisa 1. Cara paling cepat mengenalinya adalah melihat angka terakhirnya.",
  },
  {
    type: "list",
    items: [
      "Bilangan genap selalu berakhiran 0, 2, 4, 6, atau 8. Contoh: 2, 4, 6, 8, 10, 12, 24, 100.",
      "Bilangan ganjil selalu berakhiran 1, 3, 5, 7, atau 9. Contoh: 1, 3, 5, 7, 9, 11, 25, 101.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "12 adalah bilangan genap karena 12 ÷ 2 = 6 (habis dibagi, angka terakhirnya 2). 15 adalah bilangan ganjil karena 15 ÷ 2 = 7 sisa 1 (angka terakhirnya 5).",
  },

  { type: "heading", text: "4. Pecahan Sederhana" },
  {
    type: "paragraph",
    text: "Pecahan adalah bagian dari suatu keseluruhan, ditulis dalam bentuk a/b, di mana a disebut pembilang (bagian atas) dan b disebut penyebut (bagian bawah). Pecahan bisa diubah ke bentuk desimal (koma) dan persen (%).",
  },
  {
    type: "list",
    items: [
      "Pecahan senilai: pecahan berbeda yang nilainya sama, didapat dengan mengalikan/membagi pembilang dan penyebut dengan angka yang sama. Contoh: 1/2 = 2/4 = 3/6.",
      "Mengubah pecahan ke desimal: bagi pembilang dengan penyebut. Contoh: 1/2 = 1 ÷ 2 = 0,5.",
      "Mengubah pecahan ke persen: kalikan pecahan tersebut dengan 100%.",
    ],
  },
  {
    type: "example",
    title: "Contoh Pecahan ke Persen",
    items: [
      "1/2 = 0,5 = 50%",
      "1/4 = 0,25 = 25%",
      "3/4 = 0,75 = 75%",
      "1/10 = 0,1 = 10%",
      "2/5 = 0,4 = 40%",
    ],
  },

  { type: "heading", text: "5. Satuan Panjang dan Berat" },
  {
    type: "paragraph",
    text: "Satuan pengukuran digunakan untuk mengukur panjang, berat, dan waktu dalam kehidupan sehari-hari. Setiap turun satu tingkat, nilainya dikali 10; setiap naik satu tingkat, nilainya dibagi 10.",
  },
  {
    type: "list",
    items: [
      "Satuan panjang (tangga km-hm-dam-m-dm-cm-mm): 1 meter (m) = 100 sentimeter (cm) = 1.000 milimeter (mm). 1 kilometer (km) = 1.000 meter (m).",
      "Satuan berat: 1 kilogram (kg) = 1.000 gram (gr). 1 ton = 1.000 kg.",
    ],
  },
  {
    type: "example",
    title: "Contoh Konversi Satuan",
    text: "2 meter = 200 cm (dikali 100, karena turun dari m ke cm). 3.000 gram = 3 kg (dibagi 1.000, karena naik dari gram ke kg).",
  },

  { type: "heading", text: "6. Bangun Datar Dasar: Persegi & Persegi Panjang" },
  {
    type: "paragraph",
    text: "Persegi adalah bangun datar dengan 4 sisi yang sama panjang dan 4 sudut siku-siku (90°). Persegi panjang memiliki 2 pasang sisi sejajar yang sama panjang (panjang dan lebar), dengan 4 sudut siku-siku juga.",
  },
  {
    type: "list",
    items: [
      "Luas persegi = sisi × sisi",
      "Keliling persegi = 4 × sisi",
      "Luas persegi panjang = panjang × lebar",
      "Keliling persegi panjang = 2 × (panjang + lebar)",
    ],
  },
  {
    type: "image",
    src: "/images/subjects/matematika.png",
    caption: "Empat operasi hitung dasar: +, −, ×, dan ÷",
  },
  {
    type: "example",
    title: "Contoh Soal Bangun Datar",
    items: [
      "Luas persegi dengan sisi 5 cm = 5 × 5 = 25 cm²",
      "Keliling persegi dengan sisi 5 cm = 4 × 5 = 20 cm",
      "Luas persegi panjang (p = 8 cm, l = 5 cm) = 8 × 5 = 40 cm²",
      "Keliling persegi panjang (p = 8 cm, l = 5 cm) = 2 × (8+5) = 26 cm",
    ],
  },
];

// =====================================================================================
// NORMAL — Setara SD kelas tinggi/SMP awal.
// =====================================================================================
const normal = [
  {
    type: "paragraph",
    text: "Di level Normal, kamu akan mulai belajar konsep yang sedikit lebih menantang: FPB & KPK, pecahan campuran, aljabar dasar (persamaan dengan variabel), bilangan berpangkat & akar, luas berbagai bangun datar, keliling & luas lingkaran, volume bangun ruang, dan statistika dasar. Pastikan materi Easy sudah kamu kuasai dulu sebelum lanjut ke sini.",
  },

  { type: "heading", text: "1. FPB dan KPK" },
  {
    type: "paragraph",
    text: "FPB (Faktor Persekutuan Terbesar) adalah bilangan terbesar yang bisa membagi habis dua bilangan atau lebih. KPK (Kelipatan Persekutuan Terkecil) adalah bilangan terkecil yang merupakan kelipatan dari dua bilangan atau lebih. Cara mudah mencarinya adalah dengan faktorisasi prima (menguraikan bilangan menjadi perkalian bilangan-bilangan prima).",
  },
  {
    type: "list",
    items: [
      "Cara cari FPB: kalikan faktor prima yang SAMA, ambil pangkat TERKECIL.",
      "Cara cari KPK: kalikan SEMUA faktor prima yang muncul, ambil pangkat TERBESAR.",
      "FPB berguna untuk menyederhanakan pecahan; KPK berguna untuk menyamakan penyebut pecahan.",
    ],
  },
  {
    type: "example",
    title: "Contoh FPB & KPK",
    items: [
      "12 = 2² × 3, 18 = 2 × 3² → FPB(12, 18) = 2 × 3 = 6",
      "4 = 2², 6 = 2 × 3 → KPK(4, 6) = 2² × 3 = 12",
      "24 = 2³ × 3, 36 = 2² × 3² → FPB(24, 36) = 2² × 3 = 12",
    ],
  },

  { type: "heading", text: "2. Pecahan Campuran, Penjumlahan & Pengurangan Pecahan" },
  {
    type: "paragraph",
    text: "Pecahan campuran adalah gabungan bilangan bulat dan pecahan biasa (contoh: 2 1/3). Untuk menjumlahkan atau mengurangkan pecahan, penyebutnya harus disamakan terlebih dahulu menggunakan KPK.",
  },
  {
    type: "example",
    title: "Contoh Operasi Pecahan",
    text: "1/2 + 1/3 = 3/6 + 2/6 = 5/6 (penyebut disamakan jadi 6, yaitu KPK dari 2 dan 3).",
  },

  { type: "heading", text: "3. Aljabar Dasar: Persamaan Linear Satu Variabel" },
  {
    type: "paragraph",
    text: "Persamaan linear satu variabel adalah kalimat matematika yang memiliki satu huruf (variabel, misalnya x) berpangkat satu. Untuk menyelesaikannya, kita mencari nilai x yang membuat persamaan itu benar, dengan cara memindahkan angka ke ruas yang berlawanan.",
  },
  {
    type: "list",
    items: [
      "Aturan pindah ruas: kalau sebuah angka pindah ruas, operasinya berubah jadi kebalikannya (+ menjadi -, × menjadi ÷, dan sebaliknya).",
      "Langkah 1: kumpulkan semua suku yang mengandung variabel (x) di satu ruas.",
      "Langkah 2: kumpulkan semua angka biasa (konstanta) di ruas lainnya.",
      "Langkah 3: bagi kedua ruas dengan koefisien x untuk mendapatkan nilai x.",
    ],
  },
  {
    type: "example",
    title: "Contoh Persamaan Linear",
    items: [
      "3x = 27 → x = 27 ÷ 3 = 9",
      "x + 5 = 12 → x = 12 - 5 = 7",
      "5x - 3 = 12 → 5x = 12 + 3 = 15 → x = 15 ÷ 5 = 3",
    ],
  },

  { type: "heading", text: "4. Bilangan Berpangkat dan Akar Kuadrat" },
  {
    type: "paragraph",
    text: "Bilangan berpangkat (misalnya aⁿ) menunjukkan perkalian berulang dari bilangan a sebanyak n kali. Akar kuadrat (√) adalah kebalikan (invers) dari pangkat dua — mencari bilangan yang jika dikalikan dirinya sendiri menghasilkan angka di dalam akar.",
  },
  {
    type: "example",
    title: "Contoh Pangkat & Akar",
    items: [
      "2⁵ = 2×2×2×2×2 = 32",
      "√81 = 9, karena 9 × 9 = 81",
      "√64 = 8, karena 8 × 8 = 64",
      "3³ = 3×3×3 = 27",
    ],
  },

  { type: "heading", text: "5. Luas dan Keliling Bangun Datar Lain" },
  {
    type: "paragraph",
    text: "Selain persegi dan persegi panjang, ada bangun datar lain yang sering muncul: segitiga, jajar genjang, trapesium, dan lingkaran. Masing-masing punya rumus luas dan keliling sendiri.",
  },
  {
    type: "list",
    items: [
      "Luas segitiga = 1/2 × alas × tinggi",
      "Luas jajar genjang = alas × tinggi",
      "Luas trapesium = 1/2 × (sisi sejajar 1 + sisi sejajar 2) × tinggi",
      "Luas lingkaran = π × r² (π ≈ 3,14 atau 22/7, r = jari-jari)",
      "Keliling lingkaran = 2 × π × r, atau π × d (d = diameter)",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    items: [
      "Segitiga alas=10 cm, tinggi=6 cm → luas = 1/2 × 10 × 6 = 30 cm²",
      "Lingkaran jari-jari 7 cm → luas = 22/7 × 7 × 7 = 154 cm²",
      "Lingkaran jari-jari 7 cm → keliling = 2 × 22/7 × 7 = 44 cm",
    ],
  },

  { type: "heading", text: "6. Bangun Ruang Dasar: Kubus dan Balok" },
  {
    type: "paragraph",
    text: "Bangun ruang adalah bangun 3 dimensi yang memiliki volume (isi). Volume kubus dihitung dengan rumus sisi × sisi × sisi (sisi³). Volume balok dihitung dengan rumus panjang × lebar × tinggi.",
  },
  {
    type: "example",
    title: "Contoh Volume",
    text: "Kubus dengan sisi 4 cm → volume = 4 × 4 × 4 = 64 cm³. Balok p=5, l=3, t=2 → volume = 5×3×2 = 30 cm³.",
  },

  { type: "heading", text: "7. Statistika Dasar: Rata-rata (Mean)" },
  {
    type: "paragraph",
    text: "Statistika adalah cabang matematika yang mempelajari cara mengumpulkan dan mengolah data. Rata-rata (mean) adalah ukuran yang paling sering dipakai, dihitung dengan menjumlahkan semua data lalu membaginya dengan banyaknya data.",
  },
  {
    type: "example",
    title: "Contoh Rata-rata",
    text: "Data: 4, 6, 8, 10, 12. Jumlah = 40, banyak data = 5. Rata-rata = 40 ÷ 5 = 8.",
  },
];

// =====================================================================================
// HARD — Setara SMP akhir/SMA awal.
// =====================================================================================
const hard = [
  {
    type: "paragraph",
    text: "Level Hard mulai membahas materi khas SMP akhir sampai SMA: pemfaktoran aljabar & persamaan kuadrat, teorema Pythagoras, trigonometri, logaritma, matriks, barisan & deret aritmetika, serta relasi dan fungsi. Pastikan kamu sudah menguasai materi Easy dan Normal sebelum lanjut ke sini, karena banyak rumus di sini memakai konsep aljabar dasar.",
  },

  { type: "heading", text: "1. Pemfaktoran Bentuk Aljabar" },
  {
    type: "paragraph",
    text: "Pemfaktoran adalah mengubah bentuk penjumlahan/pengurangan suku aljabar menjadi bentuk perkalian. Ini adalah keterampilan dasar yang dipakai terus di persamaan kuadrat.",
  },
  {
    type: "list",
    items: [
      "Faktor persekutuan: ax + ay = a(x + y)",
      "Selisih dua kuadrat: a² - b² = (a - b)(a + b)",
      "Bentuk x² + bx + c = (x + p)(x + q), dengan syarat p × q = c dan p + q = b",
    ],
  },
  {
    type: "example",
    title: "Contoh Pemfaktoran",
    items: [
      "6x + 9 = 3(2x + 3)",
      "x² - 9 = (x - 3)(x + 3)",
      "x² + 5x + 6 = (x + 2)(x + 3), karena 2×3=6 dan 2+3=5",
    ],
  },

  { type: "heading", text: "2. Persamaan Kuadrat" },
  {
    type: "paragraph",
    text: "Persamaan kuadrat berbentuk ax² + bx + c = 0 (dengan a ≠ 0). Salah satu cara menyelesaikannya adalah dengan pemfaktoran, yaitu mengubah bentuk ax² + bx + c menjadi perkalian dua faktor (x - p)(x - q) = 0, sehingga akar-akarnya adalah x = p atau x = q. Cara lain adalah memakai rumus ABC (rumus kuadrat).",
  },
  {
    type: "list",
    items: [
      "Rumus ABC: x = (-b ± √(b² - 4ac)) / 2a",
      "Nilai b² - 4ac disebut Diskriminan (D). Jika D > 0, ada 2 akar berbeda; jika D = 0, ada 1 akar kembar; jika D < 0, tidak ada akar real.",
    ],
  },
  {
    type: "example",
    title: "Contoh Persamaan Kuadrat",
    items: [
      "x² - 5x + 6 = 0 → difaktorkan menjadi (x - 2)(x - 3) = 0 → x = 2 atau x = 3",
      "x² - 7x + 10 = 0 → (x - 2)(x - 5) = 0 → x = 2 atau x = 5",
    ],
  },

  { type: "heading", text: "3. Teorema Pythagoras" },
  {
    type: "paragraph",
    text: "Pada segitiga siku-siku, kuadrat sisi miring (hipotenusa, c — sisi terpanjang di depan sudut siku-siku) sama dengan jumlah kuadrat kedua sisi siku-sikunya: c² = a² + b². Rumus ini HANYA berlaku untuk segitiga siku-siku.",
  },
  {
    type: "list",
    items: [
      "Mencari sisi miring: c = √(a² + b²)",
      "Mencari salah satu sisi siku-siku: a = √(c² - b²)",
      "Tripel Pythagoras yang sering muncul (hafalkan): 3-4-5, 6-8-10, 5-12-13",
    ],
  },
  {
    type: "example",
    title: "Contoh Pythagoras",
    text: "Segitiga siku-siku dengan sisi a = 3 dan b = 4. Maka c = √(3² + 4²) = √(9+16) = √25 = 5.",
  },

  { type: "heading", text: "4. Trigonometri: Sudut Istimewa" },
  {
    type: "paragraph",
    text: "Trigonometri mempelajari hubungan sudut dan sisi pada segitiga siku-siku, dengan fungsi utama sin (sinus), cos (cosinus), dan tan (tangen). Nilai-nilai untuk sudut istimewa (0°, 30°, 45°, 60°, 90°) sebaiknya dihafalkan karena sangat sering muncul di soal.",
  },
  {
    type: "list",
    items: [
      "sin θ = sisi depan / sisi miring",
      "cos θ = sisi samping / sisi miring",
      "tan θ = sisi depan / sisi samping = sin θ / cos θ",
      "sin 0° = 0, cos 0° = 1, tan 0° = 0",
      "sin 30° = 1/2, cos 30° = √3/2, tan 30° = √3/3",
      "sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1",
      "sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3",
      "sin 90° = 1, cos 90° = 0, tan 90° = tak terdefinisi",
    ],
  },

  { type: "heading", text: "5. Logaritma" },
  {
    type: "paragraph",
    text: "Logaritma adalah kebalikan (invers) dari perpangkatan. Bentuk ᵃlog b = c artinya aᶜ = b (a disebut basis). Logaritma basis 10 biasa ditulis 'log' saja tanpa menuliskan basisnya.",
  },
  {
    type: "list",
    items: [
      "ᵃlog a = 1 (basis sama dengan angkanya, hasilnya selalu 1)",
      "ᵃlog 1 = 0 (log dari 1 selalu 0, berapapun basisnya)",
      "ᵃlog (x × y) = ᵃlog x + ᵃlog y",
    ],
  },
  {
    type: "example",
    title: "Contoh Logaritma",
    items: [
      "log 100 = 2, karena 10² = 100",
      "log 1000 = 3, karena 10³ = 1000",
    ],
  },

  { type: "heading", text: "6. Matriks Dasar" },
  {
    type: "paragraph",
    text: "Matriks adalah susunan bilangan dalam bentuk baris dan kolom, biasa ditulis dengan tanda kurung siku. Ukuran matriks disebut ordo (baris × kolom). Determinan matriks ordo 2×2 berbentuk [[a,b],[c,d]] dihitung dengan rumus ad - bc, dan hanya bisa dihitung untuk matriks persegi (baris = kolom).",
  },
  {
    type: "example",
    title: "Contoh Determinan",
    items: [
      "Matriks [[2,3],[1,4]] → determinan = (2×4) - (3×1) = 8 - 3 = 5",
      "Matriks [[1,2],[3,4]] → determinan = (1×4) - (2×3) = 4 - 6 = -2",
    ],
  },

  { type: "heading", text: "7. Barisan dan Deret Aritmetika" },
  {
    type: "paragraph",
    text: "Barisan aritmetika adalah barisan bilangan dengan selisih (beda, disimbolkan b) tetap antar suku berurutan. Deret aritmetika adalah jumlah dari suku-suku barisan aritmetika.",
  },
  {
    type: "list",
    items: [
      "Suku ke-n: Un = a + (n - 1) × b, dengan a = suku pertama, b = beda",
      "Jumlah n suku pertama: Sn = n/2 × (2a + (n-1)b)",
    ],
  },
  {
    type: "example",
    title: "Contoh Barisan Aritmetika",
    text: "Barisan 2, 5, 8, 11, ... memiliki a = 2 dan b = 3. Suku ke-10 = 2 + (10-1)×3 = 2 + 27 = 29.",
  },

  { type: "heading", text: "8. Sifat Sudut pada Segitiga" },
  {
    type: "paragraph",
    text: "Jumlah ketiga sudut dalam segitiga apa pun (segitiga siku-siku, sama sisi, sama kaki, atau sembarang) selalu tetap, yaitu 180°. Sifat ini berguna untuk mencari sudut yang belum diketahui jika dua sudut lainnya sudah diketahui.",
  },
];

// =====================================================================================
// VERY HARD — Setara SMA/SMK tingkat akhir.
// =====================================================================================
const veryhard = [
  {
    type: "paragraph",
    text: "Level Very Hard membahas materi kalkulus dan matematika lanjutan khas kelas XI-XII SMA/SMK: limit, turunan (diferensial), integral, identitas trigonometri, peluang (kombinatorika), statistika lanjut, deret geometri, matriks lanjut, dan fungsi. Materi ini butuh pemahaman kuat dari level-level sebelumnya, terutama aljabar dan trigonometri dasar.",
  },

  { type: "heading", text: "1. Limit Fungsi" },
  {
    type: "paragraph",
    text: "Limit menggambarkan nilai yang didekati suatu fungsi ketika variabelnya mendekati suatu titik tertentu, walaupun fungsi itu sendiri belum tentu terdefinisi tepat di titik itu. Jika substitusi langsung menghasilkan bentuk 0/0 (tak tentu), fungsinya harus difaktorkan dulu sebelum disubstitusi.",
  },
  {
    type: "list",
    items: [
      "Limit trigonometri penting yang wajib dihafal: lim x→0 (sin x / x) = 1",
      "Jika hasil substitusi 0/0, faktorkan pembilang & penyebut, coret faktor yang sama, baru substitusi ulang.",
    ],
  },
  {
    type: "example",
    title: "Contoh Limit",
    items: [
      "lim x→0 (sin x / x) = 1",
      "lim x→2 (x² - 4)/(x - 2) = lim x→2 (x + 2) = 2 + 2 = 4",
    ],
  },

  { type: "heading", text: "2. Turunan (Diferensial)" },
  {
    type: "paragraph",
    text: "Turunan (derivatif) menunjukkan laju perubahan suatu fungsi, atau bisa dibayangkan sebagai kemiringan garis singgung pada grafik fungsi di suatu titik. Untuk fungsi berbentuk xⁿ, aturan turunannya adalah: turunan dari xⁿ = n·x⁽ⁿ⁻¹⁾ (disebut aturan pangkat).",
  },
  {
    type: "list",
    items: [
      "Turunan konstanta (angka biasa tanpa variabel) selalu = 0",
      "Turunan dari ax (fungsi linear) = a (konstanta koefisiennya sendiri)",
      "Turunan dijumlahkan suku per suku: turunan dari (f(x) + g(x)) = turunan f(x) + turunan g(x)",
    ],
  },
  {
    type: "example",
    title: "Contoh Turunan",
    items: [
      "Turunan dari x² = 2x",
      "Turunan dari x³ = 3x²",
      "Turunan dari 5x = 5",
      "Turunan dari 7 (konstanta) = 0",
    ],
  },

  { type: "heading", text: "3. Integral" },
  {
    type: "paragraph",
    text: "Integral adalah kebalikan (invers) dari turunan, sering digunakan untuk mencari luas daerah di bawah kurva. Untuk fungsi xⁿ, rumus integral tak tentunya adalah: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, dengan C adalah konstanta integrasi (karena turunan dari konstanta selalu 0, jadi saat 'dibalik' kita tidak tahu konstanta aslinya).",
  },
  {
    type: "example",
    title: "Contoh Integral",
    items: [
      "∫2x dx = 2 × x²/2 + C = x² + C",
      "∫x dx = x²/2 + C",
    ],
  },

  { type: "heading", text: "4. Identitas dan Operasi Trigonometri Lanjut" },
  {
    type: "paragraph",
    text: "Nilai-nilai sudut istimewa trigonometri (sin, cos, tan) bisa dijumlahkan, dikurangkan, atau dioperasikan seperti bilangan biasa setelah nilai masing-masing dihitung dari tabel sudut istimewa yang sudah dipelajari di level Hard.",
  },
  {
    type: "list",
    items: [
      "Identitas dasar: sin²θ + cos²θ = 1",
      "tan θ = sin θ / cos θ",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "cos(60°) + sin(30°) = 1/2 + 1/2 = 1.",
  },

  { type: "heading", text: "5. Peluang (Probabilitas)" },
  {
    type: "paragraph",
    text: "Peluang (probabilitas) suatu kejadian dihitung dengan rumus: P(A) = banyaknya kejadian yang diharapkan (n(A)) ÷ banyaknya seluruh kemungkinan/ruang sampel (n(S)). Nilai peluang selalu berada di antara 0 (mustahil terjadi) dan 1 (pasti terjadi).",
  },
  {
    type: "example",
    title: "Contoh Peluang",
    items: [
      "Peluang munculnya angka genap pada satu kali lemparan dadu (angka genap: 2, 4, 6 dari total 6 sisi) = 3/6 = 1/2",
      "Peluang munculnya angka 6 pada satu kali lemparan dadu = 1/6",
    ],
  },

  { type: "heading", text: "6. Statistika Lanjut: Median dan Modus" },
  {
    type: "paragraph",
    text: "Selain rata-rata (mean), ada dua ukuran pemusatan data lain yang penting: median dan modus.",
  },
  {
    type: "list",
    items: [
      "Median: nilai tengah data setelah diurutkan dari kecil ke besar.",
      "Modus: nilai yang paling sering muncul dalam sekumpulan data.",
    ],
  },
  {
    type: "example",
    title: "Contoh Median & Modus",
    text: "Data: 3, 3, 5, 7, 7, 7, 9 (sudah terurut). Median (nilai tengah) = 7. Modus (paling sering muncul) = 7, karena muncul 3 kali.",
  },

  { type: "heading", text: "7. Deret Geometri" },
  {
    type: "paragraph",
    text: "Deret geometri adalah barisan bilangan dengan rasio (perbandingan tetap, disimbolkan r) antar suku berurutan, didapat dari suku sesudahnya dibagi suku sebelumnya.",
  },
  {
    type: "list",
    items: [
      "Suku ke-n: Un = a × r⁽ⁿ⁻¹⁾, dengan a = suku pertama, r = rasio",
      "Jumlah n suku pertama (untuk r ≠ 1): Sn = a × (rⁿ - 1)/(r - 1)",
    ],
  },
  {
    type: "example",
    title: "Contoh Deret Geometri",
    text: "Deret 2, 6, 18, ... memiliki a = 2 dan r = 3 (6÷2=3, 18÷6=3). Suku ke-5 = 2 × 3⁴ = 2 × 81 = 162.",
  },

  { type: "heading", text: "8. Faktorial, Matriks Identitas, dan Fungsi" },
  {
    type: "list",
    items: [
      "Faktorial n (ditulis n!) adalah hasil kali semua bilangan bulat positif dari 1 sampai n. Contoh: 5! = 5×4×3×2×1 = 120.",
      "Matriks identitas ordo 2 adalah [[1,0],[0,1]], yaitu matriks dengan angka 1 di diagonal utama dan 0 di elemen lainnya. Matriks identitas dikalikan matriks apa pun hasilnya matriks itu sendiri.",
      "Fungsi linear f(x) = ax + b dihitung dengan memasukkan nilai x ke tempat variabelnya. Contoh: f(x) = 3x + 2, maka f(4) = 3(4)+2 = 12+2 = 14.",
    ],
  },
];

export default { easy, normal, hard, veryhard };