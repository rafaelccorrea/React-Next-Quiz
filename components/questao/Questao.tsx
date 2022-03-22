import Enunciado from "../enuciado/Enunciado";
import QuestaoProps from "./model";
import styles from './Questao.module.css';

export default function Questao(props:QuestaoProps) {
    const questao = props.valor
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
        </div>
    )
}