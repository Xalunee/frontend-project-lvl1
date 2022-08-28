import getGame from '../index.js';

const randomInteger = () => {
  let int = Math.round(Math.random() * 100);
  while (int < 1) {
    int = Math.round(Math.random() * 100);
  }

  return int;
};

const gameGcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomInteger();
    const secondNumber = randomInteger();
    const max = firstNumber > secondNumber ? firstNumber : secondNumber;
    const min = firstNumber < secondNumber ? firstNumber : secondNumber;
    let gcd;

    for (let num = 1; num <= min; num += 1) {
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
