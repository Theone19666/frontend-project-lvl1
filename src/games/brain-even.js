import getRandomNumber from '../utils/getRandomNumber.js';
import playGame from '../engine.js';
import attemptsCount from '../attemptsCount.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function getIsNumberEven(number) {
  return number % 2 === 0;
}

function getQuestionWithAnswer() {
  const question = getRandomNumber().toString();
  const rightAnswer = getIsNumberEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
}

function getQuestionsList() {
  const result = [];
  for (let i = 0; i < attemptsCount; i += 1) {
    result.push(getQuestionWithAnswer());
  }

  return result;
}

export default function brainEven() {
  const questionsWithAnswers = getQuestionsList();
  playGame({ questionsWithAnswers, rules });
}
