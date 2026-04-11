import { WEIGHTS } from "../constants/constants";
import { Answers } from "../types";

const MAX_SCORE = 3;

export const calculateStatScore = (answers: Answers) => {
  const normalized = {
    frequency: answers.frequency / MAX_SCORE,
    intensity: answers.intensity / MAX_SCORE,
    system: answers.system / MAX_SCORE
  };

  const score =
    normalized.frequency * WEIGHTS.frequency +
    normalized.intensity * WEIGHTS.intensity +
    normalized.system * WEIGHTS.system;

  return Math.round(score * 100);
}