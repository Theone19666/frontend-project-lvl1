import getRandomNumber from '../utils/getRandomNumber.js';
import getQuestionsList from '../utils/getQuestionsList.js';
import { startGame } from '../engine.js';

const operations = ['+', '-', '*'];

const gameQuestion = 'What is the result of the expression?';

function getQuestion() {
  const operation = operations[getRandomNumber(0, 2)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  return `${firstNumber} ${operation} ${secondNumber}`;
}

function getRightAnswer(question) {
  // eslint-disable-next-line no-eval
  return String(eval(question));
}

function getQuestionWithAnswer() {
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);

  return { question, rightAnswer };
}

export default function brainCalc() {
  const questionsWithAnswers = getQuestionsList(getQuestionWithAnswer);
  startGame({ questionsWithAnswers, question: gameQuestion });
}
