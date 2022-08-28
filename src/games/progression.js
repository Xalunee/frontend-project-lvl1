import getGame from '../index.js';

const randomInteger = (minInteger) => {
  let int = Math.round(Math.random() * 10);
  while (int < minInteger) {
    int = Math.round(Math.random() * 10);
  }

  return int;
};

const gameProgression = () => {
  const question = 'What number is missing in the progression?';
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const progressionLength = randomInteger(5);
    const hiddenElementIndex = Math.round(Math.random() * progressionLength);
    let number = Math.round(Math.random() * 20);
    const step = randomInteger(1);

    let expression = '';

    for (let j = 0; j <= progressionLength; j += 1) {
      if (j === hiddenElementIndex) {
        results[i] = number;
        expression += '.. ';
        number += step;
      } else {
        expression += `${number} `;
        number += step;
      }
    }

    expressions[i] = expression;
  }

  getGame(question, expressions, results);
};

export default gameProgression;
