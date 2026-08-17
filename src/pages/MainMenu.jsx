import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext.jsx";
import PixelButton from "../components/PixelButton.jsx";
import PixelIcon from "../components/PixelIcon.jsx";

export default function MainMenu() {
  const { playerName, setPlayerName } = useGame();
  const [name, setName] = useState(playerName || "");
  const [error, setError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);
  const navigate = useNavigate();

  function handlePlay(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Isi namamu dulu, ya!");
      setShakeKey((k) => k + 1);
      return;
    }
    if (trimmed.length > 20) {
      setError("Nama maksimal 20 karakter.");
      setShakeKey((k) => k + 1);
      return;
    }
    setPlayerName(trimmed);
    navigate("/subjects");
  }

  return (
    <div className="container container-narrow" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", paddingTop: 32, paddingBottom: 32 }}>
      <div className="stack" style={{ gap: 28 }}>
        <div
          className="text-center stack"
          style={{ gap: 10, alignItems: "center", animation: "fadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div
            className="pixel-icon-frame pixel-corners menu-icon-glow"
            style={{ width: 76, height: 76, margin: "0 auto" }}
          >
            <PixelIcon name="star" size={38} />
          </div>
          <h1 className="pixel-logo">
            QUIZ<span className="menu-cursor">_</span>
          </h1>
          <p className="text-dim">Uji pengetahuanmu di 5 mata pelajaran dengan gaya pixel yang seru!</p>
        </div>

        <form
          key={shakeKey}
          onSubmit={handlePlay}
          className={`pixel-panel pixel-corners stack ${shakeKey ? "shake-anim" : ""}`}
          style={{ padding: 22, gap: 16, animation: shakeKey ? undefined : "fadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.08s" }}
        >
          <div className="stack" style={{ gap: 8 }}>
            <label htmlFor="playerName" className="pixel-tag" style={{ width: "fit-content" }}>
              Nama Pemain
            </label>
            <input
              id="playerName"
              className="pixel-input"
              placeholder="Tulis namamu di sini..."
              value={name}
              maxLength={20}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              autoFocus
            />
            {error && (
              <p style={{ color: "var(--ink)", fontSize: "0.85rem", fontWeight: 700 }}>{error}</p>
            )}
          </div>

          <PixelButton type="submit" icon="arrowRight">
            MULAI BERMAIN
          </PixelButton>
        </form>

        <div
          className="pixel-card pixel-corners"
          style={{ padding: 18, animation: "fadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.16s" }}
        >
          <p className="text-dim" style={{ fontSize: "0.88rem" }}>
            <b style={{ color: "var(--ink)" }}>Cara main:</b> pilih mata pelajaran, kerjakan soal sesuai
            tingkat kesulitan yang terbuka, lalu selesaikan quiz untuk membuka tingkat berikutnya.
          </p>
        </div>
      </div>
    </div>
  );
}