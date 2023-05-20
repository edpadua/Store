import React from 'react'

import { Outlet } from 'react-router-dom';

import styles from './Template.module.sass';

import Cabecalho from '../Cabecalho';

import Rodape from '../Rodape';

function Template() {
  return (
    <div className={styles.container}>
       <Cabecalho />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Rodape/>
    </div>
  )
}

export default Template
