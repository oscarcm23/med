import React from 'react'
import Buscador from './Componentes/Buscador'
import DatosGenerales from './Componentes/DatosGenerales'
import AntecedentesPatologicos from './Componentes/AntecedentesPatologicos'
import HistoriaFamiliar from './Componentes/HistoriaFamiliar'
import HistoriaEstudios from './Componentes/HistoriaEstudios'
import Pulso from './Componentes/Pulso'
import Odontograma from './Componentes/Odontograma'

import "../Citas/Componentes/css/Citas.css"
function HistoriaClinica() {
  return (



    <div>



<div>
    <Buscador />
</div>


<div>

    <DatosGenerales />
</div>



<div>
    <AntecedentesPatologicos  />
</div>


<div>
    <HistoriaFamiliar />
    
</div>


<div>
    <HistoriaEstudios />
</div>


<div>
    <Pulso />
</div>


<div>
    <Odontograma />
</div>



    </div>
  )
}

export default HistoriaClinica