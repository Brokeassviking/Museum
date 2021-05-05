
console.log('i think this is hard af');
console.log("but i do not give up")

const button = document.querySelector(".fun-fact");
const fact = document.querySelector(".fact");

let timer;
function setTime() {
  timer = setTimeout(() => {
    fact.style.display = "block";
  }, 1000);
}

function clearTime() {
  clearTimeout(timer);
}
button.onmouseover = () => {
  button.classList.add("over");
  setTime();
};

onmouseout = function () {
  button.classList.remove("over");
  clearTime();
  fact.style.display = "none";
};





