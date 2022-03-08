import getRandomNumber from '../utils/getRandomNumber.js';
import getQuestionsList from '../utils/getQuestionsList.js';
import { startGame } from '../engine.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestion() {
  return `${getRandomNumber()}`;
}

function getRightAnswer(question) {
  return question % 2 === 0 ? 'yes' : 'no';
}

function getQuestionWithAnswer() {
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);

  return { question, rightAnswer };
}

export default function brainEven() {
  const questionsWithAnswers = getQuestionsList(getQuestionWithAnswer);
  startGame({ questionsWithAnswers, question: gameQuestion });
}
