
export class Avaliacao{
    constructor(valor,peso){
        this.valor = valor;
        this.peso = peso;
    }
}

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
class Boletim{
    constructor(estudante, disciplina, avaliacao){
        this.estudante = estudante;
        this.disciplina = disciplina;
        this.avaliacoes = [];
    }

    lançarAvaliacao(valor,peso){
        const nova = new Avaliacao(valor,peso)
        this.avaliacoes.push(nova);
    }

    calcularMediaPonderada(){
        
    }
}