import readlineSync from 'readline-sync';

import attemptsCount from './attemptsCount.js';

export function greetUser() {
  console.log('Welcome to the Brain Games!');
}

export function getUserName() {
  const userName = readlineSync.question('May I have your name? ');

  return userName;
}

export function showUserName(userName) {
  console.log(`Hello, ${userName}!`);
}

export default function playGame({ questionsWithAnswers, rules }) {
  greetUser();
  const userName = getUserName();
  showUserName(userName);
  console.log(rules);
  for (let i = 0; i < attemptsCount; i += 1) {
    const { question, rightAnswer } = questionsWithAnswers[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
