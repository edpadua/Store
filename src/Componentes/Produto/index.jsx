import React from 'react'

import styles from "./Produto.module.sass";

import { deletarProduto, mudarProduto, mudarFavorito } from "../../Loja/Reducers/produtos";
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from '../../Loja/Reducers/carrinho';
import classNames from 'classnames';

import { useState } from 'react';

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsHandThumbsUpFill, BsHandThumbsUp, BsCheck } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

import { BsCartPlus } from 'react-icons/bs';

import { CgCloseR } from 'react-icons/cg';

import Cabecalho from '../Cabecalho';

import Input from '../Input';

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

    const [novoTitulo, setNovoTitulo] = useState(titulo);


    const dispatch = useDispatch();
    const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id));

    const componenteModoDeEdicao = <>

        {modoDeEdicao
            ? <BsCheck {...iconeProps}
                className={styles['item-acao']}
                onClick={() => {
                    setModoDeEdicao(false);
                    dispatch(mudarProduto({
                        id,
                        produto: { titulo: novoTitulo }
                    }));
                }} />
            : <BiEdit  {...iconeProps} onClick={() => setModoDeEdicao(true)} />
        }
    </>

    function resolverFavorito() {
        dispatch(mudarFavorito(id));
    }

    function resolverCarrinho() {
        dispatch(mudarCarrinho(id));
    }

    return (
        <>
            <div className={styles.espaco}></div>
            <div className={classNames(styles.produto, {
                [styles.produtoNoCarrinho]: carrinho,
            })}>
                <div >
                    <div className={styles.produto_imagem_container}>
                        <img className={styles.produto_imagem} src={foto} alt={titulo} />
                    </div>
                    <CgCloseR   {...iconeProps}
                        className={`${styles['produto-acao']} ${styles['produto-deletar']}`}
                        onClick={() => dispatch(deletarProduto(id))}
                    />
                    <div className={styles.produto_descricao}>
                        <div className={styles.produto_titulo}>
                            {modoDeEdicao
                                ? <Input
                                    value={novoTitulo}
                                    onChange={evento => setNovoTitulo(evento.target.value)}
                                />
                                : <h2>{titulo}</h2>
                            }
                            <p>{descricao}</p>
                        </div>
                        <div className={styles.produto_informacoes}>
                            <div className={styles.produto_preco}>
                                R$ {preco.toFixed(2)}
                            </div>
                            <div className={styles.produto_acao}>
                                {favorito
                                    ? <BsHandThumbsUpFill {...iconeProps} color='#1b2ab8' className={styles['produto-acao']} onClick={resolverFavorito} />
                                    : <BsHandThumbsUp {...iconeProps} className={styles['produto-acao']} onClick={resolverFavorito} />
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
                                    : (
                                        <>
                                            <BsCartPlus
                                                {...iconeProps}
                                                color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                                                className={styles['produto-acao']}
                                                onClick={resolverCarrinho}
                                            />
                                            {componenteModoDeEdicao}
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Produto
