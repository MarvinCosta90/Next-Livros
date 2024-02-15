import 'bootstrap/dist/css/bootstrap.css'
import '../globals.css'
import type {AppProps } from 'next/app'
import Head from 'next/head'
import { Menu } from '../../componentes/Menu' 
import estilos from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <title>Store Next</title>
        </Head> 
        <Menu></Menu>
        <main className={ estilos.main }>
            <Component {...pageProps } style={{background: 'white !important'}} />
        </main>
    </>
    )
}
export default MyApp