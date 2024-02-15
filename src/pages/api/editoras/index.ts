import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/controle/ControleEditora'; 

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } catch (e) {
      res.status(500).json({ mensagem: "Erro ao buscar editoras" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

