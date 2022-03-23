import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Questionario from "../components/questionario/Questionario";
import QuestaoModel from "../model/questao";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [questao, setQuestao] = useState<QuestaoModel>();
  const [idsQuest, setIdsQuest] = useState<number[]>([]);
  const [respostaCerta, setRespostaCerta] = useState<number>(0);

  async function carregarGetIds() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsQuest = await resp.json();
    setIdsQuest(idsQuest);
  }

  async function carregarIdsQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const newQuest = QuestaoModel.criarObj(json);
    setQuestao(newQuest);
  }

  useEffect(() => {
    carregarGetIds();
  }, []);

  useEffect(() => {
    idsQuest.length > 0 && carregarIdsQuestao(idsQuest[0]);
  }, [idsQuest]);

  function questaoRespondida(questao: QuestaoModel) {
    setQuestao(questao);
    const acertou = questao.acertou;
    setRespostaCerta(respostaCerta + (acertou ? 1 : 0));
  }

  function proximaIdPergunta() {
    const nextIndice = idsQuest.indexOf(questao.id) + 1;
    return idsQuest[nextIndice];
  }

  function NextproximoPasso() {
    const proximoId = proximaIdPergunta();
    proximoId ? proximaQuestao(proximoId) : finalizar();
  }

  function proximaQuestao(proximoId: number) {
    carregarIdsQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuest.length,
        certa: respostaCerta,
      },
    });
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={proximaIdPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      proximo={NextproximoPasso}
    />
  ) : (
    false
  );
}
