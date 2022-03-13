import readlineSync from 'readline-sync';

export const attemptsCount = 3;

export default function playGame({ questionsWithAnswers, rules }) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
