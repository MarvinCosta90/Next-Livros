import type { NextPage } from 'next'
import React from 'react';
import { ControleEditora } from '../../classes/controle/ControleEditora';


interface Livro {
    codigo: number;
    titulo: string;
    autor: string;
    codEditora: number;
  }
  
  interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
  }

  
  
export default function LinhaLivro() {

    const controleEditora = ControleEditora
    const nomeEditora = controleEditora.getNomeEditora(1)

  console.log(nomeEditora)

  return (<div>test</div>
    /*<tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor}</td>
      <td>{nomeEditora || 'Editora Desconhecida'}</td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>*/
  );
};
