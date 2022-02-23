#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { greetUser } from '../src/cli.js';
import getRandomNumnber from '../utils/getRandomNumnber.js';

const yesAnswer = 'yes';
const noAnswer = 'no';

let counter = 0;

function getIsPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function ask(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const number = getRandomNumnber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const isNumberPrime = getIsPrime(number);
  if ((answer === yesAnswer && isNumberPrime) || (answer === noAnswer && !isNumberPrime)) {
    console.log('Correct!');
    counter += 1;
    ask(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === yesAnswer ? noAnswer : yesAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

function brainPrime() {
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  ask(userName);
}

brainPrime();
