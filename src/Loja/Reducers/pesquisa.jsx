import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState,
  reducers: {
    mudarPesquisa: (state, { payload }) => payload,
    resetarPesquisa: () => initialState,
  }
});

export const { mudarPesquisa, resetarPesquisa } = pesquisaSlice.actions;

export default pesquisaSlice.reducer;