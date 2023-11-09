const prompt = require("prompt-sync")();

let controle = 0;

while (controle !=1){
    let nomeUsuario = prompt("Digite o nome de usuario (deve começar com 'user'): ");

    if(nomeUsuario.length >= 12){
        nomeUsuario = nomeUsuario.toLowerCase();
        if (nomeUsuario.indexOf("@") === -1){
            console.log("ERRO! O nome de usuário deve conter o caracter @.")
        }
        if(nomeUsuario.indexOf("admin") !== -1){
            console.log("ERRO! O nome de usuário não pode começar com a palavra admin.")
        }
        else if(nomeUsuario.indexOf("user") !== -1){
            console.log("Nome Válido!")
            console.log("O nome de usuário é: " + nomeUsuario);
            controle = 1;
        }
    }
    else{
        console.log("ERRO! O nome de usuário deve ter no mínimo 12 caracteres.")
    }
}