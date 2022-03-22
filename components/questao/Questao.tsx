import QuestaoProps from "./model";
import styles from './Questao.module.css';

export default function Questao(props:QuestaoProps) {
    const questao = props.valor
    return (
        <div className={styles.questao}>
            <h1>Questao</h1>
        </div>
    )
}