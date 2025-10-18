# 📧 Cómo Configurar tu Firma en Gmail y Outlook

## ✅ Cambios Realizados

1. ✅ **Commit y Push** - Todos los cambios subidos al repositorio
2. ✅ **Build y Deploy** - Proyecto desplegado en GitHub Pages
3. ✅ **URLs Absolutas HTTPS** - Las imágenes ahora usan: `https://lijhoan.github.io/signature-gen/`

## 🌐 Tu Aplicación Está Publicada

**URL de la aplicación:** https://lijhoan.github.io/signature-gen/

## 📝 Pasos para Configurar la Firma en Gmail

### 1. Accede a tu Aplicación Web
- Abre: https://lijhoan.github.io/signature-gen/
- Personaliza tu firma (nombre, cargo, redes sociales, colores, etc.)

### 2. Copia el HTML
- Haz clic en el botón **"Copiar Firma HTML"**
- Verás el mensaje: "Firma copiada correctamente ✓"

### 3. Configura en Gmail
1. Ve a Gmail → **Configuración** (⚙️) → **Ver toda la configuración**
2. Pestaña **"General"**
3. Busca la sección **"Firma"**
4. Haz clic en **"+ Crear nueva"**
5. Dale un nombre a tu firma (ej: "Firma Profesional")
6. En el editor de firma:
   - Haz clic en el icono **"<>"** (Editar HTML) en la barra de herramientas
   - **PEGA** el HTML que copiaste
   - Haz clic nuevamente en **"<>"** para volver al modo visual
7. Configura para qué correos se usará:
   - **"Para correos nuevos:"** → Selecciona tu firma
   - **"Al responder o reenviar:"** → Selecciona tu firma
8. Desplázate hacia abajo y haz clic en **"Guardar cambios"**

### 4. Verifica que Funcione
1. Haz clic en **"Redactar"** nuevo correo
2. Tu firma debería aparecer automáticamente con:
   - ✅ Imagen redonda visible
   - ✅ Nombre y cargo con colores correctos
   - ✅ Iconos de redes sociales
   - ✅ Enlaces funcionando al hacer clic

## 📧 Configuración en Outlook (Web)

1. Ve a Outlook.com → **Configuración** (⚙️) → **Ver toda la configuración**
2. **"Correo"** → **"Redactar y responder"**
3. En la sección **"Firma de correo electrónico"**
4. Pega el HTML copiado (Outlook Web soporta HTML directamente)
5. Activa **"Incluir automáticamente mi firma en los mensajes nuevos"**
6. Guarda los cambios

## 🔧 Solución de Problemas

### ❌ Si Gmail muestra HTML en texto plano:

**Causa:** No usaste el modo "Editar HTML" del editor

**Solución:**
1. Borra el contenido de la firma en Gmail
2. Haz clic en el icono **"<>"** PRIMERO
3. PEGA el HTML
4. Haz clic nuevamente en **"<>"** para salir del modo HTML

### ❌ Si la imagen no se ve:

**Causa:** La imagen aún no está sincronizada en GitHub Pages (tarda 1-2 minutos)

**Solución:**
1. Espera 2-3 minutos después del deploy
2. Verifica que esta URL cargue la imagen: https://lijhoan.github.io/signature-gen/default-avatar.jpg
3. Si no carga, verifica que el archivo esté en la carpeta `public/` del proyecto
4. Vuelve a hacer `npm run build` y `npm run deploy`

### ❌ Si los iconos no se ven:

**Causa:** Icons8 CDN puede estar bloqueado por tu red

**Solución:**
1. Verifica que puedas abrir: https://img.icons8.com/color/16/whatsapp--v1.png
2. Si está bloqueado, cambia de red (usa datos móviles o WiFi diferente)
3. Los iconos funcionan en Gmail/Outlook siempre que tengas internet

## 🎨 Personalización Adicional

### Cambiar la Imagen de Perfil
1. En la aplicación web, sección **"Datos Personales"**
2. Haz clic en **"Elegir archivo"**
3. Selecciona tu foto (PNG, JPG, etc.)
4. La imagen se cargará y se usará en la firma
5. Copia nuevamente el HTML para que incluya la nueva imagen

### Cambiar Colores, Fuentes, Iconos
- Todos los controles están en el panel izquierdo de la aplicación
- Los cambios se ven en tiempo real en la vista previa
- Una vez satisfecho, copia el HTML actualizado

## 🚀 Comandos para Actualizar la Aplicación

Si haces cambios al código en el futuro:

```bash
# 1. Guardar cambios
git add .
git commit -m "descripción de cambios"
git push origin main

# 2. Construir para producción
npm run build

# 3. Desplegar a GitHub Pages
npm run deploy

# 4. Esperar 1-2 minutos y recargar: https://lijhoan.github.io/signature-gen/
```

## ✅ Checklist Final

- [x] Código actualizado con URLs absolutas HTTPS
- [x] Proyecto desplegado en GitHub Pages
- [x] HTML generado compatible con Gmail/Outlook
- [x] Imágenes accesibles desde Internet (no localhost)
- [x] Iconos usando CDN público (Icons8)
- [x] Instrucciones de configuración documentadas

---

**🎉 ¡Tu firma profesional está lista para usar!**

Si tienes problemas, verifica que:
1. La aplicación cargue correctamente en: https://lijhoan.github.io/signature-gen/
2. La imagen cargue en: https://lijhoan.github.io/signature-gen/default-avatar.jpg
3. Estés usando el modo "Editar HTML" en Gmail

**Desarrollado por Lijhoan M.C - PASS&DATA** 🚀
