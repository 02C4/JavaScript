const prompt = require("prompt-sync")();

function verificaEmail(email){
    if(email.indexOf("@gmail.com") !== -1){
        console.log("O email contem o dominio @gmail.com");
        let indexDominio = email.indexOf("@");
        let nomeUsuario = email.slice(0, indexDominio);
        console.log("O nome do usuário é: " + nomeUsuario);
    }else{
        console.log("O email não contem o dominio @gmail.com");
        let indexDominio = email.indexOf("@");
        let dominio = email.slice(indexDominio);
        console.log("O dominio do email é: " + dominio);
    }
}

let email = prompt("Digite o email: ");
verificaEmail(email);
