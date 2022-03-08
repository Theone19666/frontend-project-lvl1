import getRandomNumber from '../utils/getRandomNumber.js';
import getQuestionsList from '../utils/getQuestionsList.js';
import { startGame } from '../engine.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
function getQuestion(firstNumber, secondNumber) {
  return `${firstNumber} ${secondNumber}`;
}

function getRightAnswer(firstNumber, secondNumber) {
  return `${NOD(firstNumber, secondNumber)}`;
}

function getQuestionWithAnswer() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = getQuestion(firstNumber, secondNumber);
  const rightAnswer = getRightAnswer(firstNumber, secondNumber);

  return { question, rightAnswer };
}

export default function brainGCD() {
  const questionsWithAnswers = getQuestionsList(getQuestionWithAnswer);
  startGame({ questionsWithAnswers, question: gameQuestion });
}
