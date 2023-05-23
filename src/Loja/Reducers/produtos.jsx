import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import notebookDell from '../../assets/produtos/dell-notebook.jpg';  
import notebooklAsus from '../../assets/produtos/asus-notebook.jpg';
import notebookHP from '../../assets/produtos/hp-notebook.jpg';
import notebookAcer from '../../assets/produtos/acer-notebook.jpg';
import notebookSamsung from '../../assets/produtos/samsung-notebook.jpg';
import tabletApple from '../../assets/produtos/apple-tablet.jpg';
import tabletSamsung from '../../assets/produtos/samsung-tablet.jpg';
import tabletVaio from '../../assets/produtos/vaio-tablet.jpg';
import smartphoneApple from '../../assets/produtos/apple-smartphone.jpg'; 
import smartphoneMotorola from '../../assets/produtos/motorola-smartphone.jpg';
import smartphoneSamsung from '../../assets/produtos/samsung-smartphone.jpg';
import smartphoneSamsung2 from '../../assets/produtos/samsung-smartphone2.jpg';
import smartphoneAsus from '../../assets/produtos/asus-smartphone.jpg';


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
  titulo: 'Notebook Acer',
  descricao: 'Notebook Acer ...',
  foto: notebookAcer,
  favorito: false,
  preco: 4500,
  id: uuid(),
  categoria: 'notebook'
},{
  titulo: 'Notebook Samsung',
  descricao: 'Notebook Samsung ...',
  foto: notebookSamsung,
  favorito: false,
  preco: 3500,
  id: uuid(),
  categoria: 'notebook'
},{
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
},{
  titulo: 'Galaxy S23',
  descricao: 'Galaxy S23 ...',
  foto: smartphoneSamsung2,
  favorito: false,
  preco: 4300,
  id: uuid(),
  categoria: 'smartphone'
},{
  titulo: 'Zenphone',
  descricao: 'Zenphone ...',
  foto: smartphoneAsus,
  favorito: false,
  preco: 4100,
  id: uuid(),
  categoria: 'smartphone'
}];

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(produto => {
        if(produto.id === payload) produto.favorito = !produto.favorito;
        return produto;
      })
    }
  }
});

export const { mudarFavorito } = produtosSlice.actions;

export default produtosSlice.reducer;