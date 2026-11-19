interface IApresentavel {
    apresentar():void;
}

abstract class Pessoa implements IApresentavel {
    public nome: string;
    protected readonly cpf: string; //readonly impede reatribuição (apenas pode ler).

    constructor(nome:string, cpf: string){
        this.nome = nome;
        this.cpf = cpf;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

class Estudante extends Pessoa {
    public matricula: string;
    
    constructor(nome:string, cpf:string, matricula: string){
        super(nome,cpf);
        this.matricula = matricula;
    }


//Sobrescrevendo
    public override apresentar():void {
        console.log(`Sou o estudante ${this.nome}, matrícula ${this.matricula}`);
    }
}
//let pessoa: Pessoa = new Pessoa("a", "b"); --> Error! por que não pode instanciar classe abstrata.

const estudanteTS = new Estudante("Ana", "123.456.789-00", "TS001");
estudanteTS.apresentar();

//estudanteTS.cpf = "outro"; --> Error! por que usa o readonly e é protected