// Importa a classe Editora do arquivo Editora.ts
import { Editora } from "../modelo/Editora";

// Classe ControleEditora para gerenciar as editoras
export class ControleEditora {
    private editoras: Editora[] = [];

    constructor() {
        this.editoras.push(new Editora(1, "Alta Books"));
        this.editoras.push(new Editora(2, "Bookman"));
        this.editoras.push(new Editora(3, "Addison Wesley"));
        this.editoras.push(new Editora(4, "Pearson"));

    }

    getEditoras(): Editora[] {
        return this.editoras;
    }

    getEditoraPorCodigo(codEditora: number | string): Editora | undefined {
        return this.editoras.find(editora => editora.codEditora === codEditora);
    }

    adicionarEditora(editora: Editora): void {
        this.editoras.push(editora);
    }

    removerEditora(codEditora: number): void {
        this.editoras = this.editoras.filter(editora => editora.codEditora !== codEditora);
    }

    atualizarEditora(editoraAtualizada: Editora): void {
        const index = this.editoras.findIndex(editora => editora.codEditora === editoraAtualizada.codEditora);
        if (index !== -1) {
            this.editoras[index] = editoraAtualizada;
        }
    }

    getNomeEditora(codEditora: number): string | null {
        const editora = this.editoras.find(editora => editora.codEditora === codEditora);
        return editora ? editora.nome : null;
    }
}
