"use strict";
class Pessoa {
    nome;
    cpf; //readonly impede reatribuição (apenas pode ler).
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}
class Estudante extends Pessoa {
    matricula;
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
    }
    //Sobrescrevendo
    apresentar() {
        console.log(`Sou o estudante ${this.nome}, matrícula ${this.matricula}`);
    }
}

//let pessoa: Pessoa = new Pessoa("a", "b"); //--> Error! por que não pode instanciar classe abstrata.
const estudanteTS = new Estudante("Ana", "123.456.789-00", "TS001");
estudanteTS.apresentar();
//estudanteTS.cpf = "outro"; //--> Error! por que usa o readonly e é protected
