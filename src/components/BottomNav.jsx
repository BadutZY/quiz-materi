import { useLocation, useNavigate } from "react-router-dom";
import PixelIcon from "./PixelIcon.jsx";

const TABS = [
  {
    key: "subjects",
    label: "Pilih Mata Pelajaran",
    icon: "grid",
    path: "/subjects",
    match: (p) => p.startsWith("/subjects") || p.startsWith("/quiz"),
  },
  {
    key: "materi",
    label: "Materi Pembelajaran",
    icon: "book",
    path: "/materi",
    match: (p) => p.startsWith("/materi"),
  },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {TABS.map((tab) => {
          const active = tab.match(location.pathname);
          return (
            <button
              key={tab.key}
              className={`bottom-nav-item ${active ? "active" : ""}`}
              onClick={() => navigate(tab.path)}
            >
              <PixelIcon name={tab.icon} size={20} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}