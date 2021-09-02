document.getElementById("header-container").style.backgroundColor = "#00B069";

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor =
  "#FF9F84";

document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor =
  "#F9DB5E";

let leftSide = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < leftSide.length; index += 1) {
  leftSide[index].style.backgroundColor = "#A500F3";
}

let rightSide = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < rightSide.length; index += 1) {
  rightSide[index].style.backgroundColor = "#232525";
}

document.getElementById("footer-container").style.backgroundColor = '#003533';
