import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>CEIM</h1>
          <ul>
            <li>Inicio</li>
            <li>Campañas</li>
            <li>Congresos</li>
          </ul>
        </div>
        <div className="col">
          <h1>Acerda de Nosotros</h1>
          <ul>
            <li>Aviso de Privacidad</li>
          </ul>
        </div>
        <div className="col">
          <h1>Servicios</h1>
          <ul>
            <li>Laboratorio</li>
            <li>Ultrasonido</li>
            <li>Nutrición</li>
            <li>Tomografia</li>
          </ul>
        </div>
        <div className="col">
          <h1>Conócenos</h1>
          <ul>
            <li>Nosotros</li>
            <li>Historia</li>
            <li>Misión</li>
            <li>Visión</li>
          </ul>
        </div>
        <div className="col">
          <h1>Clínica</h1>
          <ul>
            <li>
              <a href="/ubicacion">Ubica tu Clinica </a>
            </li>
            <li>Clinicas</li>
          </ul>
        </div>
        <div className="col social">
          <h1>Redes Sociales</h1>
          <ul>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-whatsapp"></i>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};
export default Footer;
