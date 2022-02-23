#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { greetUser } from '../src/cli.js';
import getRandomNumnber from '../utils/getRandomNumnber.js';

let counter = 0;

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function ask(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const firstNumber = getRandomNumnber();
  const secondNumber = getRandomNumnber();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = NOD(firstNumber, secondNumber);
  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
    counter += 1;
    ask(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

function brainEven() {
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  ask(userName);
}

brainEven();
