import React from 'react'

import styles from './Cabecalho.module.sass';

function Cabecalho({titulo,className}) {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.titulo}>
                <h1>{titulo}</h1>
            </div>
          
        </header>
    )
}

export default Cabecalho
