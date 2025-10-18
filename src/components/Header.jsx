// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="signature-header">
      <div className="header-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 40L10 38L38 10L40 8L44 12L42 14L14 42L12 44L8 40Z" fill="url(#gradient1)"/>
          <path d="M38 10L40 8L44 12L42 14L38 10Z" fill="url(#gradient2)"/>
          <defs>
            <linearGradient id="gradient1" x1="8" y1="8" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e43a70"/>
              <stop offset="1" stopColor="#4347a3"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="38" y1="8" x2="44" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#001a31"/>
              <stop offset="1" stopColor="#4347a3"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1>Diseño de Firma Profesional</h1>
      <p>Transforma tu identidad digital en segundos</p>
      <div className="header-divider"></div>
      <div className="signature-footer">
        <span>Desarrollado por Ing. Lijhoan M.C</span>
      </div>
    </header>
  );
};

export default Header;
