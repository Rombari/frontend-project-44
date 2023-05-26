import playGame from './cycle.js';

const notice = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (number) => number % 2 === 0;
const generalRandomNumber = () => Math.round(Math.random() * 100);

const startRound = () => {
  const question = generalRandomNumber();
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  playGame(notice, startRound);
};