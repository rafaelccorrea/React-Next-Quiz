import Enunciado from "../enuciado/Enunciado";
import Resposta from "../resposta/Resposta";
import QuestaoProps from "./model";
import styles from "./Questao.module.css";

const letras = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4F2" },
  { valor: "D", cor: "#BCE596" },
];

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function renderRespostas() {
    return questao.resposta.map((resposta, i) => {
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {renderRespostas()}
    </div>
  );
}
