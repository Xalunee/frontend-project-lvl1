import readlineSync from 'readline-sync';

const getGame = (question, expressions, results) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  let countTrueAnswer = 0;

  while (countTrueAnswer !== 3) {
    console.log(`Question: ${expressions[countTrueAnswer]}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (String(results[countTrueAnswer]) === answerUser) {
      console.log('Correct!');
      countTrueAnswer += 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${results[countTrueAnswer]}'.\nLet's try again, ${name}!`);
      break;
    }

    if (countTrueAnswer === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default getGame;
