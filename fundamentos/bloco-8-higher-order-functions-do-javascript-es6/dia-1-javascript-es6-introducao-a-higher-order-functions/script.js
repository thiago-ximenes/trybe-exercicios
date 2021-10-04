const wakeUp = () => {
  return 'Acordando!!';
}

const coffeTime = () => {
  return 'Bora tomar café!!'
}

const sleepTime = () => {
  return 'Partiu dormir!!'
}

const doingThings = (func) => console.log(func());

doingThings(wakeUp);

doingThings(coffeTime);

doingThings(sleepTime);