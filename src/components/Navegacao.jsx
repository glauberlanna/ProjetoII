import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navegaStyle.css'

const Navegacao = () => {
    return (
            <div className="navegacao">
                <div className="botao"><Link to='/' >HOME</Link></div>
                <div className="botao"><Link to='/Criarconta' >CRIAR CONTA</Link></div>
            </div>
    )
}

export default Navegacao
