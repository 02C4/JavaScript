let pessoa = {};

pessoa.nome = "Danillo";
pessoa.idade = 31;

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

pessoa.idade = 32; 
console.log("Idade Atualizada: " + pessoa.idade);

let pessoa2 = {
  nome: "Helena", idade: 26
};

for (let prop in pessoa2) {
  console.log(prop + ": " + pessoa2[prop]);
}

pessoa2.apresentacao = function() {
  console.log("Olá, meu nome é " + pessoa2.nome + ".");
};
pessoa2.apresentacao();

pessoa.email = "dani@gmail.com";
console.log(`Email ${pessoa.nome}: ${pessoa.email}`);
