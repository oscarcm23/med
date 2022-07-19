import React from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export let authAdmin1;
export let authPreventa1;
export let authVenta1;
export let i = "";
//export let validator = cookies.get('rol');
export let validator = 'administrador-n1';

//ROLES   publico     administrador-n1       administrador-n2    administrador-n3


export function foo() {
    //console.log(Cookies.get('id_usuario'));
    if (validator === "administrador-n1") {
        i = "administrador-n1";
console.log("Hola admin-1-n1");

    } else if (validator === "administrador-n2") {
        i = "administrador-n2";
    } else if (validator === "administrador-n3") {
        i = "administrador-n3";
    } else {
        i = "null";

    }
   // console.log(i); // local
}
foo()



export default class ValidaUsuario extends React.Component {
    render() {
        

        if(this.state.rol[0]=== "administrador-n1"){
         //   console.log("soy admin");

            authAdmin1 =false;

            return(
                <div>
                    <h1></h1>
                </div>
            )
        }else if  (this.state.rol[0]=== "administrador-n2"){
        //    console.log("Soy Preventa");
            authPreventa1=true;
            return(
                <div>
                    <h1></h1>
                </div>
            )
        }else if  (this.state.rol[0]=== "administrador-n3"){
         //   console.log("Soy de Ventas");
            authVenta1=true;
            return(
                <div>
                    <h1></h1>
                </div>
            )
        }else{
            console.log("ERROR");
            return(
                <div>
                    <h1>Existe un Error;</h1>
                </div>
            )

        }

    }

}