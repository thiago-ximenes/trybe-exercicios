
// Pego a linha do input e coloco o DOM do body dentro de uma variável
let bgColor = document.getElementById("bg-color")
let bodyBgColor = document.body

// bodyBgColor.style.backgroundColor = localStorage.getItem("bg-color")

// espero pelo usuário, para colocar o valor no input
bgColor.addEventListener('keyup', changeBgColor)

//função que faz a cor de fundo mudar // preciso fazer ele armazer no localStorage
function changeBgColor(event) {
  if (localStorage.getItem('bg-color') === undefined) {
    bodyBgColor.style.backgroundColor = event.target.value;
    localStorage.setItem('bg-color', bodyBgColor.style.backgroundColor)
  }
}

