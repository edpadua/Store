import React from 'react'

import Produto from '../../Componentes/Produto';


import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Categoria.module.sass';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cabecalho from '../../Componentes/Cabecalho';

import Button from '../../Componentes/Button';

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


function Categoria() {
  const navigate = useNavigate();
 
  const { nomeCategoria } = useParams();
  const { categoria, produtos } = useSelector(state => {
    const regexp = new RegExp(state.pesquisa, 'i');
    return {
      categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
      produtos: state.produtos.filter(produto => produto.categoria === nomeCategoria && produto.titulo.match(regexp))
    }
  });

  return (
    <>
      <Cabecalho titulo={nomeCategoria} />
      <Button onClick={() => navigate(`/anuncio/${nomeCategoria}`)}>
        Quero anunciar
      </Button>
      <div className={styles.itens}>
        <Carousel responsive={responsive} infinite={true}>
          {produtos?.map(produto => (
            <Produto key={produto.id} {...produto} />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Categoria

