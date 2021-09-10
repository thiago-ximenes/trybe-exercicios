
// Pego a linha do input e coloco o DOM do body dentro de uma variável
let bodyElement = document.body;
let bgColor = document.getElementById("bg-color")
let textColor = document.getElementById("text-color")
let fontSize = document.getElementById("font-size")


function verifyStyle(cssStyle, key) {
  // o valor de key deve ser passado como uma string na chamada da função
  if (localStorage.getItem(key) !== undefined) {
    bodyElement.style.cssStyle = localStorage.getItem(key)
  }
}

verifyStyle('backgroundColor', 'bg-color')
// if (localStorage.getItem("bg-color") !== undefined) {
//   bodyElement.style.backgroundColor = localStorage.getItem("bg-color")
// }
if (localStorage.getItem("text-color") !== undefined) {
  bodyElement.style.color = localStorage.getItem("text-color");
}
if (localStorage.getItem("text-color") !== undefined) {
  bodyElement.style.color = localStorage.getItem("text-color");
}
// espero pelo usuário, para colocar o valor no input
bgColor.addEventListener('change', changeBgColor)
textColor.addEventListener('change', changeTextColor)
fontSize.addEventListener('change', changeFontSize)

//função que faz a cor de fundo mudar // preciso fazer ele armazer no localStorage
function changeBgColor(event) {
  bodyElement.style.backgroundColor = event.target.value;
  localStorage.setItem('bg-color', bodyElement.style.backgroundColor)
  
}

function changeTextColor(event) {
  bodyElement.style.color = event.target.value
  localStorage.setItem('text-color', bodyElement.style.color)
}

function changeFontSize(event) {
  bodyElement.style.fontSize = event.target.value;
  localStorage.setItem("font-size", bodyElement.style.fontSize);
}