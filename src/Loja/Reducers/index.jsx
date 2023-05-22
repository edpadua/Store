import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from "./categorias"
import itensSlice from './produtos';
import carrinhoSlice from './carrinho';
import buscaSlice from './busca';

const loja = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
  }
});

export default loja;