import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Template from './Componentes/Template';
import Categoria from './Paginas/Categoria';
import Carrinho from './Paginas/Carrinho';
import Anuncio from './Paginas/Anuncio';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Template/>}>
                    <Route index element={<Inicio />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria/>} />
                    <Route path='carrinho' element={<Carrinho/>} />
                    <Route path='anuncio' element={<Anuncio />} />
                    <Route path='anuncio/:nomeCategoria' element={<Anuncio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
