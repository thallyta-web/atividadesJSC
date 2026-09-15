import { Disciplina } from './disciplinas.js'

class turma{
    constructor(ano, semestre, codigoTurma){
        this.ano = ano
        this.semestre = semestre
        this.codigoTurma = codigoTurma
        this.disciplinas = []
    }

    adicionarDisciplina(disciplina){
        if (disciplina instanceof Disciplina){
            this.disciplinas.push(disciplina);
            console.log('Disciplina "${disciplina.nome}" adicionada a turma ${this.codigoTurma}.');
        } else {
            console.error("Erro: Só é possível adicionar objetos da classe Disciplina.");
        }
    }

    listarDisciplinas() {
            console.log(`\n- Disciplinas da Turma ${this.codigoTurma} (${this.ano}/${this.semestre}) -`);
            this.disciplinas.forEach(disc => {
                console.log(`- ${disc.nome} (Código: ${disc.codigo})`);
            });
            console.log("---------------------------------------------------\n");
    }
}

const logica = new Disciplina("Lógica JS", "LOG101", 24);
const jspoo = new Disciplina("Javascript POO", "POO202", 24);

const turma2026_1 = new Turma(2026, 1, "T1-2026");
console.log(turma2026_1);

turma2026_1.adicionarDisciplina(logica);
turma2026_1.adicionarDisciplina(jspoo);

console.log(turma2026_1);

turma2026_1.listarDisciplinas();