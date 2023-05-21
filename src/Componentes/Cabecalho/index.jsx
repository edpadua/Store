import React from 'react'

import styles from './Cabecalho.module.sass';

function Cabecalho({titulo, descricao, imagem, className}) {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.titulo}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles.imagem}>
                <img alt={titulo} src={imagem}/>
            </div>
        </header>
    )
}

export default Cabecalho
