import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import produtosService from '../../services/produtos'; 



export const buscarProdutos = createAsyncThunk(
  'produtos/buscar',
  produtosService.buscar
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(produto => {
        if(produto.id === payload) produto.favorito = !produto.favorito;
        return produto;
      })
    },
    cadastrarProduto: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarProduto: (state, { payload }) => {
      const index = state.findIndex(produto => produto.id === payload.id);
      Object.assign(state[index], payload.produto);
    },
    deletarProduto: (state, { payload }) => {
      const index = state.findIndex(produto => produto.id === payload);
      state.splice(index, 1);
    },

  },
  extraReducers: builder => {
    builder
    .addCase(
      buscarProdutos.fulfilled,
      (state, { payload }) => {
        console.log('produtos carregados!');
        return payload;
      }
    )
    .addCase(
      buscarProdutos.pending,
      (state, { payload }) => {
        console.log('carregando produtos');
      }
    )
    .addCase(
      buscarProdutos.rejected,
      (state, { payload }) => {
        console.log('busca de produtos rejeitada!');
      }
    )
  }
});

export const { mudarFavorito, cadastrarProduto, mudarProduto, deletarProduto } = produtosSlice.actions;

export default produtosSlice.reducer;