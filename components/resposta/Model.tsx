import RespostaModel from "../../model/resposta";

export default interface RespostaProps {
    valor: RespostaModel;
    indice: number;
    letra: string;
    corFundoLetra: string;
    respostaFornecida: (indice: number) => void
}