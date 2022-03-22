import QuestaoModel from "../../model/questao";

export default interface QuestaoProps {
    valor: QuestaoModel
    tempoResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void;
}