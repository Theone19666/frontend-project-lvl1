import getRandomNumber from '../utils/getRandomNumber.js';
import playGame, { attemptsCount } from '../engine.js';

const plusOperation = '+';
const minusOperation = '-';
const multiplicationOperation = '*';

const operations = [plusOperation, minusOperation, multiplicationOperation];

const rules = 'What is the result of the expression?';

function getRightAnswer(firstNumber, secondNumber, operation) {
  switch (operation) {
    case plusOperation:
      return (firstNumber + secondNumber).toString();
    case minusOperation:
      return (firstNumber - secondNumber).toString();
    case multiplicationOperation:
      return (firstNumber * secondNumber).toString();
    default:
      throw new Error('Такого оператора не существует');
  }
}

function getQuestionWithAnswer() {
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, secondNumber, operation);

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
