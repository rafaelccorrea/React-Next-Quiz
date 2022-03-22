import { useState } from 'react'
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

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questaoTeste} respostaFornecida={respostaFornecida}/>
    </div>
  )
}
