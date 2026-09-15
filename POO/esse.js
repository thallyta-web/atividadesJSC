class Estudante {
// atributos da classe
nome;
matricula;
dataNascimento;
notas;
constructor(nome, matricula, dataNascimento) {
this.nome = nome;
this.matricula = matricula;
this.dataNascimento = dataNascimento;
this.notas = [];
}
// comportamentos — lógica ocultada
adicionarNota(nota) { ... }
calcularMedia() { ... }
}

const joao = new Estudante("João Silva"
,
"2023001"
,
"2005-03-15");
const maria = new Estudante("Maria Souza"
,
"2023002"
,
"2006-07-20");
joao.adicionarNota(8);
joao.adicionarNota(9.5);
maria.adicionarNota(10);
console.log(joao.calcularMedia()); // 8.75
console.log(maria.notas);