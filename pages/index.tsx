import Questao from '../components/questao/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor Cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Amarela'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta'),
    
  ])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questaoTeste}/>
    </div>
  )
}
