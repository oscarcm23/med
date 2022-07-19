import React from 'react'
import "./css/QSomos.css"
import "./css/MisionVision.css"
import mision from "../../images/mision.png"

import vision from "../../images/vision.png"

function MisionVision() {
    return (


        <div className='Paginas '>

            <div className="contenido mision">


                <div className='titulo'>

                    <h1>Misión y Visión</h1>
                </div>

                <div id="content" className='mision'>

                    <div id="right">
                        <div id="object">
                            <div className="contenido-textos  mision">
                                <h2>Misión</h2>
                                <article>
                                    Contribuir a que cada día más personas, en más
                                    lugares, tengan una mayor accesibilidad a
                                    servicios de prevención y diagnóstico confiables,
                                    contando con el mejor equipo humano y
                                    tecnológico.
                                    <span className="nowrap"></span>
                                </article>
                                <br />
                                <span className="nowrap"></span>
                            </div>
                        </div>

                    </div>

                    <div id="left">
                        <div id="object"></div>
                        <div className="nosotros_img">
                            <img src={mision} alt="DELFOS369" className="imagen-about-us" />
                        </div>

                    </div>
                </div>
            </div>




            <div className="contenido mision">

                <div id="content" className='vision'>

                    <div id="right">
                        <div id="object">
                            <div className="contenido-textos  mision">
                                <h2>Visión</h2>
                                <article>
                                    Ser la institución líder en prevención y
                                    diagnóstico oportuno en las áreas de influencia
                                    de nuestras clínicas, contribuyendo a conservar y
                                    mejorar la salud de las personas, y con ello, su
                                    calidad de vida.
                                    <span className="nowrap"></span>
                                </article>
                                <br />
                                <span className="nowrap"></span>
                            </div>
                        </div>

                    </div>

                    <div id="left">
                        <div id="object"></div>
                        <div className="nosotros_img">
                            <img src={vision} alt="DELFOS369" className="imagen-about-us" />
                        </div>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default MisionVision