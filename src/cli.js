import readlineSync from 'readline-sync';

export default function greetUser() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function askQuestion({
  userName, getIsAnswerRight, getRightAnswer, getQuestion,
}) {
  let counter = 0;
  function ask() {
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = getQuestion(counter);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = getRightAnswer(answer);
    const isAnswerRight = getIsAnswerRight(answer, question);
    if (isAnswerRight) {
      console.log('Correct!');
      counter += 1;
      ask(userName);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  ask();
}
