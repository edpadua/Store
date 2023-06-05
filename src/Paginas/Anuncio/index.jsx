import React from 'react'

import { useDispatch, useSelector } from 'react-redux';

import styles from "./Anuncio.module.sass"

import Button from '../../Componentes/Button';

import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';

import Input from '../../Componentes/Input';

function Anuncio() {
    const dispatch = useDispatch();
    const { nomeCategoria = '' } = useParams();
    const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })));
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            categoria: nomeCategoria
        }
    });
    const { errors } = formState;

    function cadastrar(parametro) {
        console.log('parametro: ', parametro);


    }

    console.log(register('novoInput'))

    return (
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>

                <Input {...register('nome', { required: true })} placeholder='Digite o nome do produto' alt='nome do produto' />
                <Input {...register('nome', { required: true })} placeholder='Digite a descrição do produto' alt='descrição do produto' />
                <Input {...register('imagem', { required: true })} placeholder='Digite a URL da imagem do produto' alt='URL da imagem do produto' />
                <select>
                    {...register('categoria', { required: true })}
                    disabled={nomeCategoria}
                </select>
                <Input {...register('preco', { required: true })} type='number' placeholder='Digite o preço do produto' />
                <Button type='submit'>
                    Cadastrar produto
                </Button>
            </form>
        </div>
    )
}

export default Anuncio
