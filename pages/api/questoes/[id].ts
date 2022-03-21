import questoes from "../database";

/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
  res.status(200).json(questoes[0].toObject());
};
