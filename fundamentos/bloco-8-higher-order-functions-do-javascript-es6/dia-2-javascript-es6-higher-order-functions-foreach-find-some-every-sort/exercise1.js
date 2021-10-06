const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find((person) => person.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  let smallerNameOfBook = books[0].name.length;
  nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < smallerNameOfBook) {
      smallerNameOfBook = book.name.length;
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  const bookWith26Character = books.find((book) => book.name.length === 26);
  return bookWith26Character;
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

const expectedResult1 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort(
    (launcherDate1, launcherDate2) =>
      launcherDate2.releaseYear - launcherDate1.releaseYear
  );
}

// console.log(booksOrderedByReleaseYearDesc())
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult1);

const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((authorBornInSecXX) => {
    authorBornInSecXX.author.birthYear >= 1901 &&
      authorBornInSecXX.author.birthYear <= 2000;
  });
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult2);

const expectedResult3 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult3);

const expectedResult4 = false;

function authorUnique() {
  // escreva seu código aqui
  return books.some((book, index) => {
    book.author.birthYear === books[index].author.birthYear;
  });
}

assert.strictEqual(authorUnique(), expectedResult4);
