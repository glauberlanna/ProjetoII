import React from 'react';
import Navegacao from '../components/Navegacao';
import "../styles/conteudo.css";
import "../styles/cadastro.css";
import "../styles/Login.css";


const Criarconta = () => {
    return (
        <div className="conteudo" >

            <Navegacao />
            <div class="cadastro">
                <h2>Cadastro</h2>
                <p>Digite seu nome.</p>
                <input type="text" />
                <p>Digite seu e-mail.</p>
                <input type="email" />
                <p>Crie sua senha.</p>
                <input type="password" />
                <input type="submit" value="Cadastrar" class="cadastrar" onclick="registrar(); return false" />
            </div>

        </div>
    )
}

export default Criarconta;
