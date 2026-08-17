import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubject, getDifficulty, minCorrectToPass } from "../data/subjects.js";
import { getQuestions } from "../data/questionBank.js";
import { useGame } from "../context/GameContext.jsx";
import PixelButton from "../components/PixelButton.jsx";
import PixelIcon from "../components/PixelIcon.jsx";
import Modal from "../components/Modal.jsx";
import Confetti from "../components/Confetti.jsx";

const LETTERS = ["A", "B", "C", "D"];

// Mengacak urutan soal (Fisher-Yates) tanpa mengubah array aslinya
// dan tanpa mengurangi/menambah jumlah soal.
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function Quiz() {
  const { subjectId, difficultyId } = useParams();
  const navigate = useNavigate();
  const { playerName, isUnlocked, recordAttempt } = useGame();

  const subject = getSubject(subjectId);
  const difficulty = getDifficulty(difficultyId);
  // "shuffleSeed" berubah setiap kali quiz dimulai ulang (retry) supaya urutan
  // soal diacak ulang, sementara jumlah & isi soal tetap sama seperti di bank soal.
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const questions = useMemo(
    () => shuffleArray(getQuestions(subjectId, difficultyId)),
    [subjectId, difficultyId, shuffleSeed]
  );
  const total = questions.length;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(total).fill(null));
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [result, setResult] = useState(null); // { correct, total, passed, unlockedNext, nextDifficulty }
  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    if (!playerName) {
      navigate("/", { replace: true });
      return;
    }
    if (!subject || !difficulty || total === 0) {
      navigate("/subjects", { replace: true });
      return;
    }
    if (!isUnlocked(subjectId, difficultyId)) {
      navigate(`/subjects/${subjectId}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerName, subject, difficulty, subjectId, difficultyId]);

  // reset kalau ganti soal set (subject/difficulty berubah)
  useEffect(() => {
    setAnswers(Array(total).fill(null));
    setIndex(0);
    setResult(null);
    setShowAnalysis(false);
  }, [subjectId, difficultyId, total]);

  if (!subject || !difficulty || total === 0) return null;

  const q = questions[index];
  const answeredCount = answers.filter((a) => a !== null).length;
  const progressPct = Math.round(((index + 1) / total) * 100);

  function selectOption(optIdx) {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = prev[index] === optIdx ? null : optIdx;
      return next;
    });
  }

  function goPrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function goNext() {
    setIndex((i) => Math.min(total - 1, i + 1));
  }

  function jumpTo(i) {
    setIndex(i);
  }

  function requestFinish() {
    if (answeredCount < total) {
      setShowConfirmFinish(true);
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    setShowConfirmFinish(false);
    const correct = questions.reduce((acc, question, i) => (answers[i] === question.jawaban ? acc + 1 : acc), 0);
    const { passed, unlockedNext, nextDifficulty } = recordAttempt(subjectId, difficultyId, correct, total);
    setResult({ correct, total, passed, unlockedNext, nextDifficulty });
  }

  function retryLevel() {
    setShuffleSeed((s) => s + 1); // acak ulang urutan soal saat coba lagi
    setAnswers(Array(total).fill(null));
    setIndex(0);
    setResult(null);
    setShowAnalysis(false);
  }

  return (
    <div className="container" style={{ paddingBottom: 110 }}>
      <div className="quiz-content">
      <header style={{ paddingTop: 12, marginBottom: 16 }}>
        <div className="row-between" style={{ marginBottom: 14 }}>
          <PixelButton
            variant="ghost"
            size="sm"
            icon="arrowLeft"
            onClick={() => navigate(`/subjects/${subjectId}`)}
          >
            Keluar
          </PixelButton>
          <span className="pixel-tag">
            {subject.name} · {difficulty.name}
          </span>
        </div>

        <div className="row-between" style={{ marginBottom: 6, fontSize: "0.8rem" }}>
          <span className="text-dim">Soal {index + 1}/{total}</span>
          <span className="text-faint">{answeredCount}/{total} terjawab</span>
        </div>
        <div className="pixel-progress">
          <i style={{ width: `${progressPct}%` }} />
        </div>
      </header>

      <div className="stack">
        <div key={index} className="pixel-panel pixel-corners quiz-question-anim" style={{ padding: 18 }}>
          <p className="pixel-tag" style={{ width: "fit-content", marginBottom: 10 }}>
            Pertanyaan
          </p>

          {q.gambar && (
            <div className="quiz-question-image-frame pixel-corners">
              <img src={q.gambar} alt="Ilustrasi soal" className="quiz-question-image" />
            </div>
          )}

          {/* Teks bacaan / cerita (opsional) — tampil di atas pertanyaan kalau soal
              punya field "teks" (dipakai untuk soal analisis teks/cerita). */}
          {q.teks && (
            <div className="pixel-card pixel-corners" style={{ padding: 14, marginBottom: 14 }}>
              <p className="pixel-tag" style={{ width: "fit-content", marginBottom: 8 }}>
                Teks Bacaan
              </p>
              <p style={{ lineHeight: 1.7, whiteSpace: "pre-line", fontSize: "0.95rem" }}>{q.teks}</p>
            </div>
          )}

          <p style={{ fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.5 }}>{q.pertanyaan}</p>
        </div>

        <div
          key={`opts-${index}`}
          className="pixel-card pixel-corners quiz-question-anim"
          style={{ padding: 18, animationDelay: "0.05s" }}
        >
          <p className="pixel-tag pixel-tag-solid" style={{ width: "fit-content", marginBottom: 10 }}>
            Pilihan Jawaban
          </p>

          <div className="stack" style={{ gap: 10 }}>
            {q.opsi.map((opt, i) => (
              <button
                key={i}
                className={`option-btn ${answers[index] === i ? "selected" : ""}`}
                onClick={() => selectOption(i)}
              >
                <span className="option-letter">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid-2">
          <PixelButton variant="ghost" icon="arrowLeft" disabled={index === 0} onClick={goPrev}>
            Kembali
          </PixelButton>
          <PixelButton variant="secondary" icon="skip" disabled={index === total - 1} onClick={goNext}>
            {answers[index] === null ? "Lewati" : "Lanjut"}
          </PixelButton>
        </div>

        {/* Navigasi nomor soal — selalu tampil, klik untuk loncat langsung */}
        <div className="pixel-card pixel-corners" style={{ padding: 18 }}>
          <div className="row-between" style={{ marginBottom: 12 }}>
            <p className="pixel-tag" style={{ width: "fit-content" }}>
              Navigasi Soal
            </p>
            <span className="text-faint" style={{ fontSize: "0.78rem" }}>
              {answeredCount}/{total} terjawab
            </span>
          </div>

          <div className="qmap-grid qmap-grid-inline">
            {questions.map((_, i) => (
              <button
                key={i}
                className={`qmap-item ${answers[i] !== null ? "answered" : ""} ${i === index ? "current" : ""}`}
                style={{ "--i": i }}
                onClick={() => jumpTo(i)}
                aria-label={`Loncat ke soal ${i + 1}${answers[i] !== null ? ", sudah dijawab" : ", belum dijawab"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="row qmap-legend" style={{ marginTop: 14, flexWrap: "wrap", gap: 14 }}>
            <span className="row" style={{ gap: 6 }}>
              <i className="qmap-legend-swatch answered" /> Sudah dijawab
            </span>
            <span className="row" style={{ gap: 6 }}>
              <i className="qmap-legend-swatch" /> Belum dijawab
            </span>
            <span className="row" style={{ gap: 6 }}>
              <i className="qmap-legend-swatch current" /> Soal sekarang
            </span>
          </div>
        </div>
      </div>
      </div>

      {/* Tombol selesai mengambang di bawah */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "14px 18px calc(14px + env(safe-area-inset-bottom))",
          background: "linear-gradient(180deg, transparent, var(--bg) 30%)",
        }}
      >
        <div className="quiz-content">
          <PixelButton icon="flag" onClick={requestFinish}>
            SELESAI
          </PixelButton>
        </div>
      </div>

      {/* Modal: konfirmasi selesai jika masih ada soal kosong */}
      {showConfirmFinish && (
        <Modal onClose={() => setShowConfirmFinish(false)}>
          <div className="stack" style={{ gap: 14 }}>
            <div className="pixel-icon-frame pixel-corners" style={{ margin: "0 auto" }}>
              <PixelIcon name="flag" size={26} />
            </div>
            <h2 className="text-center" style={{ fontSize: "1.1rem" }}>
              Masih Ada Soal Kosong
            </h2>
            <p className="text-dim text-center">
              Kamu baru menjawab {answeredCount} dari {total} soal. Yakin ingin menyelesaikan quiz sekarang?
            </p>
            <div className="grid-2">
              <PixelButton variant="ghost" onClick={() => setShowConfirmFinish(false)}>
                Kembali Jawab
              </PixelButton>
              <PixelButton onClick={finishQuiz}>Ya, Selesaikan</PixelButton>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal: hasil akhir */}
      {result && !showAnalysis && (
        <Modal className={result.passed ? "" : "result-fail-shake"}>
          {result.passed && <Confetti />}
          <div className="stack" style={{ gap: 16 }}>
            <div
              className="pixel-icon-frame pixel-corners result-icon-anim"
              style={{ margin: "0 auto", width: 70, height: 70 }}
            >
              <PixelIcon name={result.passed ? "trophy" : "refresh"} size={34} />
            </div>
            <div className="text-center">
              <p className="pixel-tag pixel-tag-solid" style={{ margin: "0 auto", width: "fit-content" }}>
                {result.passed ? "LULUS!" : "BELUM LULUS"}
              </p>
              <h2 style={{ fontSize: "1.6rem", marginTop: 10 }}>
                {result.correct} / {result.total}
              </h2>
              <p className="text-dim" style={{ marginTop: 4 }}>
                Jawaban benar · minimal {minCorrectToPass(result.total)} untuk lulus
              </p>
            </div>

            {result.passed && result.unlockedNext && (
              <p className="text-center text-dim" style={{ fontSize: "0.88rem" }}>
                Level <b style={{ color: "var(--ink)" }}>{result.nextDifficulty.name}</b> sudah terbuka!
              </p>
            )}
            {!result.passed && (
              <p className="text-center text-dim" style={{ fontSize: "0.88rem" }}>
                Belum apa-apa, coba lagi! Pelajari materinya lalu ulangi levelnya.
              </p>
            )}

            <div className="stack">
              {/* Tombol analisis HANYA muncul kalau sudah lulus tingkat kesulitan ini */}
              {result.passed && (
                <PixelButton variant="secondary" icon="analysis" onClick={() => setShowAnalysis(true)}>
                  Lihat Analisis Jawaban
                </PixelButton>
              )}

              {result.passed && result.unlockedNext && (
                <PixelButton
                  icon="arrowRight"
                  onClick={() => navigate(`/quiz/${subjectId}/${result.nextDifficulty.id}`)}
                >
                  Lanjut ke {result.nextDifficulty.name}
                </PixelButton>
              )}
              <div className="grid-2">
                <PixelButton variant="secondary" icon="refresh" onClick={retryLevel}>
                  Ulangi
                </PixelButton>
                <PixelButton variant="ghost" icon="arrowLeft" onClick={() => navigate(`/subjects/${subjectId}`)}>
                  Ke Level
                </PixelButton>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal: analisis jawaban — cuma bisa dibuka kalau sudah lulus (lihat tombol di atas) */}
      {result && showAnalysis && (
        <Modal onClose={() => setShowAnalysis(false)} className="quiz-analysis-modal">
          <div className="stack" style={{ gap: 16 }}>
            <div className="row-between">
              <div>
                <p className="pixel-tag pixel-tag-solid" style={{ width: "fit-content", marginBottom: 8 }}>
                  Analisis Jawaban
                </p>
                <p className="text-dim" style={{ fontSize: "0.85rem" }}>
                  {result.correct} dari {result.total} soal benar. Berikut rincian tiap soal.
                </p>
              </div>
              <button
                type="button"
                className="pixel-icon-frame pixel-corners"
                style={{ cursor: "pointer", flexShrink: 0 }}
                onClick={() => setShowAnalysis(false)}
                aria-label="Tutup analisis"
              >
                <PixelIcon name="close" size={20} />
              </button>
            </div>

            <div className="stack" style={{ gap: 12 }}>
              {questions.map((question, i) => {
                const userAnswer = answers[i];
                const isCorrect = userAnswer === question.jawaban;

                return (
                  <div key={question.id} className="pixel-card pixel-corners analysis-item" style={{ padding: 16 }}>
                    <div className="row-between" style={{ marginBottom: 10 }}>
                      <span className="pixel-tag" style={{ width: "fit-content" }}>
                        Soal {i + 1}
                      </span>
                      <span className={`analysis-status ${isCorrect ? "is-correct" : "is-wrong"}`}>
                        <PixelIcon name={isCorrect ? "check" : "close"} size={14} />
                        {isCorrect ? "Benar" : "Salah"}
                      </span>
                    </div>

                    <p style={{ fontWeight: 700, marginBottom: 12, lineHeight: 1.5 }}>{question.pertanyaan}</p>

                    <div className="stack" style={{ gap: 8 }}>
                      {question.opsi.map((opt, oi) => {
                        const isRightAnswer = question.jawaban === oi;
                        const isUserPick = userAnswer === oi;
                        let cls = "analysis-option";
                        if (isRightAnswer) cls += " right-answer";
                        else if (isUserPick) cls += " user-wrong";

                        return (
                          <div key={oi} className={cls}>
                            <span className="option-letter">{LETTERS[oi]}</span>
                            <span style={{ flex: 1 }}>{opt}</span>
                            {isRightAnswer && <PixelIcon name="check" size={16} />}
                            {isUserPick && !isRightAnswer && <PixelIcon name="close" size={16} />}
                          </div>
                        );
                      })}
                    </div>

                    {userAnswer === null && (
                      <p className="text-faint" style={{ fontSize: "0.78rem", marginTop: 10 }}>
                        Kamu tidak menjawab soal ini.
                      </p>
                    )}

                    {question.materi && (
                      <p className="text-faint analysis-materi-note" style={{ fontSize: "0.78rem", marginTop: 10 }}>
                        {question.materi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <PixelButton variant="ghost" onClick={() => setShowAnalysis(false)}>
              Tutup Analisis
            </PixelButton>
          </div>
        </Modal>
      )}
    </div>
  );
}