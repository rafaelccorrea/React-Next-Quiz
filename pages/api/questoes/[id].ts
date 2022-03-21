import questoes from "../database";

/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
  const id = +req.query.id;
  const questao = questoes.filter(questao => questao.id === id)

  if(questao.length === 1){
    const questaoSelect = questao[0].embaralharRespostas()
    res.status(200).json(questaoSelect.toObject())
  }else{
    res.status(404).send()
  }
  res.status(200).json(questoes[0].toObject());
};
