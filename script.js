"use strict";
let buttons = document.querySelector(".buttons");
let new_game = document.querySelector(".modal_text button");
let modal = document.querySelector(".modal");
/* В файле html найти элемент селектором которого является класс модал */
let step = 1;
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let criss_cross = document.querySelectorAll(".button");
let winner = document.querySelector(".modal_text p");

/* переменная buttons найти в документе элемент с классом buttons
переменная step = одному
*/
buttons.onclick = function (event) {
    /* при нажатии на buttons */
    let target = event.target;
    /* в переменной таргет хранится элемент на который нажали*/
    if (target.classList.contains("button") == false) {
        return;
        /*Если в списке классов элемента на который нажали не содержится класс button, то выход
         */
    }
    if (target.innerHTML /* innerHTMl - у обькета таргет обратись к внутреностям HTML */ != "") {
        return;
        /* если ячейка не пустая, то выход */
    }


    if (step % 2 == 0) {
        target.innerHTML = "0";
        /* если при деление шагов на 2 остаток равен 0, в ячейку пишется 0 */
    } else {
        target.innerHTML = "X";
        /* иначе в ячейку пишется Х */
    }
    step = step + 1;
    /* к шагу прибвляется 1 */
    pobeda();
};

new_game.onclick = function () {
    step = 1;
    modal.style.display = "none";
    for (let i = 0; i < criss_cross.length; i++) {
        criss_cross[i].innerHTML = "";
    }
}


function pobeda() {
    for (let i = 0; i < win.length; i++) {
        if ((criss_cross[win[i][0]].innerHTML == criss_cross[win[i][1]].innerHTML) && (criss_cross[win[i][0]].innerHTML == criss_cross[win[i][2]].innerHTML) && (criss_cross[win[i][0]].innerHTML != "")) {
            modal.style.display = "block";
            if (criss_cross[win[i][0]].innerHTML == "X") {
                winner.innerHTML = "Победили крестики!";
            } else {
                winner.innerHTML = "Победили нолики!";
            }
            return;
            /*}else{
                alert("text");*/
        }
    }
    if (step == 10) {
        winner.innerHTML = "Ничья!";
        modal.style.display = "block";
        /* В элементе обратиться ко всем стилям элемента, у всех стилей найти стиль display, присвоить ему значению block */
    }

}
