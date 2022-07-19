import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'

import Animaciones from '../../../Componentes/Animaciones';
import { EditPrecio } from '../../../Routes/ModificarPrecio';
import { CrudPrecios2 } from './CRUDPrecios2';

import { url2 } from '../../../Componentes/Ocultar';



export const CrudSp2 = (props) => {
    /*======================================== Habilitar/Deshabilitar ========================================*/
    const [enable, setenable] = useState([]);//Inputs
    /*==================================================================================================================*/

    /*========================== Mostrar/Ocultar ==========================*/
    const [show,setShow] = useState(true);// Tabla de precios
    const [activar, setActivar] = useState([]);
    const [textBModificar,setTextBModificar] = useState([]);//Texto de los botones de modificar
    const [textBVer,setTextBVer] = useState([]);// Texto de los botones de mostrar
    const [show1,setShow1] = useState([]);
    /*=====================================================================*/

    /*================================================== SP ==================================================*/
        /*========================= Editar =========================*/
        const [data,setData] = useState ({
            sp_no_parte:'',
            sp_descripcion:'',
            sp_meses:'',
            sp_semanas: '',
            sp_id_categoria:'',
            sp_comentarios:''      
        });

        const handleInputChange = (event) => {
            setData ({
            ...data,[event.target.name] : event.target.value ,
        })
        }

        const [datos, Setdatos] = useState();
        // Almacenamiento del nombre del proveedor a buscar
        const [nombreProv, setNombreProv] = useState([]);
        // Almacenamiento del nombre del proveedor a buscar
        const [nombreMarca, setNombreMarca] = useState([]);
        

        useEffect(() => {
            Setdatos(props.sp); 
        },[props.sp]);


        useEffect(() => {
            let i = Object.keys(props.sp)
            i = i.length
            setenable(Array(i).fill(true));
            setActivar(Array(i).fill(true));
            setShow1(Array(i).fill(true));
            setTextBModificar(Array(i).fill('bi bi-pencil-square'));
            setTextBVer(Array(i).fill('bi bi-eye'));

            const arrayNombresProv = []
            for(let c = 0 ; c < i ;c++){
                arrayNombresProv[c] = props.sp[c].proveedor_nombre;
            }
            setNombreProv(arrayNombresProv);

            const arrayNombresMarca = []
            for(let c = 0 ; c < i ;c++){
                arrayNombresMarca[c] = props.sp[c].marca_nombre;
            }
            setNombreMarca(arrayNombresMarca);
        },[props.sp])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr =[];
            const newArr2 = [];
            const newArr3 = [];
            let c1 = Object.keys(props.sp);
            c1 = c1.length;
            for (let i = 0 ; i < c1 ; i++){
                if(i === key){
                    newArr[i] = !enable[i];
                    if(enable[i] === false){
                        newArr2[i] = 'bi bi-pencil-square';
                        setData({
                            ...data,sp_no_parte:'',
                                    sp_descripcion:'',
                                    sp_meses:'',
                                    sp_semanas: '',
                                    sp_id_categoria:'',
                                    sp_comentarios:''  
                        })
                    }else{
                        newArr2[i] = 'bi bi-check-lg';
                        listaMarcas(props.sp[key].proveedor_nombre);
                    }
                    newArr3[i] = !activar[i];
                }
                if(i !== key){
                    newArr[i] = true;
                    newArr2[i] = 'bi bi-pencil-square';
                    newArr3[i] = true;
                }
    
            }   
            setenable(newArr);
            setTextBModificar(newArr2);
            setActivar(newArr3);

            const arrayNombresProv = [];
            const arrayNombresMarca = []
            if (activar === true){
                for(let c = 0 ; c < c1 ;c++){
                    if(c === key){
                        arrayNombresProv[c] = '';
                    }else{
                        arrayNombresProv[c] = nombreProv[c];
                    }
                }
                setNombreProv(arrayNombresProv);

                for(let c = 0 ; c < c1 ;c++){
                    if(c === key){
                        arrayNombresMarca[c] = '';
                    }else{
                        arrayNombresMarca[c] = nombreMarca[c];
                    }
                }
                setNombreMarca(arrayNombresMarca);
            } 
        }

        const habilitar1 = (key) =>{
            key = parseInt(key);
            const newArr =[];
            const newArr2 = [];
            let c = Object.keys(props.sp);
            c = c.length;
            setShow1(Array(c).fill(true));
            setTextBVer(Array(c).fill('bi bi-eye'));
            for (let i = 0 ; i < c ; i++){
                if(i === key){
                    newArr[i] = !show1[i];
                    setShow(newArr[i]);
                    if(show1[i] === false){
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
            setShow1(newArr);
            setTextBVer(newArr2);
        }
        /*==========================================================*/

        /*================================================================ Buscadores ================================================================*/
        /*=================================== Buscador de proveedores ===================================*/
        // Almacenamiento del id del proveedor encontrado en la busqueda
        var proveedorId = {proveedor_id:''}

        // Almacenamiento de los proveedores semejantes al texto introducido en el input
        const [suggestionsProv, setSuggestionsProv] = useState ([]);

        // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
        const onChangeTextProv = (nP,key) => {
            let coincidencias = [];
            if(nP.length>0){
                coincidencias = props.proveedores.filter(proveedor => {
                    const regex = new RegExp(`${nP}`, "gi");
                    return proveedor.proveedor_nombre.match(regex)
                })
            }
            setSuggestionsProv(coincidencias);

            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresProv = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresProv[c] = nP;
                }else{
                    arrayNombresProv[c] = nombreProv[c];
                }
            }
            setNombreProv(arrayNombresProv);
        }

        // Almacenamiento de las marcas existentes
        const [listaMarca, setListaMarca] = useState ([]);
        // Función que realiza la consulta a la tabla marca
        async function listaMarcas(proveedor){
            let i = Object.keys(props.proveedores);
            for (let c = 0; c < i.length; c++) {
            if (proveedor === props.proveedores[c].proveedor_nombre) {
                proveedorId.proveedor_id = props.proveedores[c].proveedor_id
                //console.log('proveedor id:',proveedorId);
                }
            }
            try {
                if(proveedorId.proveedor_id !== ''){
                    const respuesta = await axios.get(url2 + `/api/cotizador/provmarcas/view/${proveedorId.proveedor_id}`);
                    setListaMarca(respuesta.data.data);
                }
            } catch (error) {console.log(error);}
        }


        // Función que obtiene el nombre del cliente seleccionado
        const onSuggestHandlerProv = (nP,key) => {
            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresProv = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresProv[c] = nP;
                }else{
                    arrayNombresProv[c] = nombreProv[c];
                }
            }
            setNombreProv(arrayNombresProv);
            listaMarcas(nP);
            
            //console.log(listaMarca);
            setSuggestionsProv([]);
        }
        /*============================================================================================*/

        /*=================================== Buscador de marcas con respecto al proveedor seleccionado ===================================*/
        // Almacenamiento de los proveedores semejantes al texto introducido en el input
        const [suggestionsMarca, setSuggestionsMarca] = useState ([]);

        // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
        const onChangeTextMarca = (nM,key) => {
            let coincidencias = [];
            if(nM.length>0){
            coincidencias = listaMarca.filter(marca => {
                const regex = new RegExp(`${nM}`, "gi");
                return marca.marca_nombre.match(regex)
                })
            }

            setSuggestionsMarca(coincidencias);
            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresMarca = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresMarca[c] = nM;
                }else{
                    arrayNombresMarca[c] = nombreMarca[c];
                }
            }
            setNombreMarca(arrayNombresMarca);
        }

        // Función que obtiene el nombre del cliente seleccionado
        const onSuggestHandlerMarca = (nM, key) => {
            key = parseInt(key);
            let i = Object.keys(listaMarca)
            i = i.length;
            const arrayNombresMarca = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresMarca[c] = nM;
                }else{
                    arrayNombresMarca[c] = nombreMarca[c];
                }
            }
            setNombreMarca(arrayNombresMarca);
            setSuggestionsMarca([]);
        }
        
        /*============================================================================================*/
        /*============================================================================================================================================*/
        
        /*=================================== Eliminación de un servicio/producto junto con sus precios ===================================*/
        /*=================================================================================================================================*/
        async function SendDeleteSP(id){
            //console.log(id);
            try {
                const confirmacion = window.confirm("¿Seguro que quieres borrar esta Partida?" );

                if(confirmacion){
                    await axios.delete(url2 + `/api/cotizador/precio/delete/${id}`);
                    alert('Servicio/producto eliminado exitosamente')
                }else{

                }
                
            } catch (error) {
                console.log(error);
                alert('Eliminación del Servicio/producto invalido')
            }
        }
        /*=================================================================================================================================*/
    /*========================================================================================================*/

    /*================================================== Precios ==================================================*/
        /*======================================== Resumen deL precio de un servicio/producto ========================================*/
        // Almacenamiento del precio 
        const[listaPrecios, setListaPrecios] = useState([]);

        // Función que realiza la consulta a la tabla precios
        async function getDatosPrecios(sp_id){
            try{
                const resPrecSP = await axios.get(url2 + `/api/cotizador/precio/viewSPP/${sp_id}`);
                setListaPrecios(resPrecSP.data.data);
            }catch(error){
                console.log(error);
            }
        }

        const [npSP,setNPSP] = useState('');
        const [desSP,setDesSP] = useState('');
        function getNameSp (sp){
            setNPSP(sp.spnp_np);
            setDesSP(sp.spd_des);
        }
        /*============================================================================================================================*/

        /*========================= Envío de nuevos datos =========================*/
        const [first,setfirst] = useState(false);

        const {actualizacionPrecio} = EditPrecio();
        
        const envioDataPrecio = (estado,data, key, newdata) => {
            if(first){
                actualizacionPrecio(estado,data[key], newdata);
            }
        }
        /*=========================================================================*/
    /*=============================================================================================================*/


    return (
        <div>
           {/* <form> */}
                {/******************Lista de los servicios/productos de una partida ****************************************/}
                {/*============= Titulo Animación =============*/}
               {/*  <Animaciones mytext="Servicios/Productos" /> */}
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        {/* <tr className="titulo-tabla-usuarios">
                            <th></th>
                            <th className='titulo-tabla'>{props.proyecto}</th>
                        </tr> */}
                        {/* <tr className="titulo-tabla-usuarios">
                            <th></th>
                            <th className='titulo-tabla'>{`Partida: ${props.partida}`}</th>
                        </tr> */}

                         <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>Servicios/Productors</th>
                        </tr>
                        <tr className="titulo-tabla-usuarios"> 
                            <th>ID</th>
                            <th># Parte</th>
                            <th>Descripción</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
                            <th>Proveedor</th>
                            <th>Marca</th>
                            <th>Categoria</th>
                            <th>Comentarios</th>
                 {/*            <th>Eliminar</th> */}
                            <th>Precios</th>
                      {/*       <th>Modificar</th> */}
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                            {Object.keys(props.sp).map((key) => (    
                            <tr key={key} >
                                <td>{props.sp[key].sp_id}</td>
                               <td width={"150px"}>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].spnp_np} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_no_parte" 
                                    ></input>
                                </td>  
                                <td width={"300px"}>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].spd_des} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_descripcion" 
                                    ></input>
                                </td>
                                <td width={"50px"}>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_meses} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_meses" 
                                    ></input>
                                </td>
                                <td width={"50px"}>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_semanas} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_semanas" 
                                    ></input>
                                </td>
                                <td>
                                    {" "}
                                    <input
                                    className="agregar"
                                    type="text"
                                    name="proveedor_nombre"
                                    onChange={e => onChangeTextProv(e.target.value, key)}
                                    value={nombreProv[key]}
                                    disabled={enable[key]} 
                                    placeholder="Proveedor"
                                    />
                                    {Object.keys(suggestionsProv).map((i)=>
                                    <div 
                                    key={i} 
                                    className="selectCliente" 
                                    onClick={() => onSuggestHandlerProv(suggestionsProv[i].proveedor_nombre,key)}
                                    >
                                        {suggestionsProv[i].proveedor_nombre}
                                    </div>
                                    )}
                                </td>
                                <td width={"100px"}>
                                    {" "}
                                    <input
                                    className="agregar"
                                    type="text"
                                    name="marca_nombre"
                                    onChange={e => onChangeTextMarca(e.target.value,key)}
                                    value={nombreMarca[key]}
                                    disabled={enable[key]} 
                                    placeholder="Marca"
                                    />
                                    {Object.keys(suggestionsMarca).map((i)=>
                                    <div 
                                    key={i} 
                                    className="selectCliente" 
                                    onClick={() => onSuggestHandlerMarca(suggestionsMarca[i].marca_nombre,key)}
                                    >
                                        {suggestionsMarca[i].marca_nombre}
                                    </div>
                                    )}
                                </td>
                                <td width={"200px"}>
                                    {" "}
                                    <select 
                                    id="lista-opciones" 
                                    name="sp_id_categoria" 
                                    defaultValue={props.sp[key].sp_id_categoria} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}>
                                        <option value={0}></option>
                                        <option value={1}>Tecnología Principal</option>
                                        <option value={2}>Sub-tecnología</option>
                                        <option value={3}>Equipamiento</option>
                                        <option value={4}>Licencia</option>
                                        <option value={5}>Soporte</option>
                                        <option value={6}>Implementación</option>
                                    </select>
                                </td> 
                                <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_comentarios} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_comentarios" 
                                    ></input>
                                </td>
                             {/*    <td>
                                    <button 
                                    className="btn btn-primary eliminar"
                                    onClick={()=>{SendDeleteSP(props.sp[key].sp_id_precio)}}
                                    >

<i class="bi bi-trash-fill"></i>
                                    
                                    
                                    
                                     </button>
                                </td> */}



                                <td>
                                    <button 
                                    className="btn btn-primary Ver" 
                                    onClick={() => {
                                        getDatosPrecios(props.sp[key].sp_id); 
                                        habilitar1(key);
                                        getNameSp(props.sp[key]);
                                    }}
                                    >
                                      <i className=     {textBVer[key]}  ></i>
                                   
                                    </button>
                                </td>



                           {/*      <td>
                                <button 
                                    className="btn btn-primary Mod" 
                                    onClick={()=>{
                                        habilitar(key); 
                                        props.envioDataSP(nombreProv, props.proveedores,nombreMarca, listaMarca, data, key, datos);
                                        props.setfirst(activar[key]);
                                    }}
                                    >{textBModificar[key]}
                                    </button> 
                                </td>  */}



                            </tr>  
                            
                            
                            ))}
                        </tbody>                
                </Table>
                {show ? (
                                <></>
                            ):(
                            <>
                            {/*=================== Botón Mostrar Lista DIV =====================*/}
                            <br />
                                <CrudPrecios2
                                precios={listaPrecios}
                                setfirst={setfirst}
                                envioDataPrecio={envioDataPrecio}
                                proyecto={props.proyecto}
                                partida={props.partida}
                                np={npSP}
                                des={desSP}
                                estado={true}
                                />    
                            </>
                            )}
                
            {/* </form> */}
        </div>
    )
}