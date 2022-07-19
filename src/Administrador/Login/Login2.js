import logoLogin from "../../images/logo-login.svg"
import personalMedico from "../../images/personal-medico.png"
import "./css/Login.css"
import { Icon } from '@iconify/react';

function Login() {
    return(
        <div className="container-page">
            <div className="container-login">

                <div className="login-left">
                    <div className="">
                        <img className="img-logIn" src={logoLogin} alt="Medcur"></img>
                        
                    </div>
                    <div>
                        <img  className="img-logIn personal-medico" src={personalMedico} alt="Personal Medico"></img>
                    </div>
                </div>
                <div  className="login-right">
                    <h1 className="title-login">Bienvenido</h1>
                    <div className="input-icons">
                        <Icon icon="bi:person" color="#d1e9ff" width="40" className="icon"/>
                        <input className="input-login" placeholder="Usuario" ></input>
                    </div>
                    <div className="input-icons">
                        <Icon icon="uil:padlock" color="#d1e9ff" width="40" className="icon" />
                        <input className="input-login" placeholder="Contraseña"></input>
                    </div>

                    <button className="button-login">Ingresar</button>

                </div>



            </div>
        </div>
    )


}


export default Login