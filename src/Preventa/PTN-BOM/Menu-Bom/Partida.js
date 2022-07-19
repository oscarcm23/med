import React, { useEffect, useState } from "react";
import { InsertDatosPartida, pId } from "../Routes/GuardarPartida";
import Table from "react-bootstrap/Table";
import ModalPtnDatos from "../Routes/ModalPtnDatos";
import axios from 'axios';
import { pId2 } from "./NuevoProyecto";

let id;
function Partida({clave} ) {
  const { handleInputChangePartida, enviarDatosPartida } = InsertDatosPartida();

  const [modalShow, setModalShow] = useState(false);

  const [modalShow1, setModalShow1] = useState(true)
  const [proyecto_id, Setproyecto_id] = useState([])
  const lista = async (clave) =>{
    console.log(id);
    try {
      const respuesta = await axios.get(`http://localhost:4001/api/cotizador/proyecto/viewModal/${clave}`);
      Setproyecto_id(respuesta.data.reSql)
    
      
    } catch (error) {
      console.log(error)
      
    }
  }
  
  if(pId2 !== ''){
    id = pId2;
  } else{
    id = pId;
  }
  

  return (
    <div className="contenido-usuarios">
      {/*========================== Nombre Partida ==========================*/}

      <form action="" method="post" onSubmit={enviarDatosPartida}>
        <Table responsive id="nombreDiv">
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>Nombre Partida</th>
              <th>Descripción </th>         
              <th> Partidas Agregadas</th>
              <th> Agregar Datos</th>
            </tr>
          </thead>

          <tbody>
            <tr className="">
              {/*=======================  Nombre Partida ======================= */}
              <td>
                <input
                  className="agregar"
                  type="text"
                  name="partida_nombre"
                  onChange={handleInputChangePartida}
                  placeholder="Ingrese Nombre Partida"
                />
              </td>

              
              {/*=======================  DescripciónPartida ======================= */}
              <td>
                <input
                  className="agregar"
                  type="text"
                  name="partida_descripcion"
                  onChange={handleInputChangePartida}
                  placeholder="ingrese Descripción Partida"
                />
              </td>



              <td width={"100px"}>


      <button type="button" className="btn btn-primary Ver" onClick={() => {setModalShow(true);lista (id)}} >
        <i class="bi bi-eye-fill"></i>
        </button><br/><br/>
      {modalShow && modalShow1 ?   
      <ModalPtnDatos
      show={modalShow}
      proyecto_id={proyecto_id}
      onHide={() => setModalShow(false)}  
     
      />
         :  ''  } 
              </td>
              <td width={"100px"}>
                <button className="btn btn-primary Mod">
                <i class="bi bi-send"></i>
                </button>
              </td>
              {/*========================== Botón Agregar Partidas ==========================*/}
            </tr>
          </tbody>
        </Table>
        </form>
    </div>
  );
}

export default Partida;
