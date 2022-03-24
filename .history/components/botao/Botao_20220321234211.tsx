import BotaoProps from "./Model";
import styles from "./Botao.module.css";
import Link from "next/link";

export default function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <button className={styles.botao} onClick={props.onClick}>
        {props.texto}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
