import React from 'react'

import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import styles from './Pesquisa.module.sass';

function Pesquisa() {
  return (
    <div className={styles.pesquisa}>
       <input
        className={styles.input}
        placeholder="Digite o produto"
        
      />
    </div>
  )
}

export default Pesquisa
