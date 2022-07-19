import React from "react";
import { Redirect, Route } from "react-router"
import ValidaRol from './ValidaRol';
import {i} from './ValidaRol';


//Validacion de Usuario Administrador
let  auth = true;

if(i === 'administrador-n1'){

  auth = true;
  
}else{
  auth = false;
}


const Administrador = ({component:Component, ...rest}) => {

    <ValidaRol />
    
    if( i=== "administrador-n1"){
//console.log("Hola Admin")

return (
    
    <Route {...rest}>{auth? <Component/> : <Redirect to ="/"/>}   </Route>  
      
  )
    }else{
   //     console.log("No soy Admin")

    }
    return (null )
    
}



export  default Administrador