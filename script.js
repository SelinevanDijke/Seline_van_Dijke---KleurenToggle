// Selecteer de menu button
const menuButton = document.querySelector("#menu-button");
const colorList = document.querySelector("#colorList");
const background = document.querySelector("body");
const emptyList = document.querySelector(".background-empty");
const redList = document.querySelector(".background-red");
const blueList = document.querySelector(".background-blue");
const purpleList = document.querySelector(".background-purple");
const pinkList = document.querySelector(".background-pink");

// Laat de kleuren lijst zien
menuButton.addEventListener("mouseover", function (e) {
    document.querySelector('#colorList').classList.remove('hidden');
});

menuButton.addEventListener("mouseleave", function (e) {
    document.querySelector('#colorList').classList.add('hidden');
});

// Verander de achtergrond kleuren

// Toggle de kleuren en voeg de innerHTML toe
emptyList.addEventListener("click", function (x) {
    background.classList.add("background-empty");
    background.classList.remove("background-red");
    background.classList.remove("background-blue");
    background.classList.remove("background-purple");
    background.classList.remove("background-pink");
    document.getElementById("htmlText").innerHTML = "Home";
});

redList.addEventListener("click", function (x) {
    background.classList.add("background-red");
    background.classList.remove("background-empty");
    background.classList.remove("background-blue");
    background.classList.remove("background-purple");
    background.classList.remove("background-pink");
    document.getElementById("htmlText").innerHTML = "Red";
});

blueList.addEventListener("click", function (x) {
    background.classList.add("background-blue");
    background.classList.remove("background-red");
    background.classList.remove("background-empty");
    background.classList.remove("background-purple");
    background.classList.remove("background-pink");
    document.getElementById("htmlText").innerHTML = "Blue";
});

purpleList.addEventListener("click", function (x) {
    background.classList.add("background-purple");
    background.classList.remove("background-red");
    background.classList.remove("background-blue");
    background.classList.remove("background-pink");
    background.classList.remove("background-empty");
    document.getElementById("htmlText").innerHTML = "Purple";
});

pinkList.addEventListener("click", function (x) {
    background.classList.add("background-pink");
    background.classList.remove("background-red");
    background.classList.remove("background-blue");
    background.classList.remove("background-purple");
    background.classList.remove("background-empty");
    document.getElementById("htmlText").innerHTML = "Pink";
});
