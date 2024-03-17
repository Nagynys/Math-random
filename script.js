const myButton = document.getElementById("myButton")
const myLabel = document.getElementById("myLabel1")
const myLabe2 = document.getElementById("myLabel2")
const myLabe3 = document.getElementById("myLabel3")
const min = 1
const max = 100

let randoNum1
let randoNum2
let randoNum3

myButton.onclick = () => {
    randoNum1 = Math.floor(Math.random() * max) + min
    myLabel.textContent = randoNum1

    randoNum2 = Math.floor(Math.random() * max) + min
    myLabe2.textContent = randoNum2

    randoNum3 = Math.floor(Math.random() * max) + min
    myLabe3.textContent = randoNum3
}