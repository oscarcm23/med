/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import logo from "../../../images/logo.png";
import ExportarPDF from './ExportarPDF';
import infPartida from './ModalPartida'
import ModalPartida from './ModalPartida';
import {Cantidad , name_cliente  , clave_p , descripcionGeneral , partidasUnicas2 , 
  TOTALSTRING , totD , totD2, totMensual, mesesMensual, totalMen,  totalMenIva,
  totalMensual}from "../../../Ventas/Operaciones/OperacionesAM";
import {name_encargado, cargo , nombreP} from './ExportarPDF';
let validaOperacion = false;
export let datos ={}
export let datos2 =[];




function checa(){
   
  validaOperacion = !validaOperacion;
/*   console.log(descripcionGeneral);
  console.log(datos2); */
  }
  


var condicionesC = "CONDICIONES COMERCIALES \n"+
" • La vigencia de la presente propuesta es de 10 días naturales. \n"+
" • La propuesta contempla el servicio para  \n"+
" • La forma de pago será en mensualidades de  \n"+
" • Esta propuesta contempla los servicios de ENERO 2022 al mes de DICIEMBRE 2022. \n"+
" • Los precios están expresados en moneda nacional. \n"+
" • Los retrasos en pagos generarán un interés moratorio del 0.2% por cada día de atraso en el pago. \n"+
" • El cargo por refacturación es de 200.m.n. + IVA ";


const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
export const fecha = hoy.toLocaleDateString();

function Formulario() {
  //console.log('Proyecto:',clave_p)
  const [data,setData] = useState ({
    nombre:'De',
    servicios:'',
    firma:'',
    puesto: '',
    nombreP: '',
    condiciones: condicionesC,
    
  });


  const handleChange =(event)=>{
    setData ({
      ...data,[event.target.name] : event.target.value ,
  });
  }
  const [show , setshow]=useState(false)
  
  const enviar =(inf)=>{
    datos=data
    if (inf === ''){
      datos2=descripcionGeneral;
    }
    else{
      datos2 = inf
      
    }
    datos2=descripcionGeneral
    console.log(datos);
    setTimeout(function(){
      setshow(false);
   
  }, 3000);
  
  }
  
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="contenido-usuarios">




<div className="contenedor">
  <h1 className="logo">
    <span className="nombre-empresa">Datos</span> Propuesta Económica</h1>
  <div className="wrapper animated bounceInLeft">
    <div className="info-empresa">
      <h3><img className="logoPropuesta" src={logo}></img></h3>
      <div className='divServicios'>
        <ul className="servicios serviciosPropuestaEc">
          <li><i className="bi bi-geo-alt-fill" />  </li>
          <li><i className="bi bi-telephone-fill" /> </li>
          <li><i className="bi bi-envelope-fill" /> </li>
        </ul>
        <ul className="servicios serviciosPropuestaEc">
          <li>Carretera México Toluca #5420 Piso 21, Col. El Yaqui, Del. Cuajimalpa, C.P. 05320, Ciudad de México. </li>
          <li>6843-4433</li>
          <li>contacto@palotinto.com</li>
        </ul>
      </div>
    </div>
    <div className="contacto">
      <h3>Datos Propuesta</h3>
      <form className="formulario" >
        <p>
          <label>Proyecto</label>
          <input type="text" onChange={handleChange} name="nombre"  defaultValue={clave_p}  />
        </p>


        <p>
          <label>Nombre</label>
          <input type="text" onChange={handleChange} name="nombreP"  defaultValue={nombreP}  />
        </p>


        <p>
          <label>Nombre Responsable</label>
          <input type="text" onChange={handleChange} name="firma"   defaultValue={name_encargado}  />
        </p>


        <p>
          <label>Nombre Proyecto</label>
          <input type="text" onChange={handleChange} name="servicios"   defaultValue={name_cliente}  />
        </p>


        <p>
          <label>Nombre Cargo</label>
          <input type="text" onChange={handleChange} name="cargo"   defaultValue={cargo}  />
        </p>

    
        <p>
          <label>Fecha</label>
          <input type="text" name="fecha"  defaultValue={fecha} />
        </p>

       
     {/*    <p>
         
          <label className="switch2"> 
                <input type="checkbox" id="checa"     onClick={checa}/>
                <span className="slider2"></span>
                </label>  
        </p> */}

     
        
        <p >
  

          
        <button type="button" className="btn btn-primary Mod" onClick={()=>{ setshow(!show); enviar(infPartida)}}>
        <span>Captura de información</span>

          </button>

        </p>
        



      <p>
      <button type="button" className="btn btn-primary Mod" onClick={() => {setModalShow(true);}} >
          <span>partida</span>

          </button>
      </p>
        
          {modalShow  ?   
          <ModalPartida
          show={modalShow}
          partida={descripcionGeneral}
          onHide={() => setModalShow(false)}  
             />:  ''  } 
        
        
</form>


        <p className="full">
          <label>Condiciones Comerciales</label>
          <textarea id="txt" onChange={handleChange} name="condiciones" defaultValue={condicionesC} />
        </p>

  





<div>


{ show ? <ExportarPDF/> : ''}

</div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Formulario