import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import { EditPrecio } from '../../../Routes/ModificarPrecio';
import { CrudPrecios2 } from './CRUDPrecios2';


import { url2 } from '../../../Componentes/Ocultar';

export const CrudCategorias2 = (props) => {

    const [activar, setActivar] = useState([]);
    const [textBModificar,setTextBModificar] = useState([]);
    const [textBVer,setTextBVer] = useState([]);
    const [show,setShow] = useState([]);
    const [show2,setShow2] = useState(true);
    
    /*================================================== Categorias ==================================================*/
        /*========================= Editar =========================*/

        const [data,setData] = useState ({
          cd_id_cats:'',
          cd_no_parte:'',
          cd_descripcion:'',
          cd_meses:'',
          cd_semanas:'',
          cd_comentarios:'',     
        });

        const handleInputChange = (event) => {
            setData ({
            ...data,[event.target.name] : event.target.value ,
        })
        }
        //console.log(props.usuarios);
        const [enable, setenable] = useState([]);
        const [datos, Setdatos] = useState([]);

        useEffect(() => {
            Setdatos(props.dcats);
        },[props.dcats]);


        useEffect(() => {
            let i = Object.keys(props.dcats)
            i = i.length
            setenable(Array(i).fill(true));
            setActivar(Array(i).fill(true));
            setShow(Array(i).fill(true));
            setTextBModificar(Array(i).fill('bi bi-pencil-square'));
            setTextBVer(Array(i).fill('bi bi-eye'));
        },[props.dcats])
    
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr =[] 
            const newArr2 = [];
            const newArr3 = [];
            let c = Object.keys(props.dcats);
            c = c.length;
            for (let i = 0 ; i < c ; i++){
                if(i === key){
                    newArr[i] = !enable[i];
                    if(enable[i] === false){
                        newArr2[i] = 'bi bi-pencil-square';
                        setData({
                            ...data,cd_id_cats:'',
                                    cd_no_parte:'',
                                    cd_descripcion:'',
                                    cd_meses:'',
                                    cd_semanas:'',
                                    cd_comentarios:'',  
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
    
        const habilitar2 = (key) =>{
            key = parseInt(key);
            const newArr =[];
            const newArr2 = [];
            let c = Object.keys(props.dcats);
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
        /*==========================================================*/
    /*==============================================================================================================*/
    
    /*================================================== Precios ==================================================*/
        /*========================= Resumen deL precio de un servicio/producto =========================*/
        // Almacenamiento del precio 
        const[listaPrecios, setListaPrecios] = useState([]);

        // Función que realiza la consulta a la tabla precios
        async function getDatosPrecios(cd_id){
            try{
                const resPrecSP = await axios.get(url2 + `/api/cotizador/precio/viewCatsDP/${cd_id}`);
                setListaPrecios(resPrecSP.data.data);
            }catch(error){
                console.log(error);
            }
        }
        /*==============================================================================================*/

        /*========================= Envío de nuevos datos =========================*/
        const [first,setfirst] = useState(false);

        const {actualizacionPrecio} = EditPrecio();
        
        const envioDataPrecio = (estado, data, key, newdata) => {
            if(first){
                actualizacionPrecio(estado, data[key], newdata);
            }
        }
        /*=========================================================================*/
    /*=============================================================================================================*/

    return (
        <div>
           {/* <form> */}
                {/****************************Lista de los Proyectos Creados ****************************************/}
                {/*============= Titulo Animación =============*/}
             {/*    <Animaciones mytext="Categorias " />
 */}
                <Table responsive  striped bordered hover size="sm">
                    <thead>

                    <tr className="titulo-tabla-usuarios">
                            <th></th>
                            <th className='titulo-tabla'>Resumen Categorias</th>
                         
                        </tr>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Categoria</th>
                            <th># Parte</th>
                            <th>Descripción</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
                            <th>Comentarios</th>
                            <th>Precios</th>
                           
                            <th></th>
                        </tr>
                    </thead>
                                    
                    <tbody>
                        {Object.keys(props.dcats).map((key) => (    
                            <tr key={key} >
                                <td >{props.dcats[key].cd_id}</td>  
                                <td width={"200px"}>
                                    {" "}
                                    <select 
                                    id="lista-opciones" 
                                    name="cd_id_cats" 
                                    defaultValue={props.dcats[key].cd_id_cats} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}>
                                        <option value={0}></option>
                                        <option value={1}>Capacitación</option>
                                        <option value={2}>Accesorios</option>
                                        <option value={3}>Servicios PTN</option>
                                        <option value={4}>Mesa de Ayuda</option>
                                    </select>
                                </td> 
                                <td width={"200px"}>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_no_parte} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="cd_no_parte" 
                                    ></input>
                                </td>  
                                <td width={"400px"}>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_descripcion} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="cd_descripcion" 
                                    ></input>
                                </td> 
                                <td width={"50px"}>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_meses} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="cd_meses" 
                                    ></input>
                                </td>   
                                <td width={"50px"}>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_semanas} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="cd_semanas" 
                                    ></input>
                                </td>  
                                <td width={"300px"}>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_comentarios} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="cd_comentarios" 
                                    ></input>
                                </td>  

                                <td>
                                    <button 
                                    className="btn btn-primary Ver" 
                                    onClick={()=>{
                                        getDatosPrecios(props.dcats[key].cd_id); 
                                        habilitar2(key);
                                    }}
                                    >

                                  <i className=     {textBVer[key]}  ></i>
                                   
                                    </button> 
                                </td>




                              {/*   <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{
                                        props.envioData(datos,key,data);
                                        habilitar(key); 
                                        props.setfirst(activar[key]);
                                    }}
                                    >
                                        {textBModificar[key]}
                                    </button> 
                                </td>  */}


                                
                               
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
                {show2 ? (
                    <div></div>
                ):(
                    <div>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                        <CrudPrecios2
                        precios={listaPrecios}
                        setfirst={setfirst}
                        envioDataPrecio={envioDataPrecio}
                        estado={false}
                        />    
                    </div>
                )}
            {/* </form> */}
        </div>
    )
}