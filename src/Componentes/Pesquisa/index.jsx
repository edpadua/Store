import React from 'react'

import { useSelector, useDispatch } from 'react-redux'; 

import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { mudarPesquisa, resetarPesquisa } from "../../Loja/Reducers/pesquisa";

import styles from './Pesquisa.module.sass';

function Pesquisa() {

  const pesquisa = useSelector(state => state.pesquisa);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetarPesquisa()); 
  }, [location.pathname, dispatch])

  return (
    <div className={styles.pesquisa}>
       <input
        className={styles.input}
        placeholder="Digite o produto"
        value={pesquisa}
        onChange={evento => dispatch(mudarPesquisa(evento.target.value))}
      />
    </div>
  )
}

export default Pesquisa
