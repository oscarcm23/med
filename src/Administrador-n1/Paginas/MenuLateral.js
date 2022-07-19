import React from "react";
import "../css/MenuLateral.css"
import Cookies from "universal-cookie";
const cookies = new Cookies();

function archivo() {
  const cierreSesion = () => {
    cookies.remove("id_usuario", { path: "/" });
    cookies.remove("rol", { path: "/" });
    cookies.remove('estado_login',{path:"/"});
    window.location.href = "../Login.js";
  };

  return (
    <div className="contenedor">
      {/*======================== Menú ==========================*/}
      <nav className="main-menu">
        <ul>
         {/*  <div className="administrador-user">
            <li>
              <i className="bi bi-person-circle fa-2x"></i>
              <span className="nav-text">Usuarios</span>
            </li>
          </div> */}

          <li>
            <a href="/registrar">
              <i className="bi bi-person-plus"></i>
              <span className="nav-text">Registrar </span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/administrar">
              <i className="bi bi-people"></i>
              <span className="nav-text">Administrar</span>
            </a>
          </li>

  
        </ul>
      </nav>
    </div>
  );
}

export default archivo;