import React from 'react'

import styles from './Cabecalho.module.sass';

import {FaStore} from "react-icons/fa"

import { Link, useLocation, useNavigate } from 'react-router-dom';

function Cabecalho() {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <nav className={styles.cabecalho}>   
        <FaStore style={{ fontSize: '30px', color:"#ffffff"}} onClick={() => navigate('/')} />   
    </nav>
  )
}

export default Cabecalho
