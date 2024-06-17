import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navegaStyle.css'

const NavegacaoLogado = () => {
    return (
            <div className="navegacao">
                <div className="botao"><Link to='/UsuarioLogado' >HOME</Link></div>
                <div className="botao"><Link to='/CategoriasLogado' >CATEGORIAS</Link></div>
                <div className="botao"><Link to='/PainelUsuario' >PAINEL</Link></div>
                <div className="botao"><Link to='/' >SAIR</Link></div>
            </div>
    )
}

export default NavegacaoLogado
