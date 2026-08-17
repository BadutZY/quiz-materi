import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SUBJECTS } from "../data/subjects.js";
import { useGame } from "../context/GameContext.jsx";
import PixelIcon from "../components/PixelIcon.jsx";

export default function SubjectSelect() {
  const { playerName } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!playerName) navigate("/", { replace: true });
  }, [playerName, navigate]);

  return (
    <div className="container" style={{ paddingBottom: 100 }}>
      <header className="row-between" style={{ marginBottom: 22, paddingTop: 12 }}>
        <div>
          <p className="text-faint" style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>
            Halo, {playerName}!
          </p>
          <h1 style={{ fontSize: "1.5rem" }}>Pilih Mata Pelajaran</h1>
        </div>
        <button
          className="pixel-icon-frame pixel-corners"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          aria-label="Kembali ke menu utama"
        >
          <PixelIcon name="home" size={26} />
        </button>
      </header>

      <div className="subject-grid">
        {SUBJECTS.map((subject, i) => (
          <button
            key={subject.id}
            className="pixel-card pixel-corners subject-card"
            style={{ "--i": i }}
            onClick={() => navigate(`/subjects/${subject.id}`)}
          >
            <div className="pixel-icon-frame pixel-corners subject-card-image-frame">
              {subject.image ? (
                <img src={subject.image} alt={subject.name} className="subject-card-image" />
              ) : (
                <PixelIcon name={subject.icon} size={24} />
              )}
            </div>
            <div>
              <p style={{ fontWeight: 800 }}>{subject.name}</p>
              <p className="text-faint" style={{ fontSize: "0.78rem", marginTop: 2 }}>
                {subject.tagline}
              </p>
            </div>
          </button>
        ))}
      </div>

      <p className="text-faint text-center" style={{ marginTop: 26, fontSize: "0.82rem" }}>
        Pilih salah satu mata pelajaran untuk melihat tingkat kesulitannya.
      </p>
    </div>
  );
}