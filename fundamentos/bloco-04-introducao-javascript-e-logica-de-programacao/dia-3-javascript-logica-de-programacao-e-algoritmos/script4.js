n = 8

// Em cooperação com Stra Ranniele

for (let i = 1; i <= n; i += 1) {

  if (i % 2 === 1 && n % 2 === 1) {
    let conta = (n - i) / 2;
    console.log(" ".repeat(conta) + "*".repeat(i) + " ".repeat(conta));
  } else if (i % 2 === 0) {
    let conta = (n - i) / 2;
    console.log(" ".repeat(conta) + "*".repeat(i) + " ".repeat(conta));
  }
}