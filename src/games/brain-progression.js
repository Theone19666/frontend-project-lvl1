import getRandomNumber from '../utils/getRandomNumber.js';
import attemptsCount from '../attemptsCount.js';
import playGame from '../engine.js';

const rules = 'What number is missing in the progression?';

function getProgression({ firstNumber, step, arraySize }) {
  const result = [firstNumber];
  for (let i = 1; i < arraySize; i += 1) {
    result.push(result[i - 1] + step);
  }

  return result;
}

function getQuestion(numbers, index) {
  return numbers.reduce((reducer, number, numberIndex) => {
    const stringDivider = numberIndex === 0 ? '' : ' ';
    let addedString = '';
    if (index === numberIndex) {
      addedString = '..';
    } else {
      addedString = number;
    }
    return `${reducer}${stringDivider}${addedString}`;
  }, '');
}

function getRightAnswer(numbers, index) {
  return numbers[index].toString();
}

function getQuestionWithAnswer() {
  const arraySize = getRandomNumber(5, 10);
  const index = getRandomNumber(0, arraySize - 1);
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const numbers = getProgression({ arraySize, firstNumber, step });
  const question = getQuestion(numbers, index);
  const rightAnswer = getRightAnswer(numbers, index);

  return { question, rightAnswer };
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
