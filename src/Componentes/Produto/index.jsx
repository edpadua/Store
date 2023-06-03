import React from 'react'

import styles from "./Produto.module.sass";

import { deletarProduto, mudarProduto, mudarFavorito } from "../../Loja/Reducers/produtos";
import { useDispatch, useSelector } from 'react-redux'; 
import { mudarCarrinho, mudarQuantidade } from '../../Loja/Reducers/carrinho';
import classNames from 'classnames';

import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
import {BsHandThumbsUpFill,BsHandThumbsUp} from 'react-icons/bs';

import {BsCartPlus} from 'react-icons/bs';
import Cabecalho from '../Cabecalho';

const iconeProps = {
    size: 24,
    color: '#041833',
  };
  
  const quantidadeProps = {
    size: 32,
    color: '#1875E8'
  }

function Produto(props) {
    const {
        titulo,
        foto,
        preco,
        descricao,
        favorito,
        id,
        carrinho,
        quantidade,
    } = props;

    const [modoDeEdicao, setModoDeEdicao] = useState(false);

    const dispatch = useDispatch();
    const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id));

    function resolverFavorito() {
        dispatch(mudarFavorito(id));
    }

    function resolverCarrinho() {
        dispatch(mudarCarrinho(id));
    }

    return (
        <>
        <div className={styles.espaco}></div>
        <div className={styles.produto}>
            <div className={styles.produto_imagem_container}>
                <img className={styles.produto_imagem} src={foto} alt={titulo} />
            </div>
            <div className={styles.produto_descricao}>
                <div className={styles.produto_titulo}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles.produto_informacoes}>
                    <div className={styles.produto_preco}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles.produto_acao}>
                        {favorito
                            ? <BsHandThumbsUpFill {...iconeProps} color='#1b2ab8' className={styles['produto-acao']} onClick={resolverFavorito} />
                            : <BsHandThumbsUp {...iconeProps}  className={styles['produto-acao']} onClick={resolverFavorito} />
                        }
                        {carrinho
                            ? (
                                <div className={styles.quantidade}>
                                    Quantidade:
                                    <AiFillMinusCircle
                                        {...quantidadeProps}
                                        onClick={() => {
                                            if (quantidade >= 1) {
                                                dispatch(mudarQuantidade({ id, quantidade: -1 }));
                                            }
                                        }}
                                    />
                                    <span>{String(quantidade || 0).padStart(2, '0')}</span>
                                    <AiFillPlusCircle
                                        {...quantidadeProps}
                                        onClick={() => dispatch(mudarQuantidade({ id, quantidade: +1 }))}
                                    />
                                </div>
                            )
                            : (<BsCartPlus
                                {...iconeProps}
                                color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                                className={styles['produto-acao']}
                                onClick={resolverCarrinho}
                            />)
                        }
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Produto
