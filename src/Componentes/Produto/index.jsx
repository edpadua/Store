import React from 'react'

import styles from './Produto.module.sass';

function Produto() {
    return (
        <div className={styles.produto}>
            <div className={styles.produto_imagem}>

            </div>
            <div className={styles.produto_descricao}>
                <div className={styles.produto_titulo}>

                </div>
                <div className={styles.produto_informacoes}>
                    <div className={styles.produto_preco}>

                    </div>
                    <div className={styles.produto_acoes}>  
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Produto
