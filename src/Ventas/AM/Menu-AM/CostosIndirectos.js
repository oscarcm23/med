import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../../Componentes/Animaciones";
import {costosIndirectos, equivale,  totalIndirecto, stringDolar} from "../../Operaciones/OperacionesAM";
import { EditCI } from '../Routes/ModificarPorcentajesCI';

function CostosIndirectos(props) {
    /*========================== Mostrar/Ocultar ==========================*/
    const [activar, setActivar] = useState([]);
    const [textBModificar,setTextBModificar] = useState([]);//Texto de los botones de modificar
    /*=====================================================================*/

    /*========================== Habilitar/Deshabilitar ==========================*/
    const [enable, setenable] = useState([]);//Inputs
    /*============================================================================*/

    const [data,setData] = useState ({
        porcentaje:''
    });

    const handleInputChange = (event) => {
        setData({
          ...data,[event.target.name] : event.target.value
        })
    }
    
    useEffect(() => {
        let i = Object.keys(costosIndirectos)
        i = i.length
        setenable(Array(i).fill(true));
        setActivar(Array(i).fill(true));
        setTextBModificar(Array(i).fill('bi bi-pencil-square'));
        //console.log('Porcentajes CI%:',props.ci);
    },[costosIndirectos])

    const habilitar = (key) =>{
        //console.log(costosIndirectos[key]);
        key = parseInt(key);
        const newArr =[] 
        const newArr2 = [];
        const newArr3 = [];
        let c = Object.keys(costosIndirectos);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !enable[i];
                if(enable[i] === false){
                    newArr2[i] = 'bi bi-pencil-square';
                    setData({
                        ...data, porcentaje :''
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

    const {actualizacion} = EditCI();

    const envioData = (key) => {
        if(activar[key] === false){
            actualizacion(props.ci,costosIndirectos[key],data);
        }
    }

  return (
      
    <div className="contenido-usuarios">
  <br/>   
 {/*   <div> <Animaciones mytext="Costos Indirectos" /> </div> */}

   <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>

                   <tr className="titulo-tabla-usuarios">
                       <th></th>
                        <th className='titulo-tabla'>Costos Indirectos</th>
           
 
                    </tr>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Descripción</th>
                        <th>Equivale a % </th>
                        <th>Total </th>
                        <th>Divisa </th>
                        <th>Modificar</th>
                        <th></th>
 
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(costosIndirectos).map((key) => (
                        <tr key={key}>
                            {/*================= Descripción==================*/}
                            <td width={"200px"}>{costosIndirectos[key]}</td>

                            {/*================= Equivale ==================*/}
                            <td  width={"200px"}   className="editar" >
                                        <input
                                        className="input-name"
                                        type="number"
                                        defaultValue={equivale[key] } 
                                        disabled={enable[key]} 
                                        onChange={handleInputChange}
                                        name="porcentaje" 
                                        ></input> 
                                    </td>
                            {/*================= Total Indirecto ==================*/}
                            <td> {" $ "}{ totalIndirecto[key]} </td>
                            <td width={"100px" }>{stringDolar}</td>

                            {/*================= Editar==================*/}
                     {/*        <td>
                                <button 
                                className="btn btn-primary Mod"
                                onClick={() => {
                                    habilitar(key);
                                    envioData(key);
                                }}
                                >{textBModificar[key]}
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

export default CostosIndirectos