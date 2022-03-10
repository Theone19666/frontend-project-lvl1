import getRandomNumber from '../utils/getRandomNumber.js';
import attemptsCount from '../attemptsCount.js';
import playGame from '../engine.js';

const rules = 'Find the greatest common divisor of given numbers.';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
function getQuestion(firstNumber, secondNumber) {
  return `${firstNumber} ${secondNumber}`;
}

function getRightAnswer(firstNumber, secondNumber) {
  return NOD(firstNumber, secondNumber).toString();
}

function getQuestionWithAnswer() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = getQuestion(firstNumber, secondNumber);
  const rightAnswer = getRightAnswer(firstNumber, secondNumber);

  return { question, rightAnswer };
}

function getQuestionsList() {
  const result = [];
  for (let i = 0; i < attemptsCount; i += 1) {
    result.push(getQuestionWithAnswer());
  }

  return result;
}

export default function brainGCD() {
  const questionsWithAnswers = getQuestionsList();
  playGame({ questionsWithAnswers, rules });
}
