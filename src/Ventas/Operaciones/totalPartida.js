import  {useState} from 'react';

import {obtenPartidasUnicas} from "./OperacionesAM";



export let dataPartida = [];
export let dataCategoria = [];
export let dolar =  [];
export let dataIndirectos =  [];
export let dataFinanciamiento =  [];
export let dataPorcentajes =  [];
export let dataPorcentajesC =  [];







export let dol = 0;



export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ([]);
    const [totalesCategorias1,setotalesCategorias1] = useState ([]);
    const [porcentajesPartidas, setPorcentajesPartidas] = useState([]);
    const [porcentajesCategorias, setPorcentajesCategorias] = useState([]);
    const [divisaProy, setDivisaProy] = useState([]);
    const [porcentajesCI,setPorcentajesCI] = useState ([]);
    const [dFinanciamiento, setdFinanciamiento] = useState([]);


    const getPorcentajesPar = (pPar) => {   
      setPorcentajesPartidas('');
      setPorcentajesPartidas(pPar);  
      dataPorcentajes = pPar;  
      //am_cantidad: 1      am_desc_cliente: 0      am_descuento_fabrica: 0       am_margen_ganancia: 32
       // console.log('Data Porcentajes Partidas',   dataPorcentajes);
        obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos ,  dataPorcentajes ,  dataPorcentajesC ,  dataFinanciamiento) ;

    };
    const getPorcentajesCats = (pCats) => {    
        setPorcentajesCategorias('');
        setPorcentajesCategorias(pCats);
        dataPorcentajesC  = pCats;
       // console.log('Dta Porcentajes Categorias',porcentajesCategorias);
         obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos ,  dataPorcentajes ,  dataPorcentajesC ,  dataFinanciamiento) ;

        };
   
      /*========================   Valor Dolar ======================== */
    const getDivisaProy = (pDiv) => {
        setDivisaProy('');
        setDivisaProy(pDiv);   
        dolar = pDiv;
        obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos ,  dataPorcentajes ,  dataPorcentajesC ,  dataFinanciamiento) ;
       console.log("FUNCIONANDO   =  N  , " , dolar)
    };


    const getPorcentajesCI = (pCI) =>{
        setPorcentajesCI('');
        setPorcentajesCI(pCI);
        dataIndirectos = pCI;
        obtenPartidasUnicas(dataPartida, dataCategoria, dolar , dataIndirectos,  dataPorcentajes ,  dataPorcentajesC ,  dataFinanciamiento  ) ;
      /*   console.log('Cotos indirectos:',   dataIndirectos); */
        };

    const getFinanciamieno = (dF) =>{
        setdFinanciamiento('');
        setdFinanciamiento(dF); 
         dataFinanciamiento  = dF;
         obtenPartidasUnicas(dataPartida, dataCategoria, dolar , dataIndirectos ,  dataPorcentajes,  dataPorcentajesC  ,  dataFinanciamiento) ;

    /*      console.log(' Datos financiamineto xxxx  ',dF);

 */
         
        }

        const getTotalPar = (tP) =>{
          setotalesPartidas1('');
            setotalesPartidas1(tP);
             dataPartida = tP ;    
             obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos ,  dataPorcentajes,  dataPorcentajesC  , dataFinanciamiento );
            };





        const getTotalCats = (tC) => {
            setotalesCategorias1('');
            setotalesCategorias1(tC);
    
            dataCategoria= tC;
    
            obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos ,  dataPorcentajes    );
              

            console.log("verificar ",dataCategoria)
    
            };

  
 return {
     getTotalCats,
     getTotalPar,
     getPorcentajesPar,
     getPorcentajesCats,
     getPorcentajesCI,
     getDivisaProy,
     getFinanciamieno,
     divisaProy,
     porcentajesPartidas,
     porcentajesCategorias,
     porcentajesCI,
     totalesPartidas1,
     dFinanciamiento,
     totalesCategorias1
   }
};