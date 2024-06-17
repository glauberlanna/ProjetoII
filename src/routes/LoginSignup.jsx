import React from 'react';
import Navegacao from '../components/Navegacao';
import "../styles/LoginSignup.css";
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import user_icon from '../assets/person.png';

const LoginSignup = () => {

    const [action, setAction] = React.useState("Sign up");

    return (
        <div>
            <Navegacao />

    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action==="Sign Up"?<div></div>:<div className="forgot-password">Esqueci minha senha. <span>Clique Aqui!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Criar Conta</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} >Entrar</div>
      </div>
    </div>
        </div>
    )
}

export default LoginSignup