import { useState } from "react";
import PixelIcon from "./PixelIcon.jsx";
import PixelButton from "./PixelButton.jsx";
import Modal from "./Modal.jsx";

// Tombol bulat kecil berlogo "i" (info), biasanya ditaruh di sebelah tombol home.
// Saat ditekan, menampilkan modal pemberitahuan bahwa materi di aplikasi ini
// disusun dengan bantuan AI, sehingga pengguna disarankan mencari referensi lain
// untuk pemahaman yang lebih mendalam.
export default function MateriInfoButton({ size = 26 }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="pixel-icon-frame pixel-corners"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(true)}
        aria-label="Info tentang sumber materi"
      >
        <PixelIcon name="info" size={size} />
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="stack" style={{ gap: 14 }}>
            <div className="pixel-icon-frame pixel-corners" style={{ margin: "0 auto" }}>
              <PixelIcon name="info" size={26} />
            </div>
            <h2 className="text-center" style={{ fontSize: "1.1rem" }}>
              Tentang Materi Ini
            </h2>
            <p className="text-dim text-center">
              Materi pembelajaran di aplikasi ini disusun dengan bantuan AI (kecerdasan buatan) sebagai
              rangkuman untuk membantu proses belajar.
            </p>
            <p className="text-dim text-center">
              Meski sudah diusahakan akurat, materi AI tetap bisa saja belum lengkap atau ada bagian yang
              perlu diperbarui. Disarankan untuk mencari referensi tambahan dari buku pelajaran, guru, atau
              sumber terpercaya lain agar pemahamanmu lebih mendalam.
            </p>
            <PixelButton onClick={() => setOpen(false)}>Mengerti</PixelButton>
          </div>
        </Modal>
      )}
    </>
  );
}