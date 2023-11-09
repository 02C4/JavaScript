const prompt = require("prompt-sync")();  // importa a função prompt do pacote prompt-sync

let entrada = prompt("Digite uma palavra ");  // recebe a entrada do usuário

let tam = entrada.length;
let string_invertida = '';
for (let i = tam - 1; i >= 0; i--) {
    string_invertida += entrada[i];
}

console.log(string_invertida);