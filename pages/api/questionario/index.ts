import { embaralhar } from "../../../functions/arrays";
import questoes from "../database"

export default function questionarioId(req, res) {
    const ids = questoes.map(questao => questao.id);
    res.status(200).json(embaralhar(ids))
}