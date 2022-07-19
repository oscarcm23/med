import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Cookies from 'universal-cookie';

//Componentes

import { CrudProyectos } from '../../../Preventa/PTN-BOM/Routes/CRUDProyectos';
import { CrudProyectos2 } from './CrudProyectos2';
import { EditProyecto } from '../../../Preventa/PTN-BOM/Routes/ModificarProyectos';
import {url, url2} from "../../../Componentes/Ocultar";
import Animaciones from '../../../Componentes/Animaciones';

const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

function MenuResumenBom() {

    /*========================== Mostrar/Ocultar ==========================*/
    //Condicionales para almacenar datos
    const [show,setShow] = useState(true);//Lista de proyectos del usuario activo
    const [show1,setShow1] = useState(true);//Lista de proyectos en los que colabora el usuario activo

    const [show2,setShow2] = useState(true);//Tabla de proyectos
    /*=====================================================================*/

    /*======================================== Buscador de proyectos ========================================*/
    // Almacenamiento de todos los proyectos existentes
    const[listaProyectos, setListaProyectos] = useState([]);
    
    //Almacenamiento de los proyectos semejantes a la clave introducido
    const [suggestions, setSuggestions] = useState([]);
    // Almacenamiento de la clave introducida del proyecto
    const[claveP,setClaveP] = useState([]);

    // Almacenamiento de los clientes existentes
    const [ListaC, setListaC] = useState ([]);

    // Función que realiza la consulta a la tabla proyecto
    const getProyectos = async () => {
        try{
            if(validatorrol === "administrador"){
                const resProy = await axios.get(url +'/api/cotizador/proyecto/viewadmin');
                setListaProyectos(resProy.data.data);
                setSuggestions(resProy.data.data);
            }else{
                if(show === false){
                    const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
                    setListaProyectos(resProy.data.data);
                    setSuggestions(resProy.data.data);
                  }else if(show1 === false){
                    const resProy = await axios.get(url2 + `/api/cotizador/colaboradores/viewProyectos/${validatorid}`);
                    setListaProyectos(resProy.data.data);
                    setSuggestions(resProy.data.data);
                  }
            }
            const resC = await axios.get(url + "/api/cotizador/clientes/view");
            setListaC(resC.data.reSql);
        }catch(error){console.log(error);}
    }

    useEffect(()=>{
        getProyectos();
    },[show,show1])

    useEffect(()=>{
        if(claveP === ''){
            setSuggestions(listaProyectos)
        }
    },[claveP])
    
    // Función que realiza la busqueda de los proyectos semejantes a la clave introducida 
    const onChangeTextClaveP = (claveP) => {
        let coincidencias = [];
        if(claveP.length>0){
            coincidencias = listaProyectos.filter(proyecto => {
            const regex = new RegExp(`${claveP}`, "gi");
            return proyecto.proyecto_clave.match(regex)
            })
        }
        setSuggestions(coincidencias);
        //console.log('Suggestions:',suggestions);
        setClaveP(claveP);
    }
    /*=======================================================================================================*/

    /*=================================== Edición de los datos de un proyecto ===================================*/
    const [first, setfirst] = useState(false);
    
    const {actualizacionProy} = EditProyecto();

    const envioDataProy =  (cliente, dataCliente, data, key, newdata) => {
        if(first){
            actualizacionProy(cliente[key],dataCliente,data[key],newdata);
        } 
    }
    /*===========================================================================================================*/

    /*===========================================================================================================*/
    return (
        <div className="contenido-usuarios">

           <div><Animaciones mytext="BOM" /> </div>
            <Table responsive id="nombreDiv">
                {/*========================== Titulos Tabla ==========================*/}
                <thead>
                    <tr className="titulo-tabla-usuarios">
                        <th className='ocultar'>Mis Proyectos</th>
                        <th className='ocultar'>Proyectos en Colaboración</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        {/*========================== Divisa ==========================*/}
                  {/*       <td>
                            <button
                            className="btn btn-primary Mod2"
                            type="button"
                            onClick={() => {
                            setShow(!show);
                            setShow1(true);
                            show ? setShow2(false):setShow2(true);
                            }}
                            >
                            {" "}
                            {show ? "Mis Proyectos" : "Ocultar"}{" "}
                            </button>
                        </td> */}
                        <td>
                            <button
                            className="btn btn-primary Mod2"
                            type="button"
                            onClick={() => {
                            setShow1(!show1);
                            setShow(true);
                            show1 ? setShow2(false):setShow2(true);
                            }}
                            >
                            {" "}
                            {show1 ? "Proyectos " : "Ocultar"}{" "}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            {show2 ? (
                <div></div>
            ):(
                <div className="table-responsive">
                {/*============= Titulo Animación =============*/}
              {/*   <Animaciones mytext="Buscar proyectos" />
 */}
                {/*********Búsqueda de Lista de Proyectos por Clave ********/}
                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="titulo-tabla-usuarios">
                                <th className='ocultar'>Búsqueda por clave</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='busqueda'>
                                    <input className="agregar"
                                        type="text"
                                        name="proyecto_clave"
                                        onChange={e => onChangeTextClaveP(e.target.value)}
                                        value={claveP}
                                        placeholder="🔎 Búsqueda por clave del proyecto" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                    <CrudProyectos2
                        suggestionsP={suggestions}
                        clientes={ListaC}
                        setfirst={setfirst}
                        envioDataP={envioDataProy}
                        show2={show2}
                        setShow2={setShow2}
                    />    
                </>
            </div>
            )}
        </div>
    );
}
export default MenuResumenBom