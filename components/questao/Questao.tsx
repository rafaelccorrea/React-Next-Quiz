import Enunciado from "../enuciado/Enunciado";
import Resposta from "../resposta/Resposta";
import QuestaoProps from "./model";
import styles from './Questao.module.css';

export default function Questao(props:QuestaoProps) {
    const questao = props.valor

    function renderRespostas() {
        return questao.resposta.map((resposta, i) => {
            return <Resposta 
                key={i}
                valor={resposta}
                indice={i}
                letra="A"
                corFundoLetra="#F2C866"
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {renderRespostas()}
        </div>
    )
}