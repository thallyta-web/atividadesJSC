//AGREGAÇÃO
// Criar a classe Disciplina e fazer ela se relacionar com Professor e Estudante.

// Para usar Professor e Estudante aqui é necessário Exportar lá (Classes) e Importar aqui:

import { Professor } from './professor'
import { Estudante } from './estudante'

export class Disciplina {
    constructor (nome, codigo, cargaHoraria) {
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
        this.professor = null;
        this.estudantesMatriculados = []
    }

    atribuirProfessor(professor) {
        if (professor instanceof Professor){
            this.professor = professor;
            console.log(`Professor ${professor.nome} atribuído á disciplina ${this.nome}.`);
        } else {
            console.log("Error: O objeto fornecido não é uma instância de Estudante.");
        }
    }
    
    listarEstudantes() {
        console.log(`\n--- Estudantes matriculados em ${this.nome} ---`);
        this.estudantesMatriculados.forEach(estudante => {
            console.log(`- ${estudante.nome} (Matrícula: ${estudante.matricula})`);
        });
        console.log("----------------------------------------------\n");
    }
}

// Instanciando e conectando tudo
const profTiago = new Professor('Tiago', '1234567')
const profSegato = new Professor('Segato', '0987654')

const joao = new Estudante ("João Silva", "2023002", "2005-03-15");
const maria = new Estudante("Maria Souza", "2023002", "2006-07-20");
const pedro = new Estudante("Pedro Alves", "2023003", "2004-11-10");

const logica = new Disciplina("Lógica JS", "LOG101", 24);
const jspoo = new Disciplina("Javascript POO","POO202", 24);

//console.log(logica)

logica.atribuirProfessor(profTiago);
jspoo.atribuirProfessor(profSegato);

logica.matricularEstudante(joao);
logica.matricularEstudante(maria);

jspoo.matricularEstudante(maria);
jspoo.matricularEstudante(pedro);

//console.log(jspoo)

console.log(`A disciplina de ${logica.nome} é lecionada por ${logica.professor.nome}`);
logica.listarEstudantes();
jspoo.listarEstudantes()