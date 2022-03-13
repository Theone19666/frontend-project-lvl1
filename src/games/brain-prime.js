import getRandomNumber from '../utils/getRandomNumber.js';
import playGame, { attemptsCount } from '../engine.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getIsPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getQuestionWithAnswer() {
  const question = getRandomNumber();
  const rightAnswer = getIsPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
}

function getQuestionsList() {
  const result = [];
  for (let i = 0; i < attemptsCount; i += 1) {
    result.push(getQuestionWithAnswer());
  }

  return result;
}

export default function brainPrime() {
  const questionsWithAnswers = getQuestionsList();
  playGame({ questionsWithAnswers, rules });
}
