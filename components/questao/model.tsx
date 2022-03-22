import QuestaoModel from "../../model/questao";

export default interface QuestaoProps {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void;
}