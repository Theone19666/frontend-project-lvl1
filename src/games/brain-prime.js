import readlineSync from 'readline-sync';

import greetUser from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import { answers } from '../constants.js';

let counter = 0;

function getIsPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function askQuestion(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const isNumberPrime = getIsPrime(number);
  if ((answer === answers.yes && isNumberPrime) || (answer === answers.no && !isNumberPrime)) {
    console.log('Correct!');
    counter += 1;
    askQuestion(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === answers.yes ? answers.no : answers.yes}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default function brainPrime() {
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  askQuestion(userName);
}
