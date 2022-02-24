import readlineSync from 'readline-sync';

import greetUser from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';

let counter = 0;

function getNumbers(arraySize) {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const result = [firstNumber];
  for (let i = 1; i < arraySize; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
}

function askQuestion(userName) {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const arraySize = getRandomNumber(5, 10);
  const index = getRandomNumber(0, arraySize - 1);
  const numbers = getNumbers(arraySize);
  const question = numbers.reduce((reducer, number, numberIndex) => {
    if (index === numberIndex) {
      return `${reducer} .. `;
    }
    return `${reducer} ${number} `;
  }, '');
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = numbers[index];
  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
    counter += 1;
    askQuestion(userName);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default function brainProgression() {
  const userName = greetUser();
  console.log('What number is missing in the progression?');
  askQuestion(userName);
}
