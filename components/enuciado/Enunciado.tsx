import EnunciadoProps from "./Model";
import styles from './Enunciado.module.css';

export default function Enunciado(props: EnunciadoProps){
    return (
        <div className={styles.enunciado}>
            <span className="texto">
                {props.texto}
            </span>
        </div>
    )
}