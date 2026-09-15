export class Professor {
    constructor(nome, idFuncional) {
        this.nome = nome;
        this.idFuncional = idFuncional;
        this.disciplinas = []
    }
    atribuirDisciplinas(nomeDisciplina) {
        this.disciplinas.push(nomeDisciplina);
    }
}

const profSegato = new Professor("Segato", "0987654");
profSegato.atribuirDisciplinas("JS POO");
profSegato.atribuirDisciplinas("Node JS");

console.log(profSegato.disciplinas);