import getGame from '../index.js';

const randomInteger = () => {
  let int = Math.round(Math.random() * 10);
  while (int < 5) {
    int = Math.round(Math.random() * 10);
  }

  return int;
};

const gameProgression = () => {
  const question = 'What number is missing in the progression?';
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const progressionLength = randomInteger();
    const hiddenElementIndex = Math.round(Math.random() * progressionLength);
    let number = Math.round(Math.random() * 20);
    const step = Math.round(Math.random() * 5);

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
