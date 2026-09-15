class RecursoDidatico{
    constructor(nome){
        if (this.constructor === RecursoDidatico){
            throw new Error("Classe abstrata 'RecursoDidatico' não pode ser instanciada.");
        }
        this.nome = nome;
    }

    exibir() {
        throw new Error("Método 'exibir()' deve ser implementado pelas subclasses."); //não é implementação, apenas declarando um erro.
    }
}

class Livro extends RecursoDidatico{
    constructor(nome, autor){
        super(nome);
        this.autor = autor;
    }

    exibir(){
        console.log(`Livro: ${this.nome}, de ${this.autor}`);
    }//Implementação obrigatória pelo método abstrato.
}

//Exemplo
//const recurso = new RecursoDidatico("Genérico"); //lança error.
const livroPOO = new Livro("POO Descomplicada", "Dr.Código");//instancia
console.log(livroPOO);
livroPOO.exibir();