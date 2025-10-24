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
        linkedin: "linkedin.\u200Bcom/in/lijhoanmc", // Zero-width space para romper auto-link
        website: "Mi Blog Personal",
        github: "github.\u200Bcom/Lijhoan",
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
      const cleanUrl = network.url.replace(/^https?:\/\/(www\.)?/, "").split('/')[0];
      // Insertar zero-width space después del primer punto para romper auto-link
      return cleanUrl.replace('.', '.\u200B');
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
            padding: "20px",
            width: "100%",
            maxWidth: "600px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            overflow: "auto",
            textAlign: "left",
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
              width: "100%",
              textAlign: "left",
            }}
          >
            <tbody>
              <tr style={{ border: "0", borderStyle: "none", textAlign: "left" }}>
                {/* Imagen */}
                {data.imagen && (
                  <td style={{ 
                    padding: "0 15px 0 0", 
                    margin: "0", 
                    border: "0",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    textAlign: "left",
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
                        width: `${styles.imageSize}px`,
                        height: `${styles.imageSize}px`,
                        maxWidth: `${styles.imageSize}px`,
                        maxHeight: `${styles.imageSize}px`,
                      }}
                    />
                  </td>
                )}

                {/* Línea divisora */}
                {data.imagen && (
                  <td style={{
                    padding: "0 10px",
                    margin: "0",
                    border: "0",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    textAlign: "left",
                  }}>
                    <div style={{
                      width: `${styles.lineWidth}px`,
                      height: `${styles.lineHeight}px`,
                      backgroundColor: styles.lineColor,
                      borderRadius: `${styles.borderRadiusLine}px`,
                      margin: "0",
                      padding: "0",
                      display: "block",
                    }}></div>
                  </td>
                )}

                {/* Contenido */}
                <td
                  style={{
                    padding: "0 0 0 15px",
                    margin: "0",
                    border: "0",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    textAlign: "left",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <strong
                      style={{
                        fontSize: "17px",
                        color: styles.colorNombre,
                        display: "block",
                        marginBottom: "4px",
                        fontWeight: "700",
                        margin: "0 0 4px 0",
                        textAlign: "left",
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
                        textAlign: "left",
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
                              textAlign: "left",
                            }}
                          >
                            <a
                              href={getHref(network)}
                              target={network.type === "url" ? "_blank" : undefined}
                              rel={network.type === "url" ? "noopener noreferrer" : undefined}
                              style={{
                                textDecoration: "none",
                                border: "none",
                                outline: "none",
                                display: "inline",
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
                            </a>
                            <span style={{
                              color: styles.colorContacto,
                              display: "inline",
                              verticalAlign: "middle",
                              textDecoration: "none",
                              pointerEvents: "none",
                            }}>
                              <span style={{ unicodeBidi: "bidi-override" }}>
                                {getDisplayText(network, key)}
                              </span>
                            </span>
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

      {/* Instructivo de Instalación */}
      <div className="installation-guide" style={{
        marginTop: "25px",
        padding: "20px",
        background: "linear-gradient(135deg, rgba(228, 58, 112, 0.05), rgba(67, 71, 163, 0.05))",
        borderRadius: "12px",
        border: "1px solid rgba(228, 58, 112, 0.15)",
      }}>
        <h4 style={{
          color: "var(--secondary)",
          fontSize: "1rem",
          fontWeight: 700,
          marginBottom: "15px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <img src="https://img.icons8.com/fluency/22/info.png" alt="Info" style={{ width: "22px", height: "22px" }} />
          ¿Cómo agregar mi firma al correo?
        </h4>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Gmail */}
          <details style={{
            background: "white",
            padding: "12px 15px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            border: "1px solid #e0e0e0",
          }}>
            <summary style={{
              fontWeight: 600,
              color: "#4347a3",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <img src="https://img.icons8.com/color/20/gmail-new.png" alt="Gmail" style={{ width: "20px", height: "20px" }} /> Gmail
            </summary>
            <ol style={{
              marginTop: "10px",
              paddingLeft: "20px",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              color: "#4c4f4c",
            }}>
              <li>Copia la firma (botón de arriba)</li>
              <li>Ve a <strong>Configuración</strong> <img src="https://img.icons8.com/fluency/16/settings.png" alt="Settings" style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> → <strong>Ver toda la configuración</strong></li>
              <li>Busca la sección <strong>"Firma"</strong></li>
              <li>Click en <strong>"Crear nueva"</strong></li>
              <li><strong>Pega</strong> (Ctrl+V / Cmd+V) directamente</li>
              <li>Guarda cambios al final de la página</li>
            </ol>
          </details>

          {/* Outlook */}
          <details style={{
            background: "white",
            padding: "12px 15px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            border: "1px solid #e0e0e0",
          }}>
            <summary style={{
              fontWeight: 600,
              color: "#4347a3",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <img src="https://img.icons8.com/color/20/ms-outlook.png" alt="Outlook" style={{ width: "20px", height: "20px" }} /> Outlook
            </summary>
            <ol style={{
              marginTop: "10px",
              paddingLeft: "20px",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              color: "#4c4f4c",
            }}>
              <li>Copia la firma</li>
              <li>Abre <strong>Archivo</strong> → <strong>Opciones</strong></li>
              <li>Click en <strong>"Correo"</strong> → <strong>"Firmas"</strong></li>
              <li>Click en <strong>"Nuevo"</strong>, dale un nombre</li>
              <li><strong>Pega</strong> en el editor de firma</li>
              <li>Haz click en <strong>"Aceptar"</strong></li>
            </ol>
          </details>

          {/* Apple Mail */}
          <details style={{
            background: "white",
            padding: "12px 15px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            border: "1px solid #e0e0e0",
          }}>
            <summary style={{
              fontWeight: 600,
              color: "#4347a3",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <img src="https://img.icons8.com/color/20/apple-mail.png" alt="Apple Mail" style={{ width: "20px", height: "20px" }} /> Apple Mail
            </summary>
            <ol style={{
              marginTop: "10px",
              paddingLeft: "20px",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              color: "#4c4f4c",
            }}>
              <li>Copia la firma</li>
              <li>Abre <strong>Mail</strong> → <strong>Preferencias</strong></li>
              <li>Ve a la pestaña <strong>"Firmas"</strong></li>
              <li>Click en <strong>"+"</strong> para crear nueva</li>
              <li><strong>Pega</strong> tu firma</li>
              <li>Cierra para guardar</li>
            </ol>
          </details>
        </div>

        <p style={{
          marginTop: "15px",
          fontSize: "0.85rem",
          color: "#666",
          textAlign: "center",
          fontStyle: "italic",
        }}>
          💡 <strong>Tip:</strong> Asegúrate de pegar con formato (Ctrl+V). Si no funciona, intenta Ctrl+Shift+V
        </p>
      </div>

      {/* Tarjeta de Contacto Profesional */}
      <div className="contact-card" style={{
        marginTop: "25px",
        padding: "25px",
        background: "linear-gradient(135deg, #4347a3 0%, #e43a70 100%)",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(228, 58, 112, 0.25)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Patrón decorativo de fondo */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(30%, -30%)",
        }}></div>

        {/* Contenido */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "15px",
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              backdropFilter: "blur(10px)",
            }}>
              <img src="https://img.icons8.com/fluency/30/star.png" alt="Star" style={{ width: "30px", height: "30px" }} />
            </div>
            <div>
              <h4 style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 700,
                margin: 0,
                marginBottom: "4px",
              }}>
                ¿Te gustó esta herramienta?
              </h4>
              <p style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.9rem",
                margin: 0,
                fontWeight: 500,
              }}>
                Lleva tu marca al siguiente nivel <img src="https://img.icons8.com/fluency/18/rocket.png" alt="Rocket" style={{ width: "18px", height: "18px", verticalAlign: "middle" }} />
              </p>
            </div>
          </div>

          <p style={{
            color: "rgba(255, 255, 255, 0.95)",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}>
            Soy <strong style={{ color: "#fff" }}>Ing. Lijhoan MC</strong>, especialista en <strong>diseño web</strong> y <strong>soluciones digitales personalizadas</strong>. 
            Si necesitas una página web profesional, sistema a medida o automatización para tu negocio, ¡trabajemos juntos!
          </p>

          {/* Botones de contacto */}
          <div className="contact-card-buttons" style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/51931347134?text=Hola%20Lijhoan,%20vi%20tu%20generador%20de%20firmas%20y%20me%20interesa%20trabajar%20contigo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                background: "#25D366",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                flex: "1",
                minWidth: "140px",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.3)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:lijhoan@gmail.com?subject=Consulta%20sobre%20Diseño%20Web&body=Hola%20Lijhoan,%0A%0AVi%20tu%20generador%20de%20firmas%20y%20me%20gustaría%20conversar%20sobre..."
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                flex: "1",
                minWidth: "140px",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.3)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
              Email
            </a>
          </div>

          {/* Badge profesional */}
          <div style={{
            marginTop: "15px",
            padding: "10px 15px",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}>
            <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 500 }}>
              <img src="https://img.icons8.com/fluency/16/laptop-coding.png" alt="Web" style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> Desarrollo Web
            </span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>•</span>
            <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 500 }}>
              <img src="https://img.icons8.com/fluency/16/design.png" alt="Design" style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> UI/UX Design
            </span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>•</span>
            <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 500 }}>
              <img src="https://img.icons8.com/fluency/16/lightning-bolt.png" alt="Solutions" style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> Soluciones a Medida
            </span>
          </div>

          {/* Número de teléfono */}
          <p style={{
            marginTop: "12px",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "0.85rem",
            margin: "12px 0 0 0",
          }}>
            <img src="https://img.icons8.com/fluency/16/phone.png" alt="Phone" style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> <strong>+51 931 347 134</strong> | <img src="https://img.icons8.com/fluency/16/email.png" alt="Email" style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> <strong>lijhoan@gmail.com</strong>
          </p>
        </div>
      </div>

      <div className={`toast ${copySuccess ? "show" : ""}`}>
        Firma copiada correctamente
      </div>
    </div>
  );
};

export default VistaPrevia;
