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
    lineColor: "#cccccc", // 👈 Color de la línea divisora (gris claro visible)
    lineWidth: 6, // 👈 Grosor de la línea (6px)
    lineHeight: 117, // 👈 Altura de la línea divisora (117px por defecto, igual a imageSize)
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

  const copyHTML = async () => {
    const signatureNode = document.getElementById("signature-container");
    if (!signatureNode) return;

    try {
      // URL base FIJA para GitHub Pages - HTTPS público para Gmail/Outlook
      const baseUrl = 'https://lijhoan.github.io/signature-gen';
      
      // Clonar el nodo para modificar las URLs sin afectar la vista
      const signatureClone = signatureNode.cloneNode(true);
      
      // Convertir todas las imágenes a URLs absolutas HTTPS
      const images = signatureClone.querySelectorAll('img');
      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('/signature-gen/')) {
          img.setAttribute('src', baseUrl + src.replace('/signature-gen', ''));
        } else if (src && src.startsWith('/')) {
          img.setAttribute('src', baseUrl + src);
        }
      });

      // 🔑 MÉTODO PRINCIPAL: Clipboard API moderna (como EDteam)
      const htmlContent = signatureClone.outerHTML;
      const textContent = signatureClone.innerText;
      
      // Crear Blobs para HTML y texto plano
      const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
      const textBlob = new Blob([textContent], { type: 'text/plain' });

      // Crear ClipboardItem con ambos formatos
      const clipboardItem = new ClipboardItem({
        'text/html': htmlBlob,
        'text/plain': textBlob
      });

      // Copiar al portapapeles
      await navigator.clipboard.write([clipboardItem]);
      
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch (error) {
      console.error("Error con Clipboard API, intentando fallback...", error);
      
      // FALLBACK: execCommand para navegadores antiguos
      try {
        const baseUrl = 'https://lijhoan.github.io/signature-gen';
        const signatureClone = signatureNode.cloneNode(true);
        
        const images = signatureClone.querySelectorAll('img');
        images.forEach(img => {
          const src = img.getAttribute('src');
          if (src && src.startsWith('/signature-gen/')) {
            img.setAttribute('src', baseUrl + src.replace('/signature-gen', ''));
          } else if (src && src.startsWith('/')) {
            img.setAttribute('src', baseUrl + src);
          }
        });
        
        // Método antiguo: seleccionar y copiar
        const tempDiv = document.createElement('div');
        tempDiv.appendChild(signatureClone);
        document.body.appendChild(tempDiv);
        
        const range = document.createRange();
        range.selectNodeContents(tempDiv);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        document.execCommand('copy');
        
        selection.removeAllRanges();
        document.body.removeChild(tempDiv);
        
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2500);
      } catch (fallbackError) {
        console.error("Error en todos los métodos de copiado:", fallbackError);
        alert("No se pudo copiar la firma. Por favor, intenta con otro navegador.");
      }
    }
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
