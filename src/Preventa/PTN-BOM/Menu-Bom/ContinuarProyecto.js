import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
// Componentes
import Partida from "../Menu-Bom/Partida";
import DatosSP from "../Menu-Bom/DatosSP";
import Categorias from "../Menu-Bom/Categorias";
import Animaciones from '../../../Componentes/Animaciones';
import {InsertDatosPartida} from '../Routes/GuardarPartida';
import {getIdPar} from './DatosSP';
import {InsertDatosCats} from '../Routes/GuardarDatosCategorias';
import {url, url2} from "../../../Componentes/Ocultar";


const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

export let proyectoIdCont;
export let pEstatus1;


function ContinuarProyecto() {
    
  /*========================== Mostrar/Ocultar ==========================*/
  const [show,setShow] = useState(true); // Menú agregar/continuar partida 
  const [show2,setShow2] = useState(true);// Agregar partida
  const [show3,setShow3] = useState(true);// Lista de las partidas de un proyecto
  const [show4,setShow4] = useState(true);// Continuar una partida
  const [show5,setShow5] = useState(true);// Categorias/Finalizar proyecto
  const [show6,setShow6] = useState(true);//Lista de proyectos del usuario activo
  const [show7,setShow7] = useState(true);//Lista de proyectos en los que colabora el usuario activo
  const [show8,setShow8] = useState(true);//Buscador de proyectos
  const [show9,setShow9] = useState([]);
  const [textBVer,setTextBVer] = useState([]);// Texto de los botones de continuar proyecto
  const [show10,setShow10] = useState([]);
  const [textBVer1,setTextBVer1] = useState([]);// Texto de los botones de finalizar proyecto
  const [show11,setShow11] = useState([]);
  const [textBVer2,setTextBVer2] = useState([]);// Texto de los botones de continuar partida
  /*=====================================================================*/

  const [id, setid] = useState([]);
  /*======================================== Buscador de proyectos ========================================*/
  //Almacenamiento de todos los proyectos existentes
  const[listaProyectos, setListaProyectos] = useState([]);
  
  //Almacenamiento de los proyectos semejantes a la clave introducido
  const [suggestions, setSuggestions] = useState([]);

  // Almacenamiento de la clave introducida del proyecto 
  const[claveP,setClaveP] = useState([]);

  // Función que realiza la consulta a la tabla proyectos 
  const getProyectos = async () => {
    try{
      if(validatorrol === "administrador"){
        const resProy = await axios.get(url + '/api/cotizador/proyecto/viewadmin');
        setListaProyectos(resProy.data.data);
        setSuggestions(resProy.data.data);
        
    }else{
        if(show6 === false){
          const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
          setListaProyectos(resProy.data.data);
          setSuggestions(resProy.data.data);
        }else if(show7 === false){
          const resProy = await axios.get(url2 + `/api/cotizador/colaboradores/viewProyectos/${validatorid}`);
          setListaProyectos(resProy.data.data);
          setSuggestions(resProy.data.data);
          //console.log(listaProyectos)
        }
    }
    }catch(error){console.log(error);}
  }

  useEffect(()=>{
      getProyectos();
  },[show6,show7])

  useEffect(()=>{
    if(claveP === ''){
      setSuggestions(listaProyectos);
    }
  },[claveP])
  
  /*== Función que realiza la busqueda de los proyectos semejantes a la clave introducida ==*/
  const onChangeTextClaveP = (claveP) => {
      let coincidencias = [];
      if(claveP.length>0){
          coincidencias = listaProyectos.filter(proyecto => {
          const regex = new RegExp(`${claveP}`, "gi");
          return proyecto.proyecto_clave.match(regex)
          })
      }
      setSuggestions(coincidencias);
      setClaveP(claveP);
  }
  /*=======================================================================================================*/

  /*======================================== Lista de partidas ========================================*/
  // Almacenamiento de las partidas de un proyecto en especifico
  const[listaPartidas, setListaPartidas] = useState([]);

  function getProyEstatus(st){
    pEstatus1 = st;
  }

  //Almacenamiento de todos las partidas de un proyecto en específico
  async function getDatosPartida(proyecto_id){
      try{
          const resPP = await axios.get(url2 + `/api/cotizador/partida/viewPP/${proyecto_id}`);
          setListaPartidas(resPP.data.data);
      }catch(error){
          console.log(error);
      }
      proyectoIdCont = proyecto_id;
      let i = Object.keys(suggestions);
      i = i.length;
      for(let c = 0 ; c < i ; c++){
        if(proyecto_id === suggestions[c].proyecto_id){
          getProyEstatus(suggestions[c].proyecto_estatus);
        }
      }
      //console.log(pEstatus1); 
  }
  //console.log('Varible global proyecto id:', proyectoIdCont);
  const {getIdP} = InsertDatosPartida();
  const {getIdP1} = InsertDatosCats();
  /*===================================================================================================*/

  useEffect(() => {
    let i = Object.keys(suggestions)
    i = i.length
    setShow9(Array(i).fill(true));
    setTextBVer(Array(i).fill('bi bi-play-fill'));
    setShow10(Array(i).fill(true));
    setTextBVer1(Array(i).fill('bi bi-check-circle-fill'));
  },[suggestions])

  useEffect(() => {
    let i = Object.keys(listaPartidas)
    i = i.length
    setShow11(Array(i).fill(true));
    setTextBVer2(Array(i).fill('bi bi-play-fill'));
  },[listaPartidas,show3 === true])

  const habilitar = (key) =>{
    setShow5(true);
    setShow3(true);
    key = parseInt(key);
    const newArr =[];
    const newArr2 = [];
    let c = Object.keys(suggestions);
    c = c.length;
    setShow9(Array(c).fill(true));
    setShow10(Array(c).fill(true));
    setTextBVer(Array(c).fill('bi bi-play-fill'));
    setTextBVer1(Array(c).fill('bi bi-check-circle-fill'));
    for (let i = 0 ; i < c ; i++){
        if(i === key){
            newArr[i] = !show9[i];
            setShow(newArr[i]);
            if(show9[i] === false){
                newArr2[i] = 'bi bi-play-fill';
                setShow2(true);
                setShow3(true);
                setShow4(true);
            }else{
                newArr2[i] = 'bi bi-eye-slash-fill';
            }
        }
        if(i !== key){
            newArr[i]=true;
            newArr2[i] = 'bi bi-play-fill';
        }
    }   
    setShow9(newArr);
    setTextBVer(newArr2);
  }

  const habilitar1 = (key) =>{
    setShow(true);
    setShow2(true);
    setShow4(true);
    key = parseInt(key);
    const newArr =[];
    const newArr2 = [];
    let c = Object.keys(suggestions);
    c = c.length;
    setShow9(Array(c).fill(true));
    setShow10(Array(c).fill(true));
    setTextBVer1(Array(c).fill('bi bi-check-circle-fill'));
    setTextBVer(Array(c).fill('bi bi-play-fill'));
    for (let i = 0 ; i < c ; i++){
        if(i === key){
            newArr[i] = !show10[i];
            setShow5(newArr[i]);
            if(show10[i] === false){
                newArr2[i] = 'bi bi-check-circle-fill';

            }else{
                newArr2[i] = 'bi bi-eye-slash-fill';
            }
        }
        if(i !== key){
            newArr[i]=true;
            newArr2[i] = 'bi bi-check-circle-fill';
        }
    }   
    setShow10(newArr);
    setTextBVer1(newArr2);
  }

  const habilitar2 = (key) =>{
    key = parseInt(key);
    const newArr =[];
    const newArr2 = [];
    let c = Object.keys(listaPartidas);
    c = c.length;
    setShow11(Array(c).fill(true));
    setTextBVer2(Array(c).fill('bi bi-play-fill'));
    for (let i = 0 ; i < c ; i++){
        if(i === key){
            newArr[i] = !show11[i];
            setShow4(newArr[i]);
            if(show11[i] === false){
                newArr2[i] = 'bi bi-play-fill';
            }else{
                newArr2[i] = 'bi bi-eye-slash-fill';
            }
        }
        if(i !== key){
            newArr[i]=true;
            newArr2[i] = 'bi bi-play-fill';
        }
    }   
    setShow11(newArr);
    setTextBVer2(newArr2);
  }

  return (
    /*==================== Continuar Proyecto ====================*/
    <div  className="contenido-usuarios">
      <Table responsive id="nombreDiv">
          {/*========================== Titulos Tabla ==========================*/}
          <thead>
              <tr className="titulo-tabla-usuarios">
                  <th className= "ocultar">Mis Proyectos</th>
                  <th className = "ocultar">Otros Proyectos</th>
              </tr>
          </thead>
          <tbody>
              <tr className="">
                  {/*========================== Divisa ==========================*/}
                  <td>
                      <button
                      className="btn btn-primary modificar"
                      type="button"
                      onClick={() => {
                      setShow6(!show6);
                      setShow7(true);
                      show6 ? setShow8(false):setShow8(true);
                      }}
                      >
                      {" "}
                      {show6 ? "Mis Proyectos" : "Ocultar"}{" "}
                      </button>
                  </td>
                  <td>
                      <button
                      className="btn btn-primary modificar"
                      type="button"
                      onClick={() => {
                      setShow7(!show7);
                      setShow6(true);
                      show7 ? setShow8(false):setShow8(true);
                      }}
                      >
                      {" "}
                      {show7 ? "Proyectos Compartidos" : "Ocultar"}{" "}
                      </button>
                  </td>
              </tr>
          </tbody>
      </Table>
      {show8 ? (
        <div></div>
      ):(
      <div className="table-responsive">
        {/*============= Titulo Animación =============*/}
       {/*  <Animaciones mytext="Buscar nn proyectos" />
 */}
        <div className="busqueda-proyectos">
          <Table responsive id="nombreDiv">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th className='ocultar'>Clave</th>
              </tr>
            </thead>

            <tbody>
              <tr className="">
                <td className= "busqueda">
                    <input className="agregar"
                    type="text"
                    name="proyecto_clave"
                    onChange={e => onChangeTextClaveP(e.target.value)}
                    value={claveP}
                    placeholder="Ingrese clave del proyecto" />
                </td>
              </tr>
            </tbody>
          </Table>

          </div>
          {/****************************Lista de los Proyectos Creados ****************************************/}
          {/*============= Titulo Animación =============*/}
       {/*    <div>
            {" "}
            <Animaciones mytext="Lista de Proyectos" />{" "}
          </div>
 */}
          <Table responsive  striped bordered hover size="sm">
              <thead>

              <tr className="titulo-tabla-usuarios">
                  <th></th>
                  <th className='titulo-tabla'>Proyectos</th>
                </tr>
                <tr className="titulo-tabla-usuarios">
                  <th>ID</th>
                  <th>Clave</th>
                  <th>Descripción</th>
                  <th>Cliente</th>
                  <th>Fecha Creación</th>
                  <th>Fecha Modificación</th>
                  <th>Estatus</th>
                  <th>Plazo Meses</th>
                  <th>Continuar</th>
                  <th>Finalizar</th>
                </tr>
              </thead>
                                  
              <tbody>
              {Object.keys(suggestions).map((key) => (    
                  <tr key={suggestions[key].proyecto_id} >
                      <td>{suggestions[key].proyecto_id}</td>   
                      <td>{suggestions[key].proyecto_clave}</td>  
                      <td>{suggestions[key].proyecto_descripcion}</td>  
                      <td>{suggestions[key].nombre_cliente}</td> 
                      <td>{suggestions[key].proyecto_fecha_creacion}</td>
                      <td>{suggestions[key].proyecto_fecha_modificacion}</td>
                      <td  className={suggestions[key].proyecto_estatus}>{suggestions[key].proyecto_estatus}</td>  
                      <td width={"10px"}>{suggestions[key].proyecto_plazo_meses}</td>  
                      <td>
                        <button 
                          className="btn btn-primary Mod" 
                          type="button" 
                          onClick={() => {
                            getIdP(suggestions[key].proyecto_id);
                            getDatosPartida(suggestions[key].proyecto_id); 
                            setid(suggestions[key].proyecto_id);
                            habilitar(key);
                            }}
                          > 
                         

                            <i className=   {textBVer[key]} ></i>

                          </button>
                      </td>
                      <td>
                        <button 
                          className="btn btn-primary modificar" 
                          type="button" 
                          onClick={() => {
                            getIdP1(suggestions[key].proyecto_id);
                            getDatosPartida(suggestions[key].proyecto_id); 
                            setid(suggestions[key].proyecto_id);
                            habilitar1(key);
                            }}
                          > 

                           <i className=   {textBVer1[key]}  ></i>

                           
                          </button>
                      </td>
                  </tr>  
              ))}
              </tbody>          
          </Table>
       
      </div>
      )}

              {/* <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Continuar' : 'Ocultar Proyecto'}    </button> */}
      {show ? (
        <div >
        </div>
      ) : (
        <Table responsive  striped bordered hover size="sm">
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th className='ocultar'>Agregar más partidas</th>
              <th className='ocultar'>Continuar una partida</th>
            </tr>
          </thead>
                              
          <tbody>    
              <tr>
                  <td>
                    <button 
                      className="btn btn-primary modificar" 
                      type="button" 
                      onClick={() => { 
                        getIdPar('');
                        setShow2(!show2);
                        setShow3(true);
                        setShow4(true);
                      }}
                      >{show2 ? 'Agregar Nueva Partidas' : 'Ocultar'} </button>
                  </td>
                  <td>
                    <button 
                      className="btn btn-primary modificar" 
                      type="button" 
                      onClick={() => { 
                        setShow3(!show3);
                        setShow2(true);
                      }}
                      >{show3 ? 'Continuar Partida' : 'Ocultar'} </button>
                  </td>
              </tr>  
          </tbody>          
      </Table>
      )}

      {show2 ? (
              <div ></div>
      ) : (
              <div  className="arregla"> 
           {/*      <div className="contenido-usuarios">
                  {" "}
                  <Animaciones mytext="Datos PTN" />{" "}
                </div> */}
                {/*========================== Llamado a los Componentes ==========================*/} 
                <Partida></Partida>
                            
                <DatosSP clave={id}/>
              </div>
      )}

      {show3 ? (
              <div ></div>
      ) : ( 
              <div className="arregla"> 
                <div className="contenido-usuarios">
               {/*  <div>
                  {" "}
                  <Animaciones mytext="Partidas del Proyecto" />{" "}
                </div>
 */}
                  <Table responsive  striped bordered hover size="sm">
                      <thead>

                      <tr className="titulo-tabla-usuarios">
                              <th></th>
                              <th className='titulo-tabla'>Partidas del Proyecto</th>
                           
                          </tr>
                          <tr className="titulo-tabla-usuarios">
                              <th>ID</th>
                              <th>Nombre</th>
                              <th>Descripción</th>
                              <th>Continuar</th>
                          </tr>
                      </thead>
                                        
                      <tbody>
                          {Object.keys(listaPartidas).map((key) => (    
                              //checar aqui va los titulos
                              <tr key={key} >
                                  <td>{listaPartidas[key].partida_id}</td>   
                                  <td>{listaPartidas[key].partida_nombre}</td>  
                                  <td>{listaPartidas[key].partida_descripcion}</td> 

                                  <td width={"100px"}>
                                    <button 
                                    className="btn btn-primary  Mod" 
                                    onClick={() => {
                                      getIdPar(listaPartidas[key].partida_id);
                                      habilitar2(key);
                                    }}
                                    > 
                                    
                                 
                                   
                                   <i className=  {textBVer2[key]} ></i>
                                   
                                   </button>
                                  </td> 
                              </tr>  
                          ))}
                      </tbody>          
                  </Table>
                  {show4 ? (
                          <div >


                          </div>
                        ) : (
                          
                          <div  className="arregla"> 
                          {/*    <div className="contenido-usuarios">
                              {" "}
                              <Animaciones mytext="Datos Servicios/Productos" />{" "}
                              </div> */}
                          {/*========================== Llamado al Componente ==========================*/} 
                            <DatosSP clave={id}/>
                          </div>
                  )}
                </div>
              </div>
              
      )}
      {show5 ? (
        <div></div>
      ):(
        <div  className="arregla"> 
          {/*======================== Llamar al componente Categorias ==========================*/}
          <Categorias clave={id} />
        </div>
      )}
      
    </div>


  )
}

export default ContinuarProyecto