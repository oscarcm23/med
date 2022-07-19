import axios from 'axios';
import {url, url2} from "../../../Componentes/Ocultar";
import { pEstatus, pId } from './CRUDProyectos';
import { hoy } from '../Menu-Bom/NuevoProyecto';

export const EditSP = () => {
    
    const actualizacionSP = (nombreProv, dataProv, nombreMarca, dataMarca, data,newData)=>{

        const proveedorId = {proveedor_id:''}
        let i = Object.keys(dataProv);
        for (let c = 0; c < i.length; c++) {
            if (nombreProv === dataProv[c].proveedor_nombre){
                proveedorId.proveedor_id = dataProv[c].proveedor_id;
            }
        }
       
        const marcaId = {marca_id:''}
        let m = Object.keys(dataMarca);
        for (let c = 0; c < m.length; c++) {
            if (nombreMarca === dataMarca[c].marca_nombre){
                marcaId.marca_id= dataMarca[c].marca_id;
            }
        }
        
        SendEditProy(proveedorId.proveedor_id, marcaId.marca_id,data,newData,data.sp_id) 
   }
   
    async function SendEditProy (proveedor_id, marca_id, dataSP,newDataSP,sp_id){
        const dataActualizacion ={
                sp_id_spnp:dataSP.sp_id_spnp,
                sp_id_spd:dataSP.sp_id_spd,
                sp_meses:dataSP.sp_meses,
                sp_semanas:dataSP.sp_semanas,
                sp_id_categoria:dataSP.sp_id_categoria,
                sp_comentarios:dataSP.sp_comentarios
        }
        
        const dataFM = {
            proyecto_fecha_modificacion:hoy
        }

        const dataSpnp = {
            spnp_np: ''
        }
      
          const dataSpd = {
            spd_des: ''
        }

        // Almacenamiento del id del spnp = no_parte
        let spnp = {spnp_id:''}
        // Almacenamiento del id del spd = descripción
        let spd = {spd_id:''}
        const resSP = await axios.get(url +'/api/cotizador/sp/viewFindSP');
        // Obtención del id del no_parte y descripción
        let n = Object.keys(resSP.data.data);
        for (let c = 0; c < n.length; c++) {
            if (newDataSP.sp_no_parte === resSP.data.data[c].spnp_np && newDataSP.sp_no_parte !== '') {
                spnp.spnp_id = resSP.data.data[c].spnp_id;
                dataActualizacion.sp_id_spnp = spnp.spnp_id;
            }       
            if (newDataSP.sp_descripcion === resSP.data.data[c].spd_des && newDataSP.sp_descripcion !== '') {
                spd.spd_id = resSP.data.data[c].spd_id;
                dataActualizacion.sp_id_spd = spd.spd_id;
            }     
        }

        // if(spnp.spnp_id !== '' && spnp.spnp_id !== dataSP.spnp_id){
        //     dataActualizacion.sp_id_spnp = spnp.spnp_id;
        // }else{
        //     const resSpnp = await axios.post(url + '/api/cotizador/sp/agregarSpnp', dataSpnp);
        //     dataActualizacion.sp_id_spnp = resSpnp.data.data.insertId;
        // }

        // // Obtención del Id de la descripción de un servicio/producto 
        // if(spd.spd_id !== '' &&  spd.spd_id !== dataSP.spd_id){
        //     dataActualizacion.sp_id_spd = spd.spd_id;
        // }else{
        // const resSpd = await axios.post(url + '/api/cotizador/sp/agregarSpd', dataSpd);
        //     dataActualizacion.sp_id_spd = resSpd.data.data.insertId;
        // }

        const k = Object.keys(newDataSP);
        for(let keys of k){
            if(newDataSP[keys] !== ''){
                dataActualizacion[keys] = newDataSP[keys];
            }
        }

        if(pEstatus === 'En revision'){
            alert('El proyecto no puede ser editado porque se encuentra En revision')
        }else if(pEstatus === 'Aceptado'){
            alert('El proyecto no puede ser editado porque ha sido Aceptado')
        }else{
            try{
                //console.log(proveedor_id);
                //console.log(marca_id);
                //console.log(dataActualizacion);
                await axios.put(url2 +`/api/cotizador/proyecto/updateFM/${pId}`, dataFM);
                if(proveedor_id !== dataSP.proveedor_id && proveedor_id !== '' && marca_id !== dataSP.marca_id && marca_id !== ''){
                    // console.log(proveedor_id);
                    // console.log(marca_id);
                    await axios.post(url2 + `/api/cotizador/sp/edit/${sp_id}/${proveedor_id}/${marca_id}`, dataActualizacion);
                }else if(proveedor_id === dataSP.proveedor_id && marca_id !== dataSP.marca_id && marca_id !== ''){
                    // console.log(dataSP.proveedor_id);
                    // console.log(marca_id);
                    await axios.post(url2 +`/api/cotizador/sp/edit/${sp_id}/${dataSP.proveedor_id}/${marca_id}`, dataActualizacion);
                }else if (proveedor_id === '' && marca_id === ''){
                    // console.log(dataSP.proveedor_id);
                    // console.log(dataSP.marca_id);
                    await axios.post(url2 + `/api/cotizador/sp/edit/${sp_id}/${dataSP.proveedor_id}/${dataSP.marca_id}`, dataActualizacion);
                }else if (proveedor_id === dataSP.proveedor_id && marca_id === dataSP.marca_id){
                    // console.log(dataSP.proveedor_id);
                    // console.log(dataSP.marca_id);
                    // if(spnp.spnp_id !== '' ){
                    //     dataActualizacion.sp_id_spnp = spnp.spnp_id;
                    // }else{
                    //     const resSpnp = await axios.post(url + '/api/cotizador/sp/agregarSpnp', dataSpnp);
                    //     dataActualizacion.sp_id_spnp = resSpnp.data.data.insertId;
                    // }

                    // // Obtención del Id de la descripción de un servicio/producto 
                    // if(spd.spd_id !== '' ){
                    //     dataActualizacion.sp_id_spd = spd.spd_id;
                    // }else{
                    // const resSpd = await axios.post(url + '/api/cotizador/sp/agregarSpd', dataSpd);
                    //     dataActualizacion.sp_id_spd = resSpd.data.data.insertId;
                    // }
                    await axios.post(url2 + `/api/cotizador/sp/edit/${sp_id}/${dataSP.proveedor_id}/${dataSP.marca_id}`, dataActualizacion);
                }
                alert('Servicio/Producto editado exitosamente');
            }catch (error){
                console.log(error);
                alert('Edición del servivio/producto invalido');
            }
        }
        
    }

    /*===========================================================================================================*/
    return {
        actualizacionSP
    }
};