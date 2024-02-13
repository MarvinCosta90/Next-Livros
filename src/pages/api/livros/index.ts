// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';

class ControleLivro {
  livros = [
    { codigo: 1, titulo: 'Exemplo de Livro 1', autor: 'Autor 1', codEditora: 1 },
    { codigo: 2, titulo: 'Exemplo de Livro 2', autor: 'Autor 2', codEditora: 2 },
    { codigo: 3, titulo: 'Exemplo de Livro 3', autor: 'Autor 3', codEditora: 1 },
    // Adicione mais livros conforme necessário
  ];

  obterLivros() {
    return this.livros;
  }

  obterLivro(codigo: number) {
    return this.livros.find(livro => livro.codigo === codigo);
  }

  incluir(livro: any) {
    const novoCodigo = this.livros.length ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    const novoLivro = { ...livro, codigo: novoCodigo };
    this.livros.push(novoLivro);
    return novoLivro;
  }

  excluir(codigo: number) {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
      return true;
    }
    return false;
  }
}

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
        res.status(201).json({ mensagem: 'Livro adicionado com sucesso', livro: novoLivro });
      } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao adicionar o livro' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
