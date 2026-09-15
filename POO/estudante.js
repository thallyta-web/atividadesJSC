export class Estudante {
    nome;
    matricula;
    dataNascimento;
    notas;

    constructor(nome, matricula, dataNascimento){
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this.notas = [];
    }

    adicionarNota(nota) {
        if(nota >= 0 && nota <=10){
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada para ${this.nome}.`);
        } else {
            console.log("Nota inválida. Deve ser entre 0 e 10");
        }
    }

    calcularMedia(){
        if(this.notas.legth === 0) {
            return 0;
        }
        const soma = this.notas.reduce((acc,nota) => acc + nota, 0);
        return (soma / this.notas.legth).toFixed(2);
    }
}

    const joao = new Estudante("João Silva", "2023001", "2005-03-15");
    const maria = new Estudante("Maria Souza", "2023002", "2006-07-20");

    joao.adicionarNota(8);
    joao.adicionarNota(9.5);
    maria.adicionarNota(10);

    console.log(joao.calcularMedia());
    console.log(maria.notas);