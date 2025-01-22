alert ("Seja bem-vindo ao jogo do número secreto!");

// GERAR O NÚMERO ALEATÓRIO
let limit = prompt ("Digite o valor máximo para o número secreto:");
let secretnumber = Math.floor(Math.random() * limit+1);
console.log(`Número Sorteado: ${secretnumber}`);

// INICIALIZAR VARIAVEL DO PALPITE DO USUÁRIO
let guess;
let tray = 1;

while (guess != secretnumber) { 
    console.log(`Tentativa: ${tray}`); 

    // ONDE FICA GUARDADO O PALPITE DO USUÁRIO
    guess = prompt (`Entre 0 e ${limit}. Qual é o seu palpite?`);
    console.log(`Palpite: ${guess}`);

    // VERIFICAR SE O PALPITE DO USUÁRIO É IGUAL AO NÚMERO SECRETO
    if (secretnumber == guess) {
        break;
                
    }else{
        tray++;
        
        if (secretnumber > guess) {
            // USANDO A CONCATENAÇÃO
            alert ("O número secreto é MAIOR que " + guess + ".");
        } else {
            alert (`O número secreto é MENOR que ${guess}.` );
        }
    }
}

// OPERADOR TERNÁRIO
let numtray = tray == 1 ? "tentativa" : "tentativas";
alert (`Parabéns! O número ${secretnumber} era o número secreto! Você acertou com ${tray} ${numtray}.`);

/*
// USANDO O IF
if (tray == 1) {
    alert (`Parabéns! O número ${secretnumber} era o número secreto! Você acertou de primeira!`);
}else{
    // USANDO O Template Strings
    alert (`Parabéns! O número ${secretnumber} era o número secreto! Você acertou com ${tray} tentativas.`);
}
*/
