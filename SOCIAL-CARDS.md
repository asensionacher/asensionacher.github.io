# 📱 Guía de Tarjetas de Redes Sociales (Social Cards)

## ✅ Implementación Completada

Se han añadido todas las meta tags necesarias para que las tarjetas sociales aparezcan correctamente al compartir el sitio en:
- Facebook
- Twitter/X
- LinkedIn
- WhatsApp
- Telegram
- Otras redes sociales

## 🎯 Características Implementadas

### Open Graph (Facebook, LinkedIn, WhatsApp)
- ✅ `og:type` - Tipo de contenido (website o article)
- ✅ `og:url` - URL canónica de la página
- ✅ `og:title` - Título de la página
- ✅ `og:description` - Descripción de la página
- ✅ `og:image` - Imagen social (1200x630px recomendado)
- ✅ `og:site_name` - Nombre del sitio
- ✅ `og:locale` - Idiomas disponibles (ca, es, en)

### Twitter Card
- ✅ `twitter:card` - Tipo de tarjeta (summary_large_image)
- ✅ `twitter:site` - Usuario de Twitter (@adesclot)
- ✅ `twitter:title` - Título
- ✅ `twitter:description` - Descripción
- ✅ `twitter:image` - Imagen
- ✅ `twitter:image:alt` - Texto alternativo

### Schema.org (Google+)
- ✅ `itemprop:name` - Nombre
- ✅ `itemprop:description` - Descripción
- ✅ `itemprop:image` - Imagen

## 🧪 Cómo Probar las Tarjetas Sociales

### 1. Facebook Sharing Debugger
1. Ve a: https://developers.facebook.com/tools/debug/
2. Introduce tu URL: `https://afaescolabernatdesclot.org`
3. Haz clic en "Debug"
4. Verás una vista previa de cómo se verá la tarjeta
5. Si no aparece correctamente, haz clic en "Scrape Again"

**URLs para probar:**
- Página principal: `https://afaescolabernatdesclot.org`
- Blog: `https://afaescolabernatdesclot.org/blog/`
- Artículo: `https://afaescolabernatdesclot.org/2025/11/13/benvinguts-al-nou-blog/`

### 2. Twitter Card Validator
1. Ve a: https://cards-dev.twitter.com/validator
2. Introduce tu URL
3. Haz clic en "Preview card"
4. Verás la vista previa de la tarjeta de Twitter

### 3. LinkedIn Post Inspector
1. Ve a: https://www.linkedin.com/post-inspector/
2. Introduce tu URL
3. Haz clic en "Inspect"
4. Verás cómo se mostrará en LinkedIn

### 4. WhatsApp (Prueba manual)
1. Abre WhatsApp
2. Envía el enlace a un contacto o a ti mismo
3. Verás la vista previa con imagen, título y descripción

### 5. Open Graph Check
Herramienta universal para verificar todas las meta tags:
- https://www.opengraph.xyz/
- https://metatags.io/

## 📋 Estructura de Meta Tags por Página

### Página Principal (/)
```
Title: Inici | AFA Bernat Desclot
Description: Associació de Famílies d'Alumnes de l'Escola Bernat Desclot...
Image: /assets/images/logo-bernat-desclot-camiseta-amarilla.webp
```

### Blog (/blog/)
```
Title: Blog | AFA Bernat Desclot
Description: Notícies, activitats i esdeveniments de l'AFA Bernat Desclot...
Image: /assets/images/logo-bernat-desclot-camiseta-amarilla.webp
```

### Artículos del Blog
```
Title: [Título del artículo] | AFA Bernat Desclot
Description: [Descripción del artículo o excerpt]
Image: [Imagen específica del artículo o logo por defecto]
```

## 🎨 Recomendaciones para Imágenes Sociales

### Tamaños Recomendados

**Facebook & LinkedIn (Open Graph):**
- Tamaño ideal: 1200 x 630 píxeles
- Ratio: 1.91:1
- Tamaño mínimo: 600 x 315 píxeles
- Formato: JPG, PNG, WebP

**Twitter Card:**
- Tamaño ideal: 1200 x 675 píxeles (para summary_large_image)
- Ratio: 16:9
- Formato: JPG, PNG, WebP

**General:**
- Mantener el texto y logos en la zona segura (centro)
- Evitar texto muy pequeño (puede no leerse en móvil)
- Usar colores de marca consistentes

### Crear Imagen Social Personalizada

Si quieres crear una imagen específica para compartir en redes:

1. **Tamaño recomendado:** 1200 x 630 píxeles
2. **Incluir:**
   - Logo de la AFA
   - Nombre de la escuela
   - Eslogan: "Junts per als nostres fills"
   - Colores de marca (rosa #FF6B9D, naranja #FFA502)

3. **Guardar como:** `/assets/images/social-card.webp` o `.jpg`

4. **Actualizar en `_config.yml`:**
```yaml
og_image: /assets/images/social-card.webp
```

## 🔧 Cómo Añadir Imagen a Nuevos Posts

En el front matter del post, añade:

```yaml
---
layout: post
title: "Título del Post"
description: "Descripción del post"
image: /assets/images/nombre-imagen.webp
tags: ["tag1", "tag2"]
---
```

Si no especificas una imagen, se usará la imagen por defecto del sitio.

## ✨ Ejemplo de Tarjeta Social Generada

Cuando compartas cualquier página, se mostrará:

```
┌─────────────────────────────────────┐
│  [Imagen del logo o artículo]      │
│                                     │
├─────────────────────────────────────┤
│ AFA Bernat Desclot                 │
│ [Título de la página/artículo]     │
│ [Descripción breve...]             │
│ afaescolabernatdesclot.org         │
└─────────────────────────────────────┘
```

## 🐛 Solución de Problemas

### La imagen no aparece en Facebook
1. Ve al Facebook Sharing Debugger
2. Haz clic en "Scrape Again" para forzar actualización
3. Verifica que la imagen sea accesible públicamente
4. La imagen debe ser mínimo 200x200px

### La tarjeta no se actualiza después de cambios
1. Facebook cachea las meta tags durante 24-48 horas
2. Usa el debugger para forzar actualización
3. Agrega un parámetro a la URL: `?v=2` para forzar nueva scrape

### La descripción sale cortada
- Facebook: máximo 300 caracteres
- Twitter: máximo 200 caracteres
- Mantén descripciones entre 120-150 caracteres para mejor visualización

### La imagen aparece distorsionada
- Usa el ratio recomendado: 1.91:1 (1200x630px)
- Asegúrate de que la imagen tenga buena resolución
- Evita imágenes muy verticales u horizontales

## 📊 Verificar Rendimiento

Después de implementar, monitoriza:

1. **Google Search Console:**
   - Enlaces entrantes desde redes sociales
   - CTR de enlaces compartidos

2. **Google Analytics:**
   - Tráfico desde redes sociales
   - Engagement de usuarios de redes sociales

3. **Redes Sociales:**
   - Interacciones con publicaciones que incluyen enlaces
   - Clicks en enlaces compartidos

## 🚀 Próximos Pasos

1. ✅ Crear una imagen social personalizada (1200x630px)
2. ✅ Probar todas las URLs en los validators
3. ✅ Compartir en redes sociales y verificar visualización
4. ✅ Añadir imágenes específicas a futuros artículos del blog
5. ✅ Configurar Facebook App ID (opcional, para analytics de Facebook)

## 📚 Recursos Útiles

- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [LinkedIn Post Inspector](https://www.linkedin.com/help/linkedin/answer/a521928)
- [Open Graph Protocol](https://ogp.me/)
