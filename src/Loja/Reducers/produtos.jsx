import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import notebookDell from '../../assets/produtos/dell-notebook.jpg';  
import notebooklAsus from '../../assets/produtos/asus-notebook.jpg';
import notebookHP from '../../assets/produtos/hp-notebook.jpg';
import tabletApple from '../../assets/produtos/apple-tablet.jpg';
import tabletSamsung from '../../assets/produtos/samsung-tablet.jpg';
import tabletVaio from '../../assets/produtos/vaio-tablet.jpg';
import smartphoneApple from '../../assets/produtos/apple-smartphone.jpg'; 
import smartphoneMotorola from '../../assets/produtos/motorola-smartphone.jpg';
import smartphoneSamsung from '../../assets/produtos/samsung-smartphone.jpg';


const initialState = [{
  titulo: 'Notebook Dell',
  descricao: 'Notebook Dell ...',
  foto: notebookDell,
  favorito: false,
  preco: 4000,
  id: uuid(),
  categoria: 'notebook'
}, {
  titulo: 'Notebook ASUS',
  descricao: 'Notebook Asus ...',
  foto: notebooklAsus,
  favorito: false,
  preco: 2500,
  id: uuid(),
  categoria: 'notebook'
}, {
  titulo: 'Notebook HP',
  descricao: 'Notebook HP ...',
  foto: notebookHP,
  favorito: false,
  preco: 3000,
  id: uuid(),
  categoria: 'notebook'
}, {
  titulo: 'IPad Apple',
  descricao: 'IPad Apple ...',
  foto: tabletApple,
  favorito: false,
  preco: 10600,
  id: uuid(),
  categoria: 'tablet'
}, {
  titulo: 'Galaxy Tab',
  descricao: 'Galaxy Tab ...',
  foto: tabletSamsung,
  favorito: false,
  preco: 1500,
  id: uuid(),
  categoria: 'tablet'
}, {
  titulo: 'Tablet VAIO',
  descricao: 'Tablet VAIO ...',
  foto: tabletVaio,
  favorito: false,
  preco: 45.90,
  id: uuid(),
  categoria: 'tablet'
}, {
  titulo: 'IPhone 13',
  descricao: 'IPhone 13',
  foto: smartphoneApple,
  favorito: false,
  preco: 3000,
  id: uuid(),
  categoria: 'smartphone'
}, {
  titulo: 'Moto G22',
  descricao: 'Moto G22 ...',
  foto: smartphoneMotorola,
  favorito: false,
  preco: 2000,
  id: uuid(),
  categoria: 'smartphone'
}, {
  titulo: 'Galaxy A54',
  descricao: 'Galaxy A54 ...',
  foto: smartphoneSamsung,
  favorito: false,
  preco: 2900,
  id: uuid(),
  categoria: 'smartphone'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;