// Materi pembelajaran manual untuk Bahasa Inggris, per tingkat kesulitan.
// Lihat src/data/materi/matematika.js untuk penjelasan lengkap & contoh semua jenis blok
// (paragraph, heading, image, list, example).
//
// Selama array di bawah masih kosong ( [] ), aplikasi otomatis menampilkan rangkuman
// sementara dari field "materi" pada soal (src/data/questions/bahasaInggris.js).
// Isi manual di sini kapan saja untuk menggantikannya.

// =====================================================================================
// EASY — Dasar-dasar Bahasa Inggris: to be, kata sifat, kata ganti, kata kerja, angka,
// preposisi tempat, kalimat tanya, dan kata benda jamak sederhana.
// =====================================================================================
const easy = [
  {
    type: "paragraph",
    text: "Selamat datang di level Easy! Di sini kamu akan belajar fondasi paling dasar Bahasa Inggris: kata kerja 'to be' (am/is/are), jenis-jenis kata (kata benda, kata kerja, kata sifat), kata ganti, kata tunjuk, angka, preposisi tempat, dan cara membuat kalimat tanya sederhana. Semua materi lanjutan akan memakai dasar-dasar ini, jadi pelajari baik-baik.",
  },

  { type: "heading", text: "1. To Be (Am, Is, Are)" },
  {
    type: "paragraph",
    text: "'To be' adalah kata kerja bantu yang berarti 'adalah' dalam Bahasa Indonesia, dipakai di kalimat present tense (waktu sekarang). Pemilihannya tergantung subjeknya (pelaku kalimat).",
  },
  {
    type: "list",
    items: [
      "I → am (contoh: I am a student.)",
      "You / We / They → are (contoh: They are happy.)",
      "He / She / It → is (contoh: She is a teacher.)",
    ],
  },
  {
    type: "example",
    title: "Contoh Kalimat",
    items: [
      "She is a student. (Dia adalah seorang murid.)",
      "They are my friends. (Mereka adalah teman-temanku.)",
      "I am at home. (Saya sedang di rumah.)",
    ],
  },

  { type: "heading", text: "2. Kata Benda, Kata Kerja, dan Kata Sifat" },
  {
    type: "paragraph",
    text: "Setiap kata dalam Bahasa Inggris punya 'jenis' atau fungsinya masing-masing dalam kalimat. Tiga jenis kata paling dasar yang wajib dikenali adalah noun, verb, dan adjective.",
  },
  {
    type: "list",
    items: [
      "Noun (kata benda): nama orang, tempat, benda, atau hal. Contoh: book, table, teacher, city.",
      "Verb (kata kerja): menunjukkan tindakan atau kegiatan. Contoh: run, eat, read, sleep.",
      "Adjective (kata sifat): menjelaskan atau menggambarkan kata benda. Contoh: beautiful, tall, happy, red.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Dalam kalimat 'The beautiful girl is reading a book': 'girl' dan 'book' adalah noun, 'beautiful' adalah adjective, dan 'reading' adalah verb.",
  },

  { type: "heading", text: "3. Kata Tunjuk: This, That, These, Those" },
  {
    type: "paragraph",
    text: "Kata tunjuk (demonstrative) dipakai untuk menunjuk suatu benda, tergantung jaraknya (dekat/jauh) dan jumlahnya (tunggal/jamak).",
  },
  {
    type: "list",
    items: [
      "This → untuk 1 benda yang DEKAT. Contoh: This is my book.",
      "These → untuk BANYAK benda yang DEKAT. Contoh: These are my books.",
      "That → untuk 1 benda yang JAUH. Contoh: That is your bag.",
      "Those → untuk BANYAK benda yang JAUH. Contoh: Those are your bags.",
    ],
  },

  { type: "heading", text: "4. Kata Ganti Orang (Pronoun)" },
  {
    type: "paragraph",
    text: "Kata ganti (pronoun) dipakai untuk menggantikan nama orang atau benda supaya kalimat tidak diulang-ulang.",
  },
  {
    type: "list",
    items: [
      "I = saya, You = kamu/kalian, We = kami/kita",
      "He = dia (laki-laki), She = dia (perempuan), It = itu (benda/hewan)",
      "They = mereka",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "'He' dipakai untuk menggantikan nama seorang laki-laki atau anak laki-laki, seperti pada kalimat: 'Andi is a boy. He is my friend.'",
  },

  { type: "heading", text: "5. Preposisi Tempat: In, On, At" },
  {
    type: "paragraph",
    text: "Preposisi (kata depan) menunjukkan hubungan tempat, waktu, atau arah antara dua kata dalam kalimat.",
  },
  {
    type: "list",
    items: [
      "In → di DALAM sesuatu. Contoh: The cat is in the box.",
      "On → di ATAS suatu permukaan. Contoh: The book is on the table.",
      "At → di suatu TITIK/lokasi spesifik. Contoh: She is at the door.",
    ],
  },

  { type: "heading", text: "6. Kalimat Tanya dengan Do/Does" },
  {
    type: "paragraph",
    text: "'Do' dan 'Does' digunakan untuk membuat kalimat tanya dalam present simple tense (kalimat kebiasaan/fakta di waktu sekarang), diletakkan di awal kalimat sebelum subjek.",
  },
  {
    type: "list",
    items: [
      "Do → dipakai untuk subjek I, You, We, They. Contoh: Do you like coffee?",
      "Does → dipakai untuk subjek He, She, It. Contoh: Does she like tea?",
    ],
  },

  { type: "heading", text: "7. Angka (Numbers) dalam Bahasa Inggris" },
  {
    type: "paragraph",
    text: "Angka dasar dalam Bahasa Inggris perlu dihafalkan karena sering muncul dalam percakapan sehari-hari.",
  },
  {
    type: "list",
    items: [
      "1 = one, 2 = two, 3 = three, 4 = four, 5 = five",
      "6 = six, 7 = seven, 8 = eight, 9 = nine, 10 = ten",
    ],
  },

  { type: "heading", text: "8. Kata Benda Jamak Sederhana (Plural Noun)" },
  {
    type: "paragraph",
    text: "Kata benda jamak (lebih dari satu) biasanya dibentuk dengan menambahkan akhiran -s pada kata benda tunggal.",
  },
  {
    type: "example",
    title: "Contoh Bentuk Jamak",
    items: [
      "book → books",
      "cat → cats",
      "car → cars",
    ],
  },
];

// =====================================================================================
// NORMAL — Setara SMP: simple past tense, comparative, present continuous, modal verb,
// kata sambung, kalimat perintah, dan bentuk waktu depan (future tense).
// =====================================================================================
const normal = [
  {
    type: "paragraph",
    text: "Di level Normal, kamu akan belajar berbagai bentuk waktu (tense) yang lebih beragam: past tense (lampau), present continuous (sedang berlangsung), dan future tense (masa depan), ditambah perbandingan kata sifat, modal verb, kata sambung, dan kalimat perintah. Pastikan materi Easy sudah kamu kuasai dengan baik.",
  },

  { type: "heading", text: "1. Simple Past Tense (Verb 2)" },
  {
    type: "paragraph",
    text: "Simple past tense dipakai untuk menceritakan kejadian yang SUDAH SELESAI terjadi di masa lalu, menggunakan bentuk kata kerja kedua (verb 2 / bentuk lampau).",
  },
  {
    type: "list",
    items: [
      "Kata kerja beraturan (regular verb): tambahkan -ed. Contoh: walk → walked, play → played.",
      "Kata kerja tak beraturan (irregular verb): berubah bentuk, tidak mengikuti pola -ed. Contoh: go → went, eat → ate.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Yesterday, I went to school. (Kemarin, saya pergi ke sekolah.) — 'went' adalah bentuk lampau dari 'go'.",
  },

  { type: "heading", text: "2. Comparative Adjective (Perbandingan)" },
  {
    type: "paragraph",
    text: "Comparative digunakan untuk membandingkan DUA hal. Kata sifat pendek biasanya ditambah akhiran -er, sedangkan kata sifat panjang memakai kata 'more' di depannya.",
  },
  {
    type: "list",
    items: [
      "Kata sifat pendek (1-2 suku kata): tambah -er. Contoh: tall → taller, big → bigger, good → better (tidak beraturan).",
      "Kata sifat panjang (3+ suku kata): pakai 'more' + kata sifat. Contoh: beautiful → more beautiful.",
      "Diikuti kata 'than' (daripada). Contoh: This book is better than that one.",
    ],
  },

  { type: "heading", text: "3. Frequency Adverb (Kata Keterangan Frekuensi)" },
  {
    type: "paragraph",
    text: "Frequency adverb menunjukkan seberapa sering suatu kegiatan dilakukan, biasanya diletakkan sebelum kata kerja utama (tapi setelah 'to be').",
  },
  {
    type: "list",
    items: [
      "always (selalu) → sangat sering, hampir 100%",
      "usually (biasanya), often (sering)",
      "sometimes (kadang-kadang)",
      "rarely/seldom (jarang), never (tidak pernah)",
    ],
  },

  { type: "heading", text: "4. Present Continuous Tense" },
  {
    type: "paragraph",
    text: "Present continuous menunjukkan kejadian yang SEDANG berlangsung saat ini, dibentuk dengan rumus: to be (am/is/are) + verb-ing.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "She is studying right now. (Dia sedang belajar sekarang.) — 'is' + 'studying' (verb + ing).",
  },

  { type: "heading", text: "5. Kata Benda Jamak Lanjutan (-es)" },
  {
    type: "paragraph",
    text: "Selain menambah -s, beberapa kata benda berakhiran tertentu (s, x, z, ch, sh) perlu ditambah -es agar mudah diucapkan.",
  },
  {
    type: "example",
    title: "Contoh Bentuk Jamak -es",
    items: [
      "box → boxes",
      "watch → watches",
      "bus → buses",
    ],
  },

  { type: "heading", text: "6. Modal Verb: Can" },
  {
    type: "paragraph",
    text: "Modal verb adalah kata kerja bantu yang memberi 'makna tambahan' pada kata kerja utama. 'Can' menunjukkan kemampuan (bisa/mampu melakukan sesuatu), selalu diikuti kata kerja bentuk dasar (tanpa -s/-ed/-ing).",
  },
  {
    type: "example",
    title: "Contoh",
    text: "I can swim very well. (Saya bisa berenang dengan sangat baik.)",
  },

  { type: "heading", text: "7. Kata Sambung (Conjunction)" },
  {
    type: "paragraph",
    text: "Kata sambung (conjunction) menghubungkan dua kata, frasa, atau kalimat.",
  },
  {
    type: "list",
    items: [
      "And = dan (menambahkan)",
      "But = tetapi (pertentangan)",
      "Because = karena (sebab)",
      "So = jadi/maka (akibat)",
    ],
  },

  { type: "heading", text: "8. Kalimat Perintah (Imperative Sentence)" },
  {
    type: "paragraph",
    text: "Kalimat perintah digunakan untuk memberi instruksi atau perintah, biasanya diawali langsung dengan kata kerja dasar TANPA subjek.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Close the door! (Tutup pintunya!) — langsung dimulai dengan kata kerja 'close', tanpa subjek 'you'.",
  },

  { type: "heading", text: "9. Future Tense: Will dan Going To" },
  {
    type: "paragraph",
    text: "Future tense dipakai untuk membicarakan kejadian di masa depan. Ada dua bentuk umum: 'will' dan 'going to'.",
  },
  {
    type: "list",
    items: [
      "Will + verb dasar: untuk keputusan spontan atau prediksi. Contoh: I will call you later.",
      "Am/is/are + going to + verb dasar: untuk rencana yang sudah dipikirkan sebelumnya. Contoh: She is going to visit her grandma.",
    ],
  },

  { type: "heading", text: "10. Kata Ganti Kepemilikan (Possessive Adjective)" },
  {
    type: "paragraph",
    text: "Possessive adjective menunjukkan kepemilikan, diletakkan sebelum kata benda.",
  },
  {
    type: "list",
    items: [
      "I → my, You → your, We → our, They → their",
      "He → his, She → her, It → its",
    ],
  },
];

// =====================================================================================
// HARD — Setara SMA awal: present perfect, passive voice, conditional, reported speech,
// relative clause, gerund, dan kata kerja tak beraturan.
// =====================================================================================
const hard = [
  {
    type: "paragraph",
    text: "Level Hard membahas grammar yang lebih kompleks: present perfect, passive voice, conditional sentence (kalimat pengandaian), reported speech (kalimat tidak langsung), relative clause, gerund, past continuous, dan question tag. Materi ini membutuhkan pemahaman tense dasar dari level Normal.",
  },

  { type: "heading", text: "1. Present Perfect Tense" },
  {
    type: "paragraph",
    text: "Present perfect menghubungkan kejadian masa lalu dengan keadaan sekarang, dibentuk dengan rumus: have/has + verb 3 (past participle).",
  },
  {
    type: "list",
    items: [
      "Have → untuk subjek I, You, We, They",
      "Has → untuk subjek He, She, It",
      "Dipakai untuk pengalaman, kejadian yang baru selesai, atau kejadian yang masih berpengaruh sampai sekarang.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "I have already finished my homework. (Saya sudah menyelesaikan PR saya.)",
  },

  { type: "heading", text: "2. Passive Voice (Kalimat Pasif)" },
  {
    type: "paragraph",
    text: "Passive voice dipakai saat objek atau hasil kejadian lebih penting daripada pelakunya. Rumus dasarnya: to be + verb 3 (past participle).",
  },
  {
    type: "example",
    title: "Contoh",
    text: "The letter was written by John yesterday. (Surat itu ditulis oleh John kemarin.) — bandingkan dengan kalimat aktif: John wrote the letter yesterday.",
  },

  { type: "heading", text: "3. Conditional Sentence Type 1" },
  {
    type: "paragraph",
    text: "Conditional type 1 digunakan untuk membicarakan kemungkinan yang NYATA/mungkin terjadi di masa depan, dengan rumus: If + present simple, ... will + verb dasar.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "If it rains, I will stay home. (Jika hujan, saya akan tinggal di rumah.)",
  },

  { type: "heading", text: "4. Reported Speech (Kalimat Tidak Langsung)" },
  {
    type: "paragraph",
    text: "Reported speech mengubah kalimat langsung (kutipan persis) menjadi kalimat tidak langsung (menceritakan ulang), biasanya kata kerja/tense-nya mundur satu tingkat (present → past).",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Kalimat langsung: She said, \"I am tired.\" → Kalimat tidak langsung: She said that she was tired. (Perhatikan 'am' berubah menjadi 'was'.)",
  },

  { type: "heading", text: "5. Relative Clause (Who, Which, That)" },
  {
    type: "paragraph",
    text: "Relative clause adalah anak kalimat yang menjelaskan kata benda sebelumnya, memakai kata penghubung khusus.",
  },
  {
    type: "list",
    items: [
      "Who → untuk ORANG. Contoh: The man who is standing there is my teacher.",
      "Which → untuk BENDA/HEWAN. Contoh: The book which is on the table is mine.",
      "That → bisa untuk orang ATAU benda (informal).",
      "Whose → menunjukkan kepemilikan. Contoh: The girl whose bag is red is my sister.",
    ],
  },

  { type: "heading", text: "6. Gerund (Verb-ing sebagai Kata Benda)" },
  {
    type: "paragraph",
    text: "Gerund adalah kata kerja berakhiran -ing yang berfungsi sebagai kata benda (subjek atau objek dalam kalimat), bukan menunjukkan kejadian yang sedang berlangsung seperti pada present continuous.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Swimming is my favorite hobby. (Berenang adalah hobi favorit saya.) — 'Swimming' di sini berfungsi sebagai subjek kalimat (kata benda).",
  },

  { type: "heading", text: "7. Superlative (Tingkat Paling)" },
  {
    type: "paragraph",
    text: "Superlative digunakan untuk membandingkan TIGA hal atau lebih, menunjukkan tingkat 'paling'. Kata sifat pendek ditambah 'the...-est', kata sifat panjang memakai 'the most'.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Mount Everest is the highest mountain in the world. (Gunung Everest adalah gunung tertinggi di dunia.)",
  },

  { type: "heading", text: "8. Kata Kerja Tak Beraturan (Irregular Verb)" },
  {
    type: "paragraph",
    text: "Irregular verb adalah kata kerja yang bentuk lampau (verb 2) dan bentuk partisipnya (verb 3) TIDAK mengikuti pola -ed, melainkan berubah bentuk sepenuhnya dan harus dihafalkan.",
  },
  {
    type: "example",
    title: "Contoh Irregular Verb",
    items: [
      "go → went → gone",
      "eat → ate → eaten",
      "write → wrote → written",
    ],
  },

  { type: "heading", text: "9. Past Continuous Tense" },
  {
    type: "paragraph",
    text: "Past continuous menunjukkan kejadian yang SEDANG berlangsung di masa lalu, biasanya terganggu oleh kejadian lain. Rumus: was/were + verb-ing.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "I was studying when he called me. (Saya sedang belajar ketika dia meneleponku.)",
  },

  { type: "heading", text: "10. Too dan Enough" },
  {
    type: "paragraph",
    text: "'Too' menunjukkan kelebihan yang bersifat negatif (berlebihan), diletakkan SEBELUM kata sifat. 'Enough' menunjukkan kecukupan, diletakkan SETELAH kata sifat.",
  },
  {
    type: "example",
    title: "Contoh",
    items: [
      "This coffee is too hot. (Kopi ini terlalu panas — tidak bisa diminum.)",
      "He is old enough to drive. (Dia cukup umur untuk menyetir.)",
    ],
  },
];

// =====================================================================================
// VERY HARD — Setara SMA lanjut: past perfect, subjunctive, inversion, conditional type 3,
// causative verb, idiom, phrasal verb, dan struktur penekanan (emphatic structure).
// =====================================================================================
const veryhard = [
  {
    type: "paragraph",
    text: "Level Very Hard membahas struktur grammar tingkat lanjut yang sering muncul di ujian: past perfect, subjunctive mood (pengandaian tidak nyata), inversion (pembalikan struktur untuk penekanan), conditional type 3, causative verb, idiom, dan phrasal verb. Materi ini membutuhkan pemahaman kuat dari semua tense di level sebelumnya.",
  },

  { type: "heading", text: "1. Past Perfect Tense" },
  {
    type: "paragraph",
    text: "Past perfect menunjukkan kejadian yang SUDAH SELESAI sebelum kejadian lain di masa lalu terjadi. Rumus: had + verb 3.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "By the time she arrived, we had already left. (Pada saat dia tiba, kami sudah pergi lebih dulu.) — 'had left' terjadi lebih dulu daripada 'arrived'.",
  },

  { type: "heading", text: "2. Subjunctive Mood (Pengandaian Tidak Nyata)" },
  {
    type: "paragraph",
    text: "Subjunctive mood dipakai untuk kondisi yang TIDAK NYATA, berandai-andai, atau berlawanan dengan kenyataan saat ini. Uniknya, 'to be' selalu memakai 'were' untuk SEMUA subjek (termasuk I, He, She, It), bukan 'was'.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "If I were you, I would apologize. (Jika saya jadi kamu, saya akan minta maaf.) — padahal 'I' biasanya pakai 'was', tapi di subjunctive tetap 'were'.",
  },

  { type: "heading", text: "3. Although / Though (Klausa Pertentangan)" },
  {
    type: "paragraph",
    text: "'Although' dan 'though' dipakai untuk menunjukkan pertentangan antara dua klausa (dua kejadian yang bertolak belakang), mirip artinya dengan 'walaupun/meskipun'.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Although it was raining, they went outside. (Walaupun sedang hujan, mereka pergi keluar.)",
  },

  { type: "heading", text: "4. Causative Verb (Have/Get Something Done)" },
  {
    type: "paragraph",
    text: "Causative verb dipakai ketika seseorang MENYURUH atau MEMINTA orang lain melakukan sesuatu untuknya, bukan melakukannya sendiri. Rumus: have/get + objek + verb 3.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "I need to have my car repaired. (Saya perlu menyuruh bengkel memperbaiki mobil saya — bukan memperbaikinya sendiri.)",
  },

  { type: "heading", text: "5. Inversion (Pembalikan Struktur Kalimat)" },
  {
    type: "paragraph",
    text: "Inversion adalah pembalikan urutan subjek dan kata kerja bantu untuk memberi penekanan/dramatisasi, biasanya dipakai setelah kata-kata negatif seperti 'Never', 'Rarely', 'Seldom' yang diletakkan di awal kalimat.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Never have I seen such a beautiful view. (Saya belum pernah melihat pemandangan seindah ini.) — bandingkan dengan urutan normal: I have never seen such a beautiful view.",
  },

  { type: "heading", text: "6. Compound Adjective (Kata Sifat Majemuk)" },
  {
    type: "paragraph",
    text: "Compound adjective adalah gabungan dua kata atau lebih yang berfungsi sebagai satu kata sifat, biasanya dihubungkan dengan tanda hubung (-). Ketika berisi angka + satuan, satuannya TETAP TUNGGAL meski angkanya lebih dari 1.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "She is a ten-year-old girl. (Dia adalah anak perempuan berusia sepuluh tahun.) — perhatikan 'year' TIDAK ditambah -s meskipun angkanya 10.",
  },

  { type: "heading", text: "7. Ungkapan Idiomatik (Idiom)" },
  {
    type: "paragraph",
    text: "Idiom adalah ungkapan yang memiliki makna kiasan (bukan makna harfiah/kata per kata), sehingga tidak bisa diterjemahkan langsung.",
  },
  {
    type: "example",
    title: "Contoh Idiom",
    text: "'Break the ice' secara harfiah berarti 'memecahkan es', tapi makna sebenarnya adalah memulai percakapan untuk mencairkan suasana yang canggung.",
  },

  { type: "heading", text: "8. Conditional Sentence Type 3" },
  {
    type: "paragraph",
    text: "Conditional type 3 dipakai untuk membicarakan PENYESALAN di masa lalu — sesuatu yang seandainya terjadi berbeda, tapi kenyataannya sudah tidak bisa diubah. Rumus: If + past perfect, ... would have + verb 3.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "If I had studied harder, I would have passed the exam. (Seandainya saya belajar lebih giat, saya pasti sudah lulus ujian.) — kenyataannya, dia tidak belajar giat dan tidak lulus.",
  },

  { type: "heading", text: "9. Phrasal Verb" },
  {
    type: "paragraph",
    text: "Phrasal verb adalah gabungan kata kerja + kata depan/kata keterangan yang membentuk makna baru, berbeda dari makna kata kerja aslinya.",
  },
  {
    type: "example",
    title: "Contoh Phrasal Verb",
    items: [
      "give up = menyerah",
      "look after = merawat/menjaga",
      "find out = mengetahui/menemukan informasi",
    ],
  },

  { type: "heading", text: "10. Passive Voice dengan Modal Verb" },
  {
    type: "paragraph",
    text: "Passive voice juga bisa dipakai bersama modal verb (must, should, can, dsb) untuk menunjukkan kewajiban atau kemungkinan pada objek. Rumus: modal + be + verb 3.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "The homework must be finished before Monday. (PR itu harus diselesaikan sebelum hari Senin.)",
  },
];

export default { easy, normal, hard, veryhard };