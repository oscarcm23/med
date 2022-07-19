import React from 'react'
import { Table } from 'react-super-responsive-table';


function Pulso() {
  return (
    <div  className='datos-generales'>


<div>

<div className='titulo'>
        <p >Pulso:</p>
        <p>*En caso de extras´sitoles practicar la prueba de esfuerzo al margen 3A. El solicitante practicará el ejercicio
            físico(sentadillas,carrera estacionaría, etc.) de modo que su frecuencía se incremente
            al 100/min. minimo, registrado en el pulso como se solicita.
 

        </p>
    </div>

        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'> Tipo de esfuerzo</th>
                    <th className='color-table'> ¿Es rítmico?</th>
                    <th className='color-table'> Número de extrasístoles por miuto</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>En reposo</p>
                    </td>


                    <td className='border-td'>
                        <p>Si</p>
                    </td>

                    <td className='border-td'>
                        <p>5</p>
                    </td>



                </tr>
            </tbody>
        </Table>

        </div>





        <div>


<br/>
<div className='titulo'>
        <p >Presión arterial (método ausculatorio):</p>
        <p>*En caso de encontrar cifras superiores a los 140/90 hacer dos lecturas adicionales a margen 4A
        </p>
    </div>

        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'>No. de lectura</th>
                    <th className='color-table'> Sistólica</th>
                    <th className='color-table'> Diastólica</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>1</p>
                    </td>


                    <td className='border-td'>
                        <p>169</p>
                    </td>

                    <td className='border-td'>
                        <p>45</p>
                    </td>
                </tr>
            </tbody>
        </Table>

        </div>








        


        <div>


<br/>
<div className='titulo'>
        <p >Región precordial:</p>
        <p>*En caso de cualquier antecedente o hallazgo cardiovascular, practicar el examén cardiovascular al margen 5A.
        </p>
    </div>

        <Table >
            <thead>
                <tr >
                    <th > + </th>
                    <th className='color-table'>Preguntas</th>
                    <th className='color-table'> Respuestas</th>
                    <th className='color-table'> Test</th>
                    <th> </th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-td'>
                        <p>x</p>
                    </td>


                    <td className='border-td'>
                        <p>¿Existe algún dato anormal a la palpación?</p>
                    </td>


                    <td className='border-td'>
                        <p>Sí</p>
                    </td>

                    <td className='border-td'>
                        <button className='btn buton-registrar'>
                            Realizar
                             examén cardiovascular
                            
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>

        </div>























    </div>
  )
}

export default Pulso