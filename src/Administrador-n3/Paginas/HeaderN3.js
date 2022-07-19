
import React, { useState } from 'react';
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
import logo from '../../images/letras.png';
import { Icon } from '@iconify/react';


const cookies = new Cookies();

function HeaderN3() {
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
    <div className="header">
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
                                <p>Usuarios</p>
                            </Link>


                       {/*      <ul  id="menu">
                                   <li   className="sub-menu">  <a href="">Campañas</a></li>
                                   <li   className="sub-menu">  <a href="">Congresos </a></li>
                           </ul>  

 */}


                        </li>
                        <li className='nav-item1'>
                            <Link to='/usuarios' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Citas</p>

                            </Link>

{/* 
                            <ul  id="menu">
                                   <li   className="sub-menu">  <a href="/quienes-somos">¿Quienes Somos?</a></li>
                                   <li   className="sub-menu">  <a href="/mision-vision">Misión y Visión </a></li>     
                                   <li   className="sub-menu">  <a href="">Valores  </a></li>
                                   <li   className="sub-menu">  <a href="">Contacto  </a></li>
                           </ul>   */}

                            
                        </li>



                        <li className='nav-item1'>
                            <Link to='/usuarios' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Urgencias</p>

                            </Link>
                            
                        </li>

                        <li className='nav-item1'>
                            <Link to='/usuarios' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Programas</p>

                            </Link>
                            
                        </li>


                    
                        <li className='nav-item1 icono '>
                            <Link to='/' className='nav-links1 icono' onClick={closeMobileMenu}>
                            <p>

                                
                          <span><Icon icon="clarity:bell-solid" /> </span> 
                       
                            </p>
                            </Link>
                        </li>


                        <li className='nav-item1 icono '>
                            <Link to='/' className='nav-links1 icono' onClick={closeMobileMenu}>
                            <p>
                          <span>   <Icon icon="carbon:user-avatar" /></span>
                         
                            </p>
                            </Link>
                        </li>

{/* 
                        <li className='nav-item1 '>
                            <Link to='/login' className='nav-links1 cot' onClick={closeMobileMenu}>
                            <p>Programas</p>
                            </Link>
                        </li>
 */}


                      {/*   <li className='nav-item1 cot1'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            <p>Login</p>
                            </Link>
                        </li>
 */}
          
                    </ul>

                </nav>
             
             
    
    </div>
  );
}

export default HeaderN3;
