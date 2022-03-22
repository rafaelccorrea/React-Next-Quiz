import { useState } from 'react'
import Botao from '../components/botao/Botao'
import Questao from '../components/questao/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoTeste = new QuestaoModel(1, 'Melhor Cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Amarela'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
  
])

export default function Home() {

  const [ questao, setQuestao ] = useState(questaoTeste)

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if(questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao 
        valor={questao} 
        tempoResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto="Próxima Questão" href="/resultado"/>
    </div>
  )
}
