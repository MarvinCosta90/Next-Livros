import { NextApiRequest, NextApiResponse } from 'next';

class ControleEditora {
  editoras = [
    { "codEditora": 1, "nome": "Alta Books" },
    { "codEditora": 2, "nome": "Bookman" },
    { "codEditora": 3, "nome": "Addison Wesley" },
    { "codEditora": 4, "nome": "Pearson" },
    // Adicione mais editoras conforme necessário
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora: number) {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : null;
  }
}

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
