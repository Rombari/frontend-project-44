import readlineSync from 'readline-sync';

export default (notice, startRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(notice);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = startRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
