import React from 'react'
import { useState } from 'react';
import "../css/MenuContenido.css"
import { Icon } from '@iconify/react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Personal from '../Usuarios/Registrar/RegistrarPersonal';
import Clinicas from './Clinicas/AdministrarClinicas'
import { responsive } from './MenuAdministradores';


function AdministrarMenuContenido() {
      /*========================== Mostrar/Ocultar =========================*/
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  return (
    <div id="expand">


      <div  className='titulo'>
      <h2>Usuarios</h2>
      </div>

        <div  className=''>

    <Table >
      {/*========================== Titulos Tabla ==========================*/}
      <thead>
        <tr >
          <th  className='ocultar' > Clinicas</th>
          <th className='ocultar'> Personal</th>
          <th className='ocultar'> Pacientes</th>
        </tr>
      </thead>
      <tbody>
        <tr >
        <td>
              <button
                className="sn-boton"
                type="button"
                onClick={() => {
                  setShow(!show);
                  setShow2(true);                 
                  setShow3(true);
                }}
              >
  Clinicas
                {" "}
                {show ?<Icon icon="emojione-monotone:hospital"  width={"20px"}/>: <Icon icon="emojione:hospital" width={"20px"} />  }{" "}


              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="personal">
                  <Clinicas />

                </div>
              )}
            </td>



            <td>
              <button
                className="sn-boton"
                type="button"
                onClick={() => {
                  setShow2(!show2);
                  setShow(true);
                  setShow3(true);
                }}
              >

Personal
                {" "}
                {show2 ? <Icon icon="fa6-solid:user-doctor" width={"20px"}  /> : <Icon icon="fa6-solid:user-doctor"  color='orange'  width={"20px"} />  }{" "}
              </button>
              {show2 ? (
                <div></div>
              ) : (
                <div className="personal">
 
                  {/*========================== Llamado al Componente ==========================*/}
                       
              {/*     <Personal /> */}
                </div>
              )}
            </td>

    
            <td>
              <button
                className="sn-boton"
                type="button"
                onClick={() => {
                  setShow3(!show3);
                  setShow2(true);
                  setShow(true);
                }}
              >

             Pacientes
                {" "}
                {show3 ? <Icon icon="ri:health-book-fill"   width={"20px"} /> :  <Icon icon="icon-park:health"  width={"20px"}/>           }{" "}
              </button>
              {show3 ? (
                <div></div>
              ) : (
                <div className="personal">
 
                  {/*========================== Llamado al Componente ==========================*/}
                       
             

             {/*      <Personal />

 */}
                </div>
              )}
            </td>
        </tr>
      </tbody>
    </Table>


    </div>
  </div>
  )
}

export default AdministrarMenuContenido