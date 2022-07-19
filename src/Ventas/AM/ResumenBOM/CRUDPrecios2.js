
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'

//Componentes


import Animaciones from '../../../Componentes/Animaciones';
import { precioUnitario, calcularDescuento, Total}  from "../../../Preventa/PTN-BOM/Operaciones/Operaciones";
let validaOperacion = false;

export const CrudPrecios2 = (props) => {
    /*================================================== Partidas ==================================================*/
        /*========================= Editar =========================*/
        const [activar, setActivar] = useState(true)

        const [data,setData] = useState ({
            cantidad:'',
            precio_lista:'', 
            precio_unitario:'',
            precio_descuento:'',
            precio_total:'',
            precio_id_moneda:''
        });

        const handleInputChange = (event) => {
            setData ({
                ...data,[event.target.name] : event.target.value ,
            })
        }
        
        const [enable, setenable] = useState([]);
        const [datos, Setdatos] = useState();

        useEffect(() => {
            Setdatos(props.precios); 
        },[props.precios]);


        useEffect(() => {
            let i = Object.keys(props.precios)
            i = i.length
            //console.log(i)
            setenable(Array(i).fill(true)); 
        },[props.precios])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr = [] 
            let p = Object.keys(props.precios);
            p = p.length;
            for (let i = 0 ; i < p ; i++){
                if(i === key){
                    newArr[i]=!enable[i];
                }
                if(i !== key){
                    newArr[i]=true;
                }
            }   
            setenable(newArr); 

            setActivar(!activar);
            if(activar === true){   
                if(props.estado){
                    setData ({
                        ...data, cantidad: props.precios[key].sp_cantidad,
                                precio_lista:props.precios[key].precio_lista, 
                                precio_unitario:props.precios[key].precio_unitario,
                                precio_descuento:props.precios[key].precio_descuento,
                                precio_total:props.precios[key].precio_total  
                    })
                }else{
                    setData ({
                        ...data, cantidad: props.precios[key].cd_cantidad,
                                precio_lista:props.precios[key].precio_lista, 
                                precio_unitario:props.precios[key].precio_unitario,
                                precio_descuento:props.precios[key].precio_descuento,
                                precio_total:props.precios[key].precio_total  
                    })
                }  
            }  
        }
        /*==========================================================*/

    function checa(){

        validaOperacion = !validaOperacion;
        
    }
            
///CALCULAR DESCUENTO
      /*================================================================================*/
      useEffect(()=>{

        if(data.precio_lista !=='' && data.precio_unitario !==''  && validaOperacion === false){
          const desc = calcularDescuento(data.precio_lista, data.precio_unitario);
          const total = Total(data.precio_unitario,data.cantidad)
          setData({ ...data,precio_total:total, precio_descuento: desc });}
       
        if(data.precio_lista === '' || data.precio_unitario === ''){
          setData({ ...data,precio_descuento:''});
        }

        },[data.cantidad,data.precio_lista,data.precio_unitario])


///CALCULAR PRECIO UNITARIO
      /*===================================================================================================================*/
      useEffect(()=>{
        let precio_u='';
        if (data.precio_lista !== '' &&  data.precio_descuento !== ''  &&  validaOperacion ===true) {
          precio_u = precioUnitario(data.precio_lista, data.precio_descuento);
          const total = Total(precio_u, data.cantidad);
          if( data.precio_descuento < 0 || data.precio_descuento > 100 ){
          // alert("Advertencia Porcentaje Invalido")
          }
          setData({ ...data, precio_total:total,precio_unitario:precio_u});
        }
      
      },[data.precio_descuento,data.precio_lista,data.cantidad])

      //OBTENER TOTALES

//checar
           /*===================================================================================================================*/
           useEffect(()=>{

            if(data.precio_unitario === '' || data.cantidad === ''){
              setData({ ...data,precio_total:''});
            } 
          
          },[,data.precio_unitario,data.cantidad])

    return (
        <div>
           {/* <form> */}
          {/*  <Animaciones mytext="Precios" /> */}
            <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                <thead>
                    {/* <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>{props.proyecto}</th>
                    </tr>
                    <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>{`Partida: ${props.partida}`}</th>
                    </tr> */}
                    {/* <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>{`Servicio/Producto:`}</th>
                    </tr>
                    <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>{`   No. de Parte: ${props.np}`}</th>
                    </tr> */}
                    {/* <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>{`   Descripción: ${props.des}`}</th>
                    </tr> */}

                       <tr className="titulo-tabla-usuarios">
                        <th></th>
                        <th className='titulo-tabla'>Precios</th>
                  
                      {/*   <th>Modificar</th> */}
                    </tr>
                    <tr className="titulo-tabla-usuarios">
                        <th>ID</th>
                        <th>Función</th>
                        <th>Cantidad</th>
                        <th>Precio Lista</th>
                        <th>Precio Unitario</th>
                        <th>Desc(%)</th>
                        <th>Precio Total</th>
                        <th>Moneda</th>
                      {/*   <th>Modificar</th> */}
                    </tr>
                    </thead>

                    <tbody>
                        {Object.keys(props.precios).map((key) => (    
                        <tr key={key}>
                            <td>{props.precios[key].precio_id}</td>
                            <td>
                                <label className="switch">
                                <input type="checkbox" id="checa"     onClick={checa}/>
                                <span className="slider"></span>
                                </label>   
                            </td>
                            <td width={"50px"}>
                                <input
                                className="input-name"
                                type="number" 
                                placeholder={activar ? 
                                    (props.estado ? props.precios[key].sp_cantidad : props.precios[key].cd_cantidad) : ""}
                                value={data.cantidad}
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="cantidad"
                                ></input>
                            </td>
                            <td width={"250px"}>
                                <input
                                className="input-name"
                                type="number" 
                                placeholder={activar ? props.precios[key].precio_lista : ""} 
                                value={data.precio_lista}
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_lista" 
                                ></input>  
                            </td> 
                            <td  width={"250px"}>
                                <input
                                className="input-name"
                                type="number" 
                                placeholder={activar ? props.precios[key].precio_unitario : ""} 
                                value={data.precio_unitario}
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_unitario" 
                                ></input>  
                            </td>  
                            <td width={"100px"}>
                                <input
                                className="input-name"
                                type="number" 
                                placeholder={activar ? props.precios[key].precio_descuento : ""} 
                                value={data.precio_descuento}
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_descuento" 
                                ></input>  
                            </td> 
                            <td width={"250px"}>
                                <input
                                className="input-name" 
                                placeholder={props.precios[key].precio_total} 
                                value={data.precio_total}
                                //disabled={true}
                                readOnly
                                disabled={true} 
                                //onChange={handleInputChange}
                                name="precio_total" 
                                ></input>  
                            </td> 
                            <td width={"100px"}>
                                <select 
                                id="lista-opciones" 
                                name="precio_id_moneda" 
                                value={props.precios[key].precio_id_moneda} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                >
                                    <option value={0}></option>
                                    <option value={1}>MXN</option>
                                    <option value={2}>USD</option>
                                </select>
                            </td>
                            {/* <td>
                                <button 
                                className="btn btn-primary Mod"
                                onClick={()=>{
                                    habilitar(key); 
                                    props.envioDataPrecio(props.estado,datos, key, data);
                                    props.setfirst(activar);
                                }}
                                >
                                    

                                    <i className= {activar ? "bi bi-pencil-square" : "bi bi-check-lg"}></i>
                                </button>
                            </td>     */}
                        </tr>  
                        ))
                        }
                    </tbody>
            </Table>
            {/* </form> */}
        </div>
    )
}