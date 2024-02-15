import type { NextPage } from 'next'
import React from 'react';
import estilos from '../styles/Home.module.css'

const Home: NextPage = () => { 
    return ( 
        <div style={{ width: '100%'}}>
            <h1 className={ estilos.titulo }>
                Página Inicial
            </h1>
        </div>
    )
}

export default Home;