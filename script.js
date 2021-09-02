// Selecteer de menu button
const menuButton = document.querySelector("#menu-button");

// Laat de kleuren lijst zien
menuButton.addEventListener("mouseover", function (e) {
    document.querySelector('#colorList').classList.remove('hidden');
});

menuButton.addEventListener("mouseleave", function (e) {
    document.querySelector('#colorList').classList.add('hidden');
});

// Verander de achtergrond kleuren
const colorList = document.querySelector("#colorList");
const background = document.querySelector("body");

const emptyList = document.querySelector(".background-empty");
const redList = document.querySelector(".background-red");
const blueList = document.querySelector(".background-blue");
const purpleList = document.querySelector(".background-purple");
const pinkList = document.querySelector(".background-pink");

// Toggle de kleuren en voeg de innerHTML toe
emptyList.addEventListener("click", function (x) {
    background.classList.toggle("background-empty");
    document.getElementById("htmlText").innerHTML = "Home";
});

redList.addEventListener("click", function (x) {
    background.classList.toggle("background-red");
    document.getElementById("htmlText").innerHTML = "Red";
});

blueList.addEventListener("click", function (x) {
    background.classList.toggle("background-blue");
    document.getElementById("htmlText").innerHTML = "Blue";
});

purpleList.addEventListener("click", function (x) {
    background.classList.toggle("background-purple");
    document.getElementById("htmlText").innerHTML = "Purple";
});

pinkList.addEventListener("click", function (x) {
    document.getElementById("htmlText").innerHTML = "Pink";
    background.classList.toggle("background-pink");
});
