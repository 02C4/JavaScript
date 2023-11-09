const prompt = require("prompt-sync")();

let first_number = parseInt(prompt("Digite o primeiro número: "));
let second_number = parseInt(prompt("Digite o segundo número: "));

let result = 0;

for (let i = first_number; i >= 1; i--) {
    result += second_number; 
}

console.log(result);