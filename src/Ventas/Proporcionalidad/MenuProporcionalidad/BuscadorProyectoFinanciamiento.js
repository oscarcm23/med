import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
import Animaciones from "../../../Componentes/Animaciones";
import ModificarFinanciamiento from './ModificarFinanciamiento';


import { url, url2 } from "../../../Componentes/Ocultar";
const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

export let idAsignado;

export let estatusProy2;

function BuscadorProyectoFinanciamiento() {
    //Habilitar/Deshabilitar tabla del financiamiento
    const [show, setShow] = useState([])
    const [show2, setShow2] = useState(true)
    const [textBVer,setTextBVer] = useState([]);//Texto de los botones de detalles

    // Almacenamiento de todos los proyectos existentes 
    const[listaProyectos, setListaProyectos] = useState([]);

    //Almacenamiento de los proyectos semejantes a la clave introducido
    const [suggestions, setSuggestions] = useState([]);

    // Almacenamiento de la clave introducida del proyecto 
    const[claveP,setClaveP] = useState([]);

    const getProyectos = async () => {
        try {
           
            if (validatorrol === "administrador") {
                const resProy = await axios.get(url + '/api/cotizador/proyecto/viewadmin');
                setListaProyectos(resProy.data.data);
                setSuggestions(resProy.data.data);
            } else {
                const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
                setListaProyectos(resProy.data.data);
                setSuggestions(resProy.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    /*== Función que realiza la consulta a la tabla proyectos ==*/
    useEffect(() => {
        getProyectos();
    }, [])

    useEffect(()=>{
        if(claveP === ''){
            setSuggestions(listaProyectos);
        }
    },[claveP])

    /*== Función que realiza la busqueda de los proyectos semejantes a la clave introducida ==*/
    const onChangeTextClaveP = (claveP) => {
        let coincidencias = [];
        if (claveP.length > 0) {
            coincidencias = listaProyectos.filter(proyecto => {
                const regex = new RegExp(`${claveP}`, "gi");
                return proyecto.proyecto_clave.match(regex)
            })
        }
        setSuggestions(coincidencias);
        setClaveP(claveP);
    }

    function getProyId (pId){
        idAsignado = pId;
    }
    /*============================================================================================================*/

    useEffect(() => {
        let i = Object.keys(suggestions)
        i = i.length
        setShow(Array(i).fill(true));
        setTextBVer(Array(i).fill('bi bi-eye'));
    },[suggestions])

    const habilitar = (key) =>{
        //console.log(key);
        key = parseInt(key);
        const newArr =[];
        const newArr2 = [];
        let c = Object.keys(suggestions);
        c = c.length;
        setShow(Array(c).fill(true));
        setTextBVer(Array(c).fill('bi bi-eye'));
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !show[i];
                setShow2(newArr[i]);
                if(show[i] === false){
                    newArr2[i] = 'bi bi-eye';
                }else{
                    newArr2[i] = 'bi bi-eye-slash-fill';
                }
            }
            if(i !== key){
                newArr[i]=true;
                newArr2[i] = 'bi bi-eye';
            }
        }   
        setShow(newArr);
        setTextBVer(newArr2);
    }

    function getEstatusProy (estatus){
        estatusProy2 = estatus;
    }

    return (
        <div className="contenido-usuarios">
            {/*======================= Titulo Animación =======================*/}
        {/*     <div> <Animaciones mytext="Divisa" /> </div> */}
            {/*********Búsqueda de Proyectos AM ********/}

            <div className="busqueda-proyectos">
                <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="azul">
                            <th className='ocultar'>Clave Proyecto</th>
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
                                    placeholder=" 🔎 Búsqueda por Clave del Proyecto" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                {/****************************Lista de los Proyectos Creados ****************************************/}
                {/*============= Titulo Animación =============*/}
              {/*   <div> <Animaciones mytext="Proyectos" /> </div>
 */}
                <Table responsive striped bordered hover size="sm">
                    <thead>

                    <tr className="titulo-tabla-usuarios">
                        <th></th>
                            <th className='titulo-tabla'>Financiamiento</th>
              
                        </tr>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Clave</th>
                            <th>Descripción</th>
                            <th>Cliente</th>
                            <th>Fecha Creación</th>
                            <th>Fecha Modificación</th>
                            <th>Estatus</th>
                            <th>Plazo de meses</th>
                            <th>Datos Financiamiento</th>
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
                                <td  className= {suggestions[key].proyecto_estatus} >{suggestions[key].proyecto_estatus}</td> 
                                <td>{suggestions[key].proyecto_plazo_meses}</td>
                                <td width={"100px"}>
                                    <button
                                    className="btn btn-primary Ver"
                                    onClick={() => {
                                        getProyId(suggestions[key].proyecto_id);
                                        habilitar(key);
                                        getEstatusProy(suggestions[key].proyecto_estatus);
                                    }}
                                    >
                                        <i className=   {textBVer[key]}  ></i>
                    
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {show2 ? (
                    <div></div>
                ) : (
                    <div className="">
                        <br />
                        {/*========================== Llamado al Componente modificar financiamiento ==========================*/}
                        <ModificarFinanciamiento propIdProyecto={idAsignado} />
                    </div>
                )}
       

<br></br>
<br></br>
<br></br>
        </div>
    )
}

export default BuscadorProyectoFinanciamiento