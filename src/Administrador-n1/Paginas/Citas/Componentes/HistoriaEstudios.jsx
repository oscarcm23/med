import React from 'react'
import { Table } from 'react-super-responsive-table';



function HistoriaEstudios() {
  return (
    <div  className='datos-generales'>

      

<div className='titulo'>
        <p >Historia de estudios de laboratorio:</p>
    </div>



        <div>
        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'> Estudio</th>
                    <th className='color-table'> Fecha</th>
                    <th className='color-table'> Descripción Detallada</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>Urianálisis</p>
                    </td>


                    <td className='border-td'>
                        <p>12/12/20</p>
                    </td>

                    <td className='border-td'>
                        <p>Lorem Ipsum   text area</p>
                    </td>



                </tr>
            </tbody>
        </Table>

        </div>



<div>

<div className='titulo'>
        <p >Exploración física:</p>
    </div>


                           <div className='div-direccion'>
                                <input className='input-direccion' placeholder='Estatura' />
                                <br />
                                <input className='input-direccion' placeholder='Peso (kg)' />
                                <br />
                                <input className='input-direccion' placeholder='Indice masa coorporal' />
                            </div>

                            <br/>
 <div className='titulo'>
        <p >Perímetro de tórax a nivel del apéndice xifoides</p>
    </div>



                           <div className='div-direccion'>
                                <input className='input-direccion' placeholder='Perímetro del abdomen a nivel ombligo (cms)' />
                                <br />
                                <input className='input-direccion' placeholder='En inspiración plena (cms)' />
                              
                            </div>

<br/>

                            <div className='div-direccion'>
                              
                                <input className='input-right' placeholder='En inspiración forzada(cms)' />
                              
                            </div>

</div>
        


    </div>
  )
}

export default HistoriaEstudios