import { createSlice } from '@reduxjs/toolkit';
import notebookThumb from '../../assets/produtos/categorias/Notebook-thumb.jpg';
import tabletThumb from '../../assets/produtos/categorias/Tablet-thumb.jpg';
import smartphoneThumb from '../../assets/produtos/categorias/Smartphone-thumb.jpg';
import televisaoThumb from '../../assets/produtos/categorias/Televisao-thumb.jpg';

const initialState = [{
    nome: 'Notebook',
    thumbnail: notebookThumb,
    header: notebookThumb,
    id: 'notebook',
    descricao: 'Encontre os notebooks mais modernos'
  }, {
    nome: 'Tablet',
    thumbnail: tabletThumb,
    header: tabletThumb,
    id: 'tablet',
    descricao: 'Os melhores tablets do mercado'
  }, {
    nome: 'Smartphone',
    thumbnail: smartphoneThumb,
    header: smartphoneThumb,
    id: 'smartphone',
    descricao: 'Novidades em celulares por aqui'
  },
  {
    nome: 'Televisão',
    thumbnail: televisaoThumb,
    header: televisaoThumb,
    id: 'televisao',
    descricao: 'As Tvs mais interativas você encontra aqui'
  }];
  
  const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
  });
  
  export default categoriasSlice.reducer;