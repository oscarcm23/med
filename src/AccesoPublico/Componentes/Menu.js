
import React, { useState } from 'react';
import "../css/MenuPublico.css"
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';


const cookies = new Cookies();

function Menu() {
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


          <div className="menu1">
               <nav className='navbar2'   id="menu" >
                        <li className='nav-item1 cot2'>
                            <Link to='/login' className='nav-links2' onClick={closeMobileMenu}>
                            <p>Iniciar Sesión</p>
                            </Link>
                        </li>           
                </nav>
         </div>
         );
   }

export default Menu;
