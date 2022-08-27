import getGame from '../index.js';

const gameGcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    const max = firstNumber > secondNumber ? firstNumber : secondNumber;
    const min = firstNumber < secondNumber ? firstNumber : secondNumber;
    let gcd;

    for (let num = 0; num <= min; num += 1) {
      if (max % num === 0 && min % num === 0) {
        gcd = num;
      }
    }

    expressions[i] = `${firstNumber} ${secondNumber}`;
    results[i] = gcd;
  }

  getGame(question, expressions, results);
};

export default gameGcd;
