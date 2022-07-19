import React from 'react'
import { useState } from 'react';
import { Table } from 'react-super-responsive-table';
import { Icon } from '@iconify/react';
import "../../css/MenuLateral2.css"
import MenuContenidoCitas from './MenuContenidoCitas'

import Clinicas from '../Clinicas/AdministrarClinicas';


function MenuCitas() {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  return (
    <div>

      <div className='main'>
        <nav className="main-menu">

          <Table >
            {/*========================== Titulos Tabla ==========================*/}
            <thead>
              <tr>



              </tr>
            </thead>
            <tbody>
              <tr className='container-buttons-menu'>
                <td className='menuLateral-td'>

                  <button
                    className="menuLateral-button"
                    type="button"
                    onClick={() => {
                      setShow(!show);
                      setShow2(true);
                      setShow3(true);
                    }}
                  >
                    <ul>
                      <li>
                        <a href="/administrarCitas">
                          <i class="bi bi-calendar-plus"></i>
                          <span className="nav-text">Registrar </span>
                        </a>

                      </li>
                    </ul>


                    {/*
                              {" "}
                              {show ?  <Icon icon="emojione-monotone:hospital"  width={"40px"}/>: <Icon icon="emojione:hospital" width={"50px"} />  }{" "}  */}


                  </button>





                  {show ? (
                    <div></div>
                  ) : (
                    <div className="personal">
                      {/* <MenuContenidoCitas /> */}

                    </div>
                  )}
                </td>


                <td className='menuLateral-td'>

                  <button
                    className="menuLateral-button"
                    type="button"
                    onClick={() => {
                      setShow(!show);
                      setShow2(true);
                      setShow3(true);
                    }}
                  >
                    <ul>
                      <li>
                        <a href='#'>
                          <i class="bi bi-calendar-week"></i>
                          <span className="nav-text">Administrar </span>
                        </a>
                      </li>
                    </ul>


                    {/*
                     {" "}
                     {show ?  <Icon icon="emojione-monotone:hospital"  width={"40px"}/>: <Icon icon="emojione:hospital" width={"50px"} />  }{" "}  */}


                  </button>





                  {show ? (
                    <div></div>
                  ) : (
                    <div className="personal">


                    </div>
                  )}
                </td>





              </tr>
            </tbody>
          </Table>
        </nav>
      </div>


    </div>
  )
}

export default MenuCitas