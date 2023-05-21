import React from 'react'

import styles from './Inicio.module.sass';

import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../Componentes/Cabecalho';

function Inicio() {
    return (
        <div>
            <Cabecalho/>
            <div className={styles.categorias}>

                <h1>
                    Categorias
                </h1>
            </div>
        </div>
    )
}

export default Inicio
