#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRandomNumnber from '../utils/getRandomNumnber';
import { greetUser } from '../src/cli.js';

const yesAnswer = 'yes';
const noAnswer = 'no';

const numbers = [getRandomNumnber(), getRandomNumnber(), getRandomNumnber()];
let index = 0;

function ask(userName) {
  if (index === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const number = numbers[index];
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const isNumberEven = number % 2 === 0;
  if ((answer === yesAnswer && isNumberEven) || (answer === noAnswer && !isNumberEven)) {
    console.log('Correct!');
    index += 1;
    ask(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === yesAnswer ? noAnswer : yesAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

function brainEven() {
  const userName = greetUser();
  console.log(`Answer "${yesAnswer}" if the number is even, otherwise answer "${noAnswer}".`);
  ask(userName);
}

brainEven();
