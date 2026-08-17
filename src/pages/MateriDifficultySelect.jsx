import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DIFFICULTIES, getSubject } from "../data/subjects.js";
import { getMateri } from "../data/materiBank.js";
import { useGame } from "../context/GameContext.jsx";
import PixelIcon from "../components/PixelIcon.jsx";
import PixelButton from "../components/PixelButton.jsx";

export default function MateriDifficultySelect() {
  const { subjectId } = useParams();
  const { playerName } = useGame();
  const navigate = useNavigate();
  const subject = getSubject(subjectId);

  useEffect(() => {
    if (!playerName) navigate("/", { replace: true });
    else if (!subject) navigate("/materi", { replace: true });
  }, [playerName, subject, navigate]);

  if (!subject) return null;

  return (
    <div className="container" style={{ paddingBottom: 100 }}>
      <header style={{ paddingTop: 12, marginBottom: 22 }}>
        <PixelButton variant="ghost" size="sm" icon="arrowLeft" onClick={() => navigate("/materi")}>
          Materi Pembelajaran
        </PixelButton>
      </header>

      <div className="row" style={{ marginBottom: 24 }}>
        <div className="pixel-icon-frame pixel-corners" style={{ width: 56, height: 56 }}>
          {subject.image ? (
            <img src={subject.image} alt={subject.name} className="subject-card-image" />
          ) : (
            <PixelIcon name={subject.icon} size={28} />
          )}
        </div>
        <div>
          <h1 style={{ fontSize: "1.4rem" }}>{subject.name}</h1>
          <p className="text-faint" style={{ fontSize: "0.82rem" }}>Pilih tingkat materi</p>
        </div>
      </div>

      <div className="stack difficulty-list">
        {DIFFICULTIES.map((diff, i) => {
          const points = getMateri(subjectId, diff.id);

          return (
            <button
              key={diff.id}
              className="pixel-card pixel-corners difficulty-card"
              style={{ "--i": i }}
              onClick={() => navigate(`/materi/${subjectId}/${diff.id}`)}
            >
              <div className="difficulty-badge">{diff.short}</div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontWeight: 800 }}>{diff.name}</p>
                <p className="text-faint" style={{ fontSize: "0.78rem" }}>
                  {points.length > 0 ? `${points.length} poin materi` : "Belum ada materi"}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}