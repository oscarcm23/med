import React from 'react'
import { Table } from 'react-super-responsive-table';


function DatosGenerales() {
    return (
        <div className='datos-generales'>
            <br />


  <div className='titulo'>
  <p >Datos Generales</p>
  </div>
          
            <Table >     
                <thead>
                    <tr >
                        <th className='color-table'> Nombre Completo</th>
                        <th  >  </th>
                        <th className='color-table' > NSS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className='border-td'>
                            <p> Manuel Martinez Ortega</p>
                        </td>
                        <td width={"600px"}>
                            
                        </td>
                        <td  className='border-td'>
                            <p>01023655587</p>
                        </td>
                    </tr>
                </tbody>
            </Table>



<br/>

            <Table >     
                <thead>
                    <tr >
                        <th className='color-table'>Sexo</th>                  
                        <th className='color-table' >Edad</th>
                        <th className='color-table'> Dirección</th>                  
                        <th className='color-table' >RFC</th>
                        <th className='color-table'>Teléfono</th>                  
                        <th className='color-table' >Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className='border-td'>
                            <p> Masculino</p>
                        </td>
                     
                        <td  className='border-td'>
                            <p>32</p>
                        </td>

                        <td  className='border-td'>
                            <p> icono</p>
                        </td>
                     
                        <td  className='border-td'>
                            <p>MA0M750312H65</p>
                        </td>


                        <td  className='border-td'>
                            <p> 5569854123</p>
                        </td>
                     
                        <td  className='border-td'>
                            <p>manu@gmail.com</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DatosGenerales