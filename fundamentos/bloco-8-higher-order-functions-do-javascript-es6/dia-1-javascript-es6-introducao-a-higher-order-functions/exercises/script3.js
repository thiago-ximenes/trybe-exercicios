const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const rightAnswers = (template, answers, checkResult) => {
  return checkResult(template, answers)
};
const checkResult = (template, answers) => {
  let counter = 0;
  for (let index = 0; index < answers.length; index += 1) {
    if (answers[index] === template[index]) {
      counter += 1;
    }
    if(answers[index] !== template[index]) {
      counter -= 0.5;
    }
  }
  return counter;
};

console.log(rightAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResult))
