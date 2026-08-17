import { createPortal } from "react-dom";

// Modal di-render lewat portal langsung ke document.body.
//
// Kenapa perlu portal? Elemen .container di halaman punya CSS `animation`
// yang menyentuh `transform`. Begitu animasi itu "in effect" (termasuk
// setelah selesai, karena fill-mode "both"), browser membuat .container
// jadi stacking context baru. Kalau modal ini dirender di dalam .container
// seperti sebelumnya, maka `z-index` modal jadi hanya berlaku DI DALAM
// stacking context itu — tidak bisa lagi "menang" melawan elemen lain di
// luar .container seperti BottomNav (yang juga position: fixed). Itulah
// sebabnya di mobile, bottom bar terlihat menutupi/berada di atas modal.
//
// Dengan portal ke document.body, modal selalu jadi anak langsung dari
// <body>, sehingga z-index-nya dibandingkan di root stacking context —
// otomatis selalu tampil paling atas, di atas bottom nav.
export default function Modal({ children, onClose, className = "" }) {
  return createPortal(
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div className={`modal-box pixel-corners ${className}`.trim()}>{children}</div>
    </div>,
    document.body
  );
}