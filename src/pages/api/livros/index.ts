// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../../classes/controle/ControleLivros'; 

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
      break;
    case 'POST':
      try {
        const livro = req.body;
        const novoLivro = controleLivro.incluir(livro);
        res.status(200).json({ mensagem: 'Livro adicionado com sucesso', livro: novoLivro });
      } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao adicionar o livro' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
