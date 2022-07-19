
import React, { useState } from 'react';
import "../css/MenuPublico.css"
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
import logo from '../../images/logo_letras_horizontal.png';
import { Icon } from '@iconify/react';


const cookies = new Cookies();

function MenuPublico() {
  const cierreSesion = () => {
    cookies.remove("id_usuario", { path: "/" });
    cookies.remove("rol", { path: "/" });
    cookies.remove('estado_login',{path:"/"});
    window.location.href = "../Login.js";
  };




  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <div className="">
      {/*======================== Menú ==========================*/}

      <nav className='navbar1'   id="menu" >
                    {/**************Logo*****************/}
                    <Link to='#' className='navbar-logo1' onClick={closeMobileMenu}>
                        <img src={logo} alt="delfos369"></img>
                    </Link>
                    {/**************Menu Navegacion*****************/}
                    <div className='menu-icon1' onClick={handleClick}>
                    <Icon  className = "list" icon={click ? 'ep:close-bold' : 'charm:menu-hamburger'} />

                    </div>
                    <ul className={click ? 'nav-menu1 active' : 'nav-menu1'}>
                      
                        <li className='nav-item1'>
                            <Link to='/' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Inicio</p>
                            </Link>


                            <ul  id="menu">
                                   <li   className="sub-menu">  <a href="">Campañas</a></li>
                                   <li   className="sub-menu">  <a href="">Congresos </a></li>
                           </ul>  




                        </li>
                        <li className='nav-item1'>
                            <Link to='/nosotros' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Acerca de Nosotros</p>
                            </Link>


                            <ul  id="menu">
                                   <li   className="sub-menu">  <a href="/quienes-somos">¿Quienes Somos?</a></li>
                                   <li   className="sub-menu">  <a href="/mision-vision">Misión y Visión </a></li>     
                                   <li   className="sub-menu">  <a href="">Valores  </a></li>
                                   <li   className="sub-menu">  <a href="">Contacto  </a></li>
                           </ul>  

                            
                        </li>
                        <li className='nav-item1'>
                            <Link to='/servicios' className='nav-links1' onClick={closeMobileMenu}  >
                                <p>Servicios</p>
                            </Link>
                        </li>
                  
                     
                        <li className='nav-item1 '>
                            <Link to='/login' className='nav-links1 cot' onClick={closeMobileMenu}>
                            <p>Iniciar Sesión</p>
                            </Link>
                        </li> 
                    </ul>

                </nav>
    </div>
  );
}

export default MenuPublico;
