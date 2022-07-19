import React from 'react'
import { Table} from 'react-super-responsive-table';
import '../../css/personal.css'

function Personal() {
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
                                    {/* <label htmlFor="rol">Seleccione tipo de personal </label> */}
                                    <select id="rol" name="usuario_id_rol">
                                        <option value={4}>-Seleccione tipo de personal</option>
                                        <option value={1}>Salud</option>
                                        <option value={2}>Administrativo</option>
                                        <option value={3}>Obrero</option>
                                    </select>
                                    <br />
                                    <select id="rol" name="usuario_id_rol">
                                        <option value={14}>-Seleccione puesto</option>
                                        <option value={1}>Médico</option>
                                        <option value={2}>Bioanalista</option>
                                        <option value={3}>Técnico radiólogo</option>
                                        <option value={4}>Camillero</option>
                                        <option value={5}>Paramédico</option>
                                        <option value={6}>Farmaceútico</option>
                                        <option value={7}>Contador</option>
                                        <option value={8}>Administrador</option>
                                        <option value={9}>Relacionista Industrial</option>
                                        <option value={10}>Chofer</option>
                                        <option value={11}>Limpieza</option>
                                        <option value={12}>Cocinero</option>
                                        <option value={13}>Camarero</option>
                                    </select>
                                    <br />
                                    <input placeholder='Nombre(s)' />
                                    <br />
                                    <input placeholder='Apellido Paterno' />
                                    <br />
                                    <input placeholder='Apellido Materno' />
                                    <br />
                                    <input placeholder='CURP' />
                                    <br />
                                    <input placeholder='RFC' />
                                    <br />
                                    <input placeholder='Número de seguridad social (NSS)' />
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
                                   
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div id='right'>
                    <th >Documentación</th>

                    <span>   Acta de Nacimiento
                        <input type="file" name="archivosubido" />
                    </span>

                    <span>   Comprobante de Domicilio
                        <input type="file" name="archivosubido" />
                    </span>


                    <span>   Identificación :  *INE, *Cartilla Militar, *Licencia de Conducir
                        <input type="file" name="archivosubido" />
                    </span>
                </div>


                <div id='left' className='contenedor-datos-profesionales'>
                    <Table >
                        {/*========================== Titulos Tabla ==========================*/}
                        <thead>
                            <tr >
                                <th >Datos Profesionales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <input placeholder='Cédula Profesional' />
                                    <br />
                                    <input placeholder='Número de Cuenta de Nómina' />
                                    <br />
                                    <input placeholder='Télefono' />
                                    <br />
                                    <input placeholder='Correo' />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <div id='right' className='contenedor-documentacion-profesional'>
                    <th >Documentación Profesional </th>

                    <span>   Cédula Profesional / Constancia de Estudios
                        <input type="file" name="archivosubido" />
                    </span>

                    <span>   Constancia de antecedentes no penales
                        <input type="file" name="archivosubido" />
                    </span>


                    <span>   Constancia de buro de crédito
                        <input type="file" name="archivosubido" />
                    </span>


                    <span>   Comprobante del numero de cuenta de nómina
                        <input type="file" name="archivosubido" />
                    </span>


                    <span>  Cartas de Recomendación
                        <input type="file" name="archivosubido" />
                    </span>



                    <span>   Exámenes  psicométricos
                        <input type="file" name="archivosubido" />
                    </span>


                    <span>   Exámenes Socioeconómicos
                        <input type="file" name="archivosubido" />
                    </span>


                    <button className='buton-registrar'>Registrar</button>
                </div>
            </div>
        </div>
    )
}

export default Personal