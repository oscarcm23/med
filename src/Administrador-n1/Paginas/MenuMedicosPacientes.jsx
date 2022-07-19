import React, { useState } from 'react'
import { Icon } from '@iconify/react';

function MenuMedicosPacientes() {
  const [show, setShow] = useState(true);


  return (
    <div className="wrapper">
      {/* Sidebar  */}
      <nav id="sidebar">
        <div className="sidebar-header">
         <h3>Medcur</h3>
          <strong>MC</strong>

 

          <nav className="">
          <div className="container-fluid">
            {/*         <button type="button" id="sidebarCollapse" className="btn btn-info">
        <i class="fas fa-arrow-left"></i>
          <span></span>
        </button> */}

            <button
              id="sidebarCollapse"
              className="btn"
              type="button"
              onClick={() => {
                setShow(!show);
              }}
            >
              {" "}
              {show ? <Icon icon="akar-icons:arrow-left" color="white" width="20" /> : <Icon icon="akar-icons:arrow-right" color="white" width="20" />}{" "}

              <span></span>
            </button>
            {show ? (
              <div></div>
            ) : (
              <div >



              </div>
            )}






            {/* 
        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-align-justify" />
        </button> */}
            {/*         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
          </ul>
        </div> */}
          </div>
        </nav>

        </div>


        <ul className="list-unstyled components">


          <li>
            <a href="/">
              <i className="fas fa-briefcase" />
              Inicio
            </a>
            <a href="#consultas" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
              <i className="fas fa-users"></i>
             Consultas
            </a>
            <ul className="collapse list-unstyled" id="consultas">
              <li>
                <a href="/">Registrar</a>
              </li>
              <li>
                <a href="/">Administrar</a>
              </li>
              <li>
                <a href="/">Reportes</a>
              </li>
            </ul>
          </li>






          <li>
            <a href="#urgencias" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
              <i className="fas fa-exclamation-circle" />
              Urgencias
            </a>
            <ul className="collapse list-unstyled" id="urgencias">
              <li>
                <a href="/">Registrar</a>
              </li>
              <li>
                <a href="/">Administrar</a>
              </li>
              <li>
                <a href="/">Reportes</a>
              </li>
            </ul>
          </li>





          <li  >
            <a href="#">
              <i className="fas fa-hospital-user" />
              Mi Perfil
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-bell" />
              Notificaciones
            </a>
          </li>

          <li className="active">
            <a href="#">
              <i className="fas fa-times" />
              Salir
            </a>
          </li>
        </ul>

      </nav>
      {/* Page Content  */}
      <div id="content">





      </div>
    </div>

  )
}

export default MenuMedicosPacientes