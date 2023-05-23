import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temProduto = state.some(produto => produto.id === payload);
      if (!temProduto) return [
        ...state,
        {
          id: payload,
          quantidade: 1
        }
      ];
      return state.filter(produto => produto.id !== payload);
    },
    mudarQuantidade: (state, { payload }) => {
      state = state.map(produtoNoCarrinho => {
        if(produtoNoCarrinho.id === payload.id) produtoNoCarrinho.quantidade += payload.quantidade;
        return produtoNoCarrinho;
      })
    },
    resetarCarrinho: () => initialState,
  }
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;