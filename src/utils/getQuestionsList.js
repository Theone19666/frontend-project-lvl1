import { attemptsCount } from '../constants.js';

export default function getQuestionsList(getQuestionWithAnswer) {
  const result = [];
  for (let i = 0; i < attemptsCount; i += 1) {
    result.push(getQuestionWithAnswer());
  }
  return result;
}
