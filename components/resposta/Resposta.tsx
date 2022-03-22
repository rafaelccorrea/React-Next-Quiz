import RespostaProps from "./Model";
import styles from './Resposta.module.css';

export default function Resposta (props: RespostaProps) {
    const resposta = props.valor
    return (
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={styles.conteudo}>
                <div className={styles.frente}>
                    <div className={styles.letra}
                        style={{ backgroundColor: props.corFundoLetra}}
                    >
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>
                    
                </div>
            </div>
        </div>
    )
}