// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import VistaPrevia from "./components/VistaPrevia";
import "./index.css";

function App() {
  const [data, setData] = useState({
    nombre: "Lijhoan M.C",
    cargo: "CEO - PASS&DATA",
    telefono: "+51 931 347 134",
    imagen: "/signature-gen/default-avatar.jpg", // 👈 Foto por defecto desde la carpeta public
  });

  // 👇 NUEVO: Estado para estilo de iconos
  const [iconStyle, setIconStyle] = useState("black"); // 'color', 'black', 'white'

  // 👇 ACTUALIZADO: Objeto con URLs para cada estilo de icono
  const iconSets = {
    color: {
      whatsapp: "https://img.icons8.com/color/16/whatsapp--v1.png",
      email: "https://img.icons8.com/color/16/gmail-new.png",
      linkedin: "https://img.icons8.com/color/16/linkedin.png",
      website: "https://img.icons8.com/color/16/domain--v1.png",
      github: "https://img.icons8.com/color/16/github--v1.png",
      instagram: "https://img.icons8.com/color/16/instagram-new--v1.png",
      facebook: "https://img.icons8.com/color/16/facebook-new.png",
      twitter: "https://img.icons8.com/color/16/twitter--v1.png",
      youtube: "https://img.icons8.com/color/16/youtube-play.png",
      tiktok: "https://img.icons8.com/color/16/tiktok--v1.png",
      telegram: "https://img.icons8.com/color/16/telegram-app.png",
    },
    black: {
      whatsapp: "https://img.icons8.com/ios-filled/16/000000/whatsapp.png",
      email: "https://img.icons8.com/ios-filled/16/000000/gmail.png",
      linkedin: "https://img.icons8.com/ios-filled/16/000000/linkedin.png",
      website: "https://img.icons8.com/ios-filled/16/000000/domain.png",
      github: "https://img.icons8.com/ios-filled/16/000000/github.png",
      instagram: "https://img.icons8.com/ios-filled/16/000000/instagram-new.png",
      facebook: "https://img.icons8.com/ios-filled/16/000000/facebook-new.png",
      twitter: "https://img.icons8.com/ios-filled/16/000000/twitter.png",
      youtube: "https://img.icons8.com/ios-filled/16/000000/youtube-play.png",
      tiktok: "https://img.icons8.com/ios-filled/16/000000/tiktok.png",
      telegram: "https://img.icons8.com/ios-filled/16/000000/telegram-app.png",
    },
    white: {
      whatsapp: "https://img.icons8.com/ios-filled/16/ffffff/whatsapp.png",
      email: "https://img.icons8.com/ios-filled/16/ffffff/gmail.png",
      linkedin: "https://img.icons8.com/ios-filled/16/ffffff/linkedin.png",
      website: "https://img.icons8.com/ios-filled/16/ffffff/domain.png",
      github: "https://img.icons8.com/ios-filled/16/ffffff/github.png",
      instagram: "https://img.icons8.com/ios-filled/16/ffffff/instagram-new.png",
      facebook: "https://img.icons8.com/ios-filled/16/ffffff/facebook-new.png",
      twitter: "https://img.icons8.com/ios-filled/16/ffffff/twitter.png",
      youtube: "https://img.icons8.com/ios-filled/16/ffffff/youtube-play.png",
      tiktok: "https://img.icons8.com/ios-filled/16/ffffff/tiktok.png",
      telegram: "https://img.icons8.com/ios-filled/16/ffffff/telegram-app.png",
    },
  };

  const [socialNetworks, setSocialNetworks] = useState({
    whatsapp: {
      label: "WhatsApp",
      url: "+51 931 347 134",
      enabled: true,
      type: "phone",
    },
    email: {
      label: "Correo",
      url: "lijhoan@example.com",
      enabled: false,
      type: "email",
    },
    linkedin: {
      label: "LinkedIn",
      url: "linkedin.com/in/lijhoanmc",
      enabled: true,
      type: "url",
    },
    website: {
      label: "Sitio Web",
      url: "https://salmon-smoke-02ce9df10.1.azurestaticapps.net/",
      enabled: true,
      type: "url",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/Lijhoan",
      enabled: true,
      type: "url",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/reel/DJseYPZpZfU/?igsh=aXJud3JlNnlnMjI=",
      enabled: false,
      type: "url",
    },
    facebook: {
      label: "Facebook",
      url: "https://facebook.com/tuusuario",
      enabled: false,
      type: "url",
    },
    twitter: {
      label: "X (Twitter)",
      url: "https://x.com/tuusuario",
      enabled: false,
      type: "url",
    },
    youtube: {
      label: "YouTube",
      url: "https://youtube.com/@tucanal",
      enabled: false,
      type: "url",
    },
    tiktok: {
      label: "TikTok",
      url: "https://tiktok.com/@tuusuario",
      enabled: false,
      type: "url",
    },
    telegram: {
      label: "Telegram",
      url: "https://t.me/tuusuario",
      enabled: false,
      type: "url",
    },
  });

  const [styles, setStyles] = useState({
    lineColor: "#11212", // 👈 Color de la línea divisora
    lineWidth: 6, // 👈 Grosor de la línea (6px)
    colorNombre: "#c7419f", // 👈 Color del nombre
    colorCargo: "#4347a3",
    colorContacto: "#4c4f4c",
    fontFamily: "Inter, Arial, sans-serif", // 👈 Tipografía por defecto: Inter
    borderRadius: 50, // 👈 Porcentaje de borde redondeado de la imagen (50% = círculo)
    borderRadiusLine: 6, // 👈 Redondeo de la línea divisora (6px)
    imagePositionX: 44, // 👈 Posición horizontal de la imagen (44%)
    imagePositionY: 15, // 👈 Posición vertical de la imagen (15%)
    imageSize: 117, // 👈 Tamaño de la imagen en píxeles (117px)
  });

  const [copySuccess, setCopySuccess] = useState(false);

  const copyHTML = () => {
    const signatureNode = document.getElementById("signature-container");
    if (!signatureNode) return;

    // URL base FIJA para GitHub Pages - HTTPS público para Gmail/Outlook
    const baseUrl = 'https://lijhoan.github.io/signature-gen';
    
    // Convertir la imagen a URL absoluta HTTPS
    let imageUrl = data.imagen;
    if (imageUrl && imageUrl.startsWith('/signature-gen/')) {
      imageUrl = baseUrl + imageUrl.replace('/signature-gen', '');
    } else if (imageUrl && imageUrl.startsWith('/')) {
      imageUrl = baseUrl + imageUrl;
    }

    // Crear HTML con estilos inline para máxima compatibilidad con clientes de correo
    const fullHTML = `
      <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${styles.fontFamily}; font-size: 14px; line-height: 1.5; color: #000000;">
        <tr>
          <td style="padding-right: 20px; vertical-align: top;">
            ${data.imagen ? `<img src="${imageUrl}" alt="${data.nombre}" width="${styles.imageSize}" height="${styles.imageSize}" style="border-radius: ${styles.borderRadius}%; object-fit: cover; border: 2px solid ${styles.lineColor}; display: block;" />` : ''}
          </td>
          <td style="border-left: ${styles.lineWidth}px solid ${styles.lineColor}; border-radius: ${styles.borderRadiusLine}px; padding-left: 20px; padding-top: 8px; padding-bottom: 8px; vertical-align: top;">
            <div>
              <strong style="font-size: 17px; color: ${styles.colorNombre}; display: block; margin-bottom: 4px; font-weight: 700;">
                ${data.nombre}
              </strong>
              <span style="color: ${styles.colorCargo}; font-weight: 500; display: block; margin-bottom: 8px;">
                ${data.cargo}
              </span>
              ${Object.keys(socialNetworks)
                .filter((key) => socialNetworks[key].enabled)
                .map((key) => {
                  const network = socialNetworks[key];
                  const iconUrl = iconSets[iconStyle][key];
                  let href = network.url;
                  
                  // Generar href correcto según tipo
                  if (network.type === "phone") {
                    href = `https://wa.me/${network.url.replace(/[^0-9]/g, "")}`;
                  } else if (network.type === "email") {
                    href = `mailto:${network.url}`;
                  } else if (!network.url.startsWith('http')) {
                    href = `https://${network.url}`;
                  }
                  
                  // Texto a mostrar
                  let displayText = network.url;
                  if (network.type === "url") {
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
                    displayText = customTexts[key] || network.url.replace(/^https?:\/\/(www\.)?/, "").split('/')[0];
                  }
                  
                  return `
                <div style="display: flex; align-items: center; margin-bottom: 4px;">
                  <img src="${iconUrl}" alt="${network.label}" width="16" height="16" style="margin-right: 8px; display: inline-block; vertical-align: middle;" />
                  <a href="${href}" ${network.type === "url" ? 'target="_blank"' : ''} style="color: ${styles.colorContacto}; text-decoration: none; display: inline-block;">
                    ${displayText}
                  </a>
                </div>`;
                })
                .join('')}
            </div>
          </td>
        </tr>
      </table>
    `.trim();

    // Copiar al portapapeles
    navigator.clipboard.writeText(fullHTML).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  return (
    <div className="main-container">
      <Header />

      <div className="main-layout">
        <Formulario
          data={data}
          setData={setData}
          socialNetworks={socialNetworks}
          setSocialNetworks={setSocialNetworks}
          styles={styles}
          setStyles={setStyles}
          iconStyle={iconStyle}
          setIconStyle={setIconStyle}
          iconSets={iconSets}
        />
        <VistaPrevia
          data={data}
          socialNetworks={socialNetworks}
          styles={styles}
          onCopy={copyHTML}
          copySuccess={copySuccess}
          iconStyle={iconStyle}
          iconSets={iconSets}
        />
      </div>
    </div>
  );
}

export default App;
