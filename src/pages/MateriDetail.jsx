import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubject, getDifficulty } from "../data/subjects.js";
import { getMateri } from "../data/materiBank.js";
import { useGame } from "../context/GameContext.jsx";
import PixelButton from "../components/PixelButton.jsx";
import MateriInfoButton from "../components/MateriInfoButton.jsx";

// Merender satu blok materi sesuai tipenya. Lihat src/data/materi/matematika.js
// untuk penjelasan lengkap format tiap tipe blok (paragraph, heading, image, list, example).
function MateriBlock({ block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="materi-heading">{block.text}</h2>;

    case "paragraph":
      return <p className="materi-paragraph">{block.text}</p>;

    case "image":
      return (
        <div className="materi-block">
          <div className="materi-image-frame pixel-corners">
            <img src={block.src} alt={block.alt || block.caption || ""} className="materi-image" />
          </div>
          {block.caption && <p className="materi-image-caption">{block.caption}</p>}
        </div>
      );

    case "list":
      return (
        <ul className="materi-list materi-block">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "example":
      return (
        <div className="materi-example materi-block">
          <p className="materi-example-title">{block.title || "Contoh"}</p>
          {block.items ? (
            <ul className="materi-list">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="materi-paragraph" style={{ marginBottom: 0 }}>
              {block.text}
            </p>
          )}
        </div>
      );

    default:
      return null;
  }
}

export default function MateriDetail() {
  const { subjectId, difficultyId } = useParams();
  const { playerName, isUnlocked } = useGame();
  const navigate = useNavigate();
  const subject = getSubject(subjectId);
  const difficulty = getDifficulty(difficultyId);
  const blocks = getMateri(subjectId, difficultyId);

  useEffect(() => {
    if (!playerName) navigate("/", { replace: true });
    else if (!subject || !difficulty) navigate("/materi", { replace: true });
  }, [playerName, subject, difficulty, navigate]);

  if (!subject || !difficulty) return null;

  const quizUnlocked = isUnlocked(subjectId, difficultyId);

  return (
    <div className="container" style={{ paddingBottom: 100 }}>
      <div className="reading-width">
        <header className="row-between" style={{ paddingTop: 12, marginBottom: 22 }}>
          <PixelButton variant="ghost" size="sm" icon="arrowLeft" onClick={() => navigate(`/materi/${subjectId}`)}>
            {subject.name}
          </PixelButton>
          <MateriInfoButton size={22} />
        </header>

        <div className="row" style={{ marginBottom: 20 }}>
          <div className="difficulty-badge">{difficulty.short}</div>
          <div>
            <h1 style={{ fontSize: "1.3rem" }}>
              {subject.name} · {difficulty.name}
            </h1>
            <p className="text-faint" style={{ fontSize: "0.82rem" }}>Materi tingkat ini</p>
          </div>
        </div>

        {blocks.length === 0 ? (
          <div className="pixel-panel pixel-corners text-center" style={{ padding: 24, marginBottom: 24 }}>
            <p className="text-dim">Belum ada materi untuk tingkat ini.</p>
          </div>
        ) : (
          <div className="pixel-panel pixel-corners" style={{ padding: 18, marginBottom: 24 }}>
            {blocks.map((block, i) => (
              <MateriBlock key={i} block={block} />
            ))}
          </div>
        )}

        <PixelButton
          icon={quizUnlocked ? "arrowRight" : "lock"}
          disabled={!quizUnlocked}
          onClick={() => navigate(`/quiz/${subjectId}/${difficultyId}`)}
        >
          {quizUnlocked ? "Mulai Kuis Tingkat Ini" : "Kuis Belum Terbuka"}
        </PixelButton>
        {!quizUnlocked && (
          <p className="text-faint text-center" style={{ marginTop: 10, fontSize: "0.78rem" }}>
            Selesaikan tingkat sebelumnya di halaman kuis untuk membuka level ini.
          </p>
        )}
      </div>
    </div>
  );
}