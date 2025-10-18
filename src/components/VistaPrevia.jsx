// src/components/VistaPrevia.jsx
import React from "react";

const VistaPrevia = ({ data, socialNetworks, styles, onCopy, copySuccess, iconStyle, iconSets }) => {
  // Función para generar el href según el tipo de red
  const getHref = (network) => {
    if (network.type === "phone") {
      return `https://wa.me/${network.url.replace(/[^0-9]/g, "")}`;
    } else if (network.type === "email") {
      return `mailto:${network.url}`;
    } else {
      return network.url;
    }
  };

  // Función para obtener el texto mostrado (versión estética y corta)
  const getDisplayText = (network, key) => {
    // Para teléfonos, mostrar el número tal cual
    if (network.type === "phone") {
      return network.url;
    }
    
    // Para emails, mostrar el email completo
    if (network.type === "email") {
      return network.url;
    }
    
    // Para URLs, crear versiones cortas y estéticas
    if (network.type === "url") {
      // Textos personalizados por red social
      const customTexts = {
        linkedin: "linkedin.com/in/lijhoanmc",
        website: "Mi Blog Personal",
        github: "github.com/Lijhoan",
        instagram: "Ver en Instagram",
        facebook: "Facebook",
        twitter: "Sígueme en X",
        youtube: "Mi Canal de YouTube",
        tiktok: "TikTok",
        telegram: "Telegram",
      };
      
      // Si hay un texto personalizado para esta red, usarlo
      if (customTexts[key]) {
        return customTexts[key];
      }
      
      // Si no, limpiar la URL (quitar https://, www., etc.)
      return network.url.replace(/^https?:\/\/(www\.)?/, "").split('/')[0];
    }
    
    return network.url;
  };

  return (
    <div style={{ flex: 1, minWidth: "350px" }}>
      <h3 style={{ color: "var(--secondary)", marginBottom: "10px" }}>
        Vista Previa
      </h3>
      <div className="card">
        <div
          id="signature-container"
          style={{
            fontFamily: styles.fontFamily,
            fontSize: "14px",
            lineHeight: 1.5,
            margin: "0",
            padding: "0",
            width: "fit-content",
          }}
        >
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{
              borderCollapse: "collapse",
              margin: "0",
              padding: "0",
              border: "0",
              borderStyle: "none",
              width: "auto",
            }}
          >
            <tbody>
              <tr style={{ border: "0", borderStyle: "none" }}>
                {/* Imagen */}
                {data.imagen && (
                  <td style={{ 
                    padding: "0 15px 0 0", 
                    margin: "0", 
                    border: "0",
                    borderStyle: "none",
                    verticalAlign: "top" 
                  }}>
                    <img
                      src={data.imagen}
                      alt={data.nombre}
                      width={styles.imageSize}
                      height={styles.imageSize}
                      style={{
                        borderRadius: `${styles.borderRadius}%`,
                        objectFit: "cover",
                        objectPosition: `${styles.imagePositionX}% ${styles.imagePositionY}%`,
                        border: `2px solid ${styles.lineColor}`,
                        display: "block",
                        margin: "0",
                        padding: "0",
                      }}
                    />
                  </td>
                )}

                {/* Contenido */}
                <td
                  style={{
                    padding: "5px 0 5px 15px",
                    margin: "0",
                    border: "0",
                    borderStyle: "none",
                    borderLeft: `${styles.lineWidth}px solid ${styles.lineColor}`,
                    borderRadius: `${styles.borderRadiusLine}px`,
                    verticalAlign: "top",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        fontSize: "17px",
                        color: styles.colorNombre,
                        display: "block",
                        marginBottom: "4px",
                        fontWeight: "700",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {data.nombre}
                    </strong>

                    <p
                      style={{
                        color: styles.colorCargo,
                        fontWeight: "500",
                        margin: "0 0 8px 0",
                        fontSize: "14px",
                      }}
                    >
                      {data.cargo}
                    </p>

                    {/* Redes sociales */}
                    {Object.keys(socialNetworks)
                      .filter((key) => socialNetworks[key].enabled)
                      .map((key) => {
                        const network = socialNetworks[key];
                        const iconUrl = iconSets[iconStyle][key];
                        return (
                          <div
                            key={key}
                            style={{
                              margin: "0 0 4px 0",
                              display: "block",
                            }}
                          >
                            <img
                              src={iconUrl}
                              alt={network.label}
                              width="16"
                              height="16"
                              style={{
                                verticalAlign: "middle",
                                marginRight: "8px",
                                display: "inline",
                              }}
                            />
                            <a
                              href={getHref(network)}
                              target={network.type === "url" ? "_blank" : undefined}
                              rel={network.type === "url" ? "noopener noreferrer" : undefined}
                              style={{
                                color: styles.colorContacto,
                                textDecoration: "underline",
                                display: "inline",
                              }}
                            >
                              {getDisplayText(network, key)}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button onClick={onCopy} className="primary-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
          <path d="M8 4V16C8 17.1046 8.89543 18 10 18H18C19.1046 18 20 17.1046 20 16V7.24162C20 6.71374 19.7893 6.20819 19.4142 5.83307L16.1716 2.58993C15.7965 2.21481 15.2909 2.00409 14.7631 2.00409H10C8.89543 2.00409 8 2.89952 8 4.00409Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 18V20C16 21.1046 15.1046 22 14 22H6C4.89543 22 4 21.1046 4 20V9C4 7.89543 4.89543 7 6 7H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Copiar Firma HTML
      </button>

      <div className={`toast ${copySuccess ? "show" : ""}`}>
        Firma copiada correctamente
      </div>
    </div>
  );
};

export default VistaPrevia;
