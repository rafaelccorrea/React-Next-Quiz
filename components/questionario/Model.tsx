import QuestaoModel from "../../model/questao";

export default interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void;
    proximo: () => void;
}