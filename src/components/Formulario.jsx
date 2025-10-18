// src/components/Formulario.jsx
import React from "react";

const Formulario = ({ data, setData, socialNetworks, setSocialNetworks, styles, setStyles, iconStyle, setIconStyle, iconSets }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor selecciona un archivo de imagen válido (JPG, PNG).");
    }
  };

  const handleStyleChange = (e) => {
    setStyles({ ...styles, [e.target.name]: e.target.value });
  };

  // 👇 NUEVO: Manejar cambios en redes sociales
  const toggleSocialNetwork = (key) => {
    setSocialNetworks({
      ...socialNetworks,
      [key]: {
        ...socialNetworks[key],
        enabled: !socialNetworks[key].enabled,
      },
    });
  };

  const updateSocialURL = (key, newUrl) => {
    setSocialNetworks({
      ...socialNetworks,
      [key]: {
        ...socialNetworks[key],
        url: newUrl,
      },
    });
  };

  return (
    <div className="card" style={{ maxHeight: "none", overflowY: "auto", paddingBottom: "50px" }}>
      <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>
        Datos Personales
      </h3>

      <label className="label">Nombre:</label>
      <input
        name="nombre"
        value={data.nombre}
        onChange={handleChange}
        className="input-field"
      />

      <label className="label">Cargo:</label>
      <input
        name="cargo"
        value={data.cargo}
        onChange={handleChange}
        className="input-field"
      />

      <label className="label">Foto (subir imagen):</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageUpload}
        style={{ marginBottom: "20px", display: "block" }}
      />

      <h3 style={{ color: "var(--secondary)", marginBottom: "15px", marginTop: "25px" }}>
        Colores de Texto
      </h3>

      <div className="color-control-row" style={{ display: "flex", gap: "15px", marginBottom: "15px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Color Nombre</label>
          <input
            type="color"
            name="colorNombre"
            value={styles.colorNombre}
            onChange={handleStyleChange}
            style={{ width: "100%", height: "40px", cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <label className="label">Código HEX</label>
          <input
            type="text"
            name="colorNombre"
            value={styles.colorNombre}
            onChange={handleStyleChange}
            className="input-field"
            placeholder="#e43a70"
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>

      <div className="color-control-row" style={{ display: "flex", gap: "15px", marginBottom: "15px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Color Cargo</label>
          <input
            type="color"
            name="colorCargo"
            value={styles.colorCargo}
            onChange={handleStyleChange}
            style={{ width: "100%", height: "40px", cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <label className="label">Código HEX</label>
          <input
            type="text"
            name="colorCargo"
            value={styles.colorCargo}
            onChange={handleStyleChange}
            className="input-field"
            placeholder="#4347a3"
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>

      <div className="color-control-row" style={{ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Color Contacto</label>
          <input
            type="color"
            name="colorContacto"
            value={styles.colorContacto}
            onChange={handleStyleChange}
            style={{ width: "100%", height: "40px", cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <label className="label">Código HEX</label>
          <input
            type="text"
            name="colorContacto"
            value={styles.colorContacto}
            onChange={handleStyleChange}
            className="input-field"
            placeholder="#4c4f4c"
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>

      <h3 style={{ color: "var(--secondary)", marginBottom: "20px" }}>
        Personalización de Línea
      </h3>

      <div className="color-control-row" style={{ display: "flex", gap: "15px", marginBottom: "15px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Color línea</label>
          <input
            type="color"
            name="lineColor"
            value={styles.lineColor}
            onChange={handleStyleChange}
            style={{ width: "100%", height: "40px", cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <label className="label">Código HEX</label>
          <input
            type="text"
            name="lineColor"
            value={styles.lineColor}
            onChange={handleStyleChange}
            className="input-field"
            placeholder="#001a31"
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>

      <div className="slider-control-row" style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Grosor línea: {styles.lineWidth}px</label>
          <input
            type="range"
            name="lineWidth"
            min="1"
            max="10"
            value={styles.lineWidth}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className="label">Altura línea: {styles.lineHeight}px</label>
          <input
            type="range"
            name="lineHeight"
            min="30"
            max="150"
            value={styles.lineHeight}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="slider-control-row" style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Redondeo línea: {styles.borderRadiusLine}px</label>
          <input
            type="range"
            name="borderRadiusLine"
            min="0"
            max="10"
            value={styles.borderRadiusLine}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="slider-control-row" style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Tamaño imagen: {styles.imageSize}px</label>
          <input
            type="range"
            name="imageSize"
            min="50"
            max="150"
            value={styles.imageSize}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className="label">Redondeo imagen: {styles.borderRadius}%</label>
          <input
            type="range"
            name="borderRadius"
            min="0"
            max="50"
            value={styles.borderRadius}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="slider-control-row" style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ flex: 1 }}>
          <label className="label">Posición X: {styles.imagePositionX}%</label>
          <input
            type="range"
            name="imagePositionX"
            min="0"
            max="100"
            value={styles.imagePositionX}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className="label">Posición Y: {styles.imagePositionY}%</label>
          <input
            type="range"
            name="imagePositionY"
            min="0"
            max="100"
            value={styles.imagePositionY}
            onChange={handleStyleChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <h3 style={{ color: "var(--secondary)", marginBottom: "15px", marginTop: "25px" }}>
        Tipografía
      </h3>

      <label className="label">Fuente:</label>
      <select
        name="fontFamily"
        value={styles.fontFamily}
        onChange={handleStyleChange}
        className="input-field"
        style={{ padding: "10px" }}
      >
        <option value="Poppins, Arial, sans-serif">Poppins</option>
        <option value="Inter, Arial, sans-serif">Inter</option>
        <option value="'Nunito Sans', Arial, sans-serif">Nunito Sans</option>
        <option value="Roboto, Arial, sans-serif">Roboto</option>
        <option value="'Open Sans', Arial, sans-serif">Open Sans</option>
      </select>

      {/* 👇 NUEVO: Selector de estilo de iconos */}
      <h3 style={{ color: "var(--secondary)", marginBottom: "15px", marginTop: "25px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src="https://img.icons8.com/fluency/24/paint-palette.png" alt="Palette" style={{ width: "24px", height: "24px" }} /> Estilo de Iconos
      </h3>

      <label className="label">Estilo:</label>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setIconStyle("color")}
          style={{
            flex: 1,
            padding: "12px",
            border: iconStyle === "color" ? "2px solid var(--primary)" : "1px solid var(--border-color)",
            borderRadius: "8px",
            backgroundColor: iconStyle === "color" ? "var(--bg-light)" : "white",
            cursor: "pointer",
            fontWeight: iconStyle === "color" ? "600" : "400",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <img src="https://img.icons8.com/fluency/18/paint-palette.png" alt="Color" style={{ width: "18px", height: "18px" }} /> Color
        </button>
        <button
          onClick={() => setIconStyle("black")}
          style={{
            flex: 1,
            padding: "12px",
            border: iconStyle === "black" ? "2px solid var(--primary)" : "1px solid var(--border-color)",
            borderRadius: "8px",
            backgroundColor: iconStyle === "black" ? "var(--bg-light)" : "white",
            cursor: "pointer",
            fontWeight: iconStyle === "black" ? "600" : "400",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <img src="https://img.icons8.com/fluency/18/filled-circle.png" alt="Black" style={{ width: "18px", height: "18px", filter: "grayscale(100%) brightness(0)" }} /> Negro
        </button>
        <button
          onClick={() => setIconStyle("white")}
          style={{
            flex: 1,
            padding: "12px",
            border: iconStyle === "white" ? "2px solid var(--primary)" : "1px solid var(--border-color)",
            borderRadius: "8px",
            backgroundColor: iconStyle === "white" ? "var(--bg-light)" : "white",
            cursor: "pointer",
            fontWeight: iconStyle === "white" ? "600" : "400",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <img src="https://img.icons8.com/fluency/18/filled-circle.png" alt="White" style={{ width: "18px", height: "18px", filter: "brightness(2)" }} /> Blanco
        </button>
      </div>

      <h3 style={{ color: "var(--secondary)", marginBottom: "15px", marginTop: "25px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src="https://img.icons8.com/fluency/24/link.png" alt="Link" style={{ width: "24px", height: "24px" }} /> Redes Sociales y Contacto
      </h3>

      {Object.keys(socialNetworks).map((key) => {
        const network = socialNetworks[key];
        const currentIcon = iconSets[iconStyle][key];
        return (
          <div key={key} style={{ marginBottom: "15px" }}>
            <label
              style={{
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                type="checkbox"
                checked={network.enabled}
                onChange={() => toggleSocialNetwork(key)}
              />
              <img src={currentIcon} alt={network.label} width="18" height="18" />
              {network.label}
            </label>
            {network.enabled && (
              <input
                type="text"
                value={network.url}
                onChange={(e) => updateSocialURL(key, e.target.value)}
                className="input-field"
                placeholder={`Tu ${network.label}`}
                style={{ marginTop: "6px" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Formulario;
