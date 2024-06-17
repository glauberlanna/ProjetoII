import React from 'react';
import Navegacao from '../components/Navegacao';
import { Link } from 'react-router-dom';
import "../styles/conteudo.css";
import "../styles/cadastro.css";
import "../styles/Login.css";


const Login = () => {

    return (
        <div className="conteudo">

            <Navegacao />

            <div class="cadastro">
                <h2>LOGIN</h2>

                <p>E-mail.</p>
                <input type="email" id="login" />

                <p>Senha.</p>
                <input type="password" id="senha" />

                <div className="cadastrar"><Link to='/UsuarioLogado' >Entrar</Link></div>
                <br/>
                
                <a href="" class="esqueciSenha">Esqueci minha senha</a>

            </div>
            
        </div>
    )
}

export default Login;
