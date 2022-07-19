import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import {  url2 } from "../../../Componentes/Ocultar";
import { estatusProy2,idAsignado } from './BuscadorProyectoFinanciamiento';
import { hoy } from '../../../Preventa/PTN-BOM/Menu-Bom/NuevoProyecto';

function ModificarFinanciamiento(prop) {

    /*========================== Mostrar/Ocultar ==========================*/
    const [activar, setActivar] = useState([]);
    const [textBModificar,setTextBModificar] = useState([]);//Texto de los botones de modificar
    /*=====================================================================*/

    /*========================== Habilitar/Deshabilitar ==========================*/
    const [enable, setenable] = useState([]);//Inputs
    /*============================================================================*/
    //console.log("este es el prop.propIdProyecto en modificar financiamiento", prop.propIdProyecto)

    // almacenamiento de las proporcionalidades 
    const [listaFinanciamiento, setListaFinanciamiento] = useState([]);

    const [datos,setDatos] = useState({
        pd_tasa_interes: '',
        pd_anio_financiamiento: '',
        pd_pagos_anuales: ''
    })

    //llamado al endpoint para visualizar las proporcionalidades guardadas en la BD
    async function llamadiListaFinanciamiento() {
        setListaFinanciamiento('');
        try {
            const respuesta = await axios.get(url2 + `/api/cotizador/proporcionalidad/view/${prop.propIdProyecto}`)
            setListaFinanciamiento(respuesta.data.data)
            //console.log("este es el lista financiaamiento en el useeefect",respuesta.data.data[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        llamadiListaFinanciamiento();
    }, [prop.propIdProyecto])
    

      useEffect(() => {
        let i = Object.keys(listaFinanciamiento)
        i = i.length
        setenable(Array(i).fill(true));
        setActivar(Array(i).fill(true));
        setTextBModificar(Array(i).fill('bi bi-pencil-square'));
        //console.log('Porcentajes CI%:',props.ci);
    },[listaFinanciamiento])

    const habilitar = (key) =>{
        //console.log(costosIndirectos[key]);
        key = parseInt(key);
        const newArr =[] 
        const newArr2 = [];
        const newArr3 = [];
        let c = Object.keys(listaFinanciamiento);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !enable[i];
                if(enable[i] === false){
                    newArr2[i] = 'bi bi-pencil-square';
                    setDatos({
                        ...datos,pd_tasa_interes: '',
                                 pd_anio_financiamiento: '',
                                 pd_pagos_anuales: ''
                      })
                }else{
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


    const envioData = (key) => {
        if(activar[key] === false){
            //console.log('Old Data:', listaFinanciamiento[key]);
            SendProporcionalidadModificada(listaFinanciamiento[key]);
        }
    }

    // Función que obtiene los datos introducidos en los inputs 
    const handleInputChange = (event) => {
        //console.log("listaFinanciamiento", listaFinanciamiento)
        setDatos({
            ...datos, [event.target.name]: event.target.value,
        })
    }
    // Función que realiza la inserción de los datos a la tabla proporcionalidad en la bd 

    async function SendProporcionalidadModificada(oldData) {
        //console.log(prop.propIdProyecto)
        const data = {
            pd_tasa_interes: oldData.pd_tasa_interes,
            pd_anio_financiamiento: oldData.pd_anio_financiamiento,
            pd_pagos_anuales: oldData.pd_pagos_anuales
        };

        const dataFM = {
            proyecto_fecha_modificacion:hoy
        }

        const k = Object.keys(datos);
        for(let key of k){
            if (datos[key] !== '') {
                data[key] = datos[key];
            }
        }
        
        if(estatusProy2 === 'Aceptado'){
            alert('No se puede modificar este Proyecto, se encuentra en Estatus: Aceptado')
        }else{
            try {
                //console.log('Data actualización:',data);
                await axios.put(url2 +`/api/cotizador/proyecto/updateFM/${idAsignado}`, dataFM);
                const respuestaUpdate = await axios.put(url2 + `/api/cotizador/proporcionalidad/update/${prop.propIdProyecto}`, data);
                const respuestaUpdateBack = respuestaUpdate.data.msg
                alert(respuestaUpdateBack)
            } catch (error) {
                console.log(error)
            }
        }
        
    }

    return (

        <div className="contenido-usuarios">

            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>

                <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>Modificar Financiamiento</th>
                      


                    </tr>

                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>ID</th>
                        <th>Tasa de Interes</th>
                        <th>Años de Financiamiento</th>
                        <th>Diferimiento de Tasa</th>
                        <th>Modificar</th>
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                {Object.keys(listaFinanciamiento).map((key) => (
                        <tr key={listaFinanciamiento[key].pd_id}>
                            {/*================= ID ==================*/}
                            <td>
                                {listaFinanciamiento[key].pd_id}
                            </td>
                            {/*================= Años de Financiamiento ==================*/}
                            <td>
                                <input
                                    onChange={handleInputChange}
                                    defaultValue={listaFinanciamiento[key].pd_tasa_interes}
                                    type="text"
                                    disabled={enable[key]}
                                    name='pd_tasa_interes'></input>
                            </td>

                            {/*================= Pagos Anuales ==================*/}
                            <td>
                                <input
                                    onChange={handleInputChange}
                                    defaultValue={listaFinanciamiento[key].pd_anio_financiamiento}
                                    type="text"
                                    disabled={enable[key]}
                                    name='pd_anio_financiamiento'>
                                </input>
                            </td>
                            {/*================= Pagos Anuales ==================*/}
                            <td>
                                <input
                                    onChange={handleInputChange}
                                    defaultValue={listaFinanciamiento[key].pd_pagos_anuales}
                                    type="text"
                                    disabled={enable[key]}
                                    name='pd_pagos_anuales'>
                                </input>
                            </td>
                            {/*================= Agregar==================*/}
                        {/*     <td>
                                <button 
                                onClick={() =>{
                                    habilitar(key);
                                    envioData(key);
                                }} 
                                className="btn btn-primary"
                                > 
                                    {textBModificar[key]}
                                </button>
                     
                            </td> */}




{enable[key] ? (
                                <td width={"100px"} >
                                    <button 
                                    className=  "btn btn-primary Mod" type="button"
                                    onClick={()=>{
                                    //    props.envioData(datos,key,data); 
                                        habilitar(key); 
                                     
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
                                    envioData(key);
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
                                       //props.setfirst(activar[key]); 
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
export default ModificarFinanciamiento