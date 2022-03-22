import RespostaModel from "../../model/resposta";

export default interface RespostaProps {
    valor: RespostaModel;
    indice: number;
    letra: string;
    corLetra: string;
}