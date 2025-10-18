// src/components/ModalQR.jsx
import React from "react";

export default function ModalQR({ show, onClose, qrSrc }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)",
        animation: "fadeIn 0.3s ease",
        padding: "15px",
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f9f9fb 100%)",
          borderRadius: "20px",
          padding: "40px 30px 25px",
          minWidth: "320px",
          maxWidth: "450px",
          textAlign: "center",
          boxShadow: "0 10px 50px rgba(199, 65, 159, 0.2)",
          border: "2px solid rgba(199, 65, 159, 0.1)",
          animation: "slideUp 0.3s ease",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icono de cierre */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#999",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#c7419f")}
          onMouseLeave={(e) => (e.target.style.color = "#999")}
        >
          ×
        </button>

        {/* Icono decorativo */}
        <div className="modal-emoji" style={{ marginBottom: "15px" }}>
          <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f389.png" alt="Party" style={{ width: "48px", height: "48px" }} />
        </div>

        {/* Título */}
        <h3
          style={{
            background: "linear-gradient(135deg, #c7419f 0%, #e43a70 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: "15px",
            lineHeight: 1.4,
          }}
        >
          ¡Firma copiada con éxito! <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f680.png" alt="Rocket" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} />
        </h3>

        {/* Mensaje */}
        <p
          style={{
            color: "#4c4f4c",
            fontSize: "1rem",
            marginBottom: "20px",
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          ¡La transformación digital empieza con tu firma digital!<br />
          <strong style={{ color: "#c7419f" }}>
            Si te gustó la experiencia, Go tu Yape <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f4f1.png" alt="Phone" style={{ width: "20px", height: "20px", verticalAlign: "middle" }} /> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f609.png" alt="Wink" style={{ width: "20px", height: "20px", verticalAlign: "middle" }} /> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f44d.png" alt="Thumbs" style={{ width: "20px", height: "20px", verticalAlign: "middle" }} />
          </strong>
        </p>

        {/* QR Yape */}
        <div
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "16px",
            display: "inline-block",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            marginBottom: "20px",
          }}
        >
          <img
            src={qrSrc}
            alt="QR Yape"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "12px",
              display: "block",
            }}
          />
        </div>

        {/* Texto adicional */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "#888",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          La transformación digital empieza en tu correo <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f4e7.png" alt="Email" style={{ width: "18px", height: "18px", verticalAlign: "middle" }} /> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/2728.png" alt="Star" style={{ width: "18px", height: "18px", verticalAlign: "middle" }} />
        </p>

        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          style={{
            padding: "14px 40px",
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #c7419f 0%, #e43a70 100%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(199, 65, 159, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "0 auto",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 20px rgba(199, 65, 159, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(199, 65, 159, 0.3)";
          }}
        >
          ¡Entendido! <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f44d.png" alt="Thumbs" style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* 📱 RESPONSIVE MODAL - Mobile First */
          @media (max-width: 768px) {
            /* Ajuste del contenedor del modal */
            .modal-content {
              min-width: 90% !important;
              max-width: 95% !important;
              padding: 30px 20px 20px !important;
              margin: 0 !important;
            }
          }

          @media (max-width: 480px) {
            /* Ajustes para móviles pequeños */
            .modal-content {
              min-width: 92% !important;
              padding: 25px 15px 20px !important;
              border-radius: 16px !important;
            }

            /* Título más pequeño en móvil */
            .modal-content h3 {
              font-size: 1.1rem !important;
              line-height: 1.3 !important;
            }

            /* Texto del mensaje */
            .modal-content p {
              font-size: 0.9rem !important;
            }

            /* QR más pequeño en móviles */
            .modal-content img[alt="QR Yape"] {
              width: 150px !important;
              height: 150px !important;
            }

            /* Botón más grande para touch */
            .modal-content button {
              padding: 14px 28px !important;
              font-size: 0.95rem !important;
            }

            /* Icono decorativo más pequeño */
            .modal-emoji img {
              width: 40px !important;
              height: 40px !important;
            }
          }

          @media (max-width: 360px) {
            /* Dispositivos muy pequeños */
            .modal-content {
              min-width: 95% !important;
              max-width: 95% !important;
              padding: 20px 12px 18px !important;
            }

            .modal-content h3 {
              font-size: 1rem !important;
            }

            .modal-content img[alt="QR Yape"] {
              width: 130px !important;
              height: 130px !important;
            }
          }

          /* Landscape móviles */
          @media (max-height: 600px) and (orientation: landscape) {
            .modal-content {
              max-height: 90vh;
              overflow-y: auto;
              padding: 20px 15px !important;
            }

            .modal-emoji {
              margin-bottom: 10px !important;
            }

            .modal-emoji img {
              width: 32px !important;
              height: 32px !important;
            }

            .modal-content h3 {
              font-size: 1rem !important;
              margin-bottom: 10px !important;
            }

            .modal-content p {
              font-size: 0.85rem !important;
              margin-bottom: 15px !important;
            }

            .modal-content img[alt="QR Yape"] {
              width: 120px !important;
              height: 120px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
