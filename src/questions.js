import questions from './questions.json';
let questionNumbers = [];

const getQuestions = () => {
  return getNumbers();
}

const resetQuestionNumber = () => {
  questionNumbers = [];
}

const getNumbers = () => {
  if (questionNumbers.length === 5) {
    return [
      questions.questions[questionNumbers[0]],
      questions.questions[questionNumbers[1]],
      questions.questions[questionNumbers[2]],
      questions.questions[questionNumbers[3]],
      questions.questions[questionNumbers[4]]
    ]
  }

  const number = randomNumber();
  if (questionNumbers.indexOf(number) === -1) {
    questionNumbers.push(number);
    getNumbers();
  } else {
    getNumbers();
  }
}
const randomNumber = (min = 0, max = 9) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

export { getQuestions, resetQuestionNumber }