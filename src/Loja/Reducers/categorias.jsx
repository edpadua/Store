
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from '../../services/categorias';
import { resetarCarrinho } from './carrinho';




const initialState = [];


export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
   categoriasService.buscar
);
  
const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(
      buscarCategorias.fulfilled,
      (state, { payload }) => {
        
        return payload;
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state, { payload }) => {
        
      }
    )
    .addCase(
      buscarCategorias.rejected,
      (state, { payload }) => {
       
      }
    )
    .addCase(
      resetarCarrinho.type,
      () => {
        
      }
    )
  }
});
  
  export default categoriasSlice.reducer;