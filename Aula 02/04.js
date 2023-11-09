const prompt = require("prompt-sync")();

let number = parseInt(prompt("Digite um número: "));
if (number > 0) {
    switch (number) {
        case 1:
            console.log('sequencia de fibonacci até o número ' + number)
            console.log('0')
            break;
        case 2:
            console.log('sequencia de fibonacci até o número ' + number)
            console.log('0 1')
            break;
        default:
            let first = 0;
            let second = 1;
            let result = '0 1';
            for (let i = 3; i <= number; i++) {
                let third = first + second;
                result += ' ' + third;
                first = second;
                second = third;
            }
            console.log('sequencia de fibonacci até o número ' + number)
            console.log(result);
            break;
    }
}