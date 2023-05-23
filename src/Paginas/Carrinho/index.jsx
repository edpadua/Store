import React from 'react'

import styles from './Carrinho.module.sass';

import { useSelector, useDispatch } from 'react-redux';
import Produto from '../../Componentes/Produto';
import { resetarCarrinho } from "../../Loja/Reducers/carrinho";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Carrinho() {

  const dispatch = useDispatch();
  const { carrinho, total } = useSelector(state => {
    let total = 0;
    const regexp = new RegExp(state.busca, 'i');
    const carrinhoReduce = state.carrinho.reduce((produtos, produtoNoCarrinho) => {
      const produto = state.produtos.find(produto => produto.id === produtoNoCarrinho.id);
      total += (produto.preco * produtoNoCarrinho.quantidade);
      if (produto.titulo.match(regexp)) {
        produtos.push({
          ...produto,
          quantidade: produtoNoCarrinho.quantidade,
        });
      }
      return produtos;
    }, []);
    return {
      carrinho: carrinhoReduce,
      total,
    };
  });

  return (
    <div className={styles.carrinho}>
      <div className={styles.carrinho_produtos}>
        
        {carrinho?.map(produto => <Produto key={produto.id} {...produto} carrinho  />)}

      </div>
      <div className={styles.total}>
        <strong>
          Resumo da compra
        </strong>
        <span>
          Subtotal: <strong> R$ {total.toFixed(2)} </strong>
        </span>
      </div>
      <button
        className={styles.botao_finalizar}
        onClick={() => dispatch(resetarCarrinho())}
      >
        Finalizar compra
      </button>
    </div>
  )
}

export default Carrinho
