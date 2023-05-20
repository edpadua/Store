import React from 'react'

import styles from './Inicio.module.sass';

import { useNavigate } from 'react-router-dom';

function Inicio() {
    return (
        <div>
            <div className={styles.categorias}>

                <h1>
                    Categorias
                </h1>
            </div>
        </div>
    )
}

export default Inicio
