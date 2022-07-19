import React from "react";
import { Redirect, Route } from "react-router"
import ValidaRol from './ValidaRol';
import {i} from './ValidaRol';

//Validacion de Usuario Administrador

function actualizapage(){
  window.location.href="";
}

let  auth = true;

if(i=== "administrador-n3"){

  auth = true;
}else{
  auth = false;
}


const AdministradorN3= ({component:Component, ...rest}) => {
    <ValidaRol />

    if( i==="administrador-n3"){
//console.log("Hola Venta")

return (
    
    <Route {...rest}>{auth? <Component/> : <Redirect to ="../"/>}   </Route>  

    
      
  )
    }else{
        //console.log("No soy  de Ventas")

    }
    return (null )
    
}



export  default AdministradorN3