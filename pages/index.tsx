import { useEffect, useState } from "react";
import Questionario from "../components/questionario/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoTeste = new QuestaoModel(1, "Melhor Cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Amarela"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Preta"),
]);

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>(questaoTeste);
  const [idsQuest, setIdsQuest] = useState<number[]>([]);

  async function carregarGetIds() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuest = await resp.json();
    setIdsQuest(idsQuest);
  }

  async function carregarIdsQuestao( idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json();
  }

  useEffect(() => {
    carregarGetIds()
  }, [])

  useEffect(() => {
    idsQuest.length > 0 && carregarIdsQuestao(idsQuest[0])
  }, [idsQuest])

  function questaoRespondida(questao: QuestaoModel) {}

  function proximo() {}

  return (
    <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida}
      proximo={proximo}
    />
  );
}
