import React from 'react'
import { Table } from 'react-super-responsive-table';


function HistoriaFamiliar() {
  return (
    <div className='datos-generales'>
    <br />




<div  className='historia-familiar'>
    <div className='titulo'>
        <p >Historia Familiar:</p>
    </div>



        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'> Parentesco</th>
                    <th className='color-table'> Edad</th>
                    <th className='color-table'> Estado de salud</th>
                    <th className='color-table'> Edad a su muerte</th>
                    <th className='color-table'> Causa de muerte</th>
   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>Padre</p>
                    </td>


                    <td className='border-td'>
                        <p>32</p>
                    </td>

                    <td className='border-td'>
                        <p>Saludable</p>
                    </td>

                    <td className='border-td'>
                        <p>-</p>
                    </td>

                    <td className='border-td'>
                        <p>-</p>
                    </td>



                </tr>
            </tbody>
        </Table>

        </div>










        

<div  className='historia-familiar'>
    <div className='titulo'>
        <p >Hábitos (drogras, tabaco, alcohol, etc.):</p>
    </div>



        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'> Tipo de droga</th>
                    <th className='color-table'> Tiempo de consumo</th>
                    <th className='color-table'> Frecuencia</th>
                    <th className='color-table'> Observaciones</th>
  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>Tabaco</p>
                    </td>


                    <td className='border-td'>
                        <p>+ 5 años</p>
                    </td>

                    <td className='border-td'>
                        <p>De 2 a 3 dias por semana</p>
                    </td>

                    <td className='border-td'>
                        <p>Tuvo problemas en los pulmones</p>
                    </td>

                </tr>
            </tbody>
        </Table>

        </div>










        
<div  className='historia-familiar'>
    <div className='titulo'>
        <p >Hábitos alimenticios y deportes (último año):</p>
    </div>



        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'> Kg aumentados</th>
                    <th className='color-table'> Kg Disminuidos</th>
                    <th className='color-table'> Frecuencia de actividad física</th>
                    <th className='color-table'> Tipo de actividad física</th>
  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>5</p>
                    </td>


                    <td className='border-td'>
                        <p>0</p>
                    </td>

                    <td className='border-td'>
                        <p>De 2 a 3 dias por semana</p>
                    </td>

                    <td className='border-td'>
                        <p>Atletismo</p>
                    </td>

                </tr>
            </tbody>
        </Table>

        </div>




        <div  >


        <div className='titulo'>
        <p >Antecedentes personales y padecimiento actual:</p>
    </div>


           <div id='left'  className='textarea'>


             <textarea name="textarea"
              rows="10" cols="50"
              placeholder='Describa el o los padecimientos actuales
              del paciente, así como toda la información relevante a ello '>
            </textarea>
            </div>


            <div id='right'  className='textarea'>

            <textarea name="" 
            rows="10" cols="50"
            placeholder='Describa el o los padecimientos que ha tenido en el pasado el 
            paciente, así como toda la información relevante a ello'>
          </textarea>
            </div>




        </div>




</div>
  )
}

export default HistoriaFamiliar