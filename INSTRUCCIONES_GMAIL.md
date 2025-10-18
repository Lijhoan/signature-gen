# 📧 Cómo usar tu firma en Gmail y Outlook

## ✅ Pasos para configurar en Gmail

1. **Accede a tu generador de firmas**
   - Abre: https://lijhoan.github.io/signature-gen/

2. **Personaliza tu firma**
   - Completa tus datos personales (nombre, cargo, teléfono)
   - Sube tu foto de perfil (opcional)
   - Activa/desactiva redes sociales según necesites
   - Personaliza colores, tipografía y estilos

3. **Copia el HTML de la firma**
   - Haz clic en el botón **"Copiar Firma HTML"**
   - Verás una notificación verde: "Firma copiada correctamente"

4. **Configura en Gmail**
   - Ve a Gmail → ⚙️ **Configuración** → **Ver toda la configuración**
   - Pestaña **"General"** → sección **"Firma"**
   - Haz clic en **"+ Crear nueva"**
   - Asigna un nombre (ej: "Mi Firma Profesional")
   - En el editor de firma, haz clic derecho → **"Pegar"** (Ctrl+V)
   - ✅ La firma aparecerá **renderizada** (no como código HTML)
   - Desplázate hacia abajo y haz clic en **"Guardar cambios"**

5. **Verifica que funcione**
   - Haz clic en **"Redactar"** nuevo correo
   - Tu firma debe aparecer automáticamente al final
   - Todos los enlaces e imágenes deben funcionar

---

## 📮 Pasos para configurar en Outlook (Web)

1. **Accede a Outlook**
   - Ve a: https://outlook.office.com/

2. **Abre la configuración de firmas**
   - Haz clic en ⚙️ **Configuración** (esquina superior derecha)
   - Busca **"Redactar y responder"**
   - En la sección **"Firma de correo electrónico"**, haz clic en **"+ Nueva firma"**

3. **Pega tu firma**
   - Asigna un nombre a la firma
   - En el editor, haz clic derecho → **"Pegar"** (Ctrl+V)
   - La firma se renderizará correctamente
   - Haz clic en **"Guardar"**

4. **Configura para nuevos correos**
   - Activa la opción: **"Incluir automáticamente mi firma en mensajes nuevos"**
   - Haz clic en **"Guardar"** nuevamente

---

## 🔧 Solución de problemas

### ❌ "Gmail muestra el HTML como texto plano"
**Causa:** Las imágenes no se están cargando desde URLs absolutas HTTPS.

**Solución:**
- Asegúrate de estar usando la versión publicada: https://lijhoan.github.io/signature-gen/
- NO copies desde `localhost:5173` (desarrollo local)
- Verifica que el botón diga "Firma copiada correctamente" después de copiar

### ❌ "La imagen no se ve en Gmail"
**Causa:** La imagen no está alojada públicamente o usa rutas relativas.

**Solución:**
- Todas las imágenes en esta aplicación están alojadas en GitHub Pages (HTTPS)
- Si subes tu propia foto, asegúrate de que esté en la carpeta `public/`
- Reconstruye y redespliega: `npm run build && npm run deploy`

### ❌ "Los iconos de redes sociales no aparecen"
**Causa:** Bloqueo de imágenes externas o CDN caído.

**Solución:**
- Los iconos usan Icons8 CDN (https://img.icons8.com/)
- Verifica que Gmail tenga permiso para cargar imágenes externas
- En Gmail: **"Configuración"** → **"General"** → **"Imágenes"** → Selecciona **"Preguntar antes de mostrar contenido externo"** o **"Mostrar siempre"**

### ❌ "Los colores o estilos se ven diferentes"
**Causa:** Gmail y Outlook tienen limitaciones CSS.

**Solución:**
- Esta aplicación ya usa **inline styles** para máxima compatibilidad
- Evita usar propiedades CSS modernas (flexbox, grid) en el HTML copiado
- La estructura usa `<table>` (100% compatible con clientes de correo)

---

## 🎨 Personalización avanzada

### Cambiar la imagen de perfil
1. Sube tu foto en el campo **"Imagen"**
2. Ajusta tamaño, posición X/Y y border-radius según prefieras
3. Copia nuevamente el HTML

### Agregar más redes sociales
1. Activa las redes que necesites (Instagram, Facebook, YouTube, etc.)
2. Pega las URLs correctas en cada campo
3. El sistema automáticamente formatea los enlaces:
   - **WhatsApp:** Convierte a `wa.me/+51931347134`
   - **Email:** Convierte a `mailto:tucorreo@ejemplo.com`
   - **URLs:** Agrega `https://` automáticamente

### Cambiar estilos de iconos
- **Color:** Iconos a full color (recomendado para firmas creativas)
- **Negro:** Iconos monocromáticos negros (profesional y minimalista)
- **Blanco:** Iconos blancos (para fondos oscuros - no recomendado en email)

---

## 📱 Compatibilidad

✅ **Clientes de correo soportados:**
- Gmail (Web y móvil)
- Outlook (Web, Desktop y móvil)
- Apple Mail
- Thunderbird
- Yahoo Mail
- Otros clientes modernos

✅ **Navegadores soportados:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🚀 Despliegue y desarrollo

### Desarrollo local
```bash
npm install
npm run dev
```

### Build para producción
```bash
npm run build
```

### Desplegar a GitHub Pages
```bash
npm run deploy
```

---

## 📝 Notas importantes

- ⚠️ **Siempre usa la versión publicada** (https://lijhoan.github.io/signature-gen/) para copiar firmas
- ⚠️ Las imágenes deben estar alojadas en servidores públicos con **HTTPS**
- ⚠️ Gmail puede cachear firmas - si actualizas, espera ~5 minutos o limpia caché
- ⚠️ Los clientes de correo **no soportan JavaScript** - solo HTML + CSS inline

---

## 🆘 Soporte

Si tienes problemas:
1. Verifica que estés usando URLs absolutas HTTPS
2. Comprueba la consola del navegador (F12) para errores
3. Prueba en modo incógnito para descartar problemas de caché
4. Contacta al desarrollador: **Lijhoan M.C** (CEO - PASS&DATA)

---

**Versión:** 1.0.0  
**Última actualización:** Octubre 2025  
**Licencia:** MIT
