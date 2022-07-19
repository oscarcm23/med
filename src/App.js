import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
//============ Rutas Públicas ============
import Login from "./Administrador/Login/Login2";
import Menu from "./AccesoPublico/Componentes/Menu";
import Footer from './AccesoPublico/Componentes/Footer';
import Slider from "./Administrador-n1/Paginas/Slider/Slider";
import MenuAdministrador from "./AccesoPublico/Componentes/MenuPublico";

import QSomos from "./AccesoPublico/Paginas/QSomos";
import MisionVision from "./AccesoPublico/Paginas/MisionVision";
import Servicios from "./AccesoPublico/Paginas/Servicios";
import Ubicacion from "./AccesoPublico/Paginas/Ubicacion";


//============ Rutas Private Públicas ============
import PublicRoutes from "./Routes/PublicRoutes";
//============ Rutas Private Administrador ============

import MenuAdministradores from "./Administrador-n1/Paginas/MenuAdministradores";


import AdministradorN1 from "./Routes/ValidaAdministrador";

import HeaderN1 from "./Administrador-n1/Paginas/HeaderN1";
import MenuContenido from "./Administrador-n1/Usuarios/MenuRegistrarUsuarios";
import AdministrarMenuContenido from "./Administrador-n1/Paginas/AdministrarMenuContenido";


import MenuContenidoCitas from './Administrador-n1/Paginas/Citas/MenuContenidoCitas';
import MenuLateralCitas from "./Administrador-n1/Paginas/Citas/MenuCitas";

import HeaderLateral from "./Administrador-n1/Paginas/MenuLateral";



import AdministradorN2 from "./Routes/AdministradorN2";
import HeaderN2 from "./Administrador-n2/Paginas/Header-n2";


import AdministradorN3 from "./Routes/AdministradorN3";
import HeaderN3 from "./Administrador-n3/Paginas/HeaderN3";



import MenuCitas from "./Administrador-n1/Paginas/Citas/MenuCitas";

function App() {
  

  return (
    <div className="App">

      <Router>

        {/*========================== Páginas Públicas==========================*/}
        
        <PublicRoutes path="/" component={Menu} />
        <PublicRoutes path="/" component={MenuAdministrador} /> 
        <PublicRoutes exact path="/" component={Slider} />
        <PublicRoutes exact path="/" component={QSomos} />
        <PublicRoutes exact path="/" component={MisionVision} />
        <PublicRoutes exact path="/" component={Servicios} />
        <PublicRoutes exact path="/" component={Ubicacion} />


        <PublicRoutes exact path="/quienes-somos" component={QSomos} />
        <PublicRoutes exact path="/mision-vision" component={MisionVision} />
        <PublicRoutes exact path="/servicios" component={Servicios} />
        <PublicRoutes exact path="/servicios" component={Ubicacion} />



         {/* <PublicRoutes exact path="/login2" component={Login }   /> */}
         <PublicRoutes path ="/" component={Footer} />
 

    
        {/*========================== Páginas Administrador ==========================*/}
        <AdministradorN1 path="/login" component={Login}/>



        
         <AdministradorN1 path="/" component={MenuAdministradores} />
         <AdministradorN1 exact   path="/" component={Slider} />

         <AdministradorN1 exact  path="/registrar_usuarios"   component={MenuContenido}  />
         <AdministradorN1 exact  path="/administrar_usuarios"   component={AdministrarMenuContenido}  />

         

         <AdministradorN1 exact  path="/registrar_consultas" component={MenuContenidoCitas}  />
         

    {/*      <AdministradorN1 exact  path="/registrar_usuarios"   component={AdministrarMenuContenido }  />
 */}
         
      {/*    
        <AdministradorN1 exact  path="/registrar" component={MenuContenido}  />
         <AdministradorN1 exact  path="/administrar" component={AdministrarMenuContenido}  />
         <AdministradorN1 exact  path="/administrarCitas" component={MenuContenidoCitas}  />
  
    

         <AdministradorN1 exact  path="/citas" component={MenuCitas}  />
  
     */}

     
   


         <AdministradorN2 path="/" component={HeaderN2} />
         <AdministradorN3 path="/" component={HeaderN3} />
     


      </Router>



    </div>
  );
}

export default App;
