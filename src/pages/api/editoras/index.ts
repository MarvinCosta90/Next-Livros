import { NextApiRequest, NextApiResponse } from 'next';

interface Editora {
  codEditora: number;
  nome: string;
}

class ControleEditora<T extends Editora> {
  editoras: T[] = [
    { "codEditora": 1, "nome": "Alta Books" } as T,
    { "codEditora": 2, "nome": "Bookman" } as T,
    { "codEditora": 3, "nome": "Addison Wesley" } as T,
    { "codEditora": 4, "nome": "Pearson" } as T,
    // Add more publishers as needed
  ];

  getEditoras(): T[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | null {
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

