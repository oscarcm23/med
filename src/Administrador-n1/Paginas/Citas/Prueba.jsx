import React from 'react'
import { Table } from 'react-super-responsive-table';

import { Icon } from '@iconify/react';
function Prueba() {
    return (
        <div  className='prueba '>



        

            <div >
  
<div  >
    <p><Icon icon="map:doctor" /> Nombre</p>
    </div>

                <Table >
                    {/*========================== Titulos Tabla ==========================*/}
                    <thead>
                        <tr>

                             <th></th>
                             <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className='prueban'>                                                     
                              <td>CURP:</td>  
                              <td> <input className='inp'/></td>                                                    
                        </tr>

                      
                        <tr className='prueban'>                                                     
                              <td>NSS</td>  
                              <td> <input    className='inp'/></td>                                                    
                        </tr>
                        <tr className='prueban'>                                                     
                              <td>Entidad de Nacimiento:</td>  
                              <td> <input  className='inp'/></td>                                                    
                        </tr>
                        <tr  className='prueban'>                                                     
                              <td>Fecha de cacimiento:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr className='prueban'>                                                     
                              <td>Edad:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr  className='prueban'>                                                     
                              <td>Clave de la Edad:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr className='prueban'>                                                     
                              <td>Sexo:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr className='prueban'>                                                     
                              <td>Indigena:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr className='prueban'>                                                     
                              <td>Seguro Popular:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr  className='prueban'>                                                     
                              <td>Prospera:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr  className='prueban'>                                                     
                              <td>DerechoHambiente:</td>  
                              <td> <input   className='inp'/></td>                                                    
                        </tr>
                        <tr  className='prueban'>                                                     
                              <td>Migrante:</td>  
                              <td> <input    className='inp'/></td>                                                    
                        </tr>
                    </tbody>
                </Table>

            </div>





        </div>
    )
}

export default Prueba