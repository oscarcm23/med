import React from 'react'
import { Table } from 'react-super-responsive-table';



function AntecedentesPatologicos() {
    return (
        <div className='datos-generales'>
            <br />


            <div className='titulo'>
                <p >Antecedentes patológicos generales</p>
                <p>¿Ha existido alguno de los siguientes casos en la familia del paciente?</p>

            </div>


            <div id='left'>
                <select id="patología" name="">
                    <option value={0}>--Seleccione Casos</option>
                    <option value={1}>Problemas del Corazón</option>
                    <option value={2}>Diabetes</option>
                </select>


            </div>
            <div id='right'>
                <Table >
                    <thead>
                        <tr >
                            <th className='color-table'> Casos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-td'>
                                <p>Diabetes</p>


                                <p>Enfermedades del Corazón</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>



        </div>
    )
}

export default AntecedentesPatologicos