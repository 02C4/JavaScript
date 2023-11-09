const prompt = require("prompt-sync")();

function drawRectangle(width, height) {
    let result = "";
    for (let i = 0; i < height; i++) {
        // result += "*".repeat(width) + "\n";
        for (let j = 0; j < width; j++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
}

let imprime = "s";

while (imprime == "s") {
    let imprime = prompt("Deseja imprimir um retângulo? (s/n): ");
    if (imprime == "s") {
        let width = parseInt(prompt("Digite a largura: "));
        let height = parseInt(prompt("Digite a altura: "));
        if (width > height)
            console.log(drawRectangle(width, height));
        else 
            console.log("Entrada inválida!");
    }
    else {
        console.log("Programa encerrado!");
        break;
    }
}