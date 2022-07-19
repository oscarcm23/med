import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
import Animaciones from "../../../Componentes/Animaciones";
import {url, url2} from "../../../Componentes/Ocultar";
import { EditDivisa } from '../Routes/ModificarDivisa';
const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

export let proyEstatus;



function Divisa() {
    //Almacenamiento de todos los proyectos existentes 
    const[listaProyectos, setListaProyectos] = useState([]);
    
    //Almacenamiento de los proyectos semejantes a la clave introducido
    const [suggestions, setSuggestions] = useState([]);

    //Almacenamiento de la clave introducida del proyecto
    const[claveP,setClaveP] = useState([]);

    function getEstatus (estatus){
        proyEstatus = estatus;
    }

    const getProyectos = async () => {
        try{
            if(validatorrol === "administrador"){
                const resProy = await axios.get(url + '/api/cotizador/proyecto/viewadmin');
                setListaProyectos(resProy.data.data);
                setSuggestions(resProy.data.data);
                //console.log(resProy.data.data);
            }else{
                const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
                setListaProyectos(resProy.data.data);
                setSuggestions(resProy.data.data);
                //console.log(resProy.data.data);
            }
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getProyectos();
    },[])

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

    const {actualizacionDivisa} = EditDivisa();

    const [firts, setFirts] = useState (false);

    function EnviarDivisa(data, key, newdata){
        if(firts){
            // console.log('Old Data:',data[key]);
            // console.log('New Data:',newdata);
            actualizacionDivisa(data[key],newdata);
        }
    }
    /*================================================== Divisa ==================================================*/
        /*========================= Editar =========================*/
        const [activar, setActivar] = useState([]);
        const [textBModificar,setTextBModificar] = useState([]);//Texto de los botones de modificar
        
        const [data,setData] = useState ({
            proyecto_valor_dolar:'',
            proyecto_id_moneda:''
        });

        const handleInputChange = (event) => {
            setData ({
            ...data,[event.target.name] : event.target.value ,
            })
            console.log(data);
        }

        const [enable, setenable] = useState([]);
        const [datos, Setdatos] = useState();
        
        useEffect(() => {
            Setdatos(suggestions); 
        },[suggestions]);


        useEffect(() => {
            let i = Object.keys(suggestions)
            i = i.length
            //console.log(i)
            setActivar(Array(i).fill(true));
            setTextBModificar(Array(i).fill('bi bi-pencil-square'));
            setenable(Array(i).fill(true)); 
        },[suggestions])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr =[] 
            const newArr2 = [];
            const newArr3 = [];
            let p = Object.keys(suggestions);
            p = p.length;
            for (let i = 0 ; i < p ; i++){
                if(i === key){
                    newArr[i] = !enable[i];
                    if(enable[i] === false){
                        newArr2[i] = 'bi bi-pencil-square';
                        setData({
                            ...data,proyecto_valor_dolar:'',
                                    proyecto_id_moneda:''
                        })
                    }else{
                        setData({
                                proyecto_id_moneda:suggestions[key].proyecto_id_moneda
                        })
                        newArr2[i] = 'bi bi-check-lg';
                    }
                    newArr3[i] = !activar[i];
                }
                if(i !== key){
                    newArr[i]=true;
                    newArr2[i] = 'bi bi-pencil-square';
                    newArr3[i]=true;
                }

            }   
            setenable(newArr);
            setTextBModificar(newArr2);
            setActivar(newArr3);
        }

        // useEffect(()=>{
        //     getProyectos();
        // },[firts === true])
        /*==========================================================*/
    /*============================================================================================================*/
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
                                        placeholder= "🔎 Búsqueda por Clave del Proyecto" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>

             </div>

                    {/****************************Lista de los Proyectos Creados ****************************************/}
            {/*  
                <div> <Animaciones mytext="Proyectos" /> </div>
 */}
                <Table responsive  striped bordered hover size="sm">

                <thead>
                        <tr className="titulo-tabla-usuarios">

                            <th></th>
                            <th className='titulo-tabla'>Divisa </th>
                         
                            
                        </tr>
                    </thead>         
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Clave</th>
                            <th>Descripción</th>
                            <th>Cliente</th>
                            <th>Fecha Creación</th>
                            <th>Fecha Modificación</th>
                            <th>Estatus</th>
                            <th>Valor dolar</th>
                            <th>Moneda</th>
                            <th>Plazo Meses</th>
                            <th>Divisa</th>
                            <th></th>
                            
                        </tr>
                    </thead>         
                    <tbody>
                        {Object.keys(suggestions).map((key) => (    
                            //checar aqui va los titulos
                            <tr key={suggestions[key].proyecto_id} >
                                <td width={"50px"}>{suggestions[key].proyecto_id}</td>   
                                <td>{suggestions[key].proyecto_clave}</td>  
                                <td>{suggestions[key].proyecto_descripcion}</td>  
                                <td>{suggestions[key].nombre_cliente}</td> 
                                <td>{suggestions[key].proyecto_fecha_creacion}</td>
                                <td>{suggestions[key].proyecto_fecha_modificacion}</td>
                                <td className={suggestions[key].proyecto_estatus}  width={"100px"}>{suggestions[key].proyecto_estatus}</td> 
                                <td width={"100px"}>
                                    <input 
                                    className="input-name" 
                                    defaultValue={suggestions[key].proyecto_valor_dolar} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_valor_dolar" 
                                    ></input>
                                </td>

                                <td width={"100px"}>
                                <select 
                                id="lista-opciones" 
                                name="proyecto_id_moneda" 
                                defaultValue={suggestions[key].proyecto_id_moneda} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                >
                                    <option value={0}></option>
                                    <option value={1}>MXN</option>
                                    <option value={2}>USD</option>
                                </select>
                                </td>
                                <td width={"5px"}>{suggestions[key].proyecto_plazo_meses}</td> 
                              {/*   <td>
                                    <button 
                                    className="btn btn-primary" 
                                    onClick={() => {
                                        habilitar(key);
                                        EnviarDivisa(datos,key,data);
                                        setFirts(activar[key])
                                    }}
                                    >
                                        {textBModificar[key]}
                                    </button>
                                </td>  */}



{enable[key] ? (
                                <td width={"100px"} >
                                    <button 
                                    className=  "btn btn-primary Mod" type="button"
                                    onClick={()=>{
                                       // props.envioData(datos,key,data); 
                                       habilitar(key);
                                       EnviarDivisa(datos,key,data);
                                       setFirts(activar[key])
                                    }}
                                    >
                                        <i className  = {textBModificar[key]}  ></i>
                                    </button>
                                    
                                </td>
                            ):(
                              
                              
                              < >
                                    <td width={"100px"} >
                                    <button 
                                    className="btn btn-primary Mod" type="button"
                                    onClick={()=>{
                                        habilitar(key);
                                        EnviarDivisa(datos,key,data);
                                        setFirts(activar[key])
                                    }}
                                    >
                                        <i className= {textBModificar[key]}  ></i>
                                    </button>
                                
                                </td>

                                <td width={"100px"}>
                                    <button 
                                    className="btn btn-primary Cancelar" type="button"
                                    onClick={()=>{
                                      /*   props.envioData(datos,key,data);  */
                                      habilitar(key);
                                  
                                      setFirts(activar[key])
                                    }}
                                    >
                                        <i className= "bi bi-x-lg"  ></i>
                                    </button>
                                   
                                </td>
                                </>
                            )}
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
          

    </div>
  )
}

export default Divisa