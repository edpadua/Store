import React from 'react'

import styles from './Inicio.module.sass';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux" ;

import { useEffect } from 'react';

import { buscarCategorias } from "../../Loja/Reducers/categorias";
import { buscarProdutos } from "../../Loja/Reducers/produtos";


function Inicio() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categorias = useSelector(state => state.categorias);
    
    useEffect(() => {
        dispatch(buscarCategorias());
        dispatch(buscarProdutos());
      }, [dispatch]);
    

    return (
        <div>
            <div className={styles.categorias}>          
                         
                <div className={styles.titulo} >

                    <h1>
                        Categorias
                    </h1>
                </div>

                <ul className={styles['categorias-container']}>
                    {console.log("categorias mostrar",categorias)}
                    {categorias.map((categoria, index) => (
                        <li className={styles.categoria_item} key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                            
        
                            <img className={styles.categoria_img} src={categoria.thumbnail} alt={categoria.nome} />
                            <div className={styles.categoria_nome}>
                                <h2>{categoria.nome}</h2>
                            </div>
                           
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Inicio
