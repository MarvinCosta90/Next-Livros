import type { NextPage } from 'next'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { Editora } from '../../classes/modelo/Editora';
import { Livro } from '../../classes/modelo/Livro';
import { useRouter } from 'next/router';

const LivroDados: NextPage = () => { 
  const [editoras, setEditoras] = useState<Array<Editora>>([]);
  const [carregando, setCarregando] = useState(false);
  const router = useRouter()

  const [codEditora, setCodEditora] = useState('');
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');

  const baseURL = "http://localhost:3000/api/livros";
  const baseURLEditoras = "http://localhost:3000/api/editoras";

  const getEditoras = async () => {
    try {
      const response = await fetch(baseURLEditoras);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEditoras(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(evento.target.value);
  };

  const include = (evento:React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const editoraSelecionada = editoras.find(opcao => opcao.codEditora.toString() === codEditora);
    const novoLivro:Livro = {
      codigo: Date.now(),
      titulo,
      resumo,
      codEditora: editoraSelecionada ? editoraSelecionada.nome : 'Editora Desconhecida',
      autores: autores.split('\n'),
    };
    
    includeLivro(novoLivro)
  };

  const includeLivro = async (libro:Livro) => {
    if (carregando){
      return
    }
    setCarregando(true)
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result.ok)
      router.push('/LivroLista')

    } catch (error) {
      console.error("Error including livro: ", error);
    }
    setCarregando(false)
  };

  useEffect(() => {
    getEditoras();
  }, []);

  return ( 
  <div className="container pt-5">
    <Head>
        <title>Catálogo</title>
    </Head> 
    <h2 className='text-dark'>Novo Livro</h2>
    <form onSubmit={include}>
        <div className="mb-3 text-dark">
            <label htmlFor="titulo">Título</label>
            <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3 text-dark">
            <label htmlFor="resumo">Resumo</label>
            <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
        </div>
        <div className="mb-3 text-dark">
            <label htmlFor="editora">Editora</label>
            <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo}>
            {editoras.map(opcao => (
                <option key={opcao.codEditora} value={opcao.codEditora}>{opcao.nome}</option>
            ))}
            </select>
        </div>
        <div className="mb-3 text-dark">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
    </form>
  </div>
) }


export default LivroDados;