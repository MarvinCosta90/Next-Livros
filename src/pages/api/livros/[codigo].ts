// pages/api/livros/[codigo].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;

  if (req.method === 'GET') {
    const livro = controleLivro.obterLivro(Number(codigo));
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } else if (req.method === 'DELETE') {
    const sucesso = controleLivro.excluir(Number(codigo));
    if (sucesso) {
      res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
