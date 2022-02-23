#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { greetUser } from '../src/cli.js';
import getRandomNumnber from '../utils/getRandomNumnber.js';

const operations = ['+', '-', '*'];

let index = 0;

function ask(userName) {
  if (index === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const operation = operations[getRandomNumnber(0, 2)];
  const firstNumber = getRandomNumnber();
  const secondNumber = getRandomNumnber();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = eval(question);
  if (Number(rightAnswer) === Number(answer)) {
    console.log('Correct!');
    index += 1;
    ask(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

function brainCalc() {
  const userName = greetUser();
  console.log('What is the result of the expression?');
  ask(userName);
}

brainCalc();
