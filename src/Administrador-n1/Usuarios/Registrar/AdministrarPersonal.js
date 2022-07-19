import React from 'react'
import { Table} from 'react-super-responsive-table';
import '../../css/Clinica.css'
import { Icon } from '@iconify/react';

function adminPersonal() {
    const clinicas = [
        {   clinica: 'Clinica 1',
            telefono: 5569889465,
            correo: 'c1@gmail.com',
            ha: '9:00 - 24:00',
        },
        {   clinica: 'Clinica 2',
            telefono: 5598654512,
            correo: 'c2@gmail.com',
            ha: '9:00 - 24:00',
        },
        {   clinica: 'Clinica 3',
            telefono: 5578954681,
            correo: 'c3@gmail.com',
            ha: '9:00 - 24:00',
        }
    ];

    return (
        <div >
            <div id='content-clinica'>
                <Table >
                    {/*========================== Titulos Tabla ==========================*/}
                    <thead>
                        <tr className="titulo-tabla" >
                            <th className="titulo-columna">Clínica</th>
                            <th className="titulo-columna" >Teléfono</th>
                            <th className="titulo-columna">Correo</th>
                            <th className="titulo-columna">Horario de Atención</th>
                            <th className="titulo-columna">Dirección</th>
                            <th className="titulo-columna">Editar</th>
                            <th className="titulo-columna" >Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(clinicas).map((k)=>(
                            <tr className="titulo-tabla" key={k}>
                            <td>{clinicas[k].clinica}</td>
                            <td>{clinicas[k].telefono}</td>
                            <td>{clinicas[k].correo}</td>
                            <td>{clinicas[k].ha}</td>
                            <td><Icon icon="bi:eye-fill" width="20" color="#414370" height="20"/></td>
                            <td><Icon icon="clarity:note-edit-line" color="#414370" width="20" height="20" /></td>
                            <td><Icon icon="bi:trash" color="#414370" width="20" height="20" /></td>
                        </tr>
                        ))}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default adminPersonal