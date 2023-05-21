import React from 'react'

import { Outlet } from 'react-router-dom';

import styles from './Template.module.sass';

import BarraDeNavegacao from '../BarraDeNavegacao';

import Rodape from '../Rodape';

function Template() {
    return (
        <div className={styles.container}>
            <BarraDeNavegacao />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Rodape />
        </div>
    )
}

export default Template
