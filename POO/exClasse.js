class Estudante {
    constructor(nome, matricula, curso) {
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
    }

    exibirDadosAluno() {
        console.log(`Estudante ${this.nome}, de matricula ${this.matricula}, matriculado no curso ${this.curso}`);
    }
}

//Instanciando (Atribuindo valor) a Classe 
const estudante = new Estudante("José da Silva", "2026000", "Javascript Backend");
const estudante1 = new Estudante("João Silva", "2026001", "Python Backend");
const estudante2 = new Estudante("Maria Souza", "202002", "Java Backend");




estudante.exibirDadosAluno();
estudante.exibirDadosAluno();
estudante.exibirDadosAluno();