import React from 'react'
import { Table } from 'react-super-responsive-table';




function RegisterPatients() {
  return (
    <div className=''>
    <div id='content'>

    <div id='left'>
            <Table >
                {/*========================== Titulos Tabla ==========================*/}
                <thead>
                    <tr >
                        <th >Datos Personales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>

                            <input placeholder='Nombre(s)' />
                            <br />
                            <input placeholder='Apellido Paterno' />
                            <br />
                            <input placeholder='Apellido Materno' />
                            <br />


                            <div className='div-direccion'>                
                            <select id="rol" name="">
                                <option value={0}>--Seleccione Sexo</option>
                                <option value={1}>Femenino</option>
                                <option value={2}>Masculino</option>
                            </select>


                            <select id="rol" name="">
                                <option value={0}>Edad</option>
                                <option value={1}>19</option>
                                <option value={2}>20</option>
                                <option value={2}>...</option>
                            </select>
                            
                            </div>
                            <input placeholder='CURP' />
                            <br />
                            <input placeholder='RFC' />
                            <br />
                            <input placeholder='Número de Seguridad Social (NSS)' />
                            <br />
                            <input placeholder='Teléfono' />
                            <br />
                
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>

        <div id='left'>
            <Table >
                {/*========================== Titulos Tabla ==========================*/}
                <thead>
                    <tr >
                        <th >Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>
                            <div className='div-direccion'>
                                <input className='input-direccion' placeholder='Calle' />
                                <br />
                                <input className='input-direccion' placeholder='Colonia' />
                            </div>
                            <br />

                            <div className='div-direccion'>
                                <input className='input-direccion' placeholder='No. Exterior' />
                                <br />
                                <input className='input-direccion' placeholder='No. Interior' />
                                <br />
                                <input className='input-direccion' placeholder='C.P.' />
                            </div>
                            <br />

                            <select id="rol" name="">
                                <option value={4}>-Seleccione Estado</option>
                                <option value={1}>Aguascalientes</option>
                                <option value={2}>Baja California</option>
                                <option value={3}>Baja California Sur</option>
                                <option value={4}>Campeche</option>
                                <option value={5}>Chiapas</option>
                                <option value={6}>Chihuahua</option>
                                <option value={7}>Ciudad de México</option>
                                <option value={8}>Coahuila</option>
                                <option value={9}>Colima</option>
                                <option value={10}>Durango</option>
                                <option value={11}>Estado de México</option>
                                <option value={12}>Guanajuato</option>
                                <option value={13}>Hidalgo</option>
                                <option value={14}>Jalisco</option>
                                <option value={15}>Michoacán</option>
                                <option value={16}>Morelos</option>
                                <option value={17}>Nayarit</option>
                                <option value={18}>Nuevo León</option>
                                <option value={19}>Oaxaca</option>
                                <option value={20}>Puebla</option>
                                <option value={21}>Querétaro</option>
                                <option value={22}>Quintana Roo</option>
                                <option value={23}>San Luis Potosí</option>
                                <option value={24}>Sinaloa</option>
                                <option value={25}>Sonora</option>
                                <option value={26}>Tabasco</option>
                                <option value={27}>Tamaulipas</option>
                                <option value={28}>Tlaxcala</option>
                                <option value={29}>Veracruz</option>
                                <option value={30}>Yucatán</option>
                                <option value={31}>Zacatecas</option>
                            </select>
                            <br />

                            <select id="rol" name="">
                                <option value={17}>-Seleccione Delegación/Municipio</option>
                                <option value={1}>Azcapotzalco</option>
                                <option value={2}>Coyoacán</option>
                                <option value={3}>Cuajimalpa de Morelos</option>
                                <option value={4}>Gustavo A. Madero</option>
                                <option value={5}>Iztacalco</option>
                                <option value={6}>Iztapalapa</option>
                                <option value={7}>La Magdalena Contreras</option>
                                <option value={8}>Milpa Alta</option>
                                <option value={9}>Álvaro Obregón</option>
                                <option value={10}>Tláhuac</option>
                                <option value={11}>Tlalpan</option>
                                <option value={12}>Xochimilco</option>
                                <option value={13}>Benito Juárez</option>
                                <option value={14}>Venustiano Carranza</option>
                                <option value={15}>Miguel Hidalgo</option>
                                <option value={16}>Cuauhtémoc</option>
                            </select>


                            <br />

                            <p>Examén Médico</p>

                            <select id="rol" name="">
                                <option value={0}>--Asigne  Médico responsable</option>
                                <option value={1}>Médico 1</option>
                                <option value={2}>Médico 2</option>
                            </select>

                            <br />

                            <select id="rol" name="">
                                <option value={0}>--Horarios Disponibles</option>
                                <option value={1}>9:00 am</option>
                                <option value={2}>9:20 am</option>
                            </select>

                            <br />
                           

                           
                        <button className='buton-registrar'>Registrar</button>
                        </td>

                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
</div>
  )
}

export default RegisterPatients