import React from 'react'

import styles from './BarraDeNavegacao.module.sass';

import { FaStore } from "react-icons/fa"

import { Link, useLocation, useNavigate } from 'react-router-dom';

import Pesquisa from '../Pesquisa';

import classNames from 'classnames';


import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';

const iconeProps = {
    color: 'white',
    size: 24
  }

function BarraDeNavegacao() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <nav className={styles.cabecalho}>
            <FaStore style={{ fontSize: '30px', color: "#ffffff" }} onClick={() => navigate('/')} />
            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: location.pathname === '/'
                    })}>
                        Início
                    </Link>
                </div>
            </div>
            <div className={styles.pesquisa}>
                <Pesquisa />
            </div>
            <div className={styles.icones}>
                <Link to="/carrinho">
                    {location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                    }
                </Link>
            </div>
        </nav>
    )
}

export default BarraDeNavegacao
