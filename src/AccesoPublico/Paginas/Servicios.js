import React from 'react'
import Table from "react-bootstrap/Table";
import "./css/Servicios.css"

import a from "../../images/1.png"
import b from "../../images/2.png"
import c from "../../images/3.png"
import d from "../../images/4.png"



function Servicios() {
    return (

        <div className='Paginas '>

            <div className='servicios'>

            <div className='titulo'>
       <h1>Servicios</h1>
   </div>

                <Table responsive className="tab">
                    <thead>

                        {/*=================== Titulos Tabla Usuarios ====================*/}
                        <tr >
                            <th>ANÁLISIS CLÍNICOS</th>
                            <th>LABORATORIO</th>
                            <th>NUTRICIÓN</th>
                            <th>ULTRASONIDO</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/*=================== Contenido Tabla Usuarios =================*/}


                        <tr >
                            <td>
                                <img src={a} alt="Análisis" className='img-servicios' />
                            </td>
                            <td>
                                <img src={b} alt="Laboratorio" className='img-servicios' />
                            </td>
                            <td >
                                <img src={c} alt="Nutrición" className='img-servicios' />
                            </td>
                            <td>
                                <img src={d} alt="Ultrasonido" className='img-servicios' />
                            </td>

                        </tr >


                    </tbody>
                </Table>


                <Table responsive className="tab">
                    <thead>

                        {/*=================== Titulos Tabla Usuarios ====================*/}
                        <tr >
                            <th>ENDOSCOPÍA</th>
                            <th>TOMOGRAFÍA</th>
                            <th>MASTOGRAFÍA</th>
                            <th>RAYOS X</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/*=================== Contenido Tabla Usuarios =================*/}


                        <tr >
                            <td>
                                <img src={a} alt="Análisis" className='img-servicios' />
                            </td>
                            <td>
                                <img src={b} alt="Laboratorio" className='img-servicios' />
                            </td>
                            <td >
                                <img src={c} alt="Nutrición" className='img-servicios' />
                            </td>
                            <td>
                                <img src={d} alt="Ultrasonido" className='img-servicios' />
                            </td>

                        </tr >


                    </tbody>
                </Table>


                <Table responsive className="tab">
                    <thead>

                        {/*=================== Titulos Tabla Usuarios ====================*/}
                        <tr >
                            <th>CHECK UPS </th>
                            <th>CARDIOLOGÍA</th>
                            <th>SERVICIOS MÉDICOS </th>
                            <th>NEUROFISIOLOGÍA</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/*=================== Contenido Tabla Usuarios =================*/}


                        <tr >
                            <td>
                                <img src={a} alt="Análisis" className='img-servicios' />
                            </td>
                            <td>
                                <img src={b} alt="Laboratorio" className='img-servicios' />
                            </td>
                            <td >
                                <img src={c} alt="Nutrición" className='img-servicios' />
                            </td>
                            <td>
                                <img src={d} alt="Ultrasonido" className='img-servicios' />
                            </td>

                        </tr >


                    </tbody>
                </Table>

            </div>



        </div>
    )
}

export default Servicios