import getRandomNumber from '../utils/getRandomNumber.js';
import playGame, { attemptsCount } from '../engine.js';

const rules = 'What number is missing in the progression?';

function getQuestionWithAnswer() {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const arraySize = getRandomNumber(5, 10);
  const index = getRandomNumber(0, arraySize - 1);
  const result = [];
  let rightAnswer;

  for (let i = 0; i < arraySize; i += 1) {
    const progressionElement = firstNumber + i * step;
    if (i === index) {
      result.push('..');
      rightAnswer = progressionElement.toString();
    } else {
      result.push(progressionElement);
    }
  }

  return { question: result.join(' '), rightAnswer };
}

function getQuestionsList() {
  const result = [];
  for (let i = 0; i < attemptsCount; i += 1) {
    result.push(getQuestionWithAnswer());
  }

  return result;
}

export default function brainProgression() {
  const questionsWithAnswers = getQuestionsList();
  playGame({ questionsWithAnswers, rules });
}
