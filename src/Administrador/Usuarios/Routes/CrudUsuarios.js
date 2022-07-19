/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

export const CrudUsuarios = (props) => {
  /*========================== Mostrar/Ocultar ==========================*/
  const [activar, setActivar] = useState([]);
  const [textBModificar, setTextBModificar] = useState([]); //Texto de los botones de modificar
  /*=====================================================================*/

  /*========================== Habilitar/Deshabilitar ==========================*/
  const [enable, setenable] = useState([]); //Inputs
  /*============================================================================*/

  const [data, setData] = useState({
    usuario_id_rol: "",
    email: "",
    password: "",
    estado_login: 0,
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const [datos, Setdatos] = useState();
  useEffect(() => {
    Setdatos(props.usuarios);
  }, [props.usuarios]);

  useEffect(() => {
    let i = Object.keys(props.usuarios);
    i = i.length;
    setenable(Array(i).fill(true));
    setActivar(Array(i).fill(true));
    setTextBModificar(Array(i).fill("bi bi-pencil-square"));
    setenable(Array(i).fill(true));
  }, []);

  const habilitar = (key) => {
    key = parseInt(key);
    const newArr = [];
    const newArr2 = [];
    const newArr3 = [];
    let c = Object.keys(props.usuarios);
    c = c.length;
    for (let i = 0; i < c; i++) {
      if (i === key) {
        newArr[i] = !enable[i];
        if (enable[i] === false) {
          newArr2[i] = "bi bi-pencil-square";
          setData({
            ...data,
            rol: "",
            email: "",
            password: "",
          });
        } else {
          newArr2[i] = "bi bi-check-lg";
        }
        newArr3[i] = !activar[i];
      }
      if (i !== key) {
        newArr[i] = true;
        newArr2[i] = "bi bi-pencil-square";
        newArr3[i] = true;
      }
    }
    setenable(newArr);
    setTextBModificar(newArr2);
    setActivar(newArr3);
  };

  return (
    <div className="">
      <form>
        <Table responsive striped bordered hover size="sm col-ms-4" className="tab" aria-rowcount={2} >
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th></th>
              <th className="titulo-tabla">Lista de Usuarios</th>
            </tr>
            {/*=================== Titulos Tabla Usuarios ====================*/}
            <tr className="titulo-tabla-usuarios">
              <th>ID</th>
              <th>Administrador</th>
              <th>Correo</th>
              <th>Contraseña</th>
              {/*    <th>Eliminar</th> */}
              <th>Modificar</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/*=================== Contenido Tabla Usuarios =================*/}
            {Object.keys(props.usuarios).map((key) => (
              //checar aqui va los titulos
              <tr key={props.usuarios[key].id_usuario }>
                <td>{props.usuarios[key].id_usuario}</td>
                <td width={"200px"}>
                  {/*<input className="input-name" defaultValue={props.usuarios[key].rol} onChange={handleInputChange} disabled={enable[key]} name='rol' ></input>
                   */}
                  <select
                    id="rol"
                    name="usuario_id_rol"
                    required
                    defaultValue={props.usuarios[key].usuario_id_rol}
                    onChange={handleInputChange}
                    disabled={enable[key]}
                  >
                    <option value={4}>------</option>
                    <option value={1}>Administrador</option>
                    <option value={2}>Preventa</option>
                    <option value={3}>Venta</option>
                  </select>
                </td>

                <td width={"900px"}>
                  <input
                    className="input-name"
                    defaultValue={props.usuarios[key].email}
                    onChange={handleInputChange}
                    disabled={enable[key]}
                    name="email"
                  ></input>{" "}
                </td>
                <td width={"100px"}>
                  <button
                    className="btn btn-primary Resetear"
                    type="button"
                    onClick={() => {
                      props.resetearContraseña(
                        props.usuarios[key].id_usuario,
                        props.usuarios[key].email
                      );
                    }}
                  >
                    <i className="bi bi-unlock"></i>
                  </button>
                </td>

                {/*                          <td>
                                <button 
                                className="btn btn-primary eliminar" 
                                type="button"
                                onClick={()=>props.borrar(props.usuarios[key].id_usuario)}>Eliminar 
                                </button>
                            </td> */}
                {/*=================== Button modificar cliente ==================== props.borrar(props.usuarios[key].id_usuario)*/}
                {enable[key] ? (
                  <td width={"100px"} className="">
                    <button
                      className="btn btn-primary Mod"
                      type="button"
                      onClick={() => {
                        //    props.envioData(datos,key,data);
                        habilitar(key);
                        props.setfirst(activar[key]);
                      }}
                    >
                      <i className={textBModificar[key]}></i>
                    </button>
                  </td>
                ) : (
                  <>
                    <td width={"100px"}>
                      <button
                        className="btn btn-primary Mod"
                        type="button"
                        onClick={() => {
                          props.envioData(datos, key, data);
                          habilitar(key);
                          props.setfirst(activar[key]);
                        }}
                      >
                        <i className={textBModificar[key]}></i>
                      </button>
                    </td>

                    <td width={"100px"}>
                      <button
                        className="btn btn-primary Cancelar"
                        type="button"
                        onClick={() => {
                          /*   props.envioData(datos,key,data);  */
                          habilitar(key);
                          //props.setfirst(activar[key]);
                        }}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </form>
    </div>
  );
};
