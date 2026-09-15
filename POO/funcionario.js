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

class Funcionario extends Pessoa{
    #salario

    constructor(nome, dataNascimento, cpf, cargo, salario){
        super(nome, dataNascimento, cpf)
        this.cargo = cargo;
        this.#salario = salario;
    }

    get salario(){return this.salario};

    get cargo(){return this.cargo}

    promover(novoCargo, novoSalario){
        this.cargo = novoCargo;
        this.#salario = novoSalario
        this.console.log(`${this.nome} foi promovido(a)...`);

        /*set cargo(novoCargo){this.cargo = novoCargo;}
        set salario(novoSalario){this.#salario = novoSalario;}*/
    }   
}

const funcionarioLaura = new Funcionario("Laura", "2000-10-11", "111.222.333-44", "Bibliotecária");

console.log(funcionarioLaura);