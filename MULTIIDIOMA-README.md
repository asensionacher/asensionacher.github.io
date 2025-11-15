# Sistema Multiidioma - AFA Bernat Desclot

## Resumen

Se ha implementado un sistema multiidioma completamente funcional usando **JavaScript del lado del cliente** (sin Jekyll-Polyglot). El sistema soporta 5 idiomas:

- **Catalán (ca)** - Idioma por defecto
- **Español (es)**
- **Inglés (en)**
- **Árabe (ar)** - Con soporte RTL (Right-to-Left)
- **Urdu (ur)** - Con soporte RTL (Right-to-Left)

## Características

### ✅ Selector de Idioma
- Dropdown funcional en el navbar
- Guarda la preferencia del usuario en localStorage
- Actualiza todo el contenido dinámicamente sin recargar la página
- Soporta RTL automáticamente para árabe y urdu

### ✅ Posts Multiidioma
- **Un solo archivo por post** con todos los idiomas
- Las traducciones se almacenan en el front matter
- El contenido cambia dinámicamente según el idioma seleccionado
- No es necesario crear múltiples archivos .md por idioma

### ✅ UI Traducida
- Navegación, footer, botones y enlaces traducidos
- Las traducciones se gestionan en JavaScript (`assets/js/main.js`)
- Soporte completo RTL con estilos CSS específicos

## Cómo Usar

### 1. Cambiar el Idioma de la Web

Los usuarios pueden cambiar el idioma haciendo clic en el selector de idiomas en el navbar (esquina superior derecha). El cambio es instantáneo y se guarda en el navegador.

### 2. Crear un Post Multiidioma

Crea un archivo en `_posts/` con el siguiente formato:

```markdown
---
layout: post
title: "Título en Catalán (idioma por defecto)"
date: 2025-11-15
author: "Autor"
description: "Descripción en catalán"
tags: ["tag1", "tag2"]
translations:
  ca:
    title: "Título en Catalán"
    description: "Descripción en catalán"
    author: "Equip AFA"
    tags: ["tag1", "tag2"]
    content: |
      <h2>Subtítulo</h2>
      <p>Contenido en catalán...</p>
      <img src="/assets/images/imagen.jpg" alt="Alt text" style="max-width: 100%; height: auto;">
  es:
    title: "Título en Español"
    description: "Descripción en español"
    author: "Equipo AFA"
    tags: ["etiqueta1", "etiqueta2"]
    content: |
      <h2>Subtítulo</h2>
      <p>Contenido en español...</p>
      <img src="/assets/images/imagen.jpg" alt="Texto alt" style="max-width: 100%; height: auto;">
  en:
    title: "Title in English"
    description: "Description in English"
    author: "AFA Team"
    tags: ["tag1", "tag2"]
    content: |
      <h2>Subtitle</h2>
      <p>Content in English...</p>
      <img src="/assets/images/image.jpg" alt="Alt text" style="max-width: 100%; height: auto;">
  ar:
    title: "العنوان بالعربية"
    description: "الوصف بالعربية"
    author: "فريق جمعية أولياء الأمور"
    tags: ["علامة1", "علامة2"]
    content: |
      <h2>عنوان فرعي</h2>
      <p>المحتوى بالعربية...</p>
      <img src="/assets/images/imagen.jpg" alt="نص بديل" style="max-width: 100%; height: auto;">
  ur:
    title: "اردو میں عنوان"
    description: "اردو میں تفصیل"
    author: "والدین ایسوسی ایشن ٹیم"
    tags: ["ٹیگ1", "ٹیگ2"]
    content: |
      <h2>ذیلی عنوان</h2>
      <p>اردو میں مواد...</p>
      <img src="/assets/images/imagen.jpg" alt="متبادل متن" style="max-width: 100%; height: auto;">
---

## Contenido por Defecto en Catalán

Este contenido aparece por defecto y también se mostrará cuando el usuario
seleccione catalán.

![Imagen](/assets/images/imagen.jpg)
```

**Importante:**
- El contenido en `translations.*.content` debe ser **HTML**, no Markdown
- Usa `<h2>`, `<p>`, `<img>`, etc.
- Las imágenes deben incluir `style="max-width: 100%; height: auto;"`
- El contenido después del front matter (---) es el contenido por defecto que aparecerá si no hay traducción disponible

### 3. Añadir Nuevas Traducciones a la UI

Edita `assets/js/main.js` y añade las traducciones en el objeto `translations`:

```javascript
const translations = {
    ca: {
        nav: {
            about: "Qui som",
            // ... más traducciones
        },
        // Añade nuevas secciones aquí
        nueva_seccion: {
            nuevo_texto: "Text en català"
        }
    },
    es: {
        nav: {
            about: "Quiénes somos",
        },
        nueva_seccion: {
            nuevo_texto: "Texto en español"
        }
    },
    // ... otros idiomas
};
```

Luego, en tu HTML, usa el atributo `data-i18n`:

```html
<h2 data-i18n="nueva_seccion.nuevo_texto">Texto por defecto</h2>
```

### 4. Soporte RTL (Árabe y Urdu)

El sistema detecta automáticamente cuando el idioma es árabe o urdu y:
- Cambia el atributo `dir="rtl"` en el `<html>`
- Aplica estilos CSS específicos para RTL
- Carga fuentes apropiadas (Noto Sans Arabic, Noto Nastaliq Urdu)

No necesitas hacer nada especial, todo es automático.

## Estructura de Archivos Modificados

```
├── _config.yml                 # Eliminado jekyll-polyglot
├── _layouts/
│   ├── default.html           # Añadido selector de idiomas y atributos data-i18n
│   └── post.html              # Sistema para posts multiidioma
├── _posts/
│   └── 2025-11-13-excursio-teatre.md  # Ejemplo de post multiidioma
├── assets/
│   ├── css/style.css          # Estilos del selector + soporte RTL
│   └── js/main.js             # Sistema de traducciones y gestión de idiomas
├── Gemfile                     # Eliminado jekyll-polyglot
└── MULTIIDIOMA-README.md       # Este archivo
```

## Ventajas de Este Sistema

1. **Simple**: No depende de plugins complejos
2. **Rápido**: Cambio de idioma instantáneo sin recargar
3. **Un solo archivo por post**: Más fácil de mantener
4. **Funciona en GitHub Pages**: No requiere plugins externos
5. **Soporte RTL completo**: Para árabe y urdu
6. **Persistencia**: El idioma se guarda en localStorage

## Migración de Posts Antiguos

Los posts antiguos con formato individual por idioma (ej: `post.es.md`, `post.en.md`) deben migrarse al nuevo formato. Ver el archivo `2025-11-13-excursio-teatre.md` como ejemplo.

Para migrar:
1. Crea un nuevo archivo sin sufijo de idioma
2. Copia el contenido catalán en el front matter por defecto
3. Añade las traducciones en `translations:`
4. Convierte el Markdown a HTML en cada sección `content:`
5. Elimina los archivos individuales antiguos

## Pruebas

Para probar localmente:

```bash
bundle install
bundle exec jekyll serve
```

Abre http://localhost:4000 y prueba el selector de idiomas.

## Soporte

Si tienes problemas:
1. Verifica que `assets/js/main.js` se esté cargando
2. Abre la consola del navegador para ver errores
3. Verifica que el localStorage no esté bloqueado
4. Asegúrate de que los atributos `data-i18n` coincidan con las claves en `translations`

---

**Fecha de implementación**: 15 de noviembre de 2025
**Versión**: 1.0
