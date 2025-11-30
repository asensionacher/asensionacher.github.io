# 🍪 Guía de Debug de Cookies

## Funciones de Verificación

El sistema de cookies incluye varias funciones de debug para verificar que todo funciona correctamente.

### 1. `checkCookieStatus()`

Muestra una tabla con el estado actual de las cookies.

```javascript
checkCookieStatus()
```

**Resultado:**
- `cookieConsent`: Estado del consentimiento ('accepted', 'rejected', 'customized', o null)
- `analyticsConsent`: Estado de Google Analytics ('true', 'false', o null)
- `gaDisabled`: Si Google Analytics está deshabilitado
- `gtagExists`: Si gtag está disponible
- `bannerVisible`: Si el banner está visible

### 2. `verificarCookies()`

Muestra información detallada de todas las cookies y el estado del localStorage.

```javascript
verificarCookies()
```

**Resultado:**
- Estado de cookieConsent
- Estado de analyticsConsent
- Idioma preferido
- Estado de ga-disable
- Todas las cookies del navegador

## Logs Automáticos

El sistema muestra logs automáticos en la consola con emojis para facilitar el seguimiento:

### Al cargar la página:
- 🍪 Inicializando sistema de cookies
- 📝 Cookie Consent: [estado]
- 📊 Analytics Consent: [estado]
- 🎨 Banner element: [existe o no]

### Al hacer clic en los botones:
- ✅ Usuario ACEPTÓ todas las cookies
- ❌ Usuario RECHAZÓ todas las cookies
- ⚙️ Usuario guardó preferencias personalizadas
- 💾 Guardado en localStorage
- 📊 Google Analytics habilitado/deshabilitado

## Botón de Reset en Página de Privacidad

Visita `/privacitat/` y haz clic en el botón "Reconfigurar las meves preferències de cookies" para:
1. Eliminar todas las preferencias guardadas
2. Ver los logs en la consola
3. Recargar la página para que aparezca el banner de nuevo

## Comprobar Funcionamiento

### Escenario 1: Aceptar todas las cookies
1. Abre la consola del navegador (F12)
2. Recarga la página
3. Haz clic en "Acceptar totes"
4. Verifica en la consola:
   - ✅ Usuario ACEPTÓ todas las cookies
   - 💾 Guardado en localStorage
   - 📊 Google Analytics habilitado
5. Ejecuta `checkCookieStatus()` y verifica:
   - `cookieConsent: "accepted"`
   - `analyticsConsent: "true"`
   - `gaDisabled: false`

### Escenario 2: Rechazar todas las cookies
1. Recarga la página o resetea las preferencias
2. Haz clic en "Rebutjar totes"
3. Verifica en la consola:
   - ❌ Usuario RECHAZÓ todas las cookies
   - 💾 Guardado en localStorage
   - 🚫 Google Analytics deshabilitado
4. Ejecuta `checkCookieStatus()` y verifica:
   - `cookieConsent: "rejected"`
   - `analyticsConsent: "false"`
   - `gaDisabled: true`

### Escenario 3: Personalizar cookies
1. Recarga la página o resetea las preferencias
2. Haz clic en "Personalitzar"
3. Activa/desactiva el checkbox de Analytics
4. Haz clic en "Guardar Preferències"
5. Verifica en la consola:
   - ⚙️ Usuario guardó preferencias personalizadas
   - 📊 Analytics habilitado: [true/false]
   - 💾 Guardado en localStorage
6. Ejecuta `checkCookieStatus()` y verifica:
   - `cookieConsent: "customized"`
   - `analyticsConsent: "true" o "false"` (según tu elección)

## Verificar en Móvil

Para verificar en dispositivos móviles:

### Chrome Android:
1. Abre Chrome
2. Visita `chrome://inspect#devices` en tu ordenador
3. Conecta el móvil y habilita "Remote Debugging"
4. Inspecciona la página y verás la consola

### Safari iOS:
1. Habilita "Desarrollador web" en Ajustes → Safari → Avanzado
2. Conecta el iPhone/iPad al Mac
3. Abre Safari en Mac → Desarrollar → [Tu dispositivo] → [Tu página]

### Alternativa simple:
1. Visita `/privacitat/` en tu móvil
2. Usa el botón de reset varias veces
3. Verifica que el banner aparece cada vez después de recargar

## Problemas Comunes

### El banner no aparece
- Verifica que no hay un consentimiento previo guardado
- Ejecuta `localStorage.removeItem('cookieConsent')` en la consola
- Recarga la página

### Google Analytics no se habilita/deshabilita
- Verifica que gtag está cargado: `typeof gtag !== 'undefined'`
- Revisa el archivo `_includes/google-analytics.html`
- Comprueba que el ID de GA es correcto: `G-83MQ5DYNRJ`

### Los logs no aparecen en móvil
- Los logs solo se ven en la consola del navegador
- Usa las herramientas de desarrollo remoto mencionadas arriba
- O verifica el comportamiento visual del banner y los botones

## localStorage vs Cookies

**Importante:** Este sitio usa `localStorage` para guardar las preferencias, NO cookies HTTP tradicionales.

- `localStorage.getItem('cookieConsent')` → preferencia guardada
- `localStorage.getItem('analyticsConsent')` → estado de analytics
- `document.cookie` → cookies HTTP (usadas por Google Analytics si está habilitado)

Para verificar localStorage:
```javascript
console.log(localStorage);
// o
Object.keys(localStorage).forEach(key => {
    console.log(key, ':', localStorage.getItem(key));
});
```
