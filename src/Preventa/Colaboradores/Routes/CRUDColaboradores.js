import axios from 'axios';
import React from 'react'
import Table from 'react-bootstrap/Table'
import { url2 } from '../../../Componentes/Ocultar';


export const CrudColaboradores = (props) => {

    const deleteColab = async (cId) => {
        const confirmacion = window.confirm("¿Seguro que quieres borrar este Colaborador?" );
        if (confirmacion) {
            try {
                if(props.estado){
                    await axios.delete(url2 + `/api/cotizador/delete/${cId}`);
                    alert('Colaborador eliminado exitosamente');
                }else{
                    await axios.delete(url2 + `/api/cotizador/colaboradores/delete/${cId}`);
                    alert('Colaborador eliminado exitosamente');
                }
            } catch (error) {
                alert('Error al eliminar Colaborador');
            }
        }else {
        }
    };
    

    return (
        <div>
            {/*===================     Tabla Proveedores   ========================*/}
            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Proveedores ===================*/}
                        
                    <tr className="titulo-tabla-usuarios">
                     <th></th>
                        <th className='titulo-tabla'>{props.estado ? "Administrar Ventas" : "Administrar Preventa"}</th>
                        </tr>
                    <tr className="titulo-tabla-usuarios">
                        <th>ID</th>
                        <th>{props.estado ? "Colaboradores Ventas" : "Colaboradores Preventa"}</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Tabla de los colaboradores de un Proyecto =================*/}
                    {Object.keys(props.colabs).map((key) => (
                    <tr key={props.estado ? props.colabs[parseInt(key)].id_usuario : props.colabs[parseInt(key)].colab_id }>
                        <td>{props.colabs[parseInt(key)].id_usuario}</td>
                        {/*=================== Nombre/Email del Colaborador =================*/}
                        <td>{props.colabs[parseInt(key)].email}</td>
                        {/*=================== Botón Eliminar =================*/}
                        <td width={"100px"}>
                            {" "}
                            <button
                                className="btn btn-primary eliminar"
                                type="button"
                                onClick={() => {
                                    props.estado ? deleteColab(props.colabs[parseInt(key)].up_id):deleteColab(props.colabs[parseInt(key)].colab_id)
                                }}
                            >
                           <i className="bi bi-trash-fill"></i> 
                              
                            </button>
                        </td>
                    </tr>  
                    ))}
                </tbody>
            </Table>
        </div>
    )
}