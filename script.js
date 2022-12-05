alert("choose a class = saber, breserker, archer, rider, assassin, caster")

var data = window.playerClass(`${prompt("class")}`); 

function playerClass(selectClass) {
   let player;
switch (selectClass) {
case "saber":
    player = "you have chosen a class who wields power of a swordmaster";
    break;
case "caster":
    player = "you have chosen a class who wields power of a mage";
    break;
case "assassin":
    player = "you have chosen a class who wields power of a silent worrior";
    break;
case "archer":
    player = "you have chosen a class who wields power of a bow and arrow";
    break;
case "breserker":
    player = "you have chosen a class who wields power of a absolute strength";
    break;
case "rider":
    player = "you have chosen a class who wields power of a absolute speed";
    break;
default:
    player = "please write a correct class"
}
return player;
}

console.log(data)

const h1 = document.querySelector('h1')

h1.innerHTML = data;