let n = 5

for (let i = 1; i <= n; i += 1) {
  let k = "";
  for (let j = 1; j <= n; j += 1) {
    
    if (k.length < n - i) {
      k += " " 
    } else {      
      k += "*"
    }
  }
  k += "\n";
  console.log(k);
}
;