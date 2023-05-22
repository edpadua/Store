import React from 'react'

import styles from './Inicio.module.sass';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cabecalho from '../../Componentes/Cabecalho';

function Inicio() {

    const navigate = useNavigate();
    const categorias = useSelector(state => state.categorias);

    return (
        <div>
            <Cabecalho />
            <div className={styles.categorias}>
                <div >

                    <h1>
                        Categorias
                    </h1>
                </div>

                <ul className={styles['categorias-container']}>
                    {categorias.map((categoria, index) => (
                        <li className={styles.categoria_item} key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                            <div className={styles.categoria_nome}>
                                <h2>{categoria.nome}</h2>
                            </div>
                           
        
                            <img className={styles.categoria_img} src={categoria.thumbnail} alt={categoria.nome} />
                            
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Inicio
