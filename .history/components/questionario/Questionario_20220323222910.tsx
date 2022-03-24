import QuestionarioProps from "./model";
import styles from "./Questionario.module.css";
import Botao from "./../botao/Botao";
import Questao from "../questao/Questao";

export default function Questionario(props: QuestionarioProps) {

  function respostaFornecida(indice: number) {
    if(props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          respostaFornecida={respostaFornecida}
          tempoResposta={6}
          tempoEsgotado={props.proximo}
        />
      ) : (
        false
      )}
      <Botao
        onClick={props.proximo}
        texto={props.ultima ? "Finalizar" : "Proxíma"}
      />
    </div>
  );
}
