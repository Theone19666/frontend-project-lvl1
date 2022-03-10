import getRandomNumber from '../utils/getRandomNumber.js';
import playGame from '../engine.js';
import attemptsCount from '../attemptsCount.js';

const plusOperation = '+';
const minusOperation = '-';
const multiplicationOperation = '*';

const operations = [plusOperation, minusOperation, multiplicationOperation];

const rules = 'What is the result of the expression?';

function getRightAnswer({ firstNumber, secondNumber, operation }) {
  if (operation === plusOperation) {
    return (firstNumber + secondNumber).toString();
  }

  if (operation === minusOperation) {
    return (firstNumber - secondNumber).toString();
  }

  return (firstNumber * secondNumber).toString();
}

function getQuestionWithAnswer() {
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = getRightAnswer({ firstNumber, secondNumber, operation });

  return { question, rightAnswer };
}

function getQuestionsList() {
  const result = [];
  for (let i = 0; i < attemptsCount; i += 1) {
    result.push(getQuestionWithAnswer());
  }

  return result;
}

export default function brainCalc() {
  const questionsWithAnswers = getQuestionsList();
  playGame({ questionsWithAnswers, rules });
}
