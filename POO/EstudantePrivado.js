class EstudantePrivado{
    #nome;
    #matricula;
    #notas;

    constructor(nome, matricula) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#notas = [];
    }

    //getters
    get nome(){
        return this.#nome
    }
    //setters
    set nome(novoNome){
        this.#nome = novoNome;
    }

    get matricula() {
        return this.#matricula
    }

    get notas(){
        return [...this.#notas]
    }

    //Métodos públicos que manipulam o array privado
    adicionarNota(nota){
        if(nota >= 0 && nota <=10){
            this.#notas.push(nota);
           //console.log(`Nota ${nota} adicionada para ${this.nome}.`);
        } else {
            console.log("Nota inválida. Deve ser entre 0 e 10");
        }
    }

    calcularMedia(){
        if(this.#notas.length === 0) return 0;
        const soma = this.#notas.reduce ((acc, n) => acc + n, 0);
        return (soma / this.#notas.length).toFixed(2);
    }
}

const joao = new EstudantePrivado ("João Encapsulado da Silva", "E2023001");

/*Erros:
*/

console.log(joao.nome); // --> usa o getter
joao.adicionarNota(8);
joao.adicionarNota(10);
joao.adicionarNota(-6);

console.log(joao.notas);
console.log("Média do João:", joao.calcularMedia());

console.log("\n--- Testando o Setter de Nome ---");
console.log(`Nome atual: ${joao.nome}`);

joao.nome = "João da Silva Sauro";
console.log(`Nome: ${joao.nome}`);