import getGame from '../index.js';

const gameCalc = () => {
  const question = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const expressions = [];
  const results = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.round(Math.random() * 30);
    const secondNumber = Math.round(Math.random() * 30);
    const randomOperator = operators[Math.round(Math.random() * 2)];

    switch (randomOperator) {
      case '+':
        expressions[i] = `${firstNumber} + ${secondNumber}`;
        results[i] = firstNumber + secondNumber;
        break;
      case '-':
        expressions[i] = `${firstNumber} - ${secondNumber}`;
        results[i] = firstNumber - secondNumber;
        break;
      case '*':
        expressions[i] = `${firstNumber} * ${secondNumber}`;
        results[i] = firstNumber * secondNumber;
        break;
      default:
        break;
    }
  }

  getGame(question, expressions, results);
};

export default gameCalc;
