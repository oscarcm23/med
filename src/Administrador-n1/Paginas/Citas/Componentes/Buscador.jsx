import React from 'react'

function Buscador() {
  return (
    <div>
        <div className='buscador-inteligente'>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Introduce e CURP del Paciente 🔎" 
                    aria-label="Search"
                    name="proyecto_clave"
                   /*  onChange={e => onChangeTextClaveP(e.target.value)} */
                   /*  value={claveP} */
                    
                    />
                </form>
        </div>
    </div>
  )
}

export default Buscador