// Importa a classe Livro do arquivo Livro.ts
import { Livro } from "../modelo/Livro";

// Classe ControleLivro para gerenciar os livros
export class ControleLivro {
    // Array para armazenar os livros
    private livros: Livro[] = [];

    constructor() {
        // Aqui você pode inicializar alguns livros para teste
        this.livros.push(new Livro(1, 1, "Título do Livro 1", "Resumo do Livro 1", ["Autor 1", "Autor 2"]));
        this.livros.push(new Livro(2, 2, "Título do Livro 2", "Resumo do Livro 2", ["Autor 3"]));
        this.livros.push(new Livro(3, 3, "Título do Livro 3", "Resumo do Livro 3", ["Autor 4", "Autor 5"]));
    }

    // Método para obter todos os livros
    obterLivros(): Livro[] {
        return this.livros;
    }

    // Método para adicionar um novo livro
    adicionarLivro(livro: Livro): void {
        // Gera um novo código baseado no maior código existente
        const novoCodigo = this.livros.reduce((acc, cur) => cur.codigo > acc ? cur.codigo : acc, 0) + 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    // Método para remover um livro pelo seu código
    removerLivro(codigo: number): void {
        this.livros = this.livros.filter(livro => livro.codigo !== codigo);
    }

    // Método para atualizar um livro existente
    atualizarLivro(livroAtualizado: Livro): void {
        const index = this.livros.findIndex(livro => livro.codigo === livroAtualizado.codigo);
        if (index !== -1) {
            this.livros[index] = livroAtualizado;
        }
    }
}
