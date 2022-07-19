import React from "react";
import { Redirect, Route } from "react-router"
import ValidaRol from './ValidaRol';
import {i} from './ValidaRol';

//Validacion de Usuario Administrador

let  auth = true;

if(i=== "administrador-n2"){
  auth = true;
}else{
  auth = false;
}
const AdministradorN2= ({component:Component, ...rest}) => {
    <ValidaRol />

    if( i==="administrador-n2"){
//console.log("Hola Venta")

return (
    
    <Route {...rest}>{auth? <Component/> : <Redirect to ="/"/>}   </Route>  
      
  )
    }else{
    //    console.log("No soy  de Preventa")

    }
    return (null )
    
}



export  default AdministradorN2