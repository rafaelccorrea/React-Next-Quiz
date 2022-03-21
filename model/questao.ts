import { embaralhar } from "../functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModel{
    #id: number;
    #enunciado: string;
    #resposta: RespostaModel[];
    #acertou: boolean;
    // #respondida: boolean;

    constructor(id: number, enunciado: string, resposta: RespostaModel[], acertou = false){
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

    get respondida() {
        for(let resposta of this.#resposta) {
            if(resposta.revelada) return true
        }

        return false;
    }

    embaralharRespostas() {
        let respostas = embaralhar(this.#resposta)
        return new QuestaoModel(this.#id, this.#enunciado, respostas, this.#acertou)
    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            resposta: this.#resposta.map(item => item.toObject()),
            acertou: this.#acertou
        }
    }

}