// Variable declarations 👇

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {};

// Functions 👇

const addTurn = (lesson, turn, value) => {
  lesson[turn] = value;
};

const keysList = (object) => {
  console.log(Object.keys(object));
};

const objectLength = (object) => {
  console.log(Object.keys(object).length);
};

const objectValue = (object) => {
  console.log(Object.values(object));
};

const studentAmount = (classes) => {
  let sum = 0;
  for (let key in classes) {
    let total = classes[key].numeroEstudantes;
    sum += total;
  }
  console.log(`Total de ${sum} alunos `);
};

const getValueByNumber = (lesson, index) => {
  const value = Object.entries(lesson)[index][1];
  console.log(value);
};

const verifyPair = (lesson, key, value) => {
  for (let index in lesson) {
    console.log(lesson[index])
  }
  if (lesson[key][value]) {
    return true;
  }
};

// Main code 👇

addTurn(lesson2, 'turno', 'noite');

console.log(lesson2);

keysList(lesson2);

objectLength(lesson1);

objectValue(lesson3);

Object.assign(allLessons, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
console.log(allLessons);

studentAmount(allLessons);

getValueByNumber(lesson2, 1);

console.log(verifyPair(lesson1, 'turno', 'manhã'));
