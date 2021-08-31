let game = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

console.log('A jogadora ' + game.name + ' ' + game.lastName + ' tem ' + game.age + ' anos de idade.');

game['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

let timeBestOf = game.bestInTheWorld.length

console.log('A jogadora ' + game.name + ' ' + game.lastName + ' foi eleita a melhor do mundo por ' + timeBestOf + ' vezes.')


console.log('A jogadora possui ' + game.medals['golden'] + ' medalhas de ouro e ' + game.medals['silver'] + ' medalhas de prata.')

