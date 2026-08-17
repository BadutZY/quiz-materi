import { useState } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { GameProvider } from "./context/GameContext.jsx";
import MainMenu from "./pages/MainMenu.jsx";
import SubjectSelect from "./pages/SubjectSelect.jsx";
import DifficultySelect from "./pages/DifficultySelect.jsx";
import Quiz from "./pages/Quiz.jsx";
import MateriSubjectSelect from "./pages/MateriSubjectSelect.jsx";
import MateriDifficultySelect from "./pages/MateriDifficultySelect.jsx";
import MateriDetail from "./pages/MateriDetail.jsx";
import BottomNav from "./components/BottomNav.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

// Beberapa titik pixel yang melayang pelan di latar belakang seluruh aplikasi.
// Murni dekoratif (pointer-events: none) supaya tidak mengganggu interaksi.
function PixelDust() {
  const dots = [
    { left: "6%", size: 5, duration: 14, delay: 0, drift: "18px" },
    { left: "18%", size: 4, duration: 18, delay: 2, drift: "-24px" },
    { left: "32%", size: 6, duration: 16, delay: 5, drift: "12px" },
    { left: "48%", size: 4, duration: 20, delay: 1, drift: "-16px" },
    { left: "63%", size: 5, duration: 15, delay: 7, drift: "20px" },
    { left: "77%", size: 4, duration: 19, delay: 3, drift: "-12px" },
    { left: "89%", size: 6, duration: 17, delay: 6, drift: "16px" },
  ];

  return (
    <div className="pixel-dust" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            "--drift": d.drift,
          }}
        />
      ))}
    </div>
  );
}

// Bottom nav disembunyikan di menu utama (belum ada nama pemain) dan saat
// sedang mengerjakan kuis (halaman itu sudah punya tombol "SELESAI" mengambang).
function shouldShowBottomNav(pathname) {
  if (pathname === "/") return false;
  if (pathname.startsWith("/quiz/")) return false;
  return true;
}

function AppShell() {
  const location = useLocation();
  const showBottomNav = shouldShowBottomNav(location.pathname);

  return (
    <div className="app-shell">
      <PixelDust />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/subjects" element={<SubjectSelect />} />
        <Route path="/subjects/:subjectId" element={<DifficultySelect />} />
        <Route path="/quiz/:subjectId/:difficultyId" element={<Quiz />} />
        <Route path="/materi" element={<MateriSubjectSelect />} />
        <Route path="/materi/:subjectId" element={<MateriDifficultySelect />} />
        <Route path="/materi/:subjectId/:difficultyId" element={<MateriDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  // Loading screen tampil setiap aplikasi pertama kali dimuat / halaman di-refresh.
  const [booting, setBooting] = useState(true);

  return (
    <GameProvider>
      <HashRouter>
        {booting && <LoadingScreen onDone={() => setBooting(false)} />}
        <AppShell />
      </HashRouter>
    </GameProvider>
  );
}