import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navegaStyle.css'

const Navegacao = () => {
    return (
            <div className="navegacao">
                <div className="botao">PERFIL</div>
                <div className="botao"><Link to='/PainelNovo' >NOVO</Link></div>
                <div className="botao">ATUALIZAR</div>
                <div className="botao">EXCLUIR</div>
            </div>
    )
}

export default Navegacao
