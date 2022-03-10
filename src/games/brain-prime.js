import getRandomNumber from '../utils/getRandomNumber.js';
import playGame from '../engine.js';
import attemptsCount from '../attemptsCount.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getIsPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getQuestion() {
  return getRandomNumber();
}

function getRightAnswer(question) {
  return getIsPrime(question) ? 'yes' : 'no';
}

function getQuestionWithAnswer() {
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);

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
