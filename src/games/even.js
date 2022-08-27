import getGame from '../index.js';

const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const gameEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 20);

    expressions[i] = randomNumber;
    results[i] = isEven(randomNumber);
  }

  getGame(question, expressions, results);
};

export default gameEven;
