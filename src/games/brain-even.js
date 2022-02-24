import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import greetUser, { askQuestion } from '../cli.js';
import { answers } from '../constants.js';

/*
const numbers = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
let counter = 0;

function ask(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const number = numbers[counter];
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const isNumberEven = number % 2 === 0;
  if ((answer === answers.yes && isNumberEven) || (answer === answers.no && !isNumberEven)) {
    console.log('Correct!');
    counter += 1;
    ask(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === answers.yes ? answers.no : answers.yes}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}
export default function brainEven() {
  const userName = greetUser();
  console.log(`Answer "${answers.yes}" if the number is even, otherwise answer "${answers.no}".`);
  ask(userName);
}
*/

function getIsAnswerRight(answer, question) {
  const isNumberEven = question % 2 === 0;
  return (answer === answers.yes && isNumberEven) || (answer === answers.no && !isNumberEven);
}

export default function brainEven() {
  const userName = greetUser();
  const numbers = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
  function getRightAnswer(answer) {
    return answer === answers.yes ? answers.no : answers.yes;
  }
  function getQuestion(counter) {
    return numbers[counter];
  }
  console.log(`Answer "${answers.yes}" if the number is even, otherwise answer "${answers.no}".`);
  // ask(userName);
  askQuestion({
    userName, getIsAnswerRight, getRightAnswer, getQuestion,
  });
}