window.onload = init;
var bulba;
var mewtwo;
var pikachu;
var squirtle;

function init() {
    bulba = document.getElementById("footer__bulba");
    bulba.addEventListener("mouseover", e => {
        e.preventDefault();
        bulba.src = "./img/bulbaGif.gif"
    });
    bulba.addEventListener("mouseout", e => {
        e.preventDefault();
        bulba.src = "./img/bulbaNormal.png"
    });
    mewtwo = document.getElementById("footer__mewtwo");
    mewtwo.addEventListener("mouseover", e => {
        e.preventDefault();
        mewtwo.src = "./img/mewtwoGif.gif"
    });
    mewtwo.addEventListener("mouseout", e => {
        e.preventDefault();
        mewtwo.src = "./img/mewtwoNormal.png"
    });
    pikachu = document.getElementById("footer__pikachu");
    pikachu.addEventListener("mouseover", e => {
        e.preventDefault();
        pikachu.src = "./img/pikachuGif.gif"
    });
    pikachu.addEventListener("mouseout", e => {
        e.preventDefault();
        pikachu.src = "./img/pikachuNormal.png"
    });
    squirtle = document.getElementById("footer__squirtle");
    squirtle.addEventListener("mouseover", e => {
        e.preventDefault();
        squirtle.src = "./img/squirtleGif.gif"
    });
    squirtle.addEventListener("mouseout", e => {
        e.preventDefault();
        squirtle.src = "./img/squirtleNormal.png"
    });
}