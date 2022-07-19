import React from 'react'
import "./css/QSomos.css"
import quienes from "../../images/img1.png"

function QSomos() {
    return (
        <div className='Paginas'>

       
                <div className="contenido">


                    <div className='titulo'>

                        <h1>¿Quienes Somos?</h1>
                    </div>

                    <div id="content">

                        <div id="left">
                            <div id="object">
                                <div className="contenido-textos">

                                    <article>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est
                                        laborum.
                                        <span className="nowrap"></span>
                                    </article>
                                    <br />
                                    <span className="nowrap"></span>
                                </div>
                            </div>
                            <div id="object">

                            </div>
                        </div>

                        <div id="right">
                            <div id="object"></div>
                            <div className="nosotros_img">
                                <img src={quienes} alt="DELFOS369" className="imagen-about-us" />
                            </div>

                            <div id="object"></div>
                        </div>
                    </div>



                </div>
       
        </div>
    )
}

export default QSomos