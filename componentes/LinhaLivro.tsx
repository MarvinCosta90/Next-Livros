import React from 'react';
import { Livro } from '../classes/modelo/Livro';
  
interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { 
  return (
    <tr>
        <td>
        {props.livro.titulo}
        <br />
        <button 
            className="btn btn-danger btn-sm mt-2" 
            onClick={() => props.excluir(props.livro.codigo)}
        >
            Excluir
        </button>
        </td>
        <td>{props.livro.titulo}</td>
        <td>{ props.livro.editora?.nome ?? props.livro.codEditora }</td>
        <td dangerouslySetInnerHTML={{ __html: props.livro.autores.join(' <br> ') }}></td>
    </tr>
  );
};

