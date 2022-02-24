import readlineSync from 'readline-sync';

import greetUser from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const operations = ['+', '-', '*'];

let counter = 0;

function askQuestion(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const operation = operations[getRandomNumber(0, 2)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-eval
  const rightAnswer = eval(question);
  if (Number(rightAnswer) === Number(answer)) {
    console.log('Correct!');
    counter += 1;
    askQuestion(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default function brainCalc() {
  const userName = greetUser();
  console.log('What is the result of the expression?');
  askQuestion(userName);
}
