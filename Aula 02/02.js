const prompt = require("prompt-sync")();

let number = 1;
let result = 0;
let count = 0;

while (number != 0) {
    number = parseInt(prompt("Digite um número (0 para sair): "));
    if (number == 0 && count != 0){
        console.log("A media dos números digitados é: " + result / count);
        break;
    }    
    result += number;
    count++;
}
