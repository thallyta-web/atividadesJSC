import {Nota} from "./nota.js"

class Estudante{
    constructor(nome, matricula){
        this.nome = nome;
        this.matricula = matricula;
    }
}

class Disciplina{
    constructor(nome, codigo){
        this.nome = nome;
        this.codigo = codigo;
    }
}

class Matricula{
    constructor(estudante, disciplina){
        this.estudante = estudante;
        this.disciplina = disciplina;
        this.dataMatricula = new Date();
        this.notas = [];
    }

    adicionarNota(valor, descricao){
        const novaNota = new Nota[valor, descricao];
        this.notas.push[novaNota];
        console.log(`Nota "${descricao} (${valor}) adicionada para ${this.estudante.nome} em ${this.disciplina.nome}.`);
    }

    cacularMedia() {
        if (this.notas.length === 0){
            return 0;
        }
        const somaDasNotas = this.notas.reduce((acc, nota) => acc = nota.valor, 0);
        return (somaDasNotas/ this.notas.length).toFixed(2);
        }
}

//exemplos
const estudanteJoao = new Estudante("João Silva", "2023001");
const disciplinaPOO = new Matricula("Programação Orientada a Objetos" , "POO");

const matriculaJoaoEmPOO =  new Matricula(estudanteJoao, disciplinaPOO);

matriculaJoaoEmPOO.adicionarNota(8.5, "Prova 1");
matriculaJoaoEmPOO.adicionarNota(9.0, "Trabalho Final");

console.log("\n---  Detalhes da Matrícula ---");
console.log(matriculaJoaoEmPOO);
console.log(`Média final de ${estudanteJoao.nome}: ${matriculaJoaoEmPOO.calcularMedia()}`);