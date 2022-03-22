import { useState } from 'react'
import Questionario from '../components/questionario/Questionario'
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

  function questaoRespondida (questao: QuestaoModel) {

  }

  function proximo () {
    
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionario 
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        proximo={proximo}
      />
    </div>
  )
}
