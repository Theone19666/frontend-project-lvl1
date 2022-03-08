import getRandomNumber from '../utils/getRandomNumber.js';
import getQuestionsList from '../utils/getQuestionsList.js';
import startGame from '../engine.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export default function brainPrime() {
  const questionsWithAnswers = getQuestionsList(getQuestionWithAnswer);
  startGame({ questionsWithAnswers, question: gameQuestion });
}
