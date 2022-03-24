import TemporizadorProps from './Model'
import styles from './Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Temporizador (props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#ED827A']}
                colorsTime={[10,3,0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}