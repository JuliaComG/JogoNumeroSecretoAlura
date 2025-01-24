/*
let title = document.querySelector('h1');
title.innerHTML = "Jogo do número secreto";

let paragraph = document.querySelector('p');
paragraph.innerHTML = "Tente adivinhar o número secreto entre 1 e 10";
*/ 


function showMainText(tag, text){
    let element = document.querySelector(tag);
    element.innerHTML = text;
    //responsiveVoice.speak(text, "Brazilian Portuguese Female", {rate:1.2} );
}

function gerateRandomNumber(){
    let theChoseOne = parseInt(Math.random() * limitNumber + 1);
    let lengthList = listOfRdmNumbers.length;

    if (lengthList == limitNumber) {
        listOfRdmNumbers = [];
    }

    if (listOfRdmNumbers.includes(theChoseOne)) {
        return gerateRandomNumber();
    }else{
        listOfRdmNumbers.push(theChoseOne);
        console.log(listOfRdmNumbers);
        return theChoseOne;
    }
}

function checkGuess(){
    let guess = document.querySelector("input").value;
    console.log(`Palpite: ${guess}`);

    let feedbackElement = document.querySelector("p");

    if (secretnumber == guess) {
        showMainText("h1", "Acertou!");
        let numtray = tray == 1 ? "tentativa" : "tentativas";
        showMainText("p", `Você descobriu o número secreto com ${tray} ${numtray}!`); 
        
        feedbackElement.style.color = "#2CA49A";

        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chute").setAttribute("disabled", true);  
        cleanScreen();   
    }else{  
        tray++;
        hintFeedback(guess, secretnumber);    
        if (secretnumber > guess) {
            showMainText("p", `O número secreto é MAIOR que ${guess}.` );
        } else {
            showMainText("p", `O número secreto é MENOR que ${guess}.` );
        }
        cleanScreen();
    }    
}

function hintFeedback(guess, secretnumber){
    const feedbackElement = document.querySelector("p");
    const dicaAtivada = document.getElementById("toggleDica").checked; // Verifica se a dica está ativada

    if (dicaAtivada) {
        const distance = Math.abs(secretnumber - guess); // Calcula a distância
        let color;

        if (distance > 20) {
            color = "#688EA6"; // Azul (frio)
        } else if (distance > 10) {
            color = "#F27141"; // Laranja (morno)
        } else {
            color = "#A63B32"; // Vermelho (quente)
        }

        feedbackElement.style.color = color;
    } else {
        feedbackElement.style.color = ""; // Remove a cor quando a dica está desativada
    }

}

function cleanScreen(){
    let input = document.querySelector("input");
    input.value = "";
    input.focus();
}

function playAgain(){
    secretnumber = gerateRandomNumber();
    cleanScreen();
    tray = 1;
    showFirstMsg();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chute").removeAttribute("disabled");  
}

function showFirstMsg(){
    showMainText("h1", "Jogo do número secreto");
    showMainText("p",`Tente adivinhar o número secreto entre 1 e ${limitNumber}.` );
}

function pressEnter(event){
    if (event.key === "Enter") {
        checkGuess();
    }
}

let tray = 1;
let limitNumber = 100;
let listOfRdmNumbers = [];
showFirstMsg();
let secretnumber = gerateRandomNumber();
console.log(`Número Sorteado: ${secretnumber}`);
document.querySelector("input").addEventListener("keydown", pressEnter);
