import readlineSync from 'readline-sync';

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

export default function start() {
  greetUser();
  const userName = getUserName();
  showUserName(userName);
}
