// Importa a classe Editora do arquivo Editora.ts
import { Editora } from "../modelo/Editora";

// Classe ControleEditora para gerenciar as editoras
export class ControleEditora {
    // Array para armazenar as editoras
    private editoras: Editora[] = [];

    constructor() {
        // Aqui você pode inicializar algumas editoras para teste
        this.editoras.push(new Editora(1, "Alta Books"));
        this.editoras.push(new Editora(2, "Bookman"));
        this.editoras.push(new Editora(3, "Addison Wesley"));
        this.editoras.push(new Editora(4, "Pearson"));

    }

    // Método para obter todas as editoras
    getEditoras(): Editora[] {
        return this.editoras;
    }

    // Método para obter uma editora pelo seu código
    getEditoraPorCodigo(codEditora: number): Editora | undefined {
        return this.editoras.find(editora => editora.codEditora === codEditora);
    }

    // Método para adicionar uma nova editora
    adicionarEditora(editora: Editora): void {
        this.editoras.push(editora);
    }

    // Método para remover uma editora pelo seu código
    removerEditora(codEditora: number): void {
        this.editoras = this.editoras.filter(editora => editora.codEditora !== codEditora);
    }

    // Método para atualizar uma editora
    atualizarEditora(editoraAtualizada: Editora): void {
        const index = this.editoras.findIndex(editora => editora.codEditora === editoraAtualizada.codEditora);
        if (index !== -1) {
            this.editoras[index] = editoraAtualizada;
        }
    }
}
