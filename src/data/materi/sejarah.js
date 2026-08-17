// Materi pembelajaran manual untuk Sejarah, per tingkat kesulitan.
// Lihat src/data/materi/matematika.js untuk penjelasan lengkap & contoh semua jenis blok
// (paragraph, heading, image, list, example).
//
// Sumber gambar tokoh/peristiwa di bawah ini menggunakan koleksi Wikimedia Commons
// (media bebas hak cipta/lisensi terbuka). Path gambar yang sama juga dipakai pada
// soal terkait di src/data/questions/sejarah.js supaya siswa mengenali tokoh yang sama
// baik saat membaca materi maupun saat mengerjakan soal.

const IMG_SOEKARNO = "https://commons.wikimedia.org/wiki/Special:FilePath/Presiden_Sukarno.jpg";
const IMG_HATTA = "https://commons.wikimedia.org/wiki/Special:FilePath/VP_Hatta.jpg";
const IMG_KI_HAJAR = "https://commons.wikimedia.org/wiki/Special:FilePath/Ki_Hajar_Dewantara.jpg";
const IMG_DIPONEGORO = "https://commons.wikimedia.org/wiki/Special:FilePath/Raden_Saleh_-_Diponegoro_arrest.jpg";
const IMG_SOEHARTO = "https://commons.wikimedia.org/wiki/Special:FilePath/President_Suharto,_1993.jpg";
const IMG_GAJAH_MADA = "https://commons.wikimedia.org/wiki/Special:FilePath/Patih_Gajah_Mada.jpg";

// =====================================================================================
// EASY — Pengenalan dasar: simbol negara & proklamasi kemerdekaan.
// =====================================================================================
const easy = [
  {
    type: "paragraph",
    text: "Selamat datang di level Easy! Di level ini kamu akan berkenalan dengan dasar-dasar sejarah Indonesia: kapan dan bagaimana Indonesia merdeka, siapa tokoh-tokoh utamanya, serta simbol-simbol negara seperti bendera, lambang, dan lagu kebangsaan. Materi ini jadi fondasi sebelum kamu belajar ke level yang lebih menantang.",
  },

  { type: "heading", text: "1. Proklamasi Kemerdekaan Indonesia" },
  {
    type: "paragraph",
    text: "Pada hari Jumat, 17 Agustus 1945, bangsa Indonesia akhirnya menyatakan kemerdekaannya setelah ratusan tahun dijajah bangsa asing. Teks proklamasi dibacakan oleh Ir. Soekarno, didampingi Mohammad Hatta, di kediaman Soekarno, Jalan Pegangsaan Timur Nomor 56, Jakarta, pukul 10.00 pagi.",
  },
  {
    type: "image",
    src: IMG_SOEKARNO,
    caption: "Ir. Soekarno, sang Proklamator sekaligus Presiden pertama Republik Indonesia.",
  },
  {
    type: "list",
    items: [
      "Naskah proklamasi disusun di rumah Laksamana Maeda pada malam 16-17 Agustus 1945.",
      "Naskah asli tulisan tangan Soekarno kemudian diketik ulang oleh Sayuti Melik.",
      "Bendera Merah Putih pertama dijahit oleh Ibu Fatmawati, istri Soekarno.",
      "Setiap tanggal 17 Agustus diperingati sebagai Hari Kemerdekaan Republik Indonesia.",
    ],
  },
  {
    type: "example",
    title: "Fakta Singkat Proklamasi",
    text: "Proklamasi dibacakan pukul 10.00 WIB tanggal 17 Agustus 1945, hanya berisi dua kalimat singkat namun menjadi pernyataan resmi Indonesia sebagai negara merdeka dan berdaulat.",
  },

  { type: "heading", text: "2. Dwitunggal: Soekarno dan Hatta" },
  {
    type: "paragraph",
    text: "Ir. Soekarno dan Mohammad Hatta dikenal sebagai 'Dwitunggal' karena selalu bekerja sama sejak masa perjuangan hingga awal kemerdekaan. Soekarno terpilih sebagai presiden pertama, sementara Hatta menjadi wakil presiden pertama Republik Indonesia. Keduanya kemudian dianugerahi gelar Pahlawan Proklamator.",
  },
  {
    type: "image",
    src: IMG_HATTA,
    caption: "Mohammad Hatta (Bung Hatta), Wakil Presiden pertama Republik Indonesia.",
  },
  {
    type: "list",
    items: [
      "Ir. Soekarno: Presiden pertama RI (1945-1967), lahir di Surabaya, 6 Juni 1901.",
      "Mohammad Hatta: Wakil Presiden pertama RI, dikenal juga sebagai Bapak Koperasi Indonesia.",
      "Keduanya diangkat sebagai Presiden dan Wakil Presiden oleh PPKI pada 18 Agustus 1945.",
    ],
  },

  { type: "heading", text: "3. Sumpah Pemuda" },
  {
    type: "paragraph",
    text: "Sumpah Pemuda diikrarkan pada 28 Oktober 1928 dalam Kongres Pemuda II di Jakarta. Ikrar ini menjadi tonggak penting persatuan pemuda dari berbagai daerah dan suku di Nusantara.",
  },
  {
    type: "example",
    title: "Isi Sumpah Pemuda (inti)",
    items: [
      "Satu Tanah Air, tanah air Indonesia.",
      "Satu Bangsa, bangsa Indonesia.",
      "Satu Bahasa, bahasa Indonesia.",
    ],
  },

  { type: "heading", text: "4. Simbol-Simbol Negara Indonesia" },
  {
    type: "paragraph",
    text: "Sebagai negara merdeka, Indonesia memiliki simbol-simbol resmi yang mencerminkan identitas dan nilai-nilai bangsa.",
  },
  {
    type: "list",
    items: [
      "Bendera: Sang Saka Merah Putih, merah melambangkan keberanian dan putih melambangkan kesucian.",
      "Lambang negara: Garuda Pancasila, burung garuda yang mencengkeram pita bertuliskan 'Bhinneka Tunggal Ika'.",
      "Dasar negara: Pancasila, terdiri dari lima sila sebagai pedoman hidup berbangsa dan bernegara.",
      "Lagu kebangsaan: Indonesia Raya, diciptakan oleh W.R. Supratman, pertama kali diperdengarkan pada Kongres Pemuda II 1928.",
      "Semboyan negara: Bhinneka Tunggal Ika, artinya 'berbeda-beda tetapi tetap satu jua'.",
    ],
  },

  { type: "heading", text: "5. Sekilas tentang Nama Indonesia" },
  {
    type: "paragraph",
    text: "Sebelum merdeka, wilayah Indonesia dijajah oleh Belanda selama ratusan tahun dan dikenal dengan nama Hindia Belanda. Ibu kota negara Indonesia sejak awal kemerdekaan adalah Jakarta, yang terletak di Pulau Jawa. Monumen Nasional (Monas) dibangun di Jakarta untuk mengenang perjuangan rakyat Indonesia merebut kemerdekaan.",
  },
];

// =====================================================================================
// NORMAL — Pergerakan nasional, masa penjajahan, dan perjuangan diplomasi.
// =====================================================================================
const normal = [
  {
    type: "paragraph",
    text: "Di level Normal, kamu akan belajar tentang masa penjajahan Belanda dan Jepang di Indonesia, lahirnya organisasi-organisasi pergerakan nasional, tokoh-tokoh pendidikan dan pers, hingga perjuangan diplomasi mempertahankan kemerdekaan lewat berbagai perjanjian.",
  },

  { type: "heading", text: "1. Masa Penjajahan: VOC dan Jepang" },
  {
    type: "paragraph",
    text: "VOC (Vereenigde Oostindische Compagnie) adalah kongsi dagang Belanda yang berkuasa di Nusantara sejak awal abad ke-17 hingga dibubarkan pada tahun 1799 akibat korupsi dan kebangkrutan. Setelah VOC bubar, kekuasaan diambil alih langsung oleh pemerintah Belanda. Pada tahun 1942, Jepang berhasil mengalahkan Belanda di Kalijati, Subang, dan mulai menduduki Indonesia hingga tahun 1945.",
  },
  {
    type: "list",
    items: [
      "VOC memiliki Hak Oktroi: hak istimewa untuk monopoli dagang, mencetak uang, bahkan menyatakan perang.",
      "Masa pendudukan Jepang (1942-1945) terasa berat karena kerja paksa (romusha), namun juga membuka kesempatan pemuda Indonesia berorganisasi dan berlatih militer (PETA).",
    ],
  },

  { type: "heading", text: "2. Kebangkitan Nasional: Budi Utomo & Sarekat Islam" },
  {
    type: "paragraph",
    text: "Tanggal 20 Mei 1908 menjadi tonggak awal pergerakan nasional Indonesia, ditandai berdirinya Budi Utomo oleh Dr. Soetomo bersama pelajar STOVIA (sekolah kedokteran di Batavia). Tanggal ini kemudian diperingati sebagai Hari Kebangkitan Nasional. Pada tahun 1911, H. Samanhudi mendirikan Sarekat Dagang Islam di Solo (kelak menjadi Sarekat Islam) untuk melindungi pedagang pribumi dari persaingan pedagang asing.",
  },
  {
    type: "example",
    title: "Organisasi Pergerakan Nasional Penting",
    items: [
      "Budi Utomo (1908) — Dr. Soetomo & pelajar STOVIA",
      "Sarekat Islam (1911) — H. Samanhudi",
      "Indische Partij (1912) — Tiga Serangkai: Douwes Dekker, dr. Cipto Mangunkusumo, Ki Hajar Dewantara",
      "Perhimpunan Indonesia (di Belanda) — para pelajar Indonesia yang belajar di negeri Belanda",
    ],
  },

  { type: "heading", text: "3. Ki Hajar Dewantara: Bapak Pendidikan Nasional" },
  {
    type: "paragraph",
    text: "Ki Hajar Dewantara, nama aslinya Raden Mas Soewardi Soerjaningrat, adalah salah satu tokoh Tiga Serangkai pendiri Indische Partij. Ia dikenal luas sebagai Bapak Pendidikan Nasional Indonesia karena mendirikan Perguruan Taman Siswa pada tahun 1922 untuk memberikan pendidikan kepada rakyat pribumi yang saat itu sulit mengakses sekolah Belanda.",
  },
  {
    type: "image",
    src: IMG_KI_HAJAR,
    caption: "Ki Hajar Dewantara, Bapak Pendidikan Nasional Indonesia dan pendiri Taman Siswa.",
  },
  {
    type: "example",
    title: "Semboyan Pendidikan Ki Hajar Dewantara",
    text: "'Ing ngarso sung tuladha' (di depan memberi teladan), 'ing madya mangun karsa' (di tengah membangun semangat), 'tut wuri handayani' (di belakang memberi dorongan). Semboyan ini masih dipakai dalam dunia pendidikan Indonesia hingga sekarang, dan hari lahirnya (2 Mei) diperingati sebagai Hari Pendidikan Nasional.",
  },

  { type: "heading", text: "4. Sumpah Pemuda dan Kongres Pemuda" },
  {
    type: "paragraph",
    text: "Kongres Pemuda II diselenggarakan di Jakarta pada 27-28 Oktober 1928, dihadiri para pemuda dari berbagai organisasi kedaerahan. Kongres ini menghasilkan Sumpah Pemuda yang berisi tiga ikrar: satu tanah air, satu bangsa, dan satu bahasa Indonesia — sekaligus menjadi momen pertama kali lagu Indonesia Raya diperdengarkan di depan umum.",
  },

  { type: "heading", text: "5. Perjuangan Diplomasi Mempertahankan Kemerdekaan" },
  {
    type: "paragraph",
    text: "Setelah proklamasi, Belanda masih berusaha kembali menguasai Indonesia lewat kekuatan militer maupun perundingan. Beberapa perjanjian dan peristiwa penting terjadi pada masa revolusi fisik (1945-1949):",
  },
  {
    type: "list",
    items: [
      "Pertempuran Surabaya (10 November 1945) — dipicu tewasnya Brigjen A.W.S. Mallaby, diperingati sebagai Hari Pahlawan.",
      "Perjanjian Linggarjati (1946) — Belanda mengakui secara de facto wilayah Jawa, Madura, dan Sumatra.",
      "Bandung Lautan Api (1946) — rakyat Bandung membakar kotanya sendiri agar tidak dikuasai Sekutu/NICA.",
      "Perjanjian Renville (1948) — ditandatangani di atas kapal USS Renville, wilayah RI semakin sempit.",
      "Serangan Umum 1 Maret 1949 di Yogyakarta — dipimpin Letkol Soeharto, membuktikan RI masih kuat.",
      "Konferensi Meja Bundar / KMB (1949) di Den Haag — Belanda akhirnya mengakui kedaulatan Indonesia.",
    ],
  },
  {
    type: "example",
    title: "Urutan Perjanjian Penting",
    text: "Linggarjati (1946) → Renville (1948) → Roem-Royen (1949) → Konferensi Meja Bundar/KMB (1949, pengakuan kedaulatan penuh).",
  },

  { type: "heading", text: "6. Persiapan Kemerdekaan: BPUPKI dan PPKI" },
  {
    type: "paragraph",
    text: "Menjelang akhir masa pendudukan, Jepang membentuk BPUPKI untuk menyelidiki usaha persiapan kemerdekaan, kemudian dilanjutkan oleh PPKI (Panitia Persiapan Kemerdekaan Indonesia) yang bertugas mempersiapkan kemerdekaan Indonesia secara nyata. Sehari setelah proklamasi, PPKI mengesahkan UUD 1945 serta mengangkat Soekarno-Hatta sebagai Presiden dan Wakil Presiden.",
  },
];

// =====================================================================================
// HARD — Perlawanan terhadap kolonial, revolusi fisik, dan dinamika Orde Lama–Reformasi.
// =====================================================================================
const hard = [
  {
    type: "paragraph",
    text: "Level Hard membahas perlawanan-perlawanan besar rakyat Nusantara terhadap penjajah, detik-detik menjelang proklamasi, hingga dinamika politik Indonesia pasca-kemerdekaan: dari Demokrasi Terpimpin, Orde Baru, sampai Reformasi 1998. Materi di level ini butuh pemahaman kronologi yang lebih detail.",
  },

  { type: "heading", text: "1. Perang Diponegoro (1825-1830)" },
  {
    type: "paragraph",
    text: "Perang Diponegoro, juga disebut Perang Jawa, adalah salah satu perlawanan terbesar terhadap kolonial Belanda. Perang ini dipicu oleh pemasangan patok jalan Belanda yang melintasi tanah leluhur Pangeran Diponegoro di Tegalrejo, Yogyakarta, tanpa izin. Perang berlangsung lima tahun dan menewaskan ratusan ribu jiwa. Pangeran Diponegoro akhirnya ditangkap secara licik oleh Jenderal De Kock saat perundingan gencatan senjata di Magelang, 28 Maret 1830, lalu diasingkan ke Manado kemudian Makassar hingga wafat.",
  },
  {
    type: "image",
    src: IMG_DIPONEGORO,
    caption: "'Penangkapan Pangeran Diponegoro' — lukisan karya Raden Saleh (1857) yang menggambarkan penangkapan licik Pangeran Diponegoro oleh Belanda pada 28 Maret 1830.",
  },
  {
    type: "example",
    title: "Perlawanan Daerah Lain terhadap Kolonial",
    items: [
      "Perang Padri (1803-1838) di Sumatra Barat — dipimpin Tuanku Imam Bonjol.",
      "Perang Aceh (1873-1904) — salah satu perang terlama & terberat bagi Belanda, tokohnya Teuku Umar dan Cut Nyak Dhien.",
      "Perlawanan Gowa-Tallo di Sulawesi Selatan — dipimpin Sultan Hasanuddin melawan VOC.",
    ],
  },

  { type: "heading", text: "2. Politik Etis (Politik Balas Budi)" },
  {
    type: "paragraph",
    text: "Politik Etis diusulkan oleh Van Deventer pada awal abad ke-20 sebagai bentuk balas budi Belanda kepada rakyat Hindia Belanda yang selama ini mereka manfaatkan hasil buminya lewat Tanam Paksa. Politik Etis memiliki tiga program utama, dikenal dengan istilah Trias Van Deventer.",
  },
  {
    type: "list",
    items: [
      "Irigasi: pembangunan sistem pengairan untuk pertanian.",
      "Edukasi: pendirian sekolah-sekolah untuk penduduk pribumi.",
      "Transmigrasi: pemindahan penduduk dari daerah padat ke daerah yang lebih jarang penduduknya.",
    ],
  },
  {
    type: "example",
    title: "Dampak Tak Terduga Politik Etis",
    text: "Program edukasi Politik Etis justru melahirkan kaum terpelajar pribumi yang kemudian menjadi pelopor pergerakan nasional, seperti para pendiri Budi Utomo dan Indische Partij.",
  },

  { type: "heading", text: "3. Detik-Detik Menjelang Proklamasi" },
  {
    type: "paragraph",
    text: "Setelah Jepang menyerah kepada Sekutu pada 14 Agustus 1945, muncul perbedaan pendapat antara golongan muda dan golongan tua soal waktu proklamasi. Golongan muda mendesak agar kemerdekaan segera diproklamasikan tanpa campur tangan Jepang, sehingga terjadi Peristiwa Rengasdengklok pada 16 Agustus 1945 — Soekarno-Hatta 'diamankan' ke Rengasdengklok untuk didesak segera memproklamasikan kemerdekaan.",
  },
  {
    type: "list",
    items: [
      "16 Agustus 1945 dini hari: Peristiwa Rengasdengklok.",
      "16 Agustus 1945 malam: rombongan kembali ke Jakarta, perumusan naskah proklamasi di rumah Laksamana Maeda.",
      "17 Agustus 1945 pukul 10.00: pembacaan teks proklamasi di Pegangsaan Timur 56.",
    ],
  },

  { type: "heading", text: "4. Revolusi Fisik: Agresi Militer Belanda" },
  {
    type: "paragraph",
    text: "Meski sudah merdeka, Belanda dua kali melancarkan serangan militer besar-besaran untuk merebut kembali Indonesia, yang keduanya justru melanggar perjanjian yang sudah disepakati.",
  },
  {
    type: "list",
    items: [
      "Agresi Militer Belanda I (Juli 1947): melanggar Perjanjian Linggarjati, Belanda menyerang wilayah RI.",
      "Agresi Militer Belanda II (Desember 1948): Belanda menyerbu ibu kota RI di Yogyakarta dan menangkap Soekarno-Hatta.",
      "Serangan Umum 1 Maret 1949: TNI di bawah Letkol Soeharto merebut kembali Yogyakarta selama enam jam, membuktikan ke dunia internasional bahwa RI masih eksis.",
    ],
  },

  { type: "heading", text: "5. Demokrasi Terpimpin dan Akhir Era Soekarno" },
  {
    type: "paragraph",
    text: "Setelah Pemilu pertama tahun 1955 gagal menghasilkan pemerintahan yang stabil, Presiden Soekarno mengeluarkan Dekrit Presiden 5 Juli 1959 yang membubarkan Konstituante dan kembali ke UUD 1945, menandai dimulainya era Demokrasi Terpimpin. Pada masa ini pula Soekarno mencetuskan Trikora (1961) untuk membebaskan Irian Barat dari Belanda.",
  },

  { type: "heading", text: "6. Gerakan 30 September dan Peralihan Kekuasaan" },
  {
    type: "paragraph",
    text: "Pada malam 30 September hingga dini hari 1 Oktober 1965 terjadi Gerakan 30 September (G30S), yang menewaskan sejumlah perwira tinggi TNI Angkatan Darat. Peristiwa ini memicu gejolak politik besar. Pada 11 Maret 1966, Presiden Soekarno mengeluarkan Supersemar (Surat Perintah Sebelas Maret) yang memberi wewenang kepada Letjen Soeharto untuk mengamankan situasi negara — langkah awal peralihan kekuasaan dari Soekarno ke Soeharto.",
  },

  { type: "heading", text: "7. Orde Baru dan Reformasi" },
  {
    type: "paragraph",
    text: "Soeharto resmi menjadi presiden kedua RI dan memimpin era Orde Baru selama sekitar 32 tahun (1967-1998), dengan fokus pada stabilitas politik dan pembangunan ekonomi sehingga dijuluki 'Bapak Pembangunan'. Namun, krisis moneter 1997-1998 memicu gelombang demonstrasi mahasiswa besar-besaran, memaksa Soeharto lengser pada 21 Mei 1998 — menandai dimulainya era Reformasi.",
  },
  {
    type: "image",
    src: IMG_SOEHARTO,
    caption: "Presiden Soeharto, pemimpin era Orde Baru (1967-1998), lengser pada 21 Mei 1998.",
  },
];

// =====================================================================================
// VERY HARD — Kerajaan-kerajaan kuno, kedatangan bangsa Eropa, dan diplomasi internasional.
// =====================================================================================
const veryhard = [
  {
    type: "paragraph",
    text: "Level Very Hard membahas sejarah Indonesia sejak era kerajaan Hindu-Buddha dan Islam kuno, kedatangan bangsa-bangsa Eropa dan sistem kolonial mereka, hingga peran Indonesia di kancah diplomasi internasional pasca-kemerdekaan. Materi ini membutuhkan hafalan detail nama tokoh, tahun, dan bukti sejarah (prasasti/perjanjian).",
  },

  { type: "heading", text: "1. Kerajaan Hindu-Buddha Tertua di Nusantara" },
  {
    type: "paragraph",
    text: "Kerajaan Kutai Martapura di Kalimantan Timur diperkirakan berdiri sekitar abad ke-4 Masehi dan merupakan kerajaan Hindu tertua yang diketahui di Nusantara, dibuktikan lewat tujuh Prasasti Yupa. Sementara di Jawa Barat, Kerajaan Tarumanegara berdiri sekitar abad ke-5 Masehi, dengan raja terkenalnya Purnawarman, dibuktikan lewat Prasasti Ciaruteun yang memuat cap telapak kaki sang raja.",
  },

  { type: "heading", text: "2. Kerajaan Sriwijaya: Kejayaan Maritim Sumatra" },
  {
    type: "paragraph",
    text: "Kerajaan Sriwijaya merupakan kerajaan maritim bercorak Buddha yang berkembang pesat di Sumatra sekitar abad ke-7 hingga ke-13, menguasai jalur perdagangan strategis di Selat Malaka dan menjadi pusat penyebaran agama Buddha di Asia Tenggara.",
  },
  {
    type: "example",
    title: "Bukti Sejarah Sriwijaya",
    text: "Prasasti Kedukan Bukit (683 M) di Palembang menjadi salah satu bukti tertulis tertua tentang keberadaan Kerajaan Sriwijaya, mencatat perjalanan suci (siddhayatra) yang dilakukan oleh pendirinya.",
  },

  { type: "heading", text: "3. Kerajaan Majapahit dan Sumpah Palapa" },
  {
    type: "paragraph",
    text: "Kerajaan Majapahit, berpusat di Jawa Timur, mencapai puncak kejayaan pada masa pemerintahan Raja Hayam Wuruk (1350-1389) dengan patihnya yang legendaris, Gajah Mada. Gajah Mada dikenal lewat Sumpah Palapa: sumpahnya untuk tidak menikmati kesenangan duniawi sebelum berhasil mempersatukan seluruh wilayah Nusantara di bawah panji Majapahit.",
  },
  {
    type: "image",
    src: IMG_GAJAH_MADA,
    caption: "Gajah Mada, Mahapatih Majapahit yang mengucapkan Sumpah Palapa untuk mempersatukan Nusantara.",
  },
  {
    type: "list",
    items: [
      "Majapahit dianggap sebagai kerajaan terbesar dalam sejarah Nusantara, wilayah kekuasaannya membentang luas hingga ke luar Jawa.",
      "Kitab Negarakertagama karya Mpu Prapanca menjadi sumber sejarah penting tentang kejayaan Majapahit pada masa Hayam Wuruk.",
    ],
  },

  { type: "heading", text: "4. Kerajaan-Kerajaan Islam di Nusantara" },
  {
    type: "paragraph",
    text: "Seiring runtuhnya kerajaan-kerajaan Hindu-Buddha, kerajaan-kerajaan bercorak Islam mulai berkembang dan menyebarkan agama Islam ke seluruh penjuru Nusantara.",
  },
  {
    type: "list",
    items: [
      "Kerajaan Demak: kerajaan Islam pertama di Jawa, didirikan oleh Raden Patah pada akhir abad ke-15.",
      "Kesultanan Aceh Darussalam: pusat perdagangan dan penyebaran Islam di ujung barat Nusantara.",
      "Kesultanan Gowa-Tallo (Makassar): dipimpin Sultan Hasanuddin, dijuluki 'Ayam Jantan dari Timur' karena keberaniannya melawan VOC.",
      "Kesultanan Mataram Islam: kerajaan Islam besar di Jawa Tengah, salah satu rajanya adalah Sultan Agung.",
    ],
  },

  { type: "heading", text: "5. Kedatangan Bangsa-Bangsa Eropa" },
  {
    type: "paragraph",
    text: "Pencarian rempah-rempah mendorong bangsa-bangsa Eropa berlayar hingga ke Nusantara, dimulai dari Portugis, disusul Spanyol, Belanda, dan Inggris.",
  },
  {
    type: "list",
    items: [
      "Portugis (1511): dipimpin Alfonso de Albuquerque berhasil menguasai Malaka, membuka jalur menuju Maluku, pusat rempah-rempah dunia.",
      "Spanyol: tiba di Maluku tak lama setelah Portugis, sempat bersaing memperebutkan pengaruh.",
      "Belanda (1596): Cornelis de Houtman menjadi orang Belanda pertama yang mendarat di Nusantara, tepatnya di Banten.",
      "Inggris: sempat berkuasa singkat di Hindia Belanda (1811-1816) di bawah Thomas Stamford Raffles, yang juga dikenal sebagai pendiri Singapura.",
    ],
  },

  { type: "heading", text: "6. VOC dan Sistem Tanam Paksa" },
  {
    type: "paragraph",
    text: "VOC (Vereenigde Oostindische Compagnie) didirikan Belanda pada 1602 dan diberi Hak Oktroi — hak istimewa untuk memonopoli perdagangan, mencetak uang sendiri, mendirikan benteng, bahkan menyatakan perang. VOC dibubarkan tahun 1799 akibat korupsi dan utang besar. Pemerintah Belanda kemudian mengambil alih kekuasaan secara langsung, dan pada 1830 Gubernur Jenderal Van den Bosch menerapkan sistem Tanam Paksa (Cultuurstelsel) yang mewajibkan petani menanam tanaman ekspor untuk keuntungan Belanda.",
  },
  {
    type: "example",
    title: "Perbandingan Kebijakan Kolonial",
    items: [
      "Hak Oktroi VOC (abad 17-18): monopoli dagang lewat kongsi dagang.",
      "Tanam Paksa/Cultuurstelsel (1830, Van den Bosch): kerja wajib menanam komoditas ekspor.",
      "Politik Etis (awal abad 20, Van Deventer): irigasi, edukasi, transmigrasi sebagai 'balas budi'.",
    ],
  },

  { type: "heading", text: "7. Perjanjian Bongaya dan Perlawanan Sulawesi" },
  {
    type: "paragraph",
    text: "Perjanjian Bongaya (1667) ditandatangani setelah Sultan Hasanuddin dari Kerajaan Gowa-Tallo kalah dalam peperangan melawan VOC yang dibantu Kerajaan Bone di bawah Arung Palakka. Perjanjian ini sangat merugikan Gowa-Tallo dan melemahkan kekuasaannya di Sulawesi Selatan.",
  },

  { type: "heading", text: "8. Indonesia dan Diplomasi Internasional" },
  {
    type: "paragraph",
    text: "Setelah merdeka, Indonesia aktif berperan dalam politik luar negeri bebas-aktif, khususnya menggalang solidaritas negara-negara Asia dan Afrika yang baru merdeka dari penjajahan.",
  },
  {
    type: "list",
    items: [
      "Konferensi Asia Afrika (1955) di Gedung Merdeka, Bandung — dihadiri 29 negara, melahirkan semangat Dasasila Bandung.",
      "Gerakan Non-Blok (1961) — dipelopori Indonesia (Soekarno) bersama India, Yugoslavia, Mesir, dan Ghana pada Konferensi Beograd, sebagai sikap tidak memihak blok Barat maupun blok Timur pada masa Perang Dingin.",
    ],
  },
];

export default { easy, normal, hard, veryhard };