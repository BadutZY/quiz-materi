// Materi pembelajaran manual untuk IPA (Ilmu Pengetahuan Alam), per tingkat kesulitan.
// Format blok sama seperti src/data/materi/matematika.js:
//   { type: "paragraph", text: "..." }
//   { type: "heading", text: "..." }
//   { type: "image", src: "...", caption: "..." }
//   { type: "list", items: ["...", "..."] }
//   { type: "example", title: "...", text: "..." } atau { type: "example", title: "...", items: ["...", "..."] }
//
// Kalau array suatu tingkat dikosongkan ( [] ), aplikasi otomatis menampilkan rangkuman
// sementara dari field "materi" pada soal (src/data/questions/ipa.js).

// =====================================================================================
// EASY — Setara SD kelas rendah/menengah.
// =====================================================================================
const easy = [
  {
    type: "paragraph",
    text: "Selamat datang di level Easy IPA! Di level ini kamu akan belajar dasar-dasar Ilmu Pengetahuan Alam yang jadi fondasi untuk semua materi berikutnya: bagaimana tumbuhan membuat makanan, wujud zat, organ tubuh manusia, tata surya, penggolongan hewan, gaya, rantai makanan, daur hidup, cuaca, bunyi, cahaya, dan sumber energi. Baca pelan-pelan dan hubungkan dengan hal-hal yang kamu lihat setiap hari, ya!",
  },

  { type: "heading", text: "1. Fotosintesis dan Bagian-bagian Tumbuhan" },
  {
    type: "paragraph",
    text: "Fotosintesis adalah proses tumbuhan hijau membuat makanannya sendiri dengan bantuan cahaya matahari. Tumbuhan menyerap gas karbon dioksida (CO2) dari udara dan air (H2O) dari tanah, lalu dengan bantuan zat hijau daun (klorofil) dan cahaya matahari, keduanya diubah menjadi makanan (glukosa) dan gas oksigen (O2) yang dilepaskan ke udara.",
  },
  {
    type: "list",
    items: [
      "Akar: menyerap air dan zat hara (mineral) dari dalam tanah, juga menopang tumbuhan agar berdiri kokoh.",
      "Batang: mengangkut air dari akar ke daun, dan menyalurkan hasil fotosintesis ke seluruh bagian tumbuhan.",
      "Daun: tempat utama terjadinya fotosintesis karena banyak mengandung klorofil (zat hijau daun).",
      "Bunga: alat perkembangbiakan tumbuhan.",
      "Buah dan biji: tempat calon tumbuhan baru serta cadangan makanannya.",
    ],
  },
  {
    type: "example",
    title: "Contoh Fotosintesis",
    text: "Daun pada tanaman mangga menyerap cahaya matahari melalui klorofil, mengambil CO2 dari udara dan air dari akar, lalu menghasilkan makanan bagi tumbuhan serta melepaskan oksigen yang kita hirup.",
  },

  { type: "heading", text: "2. Wujud Zat: Padat, Cair, dan Gas" },
  {
    type: "paragraph",
    text: "Setiap benda di sekitar kita memiliki wujud tertentu. Ada tiga wujud zat utama, yaitu padat, cair, dan gas. Ketiganya berbeda dalam bentuk dan volumenya.",
  },
  {
    type: "list",
    items: [
      "Zat padat: bentuk dan volumenya tetap, tidak berubah walau dipindah tempat. Contoh: batu, kayu, besi.",
      "Zat cair: volumenya tetap, tetapi bentuknya mengikuti wadahnya. Contoh: air, minyak, susu.",
      "Zat gas: bentuk dan volumenya berubah mengisi seluruh ruang wadahnya. Contoh: udara, uap air, asap.",
    ],
  },
  {
    type: "example",
    title: "Contoh Perubahan Wujud Sederhana",
    text: "Air yang dimasukkan ke dalam freezer akan membeku menjadi es (cair menjadi padat). Es yang dipanaskan akan mencair kembali menjadi air (padat menjadi cair).",
  },

  { type: "heading", text: "3. Organ Tubuh Manusia dan Panca Indera" },
  {
    type: "paragraph",
    text: "Tubuh manusia memiliki banyak organ dengan fungsinya masing-masing, serta panca indera untuk mengenali lingkungan sekitar.",
  },
  {
    type: "list",
    items: [
      "Paru-paru: organ pernapasan utama untuk menghirup oksigen dan mengeluarkan karbon dioksida.",
      "Jantung: memompa darah ke seluruh tubuh.",
      "Sistem rangka: tulang-tulang yang menopang tubuh dan melindungi organ dalam.",
      "Mata: indera penglihatan.",
      "Telinga: indera pendengaran.",
      "Hidung: indera penciuman.",
      "Lidah: indera pengecap rasa.",
      "Kulit: indera peraba.",
    ],
  },
  {
    type: "example",
    title: "Contoh Fungsi Organ",
    text: "Saat kita berlari, paru-paru bekerja lebih cepat menghirup oksigen dan jantung memompa darah lebih kencang untuk mengalirkan oksigen ke seluruh otot tubuh.",
  },

  { type: "heading", text: "4. Tata Surya" },
  {
    type: "paragraph",
    text: "Tata surya adalah kumpulan benda langit yang mengelilingi Matahari sebagai pusatnya. Matahari adalah bintang yang memancarkan cahaya dan panasnya sendiri, sedangkan planet-planet mengelilinginya karena gaya gravitasi Matahari.",
  },
  {
    type: "list",
    items: [
      "Matahari berada di pusat tata surya dan menjadi sumber cahaya serta panas bagi seluruh planet.",
      "Delapan planet mengelilingi Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus.",
      "Bulan adalah satelit alami Bumi yang mengelilingi Bumi dan tidak memiliki cahaya sendiri — cahaya bulan yang kita lihat adalah pantulan cahaya Matahari.",
    ],
  },
  {
    type: "image",
    src: "/images/subjects/ipa.png",
    caption: "Matahari sebagai pusat tata surya, dikelilingi oleh planet-planet",
  },
  {
    type: "example",
    title: "Contoh",
    text: "Bumi adalah planet ketiga dari Matahari dan satu-satunya planet di tata surya yang diketahui memiliki kehidupan.",
  },

  { type: "heading", text: "5. Penggolongan Hewan" },
  {
    type: "paragraph",
    text: "Hewan dapat digolongkan berdasarkan jenis makanannya dan cara berkembang biaknya.",
  },
  {
    type: "list",
    items: [
      "Berdasarkan makanan: herbivora (pemakan tumbuhan, contoh: sapi, kambing), karnivora (pemakan daging, contoh: singa, harimau), omnivora (pemakan segala, contoh: ayam, beruang).",
      "Berdasarkan cara berkembang biak: ovipar/bertelur (contoh: ayam, burung), vivipar/melahirkan (contoh: kucing, sapi), ovovivipar/bertelur-melahirkan (contoh: beberapa jenis ular dan ikan hiu).",
    ],
  },
  {
    type: "example",
    title: "Contoh Penggolongan Hewan",
    items: [
      "Sapi: herbivora, berkembang biak dengan melahirkan (vivipar).",
      "Ayam: omnivora, berkembang biak dengan bertelur (ovipar).",
      "Singa: karnivora, berkembang biak dengan melahirkan (vivipar).",
    ],
  },

  { type: "heading", text: "6. Gaya: Magnet dan Gravitasi" },
  {
    type: "paragraph",
    text: "Gaya adalah tarikan atau dorongan yang dapat memengaruhi gerak suatu benda. Dua contoh gaya yang sering kita jumpai adalah gaya magnet dan gaya gravitasi.",
  },
  {
    type: "list",
    items: [
      "Magnet memiliki dua kutub, yaitu kutub utara dan kutub selatan, dan dapat menarik benda-benda dari logam tertentu seperti besi.",
      "Gaya gravitasi adalah gaya tarik Bumi yang menarik semua benda ke bawah (ke arah pusat Bumi).",
    ],
  },
  {
    type: "example",
    title: "Contoh Gaya",
    text: "Ketika buah jatuh dari pohon, hal itu terjadi karena gaya gravitasi Bumi menarik buah tersebut ke bawah.",
  },

  { type: "heading", text: "7. Rantai Makanan dan Daur Hidup" },
  {
    type: "paragraph",
    text: "Rantai makanan menggambarkan urutan makan-dimakan antar makhluk hidup, sedangkan daur hidup menggambarkan tahap-tahap perkembangan seekor hewan dari lahir hingga dewasa.",
  },
  {
    type: "list",
    items: [
      "Produsen: tumbuhan hijau yang membuat makanannya sendiri melalui fotosintesis, berada di awal rantai makanan.",
      "Konsumen: hewan yang memakan makhluk hidup lain (konsumen I memakan produsen, konsumen II memakan konsumen I, dan seterusnya).",
      "Daur hidup kupu-kupu: telur → ulat (larva) → kepompong (pupa) → kupu-kupu dewasa.",
    ],
  },
  {
    type: "example",
    title: "Contoh Rantai Makanan",
    text: "Padi (produsen) dimakan oleh tikus (konsumen I), tikus dimakan oleh ular (konsumen II), dan ular dimakan oleh elang (konsumen III).",
  },

  { type: "heading", text: "8. Cuaca, Bunyi, Cahaya, dan Sumber Energi" },
  {
    type: "paragraph",
    text: "Cuaca adalah keadaan udara di suatu tempat dalam waktu singkat, misalnya cerah, berawan, hujan, atau berangin. Selain itu, kita juga mengenal bunyi, cahaya, serta pesawat sederhana yang membantu pekerjaan manusia.",
  },
  {
    type: "list",
    items: [
      "Bunyi dihasilkan oleh benda yang bergetar, misalnya senar gitar yang dipetik.",
      "Cahaya dapat merambat lurus dan dipantulkan oleh benda mengkilap seperti cermin.",
      "Pesawat sederhana (seperti roda, katrol, tuas) memudahkan pekerjaan manusia sehari-hari.",
      "Matahari adalah sumber energi utama bagi kehidupan di Bumi, termasuk untuk fotosintesis tumbuhan.",
      "Erosi adalah peristiwa terkikisnya tanah oleh air atau angin, salah satu bentuk perubahan lingkungan.",
    ],
  },
  {
    type: "example",
    title: "Contoh dalam Kehidupan Sehari-hari",
    items: [
      "Saat lonceng dipukul, lonceng bergetar dan menghasilkan bunyi.",
      "Cermin di kamar mandi memantulkan cahaya sehingga kita bisa melihat wajah kita sendiri.",
      "Roda pada sepeda adalah contoh pesawat sederhana yang memudahkan kita bergerak.",
    ],
  },
];

// =====================================================================================
// NORMAL — Setara SD kelas tinggi/SMP awal.
// =====================================================================================
const normal = [
  {
    type: "paragraph",
    text: "Di level Normal, kamu akan belajar konsep IPA yang lebih menantang: sistem pencernaan dan pernapasan manusia, perubahan wujud zat, hukum kekekalan energi, sistem peredaran darah, fotosintesis lanjutan, gelombang, sumber daya alam, adaptasi, simbiosis, kelistrikan sederhana, daur air, cuaca-iklim, perkembangbiakan tumbuhan, sendi, dan pubertas. Pastikan materi Easy sudah kamu kuasai dulu sebelum lanjut ke sini.",
  },

  { type: "heading", text: "1. Sistem Pencernaan dan Pernapasan Manusia" },
  {
    type: "paragraph",
    text: "Sistem pencernaan manusia bertugas mengolah makanan menjadi zat gizi yang bisa diserap tubuh, sedangkan sistem pernapasan bertugas menyediakan oksigen dan mengeluarkan karbon dioksida.",
  },
  {
    type: "list",
    items: [
      "Urutan sistem pencernaan: mulut → kerongkongan → lambung → usus halus → usus besar → anus.",
      "Enzim amilase pada air liur mulai mencerna karbohidrat menjadi gula sederhana sejak di mulut.",
      "Sistem pernapasan: hidung → tenggorokan (trakea) → paru-paru. Pertukaran oksigen dan karbon dioksida terjadi di kantung udara kecil bernama alveolus, yang terletak di dalam paru-paru.",
    ],
  },
  {
    type: "example",
    title: "Contoh Perjalanan Makanan",
    text: "Setelah dikunyah di mulut, makanan turun melalui kerongkongan menuju lambung untuk dicerna lebih lanjut, lalu sari makanannya diserap di usus halus, dan sisanya dibuang lewat usus besar.",
  },

  { type: "heading", text: "2. Perubahan Wujud Zat dan Hukum Kekekalan Energi" },
  {
    type: "paragraph",
    text: "Zat dapat berubah wujud melalui berbagai proses, dan energi selalu mengikuti hukum kekekalan energi.",
  },
  {
    type: "list",
    items: [
      "Mencair: padat menjadi cair (contoh: es mencair).",
      "Membeku: cair menjadi padat (contoh: air menjadi es).",
      "Menguap: cair menjadi gas (contoh: air mendidih menjadi uap).",
      "Mengembun: gas menjadi cair (contoh: uap air menempel di permukaan gelas dingin).",
      "Menyublim: padat menjadi gas secara langsung (contoh: kapur barus yang mengecil).",
      "Hukum kekekalan energi: energi tidak dapat diciptakan atau dimusnahkan, hanya dapat berubah dari satu bentuk ke bentuk lain.",
    ],
  },
  {
    type: "example",
    title: "Contoh Perubahan Wujud",
    text: "Perubahan wujud dari cair menjadi gas, seperti air yang dipanaskan hingga mendidih dan berubah menjadi uap, disebut menguap.",
  },

  { type: "heading", text: "3. Ekosistem, Adaptasi, dan Simbiosis" },
  {
    type: "paragraph",
    text: "Ekosistem terdiri dari komponen biotik (makhluk hidup) dan abiotik (benda tak hidup) yang saling berinteraksi. Di dalamnya, makhluk hidup beradaptasi dan berinteraksi lewat simbiosis.",
  },
  {
    type: "list",
    items: [
      "Komponen biotik: tumbuhan, hewan, manusia, dan mikroorganisme.",
      "Komponen abiotik: air, tanah, udara, cahaya matahari, dan suhu.",
      "Adaptasi morfologi: penyesuaian bentuk tubuh, contoh: bentuk paruh burung sesuai jenis makanannya.",
      "Adaptasi fisiologi: penyesuaian fungsi organ tubuh, contoh: unta menyimpan cadangan air di punuknya.",
      "Adaptasi tingkah laku: penyesuaian perilaku, contoh: bunglon mengubah warna kulitnya.",
      "Simbiosis mutualisme: saling menguntungkan (contoh: lebah dan bunga). Simbiosis komensalisme: satu untung, satu tidak dirugikan (contoh: anggrek menempel di pohon). Simbiosis parasitisme: satu untung, satu dirugikan (contoh: kutu pada hewan inangnya).",
    ],
  },
  {
    type: "example",
    title: "Contoh Simbiosis",
    text: "Hubungan antara kutu dan hewan inangnya, di mana kutu mengisap darah dan merugikan inangnya, disebut simbiosis parasitisme.",
  },

  { type: "heading", text: "4. Sistem Peredaran Darah dan Fotosintesis Lanjutan" },
  {
    type: "paragraph",
    text: "Jantung memompa darah ke seluruh tubuh, sementara fotosintesis pada tumbuhan menghasilkan oksigen yang kita hirup.",
  },
  {
    type: "list",
    items: [
      "Jantung adalah organ berotot yang memompa darah agar mengalir ke seluruh tubuh, membawa oksigen dan sari makanan.",
      "Fotosintesis menghasilkan glukosa (makanan) dan gas oksigen (O2) dari bahan baku karbon dioksida (CO2) dan air (H2O), dengan bantuan cahaya matahari.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Gas yang dihasilkan dari proses fotosintesis dan dilepaskan ke udara adalah oksigen, yang kemudian digunakan oleh manusia dan hewan untuk bernapas.",
  },

  { type: "heading", text: "5. Gelombang, Bunyi, dan Cahaya" },
  {
    type: "paragraph",
    text: "Gelombang terbagi menjadi gelombang mekanik dan gelombang elektromagnetik, sedangkan bunyi dan cahaya memiliki sifat-sifat khas yang bisa kita amati sehari-hari.",
  },
  {
    type: "list",
    items: [
      "Gelombang mekanik: memerlukan medium (zat perantara) untuk merambat, contoh: gelombang bunyi dan gelombang air.",
      "Gelombang elektromagnetik: tidak memerlukan medium, dapat merambat di ruang hampa, contoh: cahaya dan gelombang radio.",
      "Amplitudo bunyi menentukan kuat lemahnya bunyi yang kita dengar, sedangkan frekuensi menentukan tinggi rendahnya nada.",
      "Pembiasan cahaya (refraksi) terjadi ketika cahaya melewati dua medium berbeda kerapatannya, misalnya dari udara ke air.",
    ],
  },
  {
    type: "example",
    title: "Contoh Pembiasan Cahaya",
    text: "Pensil yang dicelupkan sebagian ke dalam gelas berisi air akan terlihat bengkok karena cahaya dibiaskan saat berpindah dari udara ke air.",
  },

  { type: "heading", text: "6. Kelistrikan Sederhana dan Gaya" },
  {
    type: "paragraph",
    text: "Rangkaian listrik sederhana memanfaatkan sumber listrik, kabel, dan alat listrik. Gaya juga dapat memengaruhi gerak dan bentuk benda.",
  },
  {
    type: "list",
    items: [
      "Rangkaian listrik sederhana terdiri dari sumber listrik (misalnya baterai), kabel penghantar, dan alat listrik seperti lampu.",
      "Gaya dapat mengubah bentuk benda (contoh: plastisin yang ditekan), mengubah arah gerak, atau mengubah kecepatan gerak suatu benda.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Ketika kita menekan plastisin hingga bentuknya berubah, ini menunjukkan bahwa gaya dapat mengubah bentuk benda.",
  },

  { type: "heading", text: "7. Daur Air, Cuaca-Iklim, dan Sumber Daya Alam" },
  {
    type: "paragraph",
    text: "Air di Bumi selalu mengalami siklus (daur), cuaca dan iklim memengaruhi kehidupan, dan sumber daya alam perlu dijaga kelestariannya.",
  },
  {
    type: "list",
    items: [
      "Daur air (siklus hidrologi): evaporasi (air menguap) → kondensasi (uap air berubah jadi titik-titik air di awan) → presipitasi (turun sebagai hujan).",
      "Cuaca: keadaan udara dalam waktu singkat di suatu tempat. Iklim: rata-rata kondisi cuaca dalam waktu lama (bertahun-tahun) di suatu wilayah.",
      "Sumber daya alam dapat diperbarui (contoh: air, tumbuhan, sinar matahari) dan tidak dapat diperbarui (contoh: minyak bumi, batu bara, gas alam).",
      "Pencemaran lingkungan dapat terjadi pada air, udara, atau tanah akibat aktivitas manusia, misalnya asap kendaraan yang mencemari udara.",
    ],
  },
  {
    type: "example",
    title: "Contoh Daur Air",
    text: "Air laut menguap (evaporasi) menjadi uap air, uap air naik dan mendingin membentuk awan (kondensasi), lalu awan yang jenuh air akan turun sebagai hujan (presipitasi).",
  },

  { type: "heading", text: "8. Perkembangbiakan Tumbuhan, Sendi, dan Pubertas" },
  {
    type: "paragraph",
    text: "Selain berkembang biak, tumbuhan dan tubuh manusia juga mengalami proses pertumbuhan dan perubahan yang khas.",
  },
  {
    type: "list",
    items: [
      "Penyerbukan adalah proses menempelnya serbuk sari pada kepala putik, menjadi langkah awal perkembangbiakan generatif pada tumbuhan.",
      "Sendi engsel (contoh: siku dan lutut) hanya bisa bergerak satu arah, berbeda dengan sendi peluru yang bisa bergerak ke segala arah.",
      "Pubertas adalah masa peralihan dari anak-anak menuju dewasa yang ditandai dengan perubahan fisik dan hormon.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Ketika serbuk sari dari benang sari menempel pada kepala putik bunga yang sama atau bunga lain, proses ini disebut penyerbukan dan merupakan awal dari pembuahan pada tumbuhan.",
  },
];

// =====================================================================================
// HARD — Setara SMP.
// =====================================================================================
const hard = [
  {
    type: "paragraph",
    text: "Level Hard membahas materi IPA setara SMP yang lebih mendalam: sel, hukum Newton, usaha & tekanan, reaksi kimia, campuran & kelarutan, jaringan tumbuhan, sistem ekskresi & saraf & hormon, klasifikasi makhluk hidup, listrik & hukum Ohm, perpindahan kalor, dan sistem imun. Materi ini membutuhkan pemahaman kuat dari level Easy dan Normal sebelumnya.",
  },

  { type: "heading", text: "1. Sel sebagai Unit Kehidupan" },
  {
    type: "paragraph",
    text: "Sel adalah unit terkecil penyusun makhluk hidup. Ada sel hewan dan sel tumbuhan, dengan struktur yang sedikit berbeda, namun keduanya memiliki bagian-bagian penting yang menjalankan fungsi masing-masing.",
  },
  {
    type: "list",
    items: [
      "Nukleus (inti sel): mengatur seluruh aktivitas sel dan menyimpan materi genetik (DNA).",
      "Mitokondria: tempat menghasilkan energi bagi sel (respirasi sel).",
      "Membran sel: melapisi dan melindungi sel serta mengatur zat yang keluar-masuk sel.",
      "Ribosom: tempat pembuatan protein.",
      "Dinding sel dan kloroplas hanya dimiliki oleh sel tumbuhan, tidak dimiliki sel hewan.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Bagian sel yang mengatur seluruh aktivitas sel dan berperan sebagai pusat kendali adalah nukleus (inti sel).",
  },

  { type: "heading", text: "2. Hukum Newton, Usaha, dan Tekanan" },
  {
    type: "paragraph",
    text: "Hukum Newton menjelaskan hubungan antara gaya dan gerak benda. Selain itu, ada konsep usaha (kerja) dan tekanan yang penting dalam fisika.",
  },
  {
    type: "list",
    items: [
      "Hukum Newton I (hukum kelembaman/inersia): benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya.",
      "Hukum Newton II: percepatan benda berbanding lurus dengan gaya dan berbanding terbalik dengan massa benda, dirumuskan F = m × a.",
      "Usaha (kerja): hasil kali gaya dengan perpindahan searah gaya, dirumuskan W = F × s (satuan: Joule).",
      "Tekanan hidrostatis zat cair semakin besar semakin dalam suatu titik berada di dalam zat cair.",
    ],
  },
  {
    type: "example",
    title: "Contoh Perhitungan Usaha",
    text: "Jika sebuah benda didorong dengan gaya 20 N sejauh 5 meter, maka usaha yang dilakukan adalah W = F × s = 20 × 5 = 100 Joule.",
  },

  { type: "heading", text: "3. Reaksi Kimia, Campuran, dan Kelarutan" },
  {
    type: "paragraph",
    text: "Reaksi kimia mengubah suatu zat menjadi zat baru dengan sifat berbeda, sementara campuran adalah gabungan dua zat atau lebih tanpa terjadi reaksi kimia.",
  },
  {
    type: "list",
    items: [
      "Tanda-tanda terjadinya reaksi kimia: perubahan warna, perubahan suhu, terbentuknya gas, atau terbentuknya endapan.",
      "Campuran homogen (larutan): komponennya tercampur merata sehingga tidak bisa dibedakan lagi, contoh: larutan gula.",
      "Campuran heterogen: komponennya masih bisa dibedakan/terpisah, contoh: campuran pasir dan air, atau suspensi dan koloid.",
      "Kelarutan zat dipengaruhi oleh suhu (memanaskan mempercepat kelarutan), jenis pelarut, dan tingkat pengadukan.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Perubahan bentuk suatu benda tanpa disertai perubahan sifat zatnya (misalnya kertas yang disobek) bukan merupakan tanda terjadinya reaksi kimia, karena zatnya masih tetap kertas.",
  },

  { type: "heading", text: "4. Jaringan Tumbuhan dan Fotosintesis" },
  {
    type: "paragraph",
    text: "Tumbuhan memiliki jaringan-jaringan khusus untuk mengangkut zat, dan fotosintesis merupakan proses kimiawi yang terjadi berkat klorofil.",
  },
  {
    type: "list",
    items: [
      "Xilem: jaringan pengangkut air dan mineral dari akar menuju daun.",
      "Floem: jaringan pengangkut hasil fotosintesis (zat makanan) dari daun ke seluruh bagian tumbuhan.",
      "Klorofil (zat hijau daun) menangkap energi cahaya matahari yang digunakan dalam reaksi fotosintesis.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Zat hijau daun yang berperan menangkap energi cahaya matahari dalam fotosintesis disebut klorofil, yang banyak terdapat di daun.",
  },

  { type: "heading", text: "5. Sistem Ekskresi, Saraf, dan Hormon" },
  {
    type: "paragraph",
    text: "Tubuh manusia memiliki sistem untuk membuang zat sisa (ekskresi), mengatur aktivitas tubuh (saraf), dan mengatur berbagai proses lewat zat kimia (hormon).",
  },
  {
    type: "list",
    items: [
      "Sistem ekskresi meliputi ginjal (menyaring darah dan menghasilkan urine), kulit (mengeluarkan keringat), paru-paru (mengeluarkan CO2), dan hati.",
      "Sistem saraf pusat terdiri dari otak dan sumsum tulang belakang, sedangkan sistem saraf tepi menghubungkan saraf pusat ke seluruh tubuh.",
      "Hormon dihasilkan oleh kelenjar endokrin. Contoh: hormon insulin dari pankreas mengatur kadar gula dalam darah.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Organ yang berfungsi menyaring darah dan menghasilkan urine adalah ginjal, bagian penting dari sistem ekskresi manusia.",
  },

  { type: "heading", text: "6. Klasifikasi Makhluk Hidup dan Keanekaragaman Hayati" },
  {
    type: "paragraph",
    text: "Makhluk hidup dikelompokkan (diklasifikasikan) untuk memudahkan mempelajarinya, dan keanekaragaman hayati menunjukkan variasi kehidupan di Bumi.",
  },
  {
    type: "list",
    items: [
      "Urutan takson dari terbesar ke terkecil: kingdom (kerajaan) → filum → kelas → ordo → famili → genus → spesies.",
      "Spesies adalah tingkatan takson paling dasar yang menunjukkan jenis suatu makhluk hidup.",
      "Keanekaragaman hayati terbagi tiga tingkat: keanekaragaman gen (contoh: variasi warna bulu kucing), keanekaragaman jenis, dan keanekaragaman ekosistem.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Perbedaan warna bulu pada sesama jenis kucing merupakan contoh keanekaragaman hayati tingkat gen, karena masih dalam satu spesies yang sama.",
  },

  { type: "heading", text: "7. Listrik, Hukum Ohm, dan Perpindahan Kalor" },
  {
    type: "paragraph",
    text: "Listrik dapat mengalir dalam rangkaian dan mengikuti hukum Ohm, sedangkan kalor (panas) dapat berpindah melalui tiga cara.",
  },
  {
    type: "list",
    items: [
      "Listrik statis terjadi akibat perpindahan elektron antar benda; elektron bermuatan negatif.",
      "Hukum Ohm: V = I × R, di mana V = tegangan (volt), I = kuat arus (ampere), R = hambatan (ohm).",
      "Konduksi: perpindahan kalor melalui zat perantara tanpa perpindahan partikel zat itu sendiri (contoh: gagang sendok logam yang panas saat ujungnya dipanaskan).",
      "Konveksi: perpindahan kalor disertai perpindahan partikel zat (contoh: air yang dipanaskan bergerak naik-turun).",
      "Radiasi: perpindahan kalor tanpa memerlukan zat perantara (contoh: panas matahari sampai ke Bumi melewati ruang hampa).",
    ],
  },
  {
    type: "example",
    title: "Contoh Perhitungan Hukum Ohm",
    text: "Jika tegangan sebesar 12 volt mengalir pada rangkaian dengan hambatan 4 ohm, maka kuat arusnya adalah I = V/R = 12/4 = 3 ampere.",
  },

  { type: "heading", text: "8. Getaran, Gelombang Bunyi, dan Sistem Imun" },
  {
    type: "paragraph",
    text: "Getaran menghasilkan gelombang bunyi yang bisa kita dengar, dan tubuh manusia memiliki sistem imun untuk melawan infeksi.",
  },
  {
    type: "list",
    items: [
      "Semakin tinggi frekuensi getaran, semakin tinggi pula nada bunyi yang dihasilkan. Satuan frekuensi bunyi adalah Hertz (Hz).",
      "Sel darah putih (leukosit) adalah sel darah yang berperan utama melawan infeksi dan penyakit dalam tubuh.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Garpu tala yang dipukul akan bergetar dengan frekuensi tertentu, menghasilkan bunyi dengan nada yang khas sesuai frekuensi getarannya.",
  },
];

// =====================================================================================
// VERY HARD — Setara SMA/SMK tingkat akhir.
// =====================================================================================
const veryhard = [
  {
    type: "paragraph",
    text: "Level Very Hard membahas materi IPA lanjutan setara kelas XI-XII SMA/SMK: teori evolusi & genetika Mendel, hukum Newton III & struktur atom, homeostasis & sistem imun lanjut, radioaktivitas & reaksi nuklir, termodinamika, kimia lanjut (mol, redoks, pH, stoikiometri), biologi molekuler (DNA, enzim, osmosis), fisika lanjut (induksi elektromagnetik, optika), serta bioteknologi. Materi ini membutuhkan pemahaman kuat dari level-level sebelumnya, terutama biologi sel, kimia dasar, dan fisika dasar.",
  },

  { type: "heading", text: "1. Teori Evolusi dan Genetika Mendel" },
  {
    type: "paragraph",
    text: "Teori evolusi Charles Darwin menjelaskan bagaimana makhluk hidup berubah dan beradaptasi dari generasi ke generasi, sedangkan genetika Mendel menjelaskan bagaimana sifat diwariskan.",
  },
  {
    type: "list",
    items: [
      "Konsep utama teori evolusi Darwin adalah seleksi alam: makhluk hidup yang paling mampu beradaptasi dengan lingkungannya yang akan bertahan hidup dan mewariskan sifatnya.",
      "Hukum Mendel (persilangan monohibrid dominan penuh) menghasilkan perbandingan fenotipe 3:1 pada generasi F2 (3 bagian bersifat dominan, 1 bagian bersifat resesif).",
    ],
  },
  {
    type: "example",
    title: "Contoh Persilangan Monohibrid",
    text: "Jika bunga merah (dominan) disilangkan dengan bunga putih (resesif) menghasilkan F1 semuanya merah, maka pada F2 (hasil silang sesama F1) akan didapat perbandingan fenotipe 3 merah : 1 putih.",
  },

  { type: "heading", text: "2. Hukum Newton III dan Struktur Atom" },
  {
    type: "paragraph",
    text: "Hukum Newton III menjelaskan pasangan gaya aksi-reaksi, sedangkan struktur atom menjelaskan partikel penyusun materi.",
  },
  {
    type: "list",
    items: [
      "Hukum Newton III (hukum aksi-reaksi): setiap aksi menimbulkan reaksi yang sama besar namun berlawanan arah.",
      "Atom tersusun dari proton (bermuatan positif) dan neutron (bermuatan netral) di dalam inti atom, serta elektron (bermuatan negatif) yang mengelilingi inti.",
    ],
  },
  {
    type: "example",
    title: "Contoh Aksi-Reaksi",
    text: "Saat kita mendayung perahu, dayung mendorong air ke belakang (aksi), dan air mendorong perahu ke depan dengan gaya yang sama besar (reaksi).",
  },

  { type: "heading", text: "3. Homeostasis dan Sistem Imun Lanjut" },
  {
    type: "paragraph",
    text: "Tubuh makhluk hidup memiliki kemampuan menjaga kestabilan kondisi internalnya, serta sistem pertahanan yang canggih untuk melawan zat asing.",
  },
  {
    type: "list",
    items: [
      "Homeostasis: kemampuan tubuh mempertahankan kondisi internal yang stabil, contoh: menjaga suhu tubuh tetap normal meski suhu lingkungan berubah.",
      "Antibodi (imunoglobulin) diproduksi oleh sel limfosit B sebagai respons terhadap antigen (zat asing) yang masuk ke dalam tubuh.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Ketika tubuh terinfeksi virus, sel limfosit B akan memproduksi antibodi khusus yang menempel pada virus tersebut untuk menetralkannya.",
  },

  { type: "heading", text: "4. Radioaktivitas dan Reaksi Nuklir" },
  {
    type: "paragraph",
    text: "Radioaktivitas adalah peluruhan inti atom yang tidak stabil, sedangkan reaksi nuklir terbagi menjadi fisi (pembelahan) dan fusi (penggabungan) inti atom.",
  },
  {
    type: "list",
      items: [
      "Unsur radioaktif dapat memancarkan tiga jenis sinar: sinar alfa, sinar beta, dan sinar gamma, disertai pelepasan energi.",
      "Fisi nuklir: reaksi pembelahan inti atom berat menjadi inti-inti yang lebih ringan, digunakan pada reaktor nuklir dan bom atom.",
      "Fusi nuklir: reaksi penggabungan dua inti atom ringan menjadi inti yang lebih berat, seperti yang terjadi di dalam Matahari.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Reaksi yang terjadi di dalam Matahari untuk menghasilkan energi cahaya dan panas adalah fusi nuklir, yaitu penggabungan inti atom hidrogen menjadi helium.",
  },

  { type: "heading", text: "5. Termodinamika" },
  {
    type: "paragraph",
    text: "Termodinamika mempelajari hubungan antara kalor, usaha, dan energi dalam suatu sistem.",
  },
  {
    type: "list",
    items: [
      "Hukum termodinamika I: berkaitan dengan kekekalan energi (energi tidak dapat diciptakan/dimusnahkan, hanya berubah bentuk).",
      "Hukum termodinamika II: berkaitan dengan konsep entropi, yaitu tingkat ketidakteraturan suatu sistem yang selalu cenderung meningkat.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Es batu yang dibiarkan di ruangan panas akan mencair dan mencapai suhu ruangan (entropi meningkat), bukan sebaliknya secara spontan.",
  },

  { type: "heading", text: "6. Kimia Lanjut: Mol, Redoks, pH, dan Stoikiometri" },
  {
    type: "paragraph",
    text: "Ilmu kimia tingkat lanjut mempelajari perhitungan jumlah zat (mol), reaksi transfer elektron (redoks), tingkat keasaman (pH), dan perhitungan reaksi kimia (stoikiometri).",
  },
  {
    type: "list",
    items: [
      "1 mol suatu zat mengandung 6,022 × 10²³ partikel, dikenal sebagai bilangan Avogadro.",
      "Reaksi oksidasi: pelepasan elektron, menyebabkan kenaikan bilangan oksidasi (biloks). Reaksi reduksi: penerimaan elektron, menyebabkan penurunan biloks.",
      "pH dihitung dengan rumus pH = -log[H+]. Larutan dengan pH < 7 bersifat asam, pH = 7 netral, pH > 7 bersifat basa.",
      "Stoikiometri menghitung perbandingan mol antar zat dalam persamaan reaksi kimia yang sudah setara.",
    ],
  },
  {
    type: "example",
    title: "Contoh Perhitungan pH dan Stoikiometri",
    items: [
      "Jika konsentrasi ion H+ suatu larutan adalah 10⁻³ M, maka pH = -log(10⁻³) = 3 (bersifat asam).",
      "Pada persamaan setara 2H2 + O2 → 2H2O, perbandingan mol gas hidrogen terhadap gas oksigen yang bereaksi adalah 2:1.",
    ],
  },

  { type: "heading", text: "7. Biologi Molekuler: DNA, Enzim, dan Osmosis" },
  {
    type: "paragraph",
    text: "Di tingkat molekuler, kehidupan diatur oleh DNA, dipercepat prosesnya oleh enzim, dan sel mengatur cairan lewat osmosis.",
  },
  {
    type: "list",
    items: [
      "DNA berbentuk double helix (untai ganda) dengan pasangan basa nitrogen tetap: adenin selalu berpasangan dengan timin, dan guanin selalu berpasangan dengan sitosin.",
      "Enzim adalah katalis biologis yang mempercepat reaksi kimia tanpa ikut bereaksi; enzim akan rusak/kehilangan fungsi (mengalami denaturasi) pada suhu terlalu tinggi atau pH yang terlalu ekstrem.",
      "Osmosis: perpindahan molekul air dari larutan berkonsentrasi rendah (hipotonik) menuju larutan berkonsentrasi tinggi (hipertonik) melalui membran semipermeabel. Sel tumbuhan yang kehilangan banyak air dalam larutan hipertonik akan mengalami plasmolisis (mengerut).",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Sel tumbuhan yang direndam dalam larutan garam pekat (hipertonik) akan kehilangan air dan mengalami plasmolisis, yaitu lepasnya membran sel dari dinding sel akibat sel mengerut.",
  },

  { type: "heading", text: "8. Fisika Lanjut: Induksi Elektromagnetik dan Optika" },
  {
    type: "paragraph",
    text: "Fisika lanjutan mempelajari bagaimana listrik dan magnet saling berkaitan, serta sifat gelombang cahaya.",
  },
  {
    type: "list",
    items: [
      "Induksi elektromagnetik ditemukan oleh Michael Faraday: timbulnya gaya gerak listrik (GGL) akibat perubahan medan magnet di sekitar kumparan, menjadi dasar kerja generator listrik.",
      "Interferensi cahaya: perpaduan dua gelombang cahaya koheren yang menghasilkan pola gelap-terang, dibuktikan lewat percobaan celah ganda oleh Thomas Young, yang menunjukkan bahwa cahaya memiliki sifat gelombang.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Dinamo sepeda yang menyalakan lampu saat roda berputar memanfaatkan prinsip induksi elektromagnetik: perputaran magnet di dalam kumparan menghasilkan arus listrik.",
  },

  { type: "heading", text: "9. Bioteknologi dan Fisiologi Tumbuhan" },
  {
    type: "paragraph",
    text: "Bioteknologi memanfaatkan makhluk hidup untuk kebutuhan manusia, sedangkan fisiologi tumbuhan mempelajari cara kerja hormon pada tumbuhan.",
  },
  {
    type: "list",
    items: [
      "Bioteknologi konvensional memanfaatkan mikroorganisme secara langsung tanpa rekayasa genetika, contoh: pembuatan tempe dan tape menggunakan jamur/ragi.",
      "Bioteknologi modern (rekayasa genetika/DNA rekombinan) menyisipkan gen dari satu organisme ke organisme lain menggunakan enzim restriksi (memotong DNA) dan enzim ligase (menyambung DNA).",
      "Hormon auksin pada tumbuhan berperan dalam pemanjangan sel dan pertumbuhan batang ke arah datangnya cahaya (fototropisme).",
      "Fotoperiodisme: respons tumbuhan terhadap panjang penyinaran (siang/malam) yang memengaruhi waktu pembungaan.",
    ],
  },
  {
    type: "example",
    title: "Contoh",
    text: "Enzim restriksi (endonuklease) digunakan dalam rekayasa genetika untuk memotong DNA pada urutan tertentu, sebelum gen yang diinginkan disisipkan ke organisme lain menggunakan enzim ligase.",
  },
];

export default { easy, normal, hard, veryhard };