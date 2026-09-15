class Pessoa {
    nome;
    dataNascimento;
    #cpf;

    constructor(nome, dataNascimento, cpf){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }

    get cpf() {return this.#cpf}

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}.`)
    }
}

class Estudante extends Pessoa {
    //não precisa declarar os atributos que são públicos.

    constructor(nome, dataNascimento, cpf, matricula) {
        super(nome, dataNascimento, cpf);

        this.matricula = matricula;
        this.notas = [];
    }

    adicionarNota(nota) {
        this.notas.push(nota);
    }

    //sobrescrevendo o apresentar(), que vem da class Pessoa.
    apresentar(){
        console.log(`Olá, eu sou o estudante ${this.nome} de matricula ${this.matricula}.`);
    }
}

class Professor extends Pessoa{
    constructor(nome, dataNascimento, cpf, idFuncional){
        super(nome, dataNascimento, cpf);
        this.idFuncional = idFuncional;
        this.disciplinas = [];
    }
    //Herdou o método apresentar(), da classe pessoa sem sobrescrever.
}

//Testes

const pessoaComum = new Pessoa("José", "2000-10-11", "111.222.333-44");
const estudanteJoana = new Estudante("Joana", "2000-10-11", "111.222.333-44", "E2023005");
const profTiago = new Professor("Tiago", "2000-10-11", "111.222.333-44", "POOJS");

console.log(pessoaComum);
console.log(estudanteJoana);
console.log(profTiago);

//Consultando o dado encapsulado:
console.log(profTiago.cpf); //getter herdado da superclasse.

//Exemplos de Polimorfismo
pessoaComum.apresentar();
estudanteJoana.adicionarNota();
profTiago.apresentar();