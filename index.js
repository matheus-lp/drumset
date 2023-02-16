
// se tiver parenteses no final a função roda imediatamente quanto o site abrir
// para que isso não ocorra, a função deve estar sem parenteses, ou deve-se usar uma
// "função anônima" no event listener"

// document.querySelectorAll("button")[0].addEventListener("click", function (){
// alert("I got clicked")
// })

var buttons = document.querySelectorAll("button.drum");

var audios  = [
    new Audio("sounds/tom1.mp3"),
    new Audio("sounds/tom2.mp3"),
    new Audio("sounds/tom3.mp3"),
    new Audio("sounds/tom4.mp3"),
    new Audio("sounds/snare.mp3"),
    new Audio("sounds/crash.mp3"),
    new Audio("sounds/kick.mp3"),
];

for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {    // mesmo que "document.addEventListener("keydown", event => {
    makeSound(event.key);
    buttonAnimation (event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            audios[0].play();
            break;
        case "a":
            audios[1].play();
            break;
        case "s":
            audios[2].play();
            break;
        case "d":
            audios[3].play();
            break;
        case "j":
            audios[4].play();
            break;
        case "k":
            audios[5].play();
            break;
        case "l":
            audios[6].play();
            break;
        default: console.log(this.innerHTML);
    }
}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(removeAnimation, 200);
    function removeAnimation(){
        activeButton.classList.remove("pressed")
    };
}