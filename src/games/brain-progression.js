import getRandomNumber from '../utils/getRandomNumber.js';
import getQuestionsList from '../utils/getQuestionsList.js';
import { startGame } from '../engine.js';

const gameQuestion = 'What number is missing in the progression?';

function getNumbers(arraySize) {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const result = [firstNumber];
  for (let i = 1; i < arraySize; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
}

function getQuestion(numbers, index) {
  return numbers.reduce((reducer, number, numberIndex) => {
    if (index === numberIndex) {
      return `${reducer} ..`;
    }
    const stringDivider = numberIndex === 0 ? '' : ' ';
    return `${reducer}${stringDivider}${number}`;
  }, '');
}

function getRightAnswer(numbers, index) {
  return `${numbers[index]}`;
}

function getQuestionWithAnswer() {
  const arraySize = getRandomNumber(5, 10);
  const index = getRandomNumber(0, arraySize - 1);
  const numbers = getNumbers(arraySize);
  const question = getQuestion(numbers, index);
  const rightAnswer = getRightAnswer(numbers, index);

  return { question, rightAnswer };
}

export default function brainProgression() {
  const questionsWithAnswers = getQuestionsList(getQuestionWithAnswer);
  startGame({ questionsWithAnswers, question: gameQuestion });
}
