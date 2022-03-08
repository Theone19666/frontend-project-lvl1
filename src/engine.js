import readlineSync from 'readline-sync';

import { greetUser, getUserName, showUserName } from './cli.js';
import { attemptsCount } from './constants.js';

let counter = 0;

function playGame({ questionsWithAnswers, userName }) {
  if (counter === attemptsCount) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const { question, rightAnswer } = questionsWithAnswers[counter];
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (rightAnswer === answer) {
    console.log('Correct!');
    counter += 1;
    playGame({ questionsWithAnswers, userName });
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export function startGame({ questionsWithAnswers, question }) {
  greetUser();
  const userName = getUserName();
  showUserName(userName);
  console.log(question);
  playGame({ questionsWithAnswers, userName });
}
