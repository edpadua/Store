import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from "./categorias"
import produtosSlice from './produtos';
import carrinhoSlice from './carrinho';
import pesquisaSlice from './pesquisa';

const loja = configureStore({
  reducer: {
    categorias: categoriasSlice,
    produtos: produtosSlice,
    carrinho: carrinhoSlice,
    pesquisa: pesquisaSlice,
  }
});

export default loja;