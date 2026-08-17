import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DIFFICULTIES, getSubject, minCorrectToPass } from "../data/subjects.js";
import { getQuestions } from "../data/questionBank.js";
import { useGame } from "../context/GameContext.jsx";
import PixelIcon from "../components/PixelIcon.jsx";
import PixelButton from "../components/PixelButton.jsx";

export default function DifficultySelect() {
  const { subjectId } = useParams();
  const { playerName, getLevelState } = useGame();
  const navigate = useNavigate();
  const subject = getSubject(subjectId);
  const [shakeId, setShakeId] = useState(null);

  useEffect(() => {
    if (!playerName) navigate("/", { replace: true });
    else if (!subject) navigate("/subjects", { replace: true });
  }, [playerName, subject, navigate]);

  if (!subject) return null;

  return (
    <div className="container" style={{ paddingBottom: 100 }}>
      <header style={{ paddingTop: 12, marginBottom: 22 }}>
        <PixelButton variant="ghost" size="sm" icon="arrowLeft" onClick={() => navigate("/subjects")}>
          Mata Pelajaran
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
          <p className="text-faint" style={{ fontSize: "0.82rem" }}>Pilih tingkat kesulitan</p>
        </div>
      </div>

      <div className="stack difficulty-list">
        {DIFFICULTIES.map((diff, i) => {
          const level = getLevelState(subjectId, diff.id);
          const totalQuestions = getQuestions(subjectId, diff.id).length;
          const needed = minCorrectToPass(totalQuestions || 1);
          const locked = !level.unlocked;

          return (
            <button
              key={diff.id}
              className={`pixel-card pixel-corners difficulty-card ${locked ? "locked" : ""} ${shakeId === diff.id ? "shake-anim" : ""}`}
              style={{ "--i": i }}
              onClick={() => {
                if (!locked) {
                  navigate(`/quiz/${subjectId}/${diff.id}`);
                } else {
                  setShakeId(diff.id);
                  setTimeout(() => setShakeId(null), 450);
                }
              }}
            >
              <div className="difficulty-badge">{locked ? <PixelIcon name="lock" size={18} /> : diff.short}</div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontWeight: 800 }}>{diff.name}</p>
                <p className="text-faint" style={{ fontSize: "0.78rem" }}>
                  {locked
                    ? "Selesaikan level sebelumnya untuk membuka"
                    : `${totalQuestions} soal · Lulus jika benar ≥ ${needed}`}
                </p>
              </div>
              {level.passed && (
                <span className="pixel-tag pixel-tag-solid">
                  <PixelIcon name="check" size={12} /> LULUS
                </span>
              )}
              {!level.passed && level.attempts > 0 && !locked && (
                <span className="pixel-tag">
                  {level.bestCorrect}/{level.bestTotal}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}