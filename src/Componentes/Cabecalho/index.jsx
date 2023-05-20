import React from 'react'

import styles from './Cabecalho.module.sass';

import {FaStore} from "react-icons/fa"

import { Link, useLocation, useNavigate } from 'react-router-dom';

import classNames from 'classnames';

function Cabecalho() {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <nav className={styles.cabecalho}>   
        <FaStore style={{ fontSize: '30px', color:"#ffffff"}} onClick={() => navigate('/')} />  
        <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Início
          </Link>
        </div>
      </div> 
    </nav>
  )
}

export default Cabecalho
