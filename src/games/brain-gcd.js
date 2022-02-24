import readlineSync from 'readline-sync';

import greetUser from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';

let counter = 0;

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function askQuestion(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = NOD(firstNumber, secondNumber);
  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
    counter += 1;
    askQuestion(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default function brainGCD() {
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  askQuestion(userName);
}
