import React from 'react'

import "./css/Ubicacion.css"



function Ubicacion() {
    return (
        <div className='pagina'>

            <div className='contenido'>
                <div className='titulo'>
                    <h1 className='titulo'>Ubica Tu Clinica</h1>
                </div>


                <div id="content" className='mision'>

<div id="right-ubicacion">
    <div id="object">
        <div className="contenido-textos  ubicacion">
            <h2>Mapa</h2>
           

{/* Mapa IMG */}
           
            <br />
            <span className="nowrap"></span>
        </div>
    </div>

</div>

<div id="left-ubicacion">
    <div id="object"></div>
    <div className="nosotros_img">
       <p>¿Cuál es el Servicio que estás Buscando?</p>

                         <select
					/* 		style={{ width: "100px" }} */
							name="servicios"				
						>
							<option value="">Selecciona Servicio</option>
							<option value="Servicio 1">Servicio 1</option>
							<option value="Servicio 2">Servicio 2</option>
							<option value="Servicio 3">Servicio 3</option>
							<option value="Servicio 4">Servicio 4</option>
							
						</select>



                        <select
					/* 		style={{ width: "100px" }} */
							name="servicios"				
						>
							<option value="">Selecciona Servicio</option>
							<option value="Servicio 1">Servicio 1</option>
							<option value="Servicio 2">Servicio 2</option>
							<option value="Servicio 3">Servicio 3</option>
							<option value="Servicio 4">Servicio 4</option>
							
						</select>


                        <select
					/* 		style={{ width: "100px" }} */
							name="ubicacion"				
						>
							<option value="">Ubicar clinica más cercana</option>
					
						</select>


                        <select
					/* 		style={{ width: "100px" }} */
							name="servicios"				
						>
							<option value="">Selecciona tu Estado</option>
							<option value="Servicio 1">Estado 1</option>
							<option value="Servicio 2">Estado 2</option>
							<option value="Servicio 3">Estado 3</option>
							<option value="Servicio 4">Estado 4</option>
							
						</select>

                        <select
					/* 		style={{ width: "100px" }} */
							name="servicios"				
						>
							<option value="">Selecciona tu Municipio</option>
							<option value="Servicio 1">Municipio 1</option>
							<option value="Servicio 2">Municipio 2</option>
							<option value="Servicio 3">Municipo 3</option>
							<option value="Servicio 4">Municipio 4</option>
							
						</select>


                        <select
					/* 		style={{ width: "100px" }} */
							name="servicios"				
						>
							<option value="">Elige la Clinica</option>
							<option value="Servicio 1">Clinica 1</option>
							<option value="Servicio 2">Clinica 2</option>
							<option value="Servicio 3">Clinica 3</option>
							<option value="Servicio 4">Clinica 4</option>
							
						</select>



    </div>

</div>
</div>



            </div>


        </div>
    )
}

export default Ubicacion