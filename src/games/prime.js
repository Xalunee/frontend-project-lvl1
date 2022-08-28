import getGame from '../index.js';

const gamePrime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 50);
    let countOfDivisors = 0;

    for (let divisor = 1; divisor <= randomNumber; divisor += 1) {
      if (randomNumber % divisor === 0) {
        countOfDivisors += 1;
      }
    }

    const result = countOfDivisors === 2 ? 'yes' : 'no';
    expressions[i] = randomNumber;
    results[i] = result;
  }

  getGame(question, expressions, results);
};

export default gamePrime;
