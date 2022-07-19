import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import Cookies from 'universal-cookie';

//Componentes
import Animaciones from "../../../Componentes/Animaciones";
import "../css/PTN_BOM.css";
import DatosPTN from "../Menu-Bom/DatosPTN";
import { url, url2 } from "../../../Componentes/Ocultar";


//Obtención del id del usuario con sesión activa
const cookies = new Cookies();
export let validatorid = cookies.get('id_usuario');

//Obtención de la fecha
const tiempoTranscurrido = Date.now();
export const hoy = new Date(tiempoTranscurrido);

export let pId2;
export function getIdP2 (proyecto_id){
  pId2 = proyecto_id;
  //console.log('Ultimo proyecto creado:',pId1);
}

function NuevoProyecto() {

  /*========================== Mostrar Ocultar Tabla ==========================*/
  const [show, setShow] = useState(true);

  

  const getProyectos = async () => {
    try{
      const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
      let proy = resProy.data.data.pop(); 
      getIdP2(proy.proyecto_id);
    }catch(error){console.log(error);}
  }

  useEffect(()=>{
    getProyectos();
  },[])



  /*=================================== Buscador de clientes ===================================*/
  // Almacenamiento de los clientes existentes
  const [ListaC, setListaC] = useState([]);

  // Almacenamiento del id cliente encontrado en la busqueda
  var clienteId = { proyecto_id_cliente: '' }

  // Almacenamiento del nombre del cliente a buscar
  const [nombreC, setNombreC] = useState('');

  // Almacenamiento de los clientes semejantes al texto introducido en el input
  const [suggestions, setSuggestions] = useState([]);

  const [clavep, setclavep] = useState([])
  // Función que realiza la consulta a la tabla clientes
  useEffect(() => {
    async function listaClientes() {
      try {
        const respuesta = await axios.get(url + "/api/cotizador/clientes/view");
        setListaC(respuesta.data.reSql);
      } catch (error) { }
    }
    listaClientes();
  }, [])

  // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
  const onChangeTextCliente = (nombreC) => {
    let coincidencias = [];
    if (nombreC.length > 0) {
      coincidencias = ListaC.filter(cliente => {
        const regex = new RegExp(`${nombreC}`, "gi");
        return cliente.nombre_cliente.match(regex)
      })
    }
    setSuggestions(coincidencias);
    setNombreC(nombreC);
  }

  // Función que obtiene el nombre del cliente seleccionado
  const onSuggestHandler = (nombreC) => {
    setNombreC(nombreC);
    setSuggestions([]);
  }
  /*============================================================================================*/

  /*=================================== Obtención de datos para la tabla proyecto ===================================*/
  // Almacenamiento de los datos
  const [datos, setDatos] = useState([{
    proyecto_clave: '',
    proyecto_descripcion: '',
    proyecto_plazo_meses: ''
  }]);

  // Obtención de los datos introducidos en los input
  const handleInputChange = (event) => {
    setDatos({
      ...datos, [event.target.name]: event.target.value,
    })
  }


  

  // Función que realiza la inserción del proyecto
  async function Send() {
    //console.log(hoy);
    // Obtención del id del cliente que se seleccionó en la búsqueda
    let i = Object.keys(ListaC);
    for (let c = 0; c < i.length; c++) {
      if (nombreC === ListaC[c].nombre_cliente) {
        clienteId.proyecto_id_cliente = ListaC[c].cliente_id
        //console.log(clienteId);
      }
    }

    const data = {
      proyecto_clave: datos.proyecto_clave,
      proyecto_descripcion: datos.proyecto_descripcion,
      proyecto_id_cliente: clienteId.proyecto_id_cliente,
      proyecto_fecha_creacion: hoy,
      proyecto_fecha_modificacion: hoy,
      proyecto_plazo_meses: datos.proyecto_plazo_meses
    };

    try {
      /*=================================== Inserción de proyecto con condicionante ===================================*/
      //Consulta de los usuarios registrados
      const resUsers = await axios.get(url + '/api/cotizador/registro');
      let i = Object.keys(resUsers.data.reSql);
      i = parseInt(i.length);

      let notFound;//Variable que confirma que el usuario no esta registrado 
      let newArray = [];//Arreglo que se llena el numero de veces que no coinciden los id´s

      //Recorrido y comparación entre los usuarios registrados en la bd y el usuario activo
      for (let cont = 0; cont < i; cont++) {
        if (validatorid !== '' && parseInt(validatorid) === parseInt(resUsers.data.reSql[cont].id_usuario)) {
          const clave = await axios.post(url2 + `/api/cotizador/proyecto/agregar/${validatorid}`, data);
          setclavep(clave.data.id_proyecto);
          const claveRespuestaBack = clave.data.msg
          alert(claveRespuestaBack);
        } else if (validatorid === '' || parseInt(validatorid) !== parseInt(resUsers.data.reSql[cont].id_usuario)) {
          newArray[cont] = true;
        }
      }
      //Filtro para extraer los datos que se han llenado con true
      let i1 = newArray.filter(nA => true);
      i1 = i1.length;
      //Comparación del numero de usuarios registrados en la bd con el numero de usuarios no encontrados
      if (i1 === i) {
        notFound = true;
      }
      if (notFound) {
        alert('Error al registrar el Proyecto')
        alert('El usuario que esta activo no se encuentra registrado');
      }
      /*===============================================================================================================*/
    } catch (error) {
      alert('Registro invalido del Proyecto')
    }
  }

  const enviarDatos = () => {
    if(show === true){
      Send();
      setDatos({
        ...datos, proyecto_clave: '',
                  proyecto_descripcion: '',
                  proyecto_plazo_meses: ''
      })
    // event.preventDefault()
    // event.target.reset();

    }
  }
  /*=================================================================================================================*/

  return (

    <div className="contenido-usuarios">
      {/*======================= Titulo Animación =======================*/}
    {/*   <div> <Animaciones mytext="Datos Proyecto" /> </div>
 */}
      {/*=======================  Tabla Nuevo Proyecto ======================= */}
      {/* <form action="" method="post" onSubmit={enviarDatos}> */}
        <Table responsive id="nombreDiv">

          {/*======================= Titulos Tabla ======================= */}


          <thead >
            <tr className="titulo-tabla-usuarios">
           
              <th className="titulo-tabla" >Agregar Nuevo proyecto</th>
            
            </tr>

          </thead>



          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>Clave</th>
              <th>Descripción</th>
              <th> Cliente </th>
              <th> Plazo Meses </th>
              <th> Agregar Proyecto </th>
            </tr>
          </thead>

          <tbody>

            <tr className="">

              {/*=======================  Clave proyecto ======================= */}
              <td>
                <input
                  className="agregar"
                  type="text"
                  name="proyecto_clave"
                  onChange={handleInputChange}
                  placeholder="Ingrese Clave"
                />
              </td>
              {/*======================= Descripción ======================= */}
              <td>
                <input
                  className="agregar"
                  type="text"
                  name="proyecto_descripcion"
                  onChange={handleInputChange}
                  placeholder="Ingrese Descripción"
                />
              </td>
              {/*======================= Lista Clientes ======================= */}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="nombre_cliente"
                  onChange={e => onChangeTextCliente(e.target.value)}
                  value={nombreC}
                  placeholder="Ingrese el nombre del cliente"
                />
                {suggestions && suggestions.map((suggestion, i) =>
                  <div key={i} className="selectCliente" onClick={() => onSuggestHandler(suggestion.nombre_cliente)}>
                    {suggestion.nombre_cliente}
                  </div>
                )}
              </td>
              {/*======================= Plazo meses ======================= */}
              <td>
                <input
                  className="agregar"
                  type="text"
                  name="proyecto_plazo_meses"
                  onChange={handleInputChange}
                  placeholder="Ingrese Plazo Meses"
                />
              </td>
              <td>
                {/*=======================  Boton Empezar Nuevo proyecto ======================= */}
 {/*                <button className="btn btn-primary modificar" type="submit"> Agregar proyecto  </button> */}
      <button 
      className="btn btn-primary modificar" 
      type="submit" 
      onClick={() => { 
        setShow(!show);
        enviarDatos();
      }}>  
      {show ? 'Iniciar' : 'Ocultar Datos'}    
      </button>
      {show ? (
        <div >

        </div>
      ) : 
      
      
      (
        <div className="arregla">
          <DatosPTN clave={clavep} />
        </div>
      )}
            
              </td>
            </tr>
          </tbody>
        </Table>
      {/* </form> */}
    </div>
  )
}

export default NuevoProyecto