import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../../Componentes/Animaciones";
import { categoriasUnicas,   totalCategoriasUSD2  , stringDolar  , precioVenta3 } 
     from "../../Operaciones/OperacionesAM";




function Categorias() {
  return (
    
    <div className="contenido-usuarios">

       <br/>

          {/*   <div> <Animaciones mytext="Resumen Categorias" /> </div>
  */}
            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>

                <tr className="titulo-tabla-usuarios">
                        <th className='titulo-tabla'>Resumen Categorias</th>
                  
                    </tr>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Descripción</th>
                        <th > Total </th>
                        <th > Total Precio Venta </th>
                        <th > Divisa </th>
                     {/*    <th>  % </th>
                        <th>Proporcional MESA DE AYUDA </th>
                        <th>TOTAL</th>
                        <th>TOTAL MENSUAL</th>
                        <th>Financiamiento</th>
                        <th>Editar</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(categoriasUnicas).map((key) => (
                        <tr key={key}>
                            
                            {/*================= Descripción  ==================*/}
                            <td>{categoriasUnicas[key]}</td>

                            <td>{"$ "}{totalCategoriasUSD2[key]}</td>


                        
                            <td  className='azul'>{"$ "}{precioVenta3[key]}</td>



                        {/*    <td>{"$ "}{precioVenta[(partidasUnicas.length - 1) + parseFloat(key)]}</td>
 */}
                            <td  width={"100px"}>{stringDolar}</td>
                            {/*================= Precio Venta ==================*/}
                          
                        </tr>
                    ))}
                </tbody>
            </Table>




        
    </div>
  )
}

export default Categorias