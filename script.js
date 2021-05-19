//dice1
let randomNumber1 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber1)

let randomDiceImage = "dice" + randomNumber1 + ".png"
console.log(randomDiceImage)

let randomImage1 = "images/" + randomDiceImage;

const getDice1 = document.querySelectorAll("img")[0]

getDice1.setAttribute("src", randomImage1);

//dice2
let randomNumber2 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber2)

let randomDiceImage2 = "dice" + randomNumber2 + ".png"
console.log(randomDiceImage)

let randomImage2 = "images/" + randomDiceImage2;

const getDice2 = document.querySelectorAll("img")[1]

getDice2.setAttribute("src", randomImage2);

//Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "A Bore Draw..."
}

function refreshPage() {
    window.location.reload();
}