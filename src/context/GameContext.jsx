import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { loadSave, saveSave, resetSave } from "../utils/storage.js";
import { DIFFICULTIES, minCorrectToPass } from "../data/subjects.js";

const GameContext = createContext(null);

const DEV_UNLOCK_ALL = false;

export function GameProvider({ children }) {
  const [save, setSave] = useState(() => loadSave());

  useEffect(() => {
    saveSave(save);
  }, [save]);

  const setPlayerName = useCallback((name) => {
    setSave((prev) => ({ ...prev, playerName: name }));
  }, []);

  const getLevelState = useCallback(
    (subjectId, difficultyId) => {
      const state = save.progress?.[subjectId]?.[difficultyId] || {
        unlocked: false,
        passed: false,
        bestCorrect: 0,
        bestTotal: 0,
        attempts: 0,
      };
      // Mode testing: paksa semua level tampil & berperilaku "unlocked".
      return DEV_UNLOCK_ALL ? { ...state, unlocked: true } : state;
    },
    [save]
  );

  const isUnlocked = useCallback(
    (subjectId, difficultyId) => getLevelState(subjectId, difficultyId).unlocked,
    [getLevelState]
  );

  // Simpan hasil percobaan quiz, buka level berikutnya kalau lulus.
  const recordAttempt = useCallback((subjectId, difficultyId, correct, total) => {
    const passed = correct >= minCorrectToPass(total);
    const diffIndex = DIFFICULTIES.findIndex((d) => d.id === difficultyId);
    const nextDifficulty = DIFFICULTIES[diffIndex + 1];

    setSave((prev) => {
      const subjectProgress = prev.progress[subjectId] || {};
      const current = subjectProgress[difficultyId] || {
        unlocked: true,
        passed: false,
        bestCorrect: 0,
        bestTotal: 0,
        attempts: 0,
      };

      const updatedLevel = {
        ...current,
        unlocked: true,
        passed: current.passed || passed,
        bestCorrect: Math.max(current.bestCorrect, correct),
        bestTotal: total,
        attempts: (current.attempts || 0) + 1,
      };

      const updatedSubject = { ...subjectProgress, [difficultyId]: updatedLevel };

      if (passed && nextDifficulty) {
        const nextLevel = subjectProgress[nextDifficulty.id] || {
          unlocked: false,
          passed: false,
          bestCorrect: 0,
          bestTotal: 0,
          attempts: 0,
        };
        updatedSubject[nextDifficulty.id] = { ...nextLevel, unlocked: true };
      }

      return {
        ...prev,
        progress: { ...prev.progress, [subjectId]: updatedSubject },
      };
    });

    return { passed, unlockedNext: passed && !!nextDifficulty, nextDifficulty };
  }, []);

  const resetProgress = useCallback(() => {
    setSave(resetSave());
  }, []);

  const value = {
    playerName: save.playerName,
    setPlayerName,
    progress: save.progress,
    getLevelState,
    isUnlocked,
    recordAttempt,
    resetProgress,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame harus dipakai di dalam <GameProvider>");
  return ctx;
}