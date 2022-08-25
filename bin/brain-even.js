import readlineSync from 'readline-sync';

console.log('node bin/brain-games.js\nWelcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let countTrueAnswer = 0;

while (countTrueAnswer !== 3) {
  const randomNumber = Math.round(Math.random() * 20);

  console.log(`Question: ${randomNumber}`);
  const answerUser = readlineSync.question('Your answer: ');

  if (isEven(randomNumber) === answerUser) {
    console.log('Correct!');
    countTrueAnswer += 1;
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'.\nLet's try again, ${name}!`);
    countTrueAnswer = 0;
  }
}

console.log(`Congratulations, ${name}!`);
