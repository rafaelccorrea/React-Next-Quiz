export default class QuestaoModel{
    #id: number;
    #enunciado: string;
    #resposta: any[];
    #acertou: boolean;

    constructor(id: number, enunciado: string, resposta: any[], acertou: boolean){
        this.#id = id
        this.#enunciado = enunciado 
        this.#resposta = resposta 
        this.#acertou = acertou 
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get resposta() {
        return this.#resposta
    }

    get acertou() {
        return this.#acertou
    }
}