import { greetUser, getUserName, showUserName } from './engine.js';

export default function start() {
  greetUser();
  const userName = getUserName();
  showUserName(userName);
}
