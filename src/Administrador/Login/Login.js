import React from 'react';
import '../../css/ventanas.css';
import {useLogin} from './Routes/useLogin';
import ReCAPTCHA from "react-google-recaptcha";
import {passwordCaptcha} from "../../Componentes/Ocultar";
export let valida =false;


/*  Funcion Captcha Validación Correcta */

function onChange(value) {
    console.log("Captcha value:", value);


    if(value != null){
      console.log("No eres un robot");
      valida= true;
    }else{
          console.log("No eres un robot");
          valida=false;
    }

  }

 


export function Login() {

  const {  
    handleInputChange,
    enviarDatos
  } = useLogin ();

  return (

           /* //============ Login ============ */
           

       <div className="pagina">

         
      <div className="scene flex">

        <section className="card-body">
          <form action="" method="post" id="form" className="card-form" onSubmit = {enviarDatos}>
           

           <div  className='login-titulo'>

  {/* //============Titulo ============ */}
  <h2> Login<span ></span></h2>
           </div>
         

           {/* //============ Correo ============ */}  

            <span htmlFor="user" className=" label"> 
            Email</span>
            <input id="email"
              type="email"
              name="email"
              className="card-input"
              onChange={handleInputChange}
              placeholder="Ingrese tu Correo" />

            {/* //============ Contraseña ============ */}

            <span htmlFor="password" className="label">
              Número de identificación DNI
              </span>   
            <input id="password"
              type="password"
              name="password"
              className="card-input"
              onChange={handleInputChange}
              data-type="password"
              placeholder="Ingrese tu DNI" />

          
             
            
            <div className="re-Captcha">
          
          {/*========== ReCAPTCHA Seguridad ==========*/}
        <ReCAPTCHA
           sitekey= {passwordCaptcha}
           onChange={onChange}
       
           /> 
         </div>


   {/* //============ Botón Entrar ============ */}

   

  
            <div className ="boton-login">
            <br></br>
            <button className="login" type="submit"   >    
              <span>Entrar</span>
            </button>
            </div>
          </form>
        </section>
      </div>


      <div>        
      </div>
   </div>




  )
}

export default Login