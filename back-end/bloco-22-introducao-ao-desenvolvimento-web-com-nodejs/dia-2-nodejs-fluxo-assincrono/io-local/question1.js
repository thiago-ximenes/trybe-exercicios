const fs = require('fs').promises;

function promise(a, b ,c) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      reject("Informe apenas números");
    } else if ( typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      const result = ((a + b) * c );
      if (result < 50) {
        reject('Valor muito baixo');
      } else {
        resolve(result);
      }
    }
  })
};

async function main() {
  try {
    const result = await promise("a", 2, 1);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

main();

// promise(49, 2, 1)
// .then((result) => console.log(result))
// .catch((err) => console.log(err));