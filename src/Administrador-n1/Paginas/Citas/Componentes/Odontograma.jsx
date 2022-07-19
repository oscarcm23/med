import React from 'react'
import { Table } from 'react-super-responsive-table';


function Odontograma() {
  return (
    <div className='datos-generales'>
    <br />

<button   className='btn buton-registrar'>

    Solicitar Odontograma
</button>



    <div >
    <div className='titulo'>
        <p >Resumen:</p>
        <p>*Ante cualquier respuesta afirmativa, dar información detallada</p>
    </div>



        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'> Preguntas</th>
                    <th className='color-table'> Respuestas</th>
                    <th className='color-table'> Detalles</th>

   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>¿Alguna anormalidad en su aspecto?</p>
                    </td>


                    <td className='border-td'>
                        <p>Sí</p>
                    </td>

                    <td className='border-td'>
                        <p>Lorem Ipsum dol text</p>
                    </td>
                
                </tr>
            </tbody>
        </Table>

        </div>


        <div>
        <br/>
        <Table >     
                <thead>
                    <tr >
                        <th className='color-table'> Fecha</th>
                        <th  >  </th>
                        <th className='color-table' > Consultorio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className='border-td'>
                            <p> 15/06/2021</p>
                        </td>
                        <td width={"600px"}>
                            
                        </td>
                        <td  className='border-td'>
                            <p>--select</p>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>


        <div >

            <br/>
        <div className='titulo'>
        <p >Médico responsable</p>  
          </div>



        <Table >
            <thead>
                <tr >
                    <th className='color-table'> Médico </th>
                    <th className='color-table'>Cédula profesional</th>
                    <th className='color-table'> Firma</th>
 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>Daniela Martínez  Martínez</p>
                    </td>


                    <td className='border-td'>
                        <p>351654156462</p>
                    </td>

                    <td className='border-td'>
                        <p>--seleccione archivo</p>
                    </td>
                
                </tr>
            </tbody>
        </Table>

        </div>
        






    </div>
  )
}

export default Odontograma