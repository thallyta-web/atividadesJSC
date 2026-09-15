class ContaBancaria{
    #titular;
    #saldo;

    constructor(titular){
        this.#titular = titular;
        this.#saldo = 0; //Começa com 0
    }

    get titular(){
        return this.#titular
    }

    get saldo(){
        return this.#saldo;
    }

    depositar(valor){
        if(valor > 0) this.#saldo += valor;
        console.log(`Um valor de: R$${valor}, foi depositado com sucesso!`)
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){ this.#saldo -= valor;
        console.log(`Um valor de: R$${valor}, foi retirado com sucesso!`)
    } else{
        console.log("Erro ao sacar.")
        }
    }
}

const maria = new ContaBancaria("Maria");
console.log(maria); // --> Daria erro, porque não é possível acessar diretamente - atributos privados.
console.log(`Titular: ${maria.titular}`);
console.log(`Saldo atual: ${maria.saldo}`);

maria.depositar(300);
console.log(`Saldo atual: ${maria.saldo}`);

maria.sacar(500);
maria.sacar(100);
console.log(`Saldo atual: ${maria.saldo}`);