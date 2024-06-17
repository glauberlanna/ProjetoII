import React from 'react'
import NavegacaoLogado from '../components/NavegacaoLogado';
import CategoriasLogado from '../routes/CategoriasLogado';
import Anuncios from '../components/Anuncios'

const UsuarioLogado = () => {


    return (
        <div>
            <NavegacaoLogado />
            <h1>USUARIO LOGADO</h1>
            <Anuncios />
      
        </div>
    )
}

export default UsuarioLogado
