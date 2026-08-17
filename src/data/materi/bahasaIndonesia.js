// Materi pembelajaran manual untuk Bahasa Indonesia, per tingkat kesulitan.
// Lihat src/data/materi/matematika.js untuk penjelasan lengkap & contoh semua jenis blok
// (paragraph, heading, image, list, example).
//
// Selama array di bawah masih kosong ( [] ), aplikasi otomatis menampilkan rangkuman
// sementara dari field "materi" pada soal (src/data/questions/bahasaIndonesia.js).
// Array di bawah ini sudah diisi lengkap sehingga menggantikan rangkuman otomatis tsb.

// =====================================================================================
// EASY — Setara SD kelas rendah/menengah.
// =====================================================================================
const easy = [
  {
    type: "paragraph",
    text: "Selamat datang di level Easy! Di level ini kamu akan belajar dasar-dasar Bahasa Indonesia: apa itu kalimat, sinonim & antonim, huruf kapital, jenis-jenis kata dasar, jenis kalimat, gagasan pokok paragraf, ciri puisi, sampai cara membaca dan memahami teks atau cerita pendek. Baca pelan-pelan dan coba pahami setiap contohnya sebelum mengerjakan soal, ya!",
  },

  { type: "heading", text: "1. Apa Itu Kalimat?" },
  {
    type: "paragraph",
    text: "Kalimat adalah rangkaian kata yang memiliki makna lengkap dan bisa berdiri sendiri. Kalimat yang lengkap minimal memiliki subjek (S, pelaku/yang dibicarakan) dan predikat (P, apa yang dilakukan/keadaan subjek). Kalimat yang hanya terdiri dari satu atau dua kata saja biasanya belum lengkap maknanya.",
  },
  {
    type: "example",
    title: "Contoh Kalimat Lengkap vs Belum Lengkap",
    items: [
      '"Makan nasi" → belum lengkap, tidak jelas siapa yang makan.',
      '"Ani makan nasi di pagi hari" → lengkap, ada subjek (Ani), predikat (makan), dan keterangan (nasi, di pagi hari).',
      '"Nasi enak" → sudah punya subjek dan predikat sederhana, tapi terlalu singkat sebagai kalimat cerita.',
    ],
  },

  { type: "heading", text: "2. Sinonim dan Antonim" },
  {
    type: "paragraph",
    text: "Sinonim adalah kata yang memiliki arti sama atau mirip dengan kata lain. Antonim adalah kata yang artinya berlawanan dengan kata lain. Menguasai sinonim dan antonim membantu kita memilih kata yang tepat saat menulis maupun memahami bacaan.",
  },
  {
    type: "list",
    items: [
      "Sinonim 'senang' = gembira, riang, bahagia",
      "Sinonim 'besar' = luas, raya, agung (tergantung konteks kalimatnya)",
      "Antonim 'besar' = kecil",
      "Antonim 'tinggi' = rendah",
      "Antonim 'cepat' = lambat",
    ],
  },

  { type: "heading", text: "3. Huruf Kapital dan Tanda Baca Dasar" },
  {
    type: "paragraph",
    text: "Huruf kapital (huruf besar) dipakai di beberapa tempat penting: huruf pertama pada awal kalimat, huruf pertama nama orang, nama tempat, dan nama hari/bulan. Selain itu, tanda baca juga menentukan jenis kalimat: tanda titik (.) untuk kalimat berita, tanda tanya (?) untuk kalimat tanya, dan tanda seru (!) untuk kalimat perintah/seruan.",
  },
  {
    type: "list",
    items: [
      "Huruf kapital dipakai di awal kalimat: 'Budi pergi ke sekolah.' (bukan 'budi pergi ke sekolah.')",
      "Huruf kapital dipakai pada nama orang: 'Budi', 'Ani', bukan seluruh kata ditulis kapital seperti 'BUDI'.",
      "Kalimat berita diakhiri tanda titik (.): 'Ibu memasak nasi goreng.'",
      "Kalimat tanya diakhiri tanda tanya (?): 'Kapan kamu pergi ke pasar?'",
      "Kalimat perintah/seruan diakhiri tanda seru (!): 'Tolong tutup pintu itu!'",
    ],
  },

  { type: "heading", text: "4. Jenis-Jenis Kata Dasar" },
  {
    type: "paragraph",
    text: "Ada tiga jenis kata dasar yang paling sering ditemui dalam kalimat sehari-hari: kata benda, kata kerja, dan kata sifat. Mengenali jenis kata membantu kita menyusun kalimat dengan benar.",
  },
  {
    type: "list",
    items: [
      "Kata benda (nomina): menunjukkan nama orang, tempat, hewan, atau benda. Contoh: meja, sekolah, kucing, Budi.",
      "Kata kerja (verba): menunjukkan suatu perbuatan atau tindakan. Contoh: berlari, menulis, makan, bermain.",
      "Kata sifat (adjektiva): menerangkan sifat atau keadaan suatu benda/orang. Contoh: rajin, cepat, indah, tinggi.",
    ],
  },
  {
    type: "example",
    title: "Contoh dalam Satu Kalimat",
    text: "'Ani (kata benda) yang rajin (kata sifat) itu sedang menulis (kata kerja) surat di kamarnya.' — coba tunjuk mana kata benda, kata kerja, dan kata sifat pada kalimat lain di sekitarmu!",
  },

  { type: "heading", text: "5. Jenis-Jenis Kalimat" },
  {
    type: "paragraph",
    text: "Kalimat dibedakan menjadi beberapa jenis berdasarkan tujuannya, yang bisa dikenali dari tanda baca di akhir kalimat.",
  },
  {
    type: "list",
    items: [
      "Kalimat berita: menyampaikan informasi, diakhiri titik (.). Contoh: 'Hari ini cuaca cerah.'",
      "Kalimat tanya: menanyakan sesuatu, diakhiri tanda tanya (?). Contoh: 'Di mana rumahmu?'",
      "Kalimat perintah: menyuruh atau meminta, diakhiri tanda seru (!). Contoh: 'Bacalah buku itu!'",
    ],
  },

  { type: "heading", text: "6. Paragraf dan Gagasan Pokok" },
  {
    type: "paragraph",
    text: "Paragraf adalah kumpulan beberapa kalimat yang saling berkaitan dan membahas satu topik yang sama. Ide utama atau inti pembahasan dalam sebuah paragraf disebut gagasan pokok (ide pokok). Kalimat-kalimat lain dalam paragraf yang menjelaskan gagasan pokok disebut kalimat penjelas.",
  },
  {
    type: "example",
    title: "Cara Menemukan Gagasan Pokok",
    text: "Bacalah seluruh paragraf, lalu tanyakan pada diri sendiri: 'Paragraf ini sebenarnya membahas tentang apa?' Jawaban dari pertanyaan itu biasanya adalah gagasan pokoknya. Gagasan pokok sering (walau tidak selalu) ada di kalimat pertama paragraf.",
  },

  { type: "heading", text: "7. Puisi Anak" },
  {
    type: "paragraph",
    text: "Puisi adalah karya sastra yang bahasanya indah, padat, dan biasanya terikat oleh rima (persamaan bunyi di akhir baris) dan irama (alunan atau ketukan saat dibaca). Puisi berbeda dari cerita karena tidak selalu punya alur panjang, dan lebih fokus mengungkapkan perasaan atau gambaran suatu hal secara ringkas.",
  },
  {
    type: "image",
    src: "/images/subjects/bahasa-indonesia.png",
    caption: "Bahasa Indonesia: tata bahasa, kosakata, dan karya sastra",
  },

  { type: "heading", text: "8. Cara Membaca dan Memahami Teks atau Cerita" },
  {
    type: "paragraph",
    text: "Di kuis ini, sebagian soal akan menampilkan sebuah teks atau cerita pendek terlebih dahulu, baru kemudian pertanyaannya di bawah. Berikut langkah-langkah sederhana supaya kamu bisa menjawab soal jenis ini dengan lebih mudah.",
  },
  {
    type: "list",
    items: [
      "Baca teksnya dengan tenang, minimal satu kali sampai selesai, sebelum melihat pilihan jawaban.",
      "Cari tahu siapa saja tokoh dalam cerita (kalau ada), dan apa yang mereka lakukan.",
      "Perhatikan kata kunci di pertanyaan (misalnya 'siapa', 'apa', 'kapan', 'di mana'), lalu cari jawabannya langsung di dalam teks.",
      "Untuk pertanyaan tentang 'gagasan pokok' atau 'inti cerita', pikirkan teks itu secara keseluruhan sedang membahas atau menceritakan tentang apa.",
    ],
  },
  {
    type: "example",
    title: "Contoh Latihan",
    text: "Bacaan: 'Hari Minggu pagi, Rina pergi ke taman bersama kelinci peliharaannya bernama Kopi. Rina memberi Kopi wortel segar setiap pagi.' Pertanyaan: 'Apa yang diberikan Rina kepada Kopi?' Jawabannya ada tertulis langsung di kalimat kedua, yaitu 'wortel segar'.",
  },
];

// =====================================================================================
// NORMAL — Setara SD kelas tinggi/SMP awal.
// =====================================================================================
const normal = [
  {
    type: "paragraph",
    text: "Di level Normal, kamu akan belajar tentang jenis-jenis teks (deskripsi, narasi, eksposisi), majas sederhana, kalimat efektif, kata baku, konjungsi, peribahasa, kalimat langsung & tidak langsung, unsur intrinsik cerita, serta strategi menganalisis isi teks bacaan. Pastikan materi Easy sudah kamu kuasai dulu, ya!",
  },

  { type: "heading", text: "1. Jenis-Jenis Teks: Deskripsi, Narasi, dan Eksposisi" },
  {
    type: "paragraph",
    text: "Setiap teks ditulis dengan tujuan yang berbeda-beda, sehingga cirinya pun berbeda. Berikut tiga jenis teks yang paling umum dipelajari di level ini.",
  },
  {
    type: "list",
    items: [
      "Teks deskripsi: tujuannya menggambarkan suatu objek (orang, tempat, benda) secara rinci, agar pembaca seolah-olah melihat, mendengar, atau merasakannya sendiri.",
      "Teks narasi: tujuannya menceritakan suatu peristiwa atau pengalaman secara berurutan (dari awal sampai akhir). Ciri utamanya adalah adanya alur/rangkaian peristiwa.",
      "Teks eksposisi: tujuannya menjelaskan atau memaparkan suatu informasi secara jelas dan objektif, berisi fakta dan penjelasan, bukan cerita rekaan.",
    ],
  },
  {
    type: "example",
    title: "Contoh Ciri Tiap Jenis Teks",
    items: [
      "Deskripsi: 'Rumah itu berwarna biru muda, dengan pagar putih dan taman kecil di depannya.'",
      "Narasi: 'Pagi itu Andi bangun terlambat, lalu ia berlari menuju sekolah dan tiba tepat sebelum bel berbunyi.'",
      "Eksposisi: 'Olahraga rutin dapat meningkatkan kesehatan jantung dan menjaga berat badan tetap ideal.'",
    ],
  },

  { type: "heading", text: "2. Majas Personifikasi" },
  {
    type: "paragraph",
    text: "Majas adalah gaya bahasa yang dipakai untuk membuat kalimat lebih hidup dan indah. Majas personifikasi adalah majas yang memberikan sifat atau perbuatan manusia kepada benda mati atau makhluk lain yang bukan manusia.",
  },
  {
    type: "example",
    title: "Contoh Majas Personifikasi",
    items: [
      "'Angin berbisik lembut di telingaku.' → angin (benda mati) 'berbisik' seperti manusia.",
      "'Daun-daun menari ditiup angin.' → daun 'menari' seperti manusia.",
      "'Matahari tersenyum pagi ini.' → matahari 'tersenyum' seperti manusia.",
    ],
  },

  { type: "heading", text: "3. Kalimat Efektif" },
  {
    type: "paragraph",
    text: "Kalimat efektif adalah kalimat yang jelas, logis, tidak bertele-tele, dan tidak menggunakan kata yang berlebihan/mubazir (makna ganda yang sama diulang-ulang).",
  },
  {
    type: "example",
    title: "Contoh Kalimat Tidak Efektif vs Efektif",
    items: [
      "Tidak efektif: 'Dia pergi menuju ke arah pasar.' (kata 'menuju', 'ke', dan 'arah' maknanya bertumpuk)",
      "Efektif: 'Dia pergi ke pasar.'",
    ],
  },

  { type: "heading", text: "4. Kata Baku dan Tidak Baku" },
  {
    type: "paragraph",
    text: "Kata baku adalah kata yang penulisan dan pengucapannya sesuai dengan kaidah bahasa Indonesia yang berlaku (sesuai KBBI dan PUEBI). Kata baku dipakai dalam situasi resmi, seperti surat resmi, berita, atau tulisan ilmiah.",
  },
  {
    type: "list",
    items: [
      "Baku: aktivitas — Tidak baku: aktifitas, aktifitass",
      "Baku: apotek — Tidak baku: apotik",
      "Baku: praktik — Tidak baku: praktek",
      "Baku: nasihat — Tidak baku: nasehat",
    ],
  },

  { type: "heading", text: "5. Konjungsi (Kata Hubung)" },
  {
    type: "paragraph",
    text: "Konjungsi adalah kata yang digunakan untuk menghubungkan dua kata, frasa, klausa, atau kalimat.",
  },
  {
    type: "list",
    items: [
      "Konjungsi penambahan: dan, serta",
      "Konjungsi pertentangan: tetapi, namun, meskipun",
      "Konjungsi sebab-akibat: karena, sehingga",
      "Konjungsi waktu: ketika, sebelum, sesudah",
    ],
  },

  { type: "heading", text: "6. Peribahasa dan Ungkapan" },
  {
    type: "paragraph",
    text: "Peribahasa adalah kalimat atau kelompok kata yang susunannya sudah tetap dan mengandung makna kiasan (bukan makna sebenarnya), biasa dipakai untuk menyampaikan nasihat atau sindiran secara halus.",
  },
  {
    type: "example",
    title: "Contoh Peribahasa",
    items: [
      "'Berat sama dipikul, ringan sama dijinjing' → bermakna saling membantu dan berbagi beban bersama-sama.",
      "'Bagai air di daun talas' → bermakna orang yang tidak memiliki pendirian tetap.",
      "'Tong kosong nyaring bunyinya' → bermakna orang yang banyak bicara biasanya kurang berilmu.",
    ],
  },

  { type: "heading", text: "7. Kalimat Langsung dan Tidak Langsung" },
  {
    type: "paragraph",
    text: "Kalimat langsung mengutip persis ucapan seseorang, ditandai dengan tanda petik dua (\"...\"). Kalimat tidak langsung menceritakan ulang isi ucapan seseorang tanpa tanda petik, biasanya diawali kata 'bahwa'.",
  },
  {
    type: "example",
    title: "Contoh",
    items: [
      'Langsung: Ibu berkata, "Aku akan pergi ke pasar."',
      "Tidak langsung: Ibu berkata bahwa ia akan pergi ke pasar.",
    ],
  },

  { type: "heading", text: "8. Unsur Intrinsik Cerita (Pengantar)" },
  {
    type: "paragraph",
    text: "Unsur intrinsik adalah unsur pembangun cerita yang ada di dalam cerita itu sendiri. Di level Normal, kenali dulu dua unsur dasarnya: tokoh (siapa saja yang terlibat dalam cerita) dan amanat (pesan moral yang ingin disampaikan penulis lewat jalan cerita).",
  },

  { type: "heading", text: "9. Strategi Menganalisis Teks Bacaan" },
  {
    type: "paragraph",
    text: "Soal analisis teks di level ini menguji kemampuanmu memahami informasi tersurat (tertulis langsung), menyimpulkan amanat, mengenali jenis teks, serta mengenali majas dan latar dalam kutipan. Ikuti langkah berikut saat mengerjakan soal seperti ini.",
  },
  {
    type: "list",
    items: [
      "Baca teks/kutipan secara utuh dulu, jangan langsung lompat ke pilihan jawaban.",
      "Untuk pertanyaan 'apa manfaat/tujuan/pesan', cari kalimat kesimpulan yang biasa ada di akhir paragraf.",
      "Untuk pertanyaan 'jenis teks', kenali apakah teks itu menggambarkan (deskripsi), menceritakan (narasi), atau menjelaskan informasi (eksposisi).",
      "Untuk pertanyaan 'majas' atau 'latar', cari kata kunci konkret dalam kutipan (nama tempat, kata kerja yang tidak wajar untuk benda mati, dll).",
    ],
  },
  {
    type: "example",
    title: "Contoh Latihan",
    text: "Kutipan: 'Doni berlatih lari setiap pagi meski sering lelah. Ia tidak menyerah hingga akhirnya menjadi juara.' Pertanyaan: 'Apa amanat cerita ini?' Jawaban: ketekunan dan kerja keras akan membuahkan hasil — disimpulkan dari keseluruhan jalan cerita, bukan hanya satu kalimat.",
  },
];

// =====================================================================================
// HARD — Setara SMP tingkat menengah/SMA awal.
// =====================================================================================
const hard = [
  {
    type: "paragraph",
    text: "Di level Hard, materinya makin dalam: kalimat aktif-pasif, frasa, unsur intrinsik karya sastra secara lengkap, kalimat majemuk (setara & bertingkat), struktur pantun, teks argumentasi (fakta vs opini), kata ganti, ejaan PUEBI, teks berita (5W1H), sampai strategi menganalisis teks argumentasi dan berita.",
  },

  { type: "heading", text: "1. Kalimat Aktif dan Pasif" },
  {
    type: "paragraph",
    text: "Kalimat aktif adalah kalimat yang subjeknya melakukan suatu pekerjaan/tindakan, biasanya predikatnya berawalan 'me-'. Kalimat pasif adalah kalimat yang subjeknya dikenai suatu pekerjaan/tindakan, biasanya predikatnya berawalan 'di-' atau 'ter-'.",
  },
  {
    type: "example",
    title: "Contoh",
    items: [
      "Aktif: 'Ibu memasak nasi.' (Ibu = pelaku, melakukan tindakan memasak)",
      "Pasif: 'Nasi dimasak oleh ibu.' (Nasi = yang dikenai tindakan)",
    ],
  },

  { type: "heading", text: "2. Frasa" },
  {
    type: "paragraph",
    text: "Frasa adalah gabungan dua kata atau lebih yang menduduki satu fungsi (misalnya sebagai subjek atau predikat) tetapi tidak membentuk klausa lengkap, artinya tidak punya predikat yang menyatakan suatu kejadian utuh.",
  },
  {
    type: "example",
    title: "Contoh Frasa vs Kalimat",
    items: [
      "'Rumah besar' → frasa, hanya gabungan kata benda + kata sifat, belum jadi kalimat utuh.",
      "'Rumah itu besar' → sudah menjadi kalimat karena punya subjek (rumah itu) dan predikat (besar).",
    ],
  },

  { type: "heading", text: "3. Unsur Intrinsik Karya Sastra (Lengkap)" },
  {
    type: "paragraph",
    text: "Unsur intrinsik adalah unsur-unsur pembangun sebuah karya sastra (cerpen, novel, drama) yang berasal dari dalam cerita itu sendiri.",
  },
  {
    type: "list",
    items: [
      "Tema: gagasan atau ide dasar yang menjadi pokok cerita.",
      "Tokoh dan penokohan: pelaku cerita beserta watak/sifat masing-masing tokoh.",
      "Alur (plot): rangkaian peristiwa dari awal hingga akhir cerita.",
      "Latar: waktu, tempat, dan suasana terjadinya peristiwa dalam cerita.",
      "Sudut pandang: posisi penulis dalam menceritakan kisahnya (sebagai 'aku' atau menyebut nama tokoh).",
      "Amanat: pesan moral yang ingin disampaikan penulis kepada pembaca.",
    ],
  },
  {
    type: "example",
    title: "Cara Menentukan Watak Tokoh",
    text: "Watak tokoh biasanya tidak disebutkan langsung, melainkan harus disimpulkan dari perbuatan, ucapan, atau sikap tokoh dalam cerita. Contoh: tokoh yang selalu membantu tetangga tanpa mengharap imbalan menunjukkan watak yang suka menolong.",
  },

  { type: "heading", text: "4. Kalimat Majemuk Setara dan Bertingkat" },
  {
    type: "paragraph",
    text: "Kalimat majemuk terbentuk dari gabungan dua klausa atau lebih. Ada dua jenis utama yang perlu dibedakan berdasarkan kedudukan klausanya.",
  },
  {
    type: "list",
    items: [
      "Kalimat majemuk setara: menggabungkan dua klausa yang kedudukannya sejajar/setara, biasa dengan konjungsi 'dan', 'atau', 'tetapi'. Contoh: 'Ia makan dan adiknya minum.'",
      "Kalimat majemuk bertingkat (subordinatif): menggabungkan induk kalimat dengan anak kalimat yang kedudukannya tidak sejajar (anak kalimat menjelaskan induk kalimat), biasa dengan konjungsi 'karena', 'ketika', 'meskipun', 'jika'. Contoh: 'Karena hujan turun, ia tidak jadi pergi.'",
    ],
  },

  { type: "heading", text: "5. Pantun" },
  {
    type: "paragraph",
    text: "Pantun adalah puisi lama yang terdiri dari empat baris dalam satu bait, dengan pola rima akhir a-b-a-b.",
  },
  {
    type: "list",
    items: [
      "Sampiran: dua baris pertama, biasanya berisi gambaran alam dan tidak berhubungan langsung dengan isi, hanya untuk mengantar rima.",
      "Isi: dua baris terakhir, berisi pesan atau maksud utama pantun.",
    ],
  },
  {
    type: "example",
    title: "Contoh Pantun",
    text: "Jalan-jalan ke kota Blitar (sampiran) — Jangan lupa membeli sagu (sampiran) — Kalau kita rajin belajar (isi) — Cita-cita mudah tercapai (isi).",
  },

  { type: "heading", text: "6. Teks Argumentasi: Fakta vs Opini" },
  {
    type: "paragraph",
    text: "Teks argumentasi bertujuan meyakinkan pembaca dengan alasan yang logis, biasanya didukung data (fakta) dan pendapat penulis (opini).",
  },
  {
    type: "list",
    items: [
      "Fakta: pernyataan yang benar-benar terjadi dan bisa dibuktikan kebenarannya, sering berupa data atau angka. Contoh: 'Jutaan ton sampah plastik mencemari lautan setiap tahun.'",
      "Opini: pendapat, penilaian, atau usulan penulis yang belum tentu bisa dibuktikan secara pasti, sering ditandai kata seperti 'sebaiknya', 'perlu', 'menurut saya'. Contoh: 'Penggunaan plastik sekali pakai perlu dikurangi.'",
    ],
  },

  { type: "heading", text: "7. Kata Ganti (Pronomina) dan Ejaan PUEBI" },
  {
    type: "list",
    items: [
      "Kata ganti orang pertama: saya, aku, kami, kita.",
      "Kata ganti orang kedua: kamu, engkau, Anda, kalian.",
      "Kata ganti orang ketiga: dia, ia, mereka.",
      "Ejaan Bahasa Indonesia diatur dalam Pedoman Umum Ejaan Bahasa Indonesia (PUEBI). Kata depan 'di' yang menunjukkan tempat ditulis terpisah, contoh yang benar: 'di rumah', 'di sekolah' (bukan 'dirumah').",
      "Awalan 'di-' sebagai pembentuk kata pasif justru ditulis serangkai, contoh: 'dimakan', 'dibaca' (bukan 'di makan').",
    ],
  },

  { type: "heading", text: "8. Teks Berita dan Unsur 5W1H" },
  {
    type: "paragraph",
    text: "Teks berita berisi laporan mengenai suatu peristiwa yang benar-benar terjadi, ditulis secara objektif dan faktual. Kelengkapan sebuah berita bisa dicek dengan unsur 5W1H.",
  },
  {
    type: "list",
    items: [
      "What (apa) — peristiwa apa yang terjadi",
      "Who (siapa) — siapa yang terlibat",
      "When (kapan) — kapan peristiwa terjadi",
      "Where (di mana) — di mana peristiwa terjadi",
      "Why (mengapa) — mengapa peristiwa itu terjadi",
      "How (bagaimana) — bagaimana peristiwa itu berlangsung",
    ],
  },

  { type: "heading", text: "9. Strategi Menganalisis Teks Argumentasi dan Berita" },
  {
    type: "paragraph",
    text: "Saat membaca teks berita, cari langsung jawaban unsur 5W1H yang ditanyakan di dalam kalimat teksnya — jawabannya hampir selalu tertulis eksplisit. Saat membaca teks argumentasi, pisahkan mana kalimat yang berupa data/angka (fakta) dan mana kalimat yang berupa usulan/penilaian penulis (opini); kalimat opini biasanya muncul di akhir paragraf sebagai kesimpulan penulis.",
  },
  {
    type: "example",
    title: "Contoh Latihan",
    text: "Kutipan berita: 'Taman kota baru diresmikan pada Sabtu, 15 Agustus 2026.' Pertanyaan 'kapan' dijawab langsung dari kutipan itu: 15 Agustus 2026 — tidak perlu menyimpulkan, karena informasinya sudah tersurat jelas.",
  },
];

// =====================================================================================
// VERY HARD — Setara SMA tingkat akhir.
// =====================================================================================
const veryhard = [
  {
    type: "paragraph",
    text: "Level Very Hard membahas materi sastra dan kebahasaan tingkat lanjut khas SMA: majas lanjutan, klausa, sudut pandang cerita, struktur karya ilmiah, diksi, struktur lengkap teks eksplanasi, resensi & kritik sastra, kalimat majemuk campuran, hingga strategi menganalisis puisi dan prosa secara mendalam.",
  },

  { type: "heading", text: "1. Majas Lanjutan" },
  {
    type: "paragraph",
    text: "Selain personifikasi yang sudah dipelajari di level Normal, ada beberapa majas perbandingan lain yang penting dikuasai.",
  },
  {
    type: "list",
    items: [
      "Metafora: membandingkan dua hal secara langsung tanpa kata pembanding seperti 'seperti'/'bagaikan'. Contoh: 'Dia adalah bintang kelas.'",
      "Simile: membandingkan dua hal dengan kata pembanding eksplisit. Contoh: 'Dia berlari seperti kijang.'",
      "Hiperbola: melebih-lebihkan suatu keadaan agar kesannya lebih kuat. Contoh: 'Ia menangis hingga air mata membanjiri lantai.'",
      "Ironi: menyatakan sesuatu yang bertentangan dengan kenyataan, biasanya untuk menyindir secara halus. Contoh: 'Rapi sekali kamarmu ini,' diucapkan saat melihat kamar yang berantakan.",
    ],
  },

  { type: "heading", text: "2. Klausa" },
  {
    type: "paragraph",
    text: "Klausa adalah satuan gramatikal yang terdiri atas subjek dan predikat (berbeda dengan frasa yang belum tentu punya predikat lengkap).",
  },
  {
    type: "list",
    items: [
      "Klausa bebas: bisa berdiri sendiri sebagai kalimat karena maknanya sudah lengkap. Contoh: 'Ia membaca buku.'",
      "Klausa terikat: tidak bisa berdiri sendiri, harus bergabung dengan klausa lain karena maknanya belum lengkap. Contoh: '...ketika hujan turun'.",
    ],
  },

  { type: "heading", text: "3. Sudut Pandang dalam Cerita" },
  {
    type: "paragraph",
    text: "Sudut pandang adalah posisi penulis ketika menyampaikan cerita, memengaruhi bagaimana pembaca 'melihat' jalannya kisah.",
  },
  {
    type: "list",
    items: [
      "Orang pertama pelaku utama: tokoh 'aku'/'saya' adalah tokoh utama yang mengalami sendiri jalannya cerita.",
      "Orang ketiga terbatas: penulis menyebut tokoh dengan nama/'dia', tetapi hanya tahu isi pikiran satu tokoh saja.",
      "Orang ketiga serba tahu: penulis menyebut tokoh dengan nama/'dia', dan mengetahui isi pikiran semua tokoh dalam cerita.",
    ],
  },

  { type: "heading", text: "4. Struktur Karya Ilmiah" },
  {
    type: "paragraph",
    text: "Karya ilmiah (seperti makalah atau laporan penelitian) memiliki struktur baku agar mudah dipahami pembaca.",
  },
  {
    type: "list",
    items: [
      "Pendahuluan: berisi latar belakang masalah dan rumusan masalah yang akan dibahas.",
      "Isi/pembahasan: berisi uraian, analisis, dan data pendukung terkait rumusan masalah.",
      "Penutup: berisi simpulan dan saran berdasarkan hasil pembahasan.",
    ],
  },

  { type: "heading", text: "5. Diksi dan Gaya Bahasa" },
  {
    type: "paragraph",
    text: "Diksi adalah pilihan kata yang digunakan penulis untuk menyampaikan makna dan efek tertentu kepada pembaca. Pemilihan diksi yang tepat membuat tulisan (terutama puisi dan prosa) menjadi lebih hidup, indah, dan sesuai konteks yang diinginkan penulis.",
  },

  { type: "heading", text: "6. Struktur Lengkap Teks Eksplanasi" },
  {
    type: "paragraph",
    text: "Teks eksplanasi menjelaskan proses terjadinya suatu fenomena (alam maupun sosial) secara sebab-akibat, dengan struktur yang runtut.",
  },
  {
    type: "list",
    items: [
      "Pernyataan umum: pengantar singkat tentang fenomena yang akan dijelaskan.",
      "Deretan penjelas: rangkaian penjelasan sebab-akibat mengenai proses terjadinya fenomena tersebut — biasanya bagian terpanjang dalam teks.",
      "Interpretasi: simpulan atau pandangan penulis terhadap fenomena yang telah dijelaskan, biasanya ada di bagian akhir teks.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Fenomena pelangi: pernyataan umum menyebutkan pelangi sebagai fenomena optik; deretan penjelas menguraikan proses cahaya matahari dibiaskan tetesan air hujan sehingga terurai jadi warna-warni; interpretasi menyimpulkan bahwa peristiwa ini menunjukkan prinsip fisika optik yang bekerja secara alami.",
  },

  { type: "heading", text: "7. Resensi dan Kritik Sastra" },
  {
    type: "paragraph",
    text: "Resensi adalah ulasan yang menilai kelebihan dan kekurangan sebuah karya (buku, film, dll), bertujuan memberi penilaian objektif dan rekomendasi kepada pembaca — bukan sekadar menceritakan ulang seluruh isi karya.",
  },

  { type: "heading", text: "8. Kalimat Majemuk Campuran" },
  {
    type: "paragraph",
    text: "Kalimat majemuk campuran adalah gabungan antara kalimat majemuk setara dan kalimat majemuk bertingkat dalam satu kalimat yang sama, sehingga terdiri dari lebih dari dua klausa dengan hubungan yang lebih kompleks.",
  },
  {
    type: "example",
    title: "Contoh",
    text: "'Ketika hujan turun, ia berteduh dan adiknya menutup jendela.' — klausa 'ketika hujan turun' bertingkat (anak kalimat), sedangkan 'ia berteduh' dan 'adiknya menutup jendela' setara satu sama lain.",
  },

  { type: "heading", text: "9. Strategi Menganalisis Puisi dan Prosa" },
  {
    type: "paragraph",
    text: "Untuk menganalisis puisi: tentukan dulu tema (perasaan/gagasan utama yang mendasari keseluruhan bait), lalu cari majas-majas yang dipakai penulis dan efeknya terhadap suasana puisi. Untuk menganalisis prosa (cerpen/novel) atau teks nonfiksi tingkat lanjut: identifikasi jenis teksnya dulu (narasi, eksplanasi, atau resensi), baru cari detail spesifik sesuai pertanyaan (penyebab suatu peristiwa, struktur bagian teks, atau penilaian yang diberikan penulis).",
  },
  {
    type: "example",
    title: "Contoh Latihan Analisis Puisi",
    text: "Larik 'Ombak berbisik kisah lama' → kata 'berbisik' adalah tindakan manusia yang diberikan pada ombak (benda mati), sehingga ini adalah majas personifikasi. Jika keseluruhan puisi banyak menyinggung kata 'rindu' dan 'menanti', maka tema besar puisinya adalah kerinduan.",
  },
];

export default { easy, normal, hard, veryhard };