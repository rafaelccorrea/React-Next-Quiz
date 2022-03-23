import { useRouter } from "next/router";
import Botao from "../components/botao/Botao";
import Estatistica from "../components/estatistica/Estatistuca";
import styles from "../styles/Resultado.module.css";

export default function Resultado() {
  const router = useRouter();
  const total = +router.query.total;
  const certas = +router.query.certa;

  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: 'flex'}}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9cd2a4"/>
        <Estatistica texto="Percentual" valor={`${percentual}`} corFundo="#DE6A33"/>
      </div>
      <Botao texto="Tentar Novamente" href="/"/>
    </div>
  );
}
