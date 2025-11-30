# Configuración de SEO y Analytics

## Google Analytics

Para activar Google Analytics:

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad para tu sitio web
3. Obtén tu ID de seguimiento (formato: `G-XXXXXXXXXX`)
4. Edita `_config.yml` y reemplaza `G-XXXXXXXXXX` con tu ID real:
   ```yaml
   google_analytics: G-TU-ID-AQUI
   ```

## Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Añade tu propiedad: `afaescolabernatdesclot.org`
3. Verifica la propiedad usando uno de estos métodos:
   - **Archivo HTML**: Descarga el archivo de verificación y súbelo a la raíz del repositorio
   - **Meta tag**: Añade el código de verificación en `_config.yml`:
     ```yaml
     webmaster_verifications:
       google: "tu-codigo-de-verificacion"
     ```
4. Envía el sitemap: `https://afaescolabernatdesclot.org/sitemap.xml`

## Bing Webmaster Tools

1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Añade tu sitio
3. Añade el código de verificación en `_config.yml`:
   ```yaml
   webmaster_verifications:
     bing: "tu-codigo-de-verificacion-bing"
   ```

## Redes Sociales (Open Graph)

Actualiza las URLs de redes sociales en `_config.yml`:

```yaml
social:
  links:
    - https://www.facebook.com/afabernatdesclot  # Tu página de Facebook
    - https://www.instagram.com/afabernatdesclot  # Tu perfil de Instagram
```

## Dominio Personalizado

El archivo `CNAME` ya está configurado con: `afaescolabernatdesclot.org`

Para configurar el dominio:

1. En tu proveedor de DNS, añade estos registros:
   ```
   Tipo: A
   Nombre: @
   Valor: 185.199.108.153
   
   Tipo: A
   Nombre: @
   Valor: 185.199.109.153
   
   Tipo: A
   Nombre: @
   Valor: 185.199.110.153
   
   Tipo: A
   Nombre: @
   Valor: 185.199.111.153
   
   Tipo: CNAME
   Nombre: www
   Valor: asensionacher.github.io
   ```

2. Para la verificación de GitHub Pages, añade este registro TXT:
   ```
   Tipo: TXT
   Nombre: _github-pages-challenge-asensionacher
   Valor: 7bf10de423cf0a4e694030fa68759f
   ```

3. En GitHub, ve a Settings > Pages y configura el custom domain: `afaescolabernatdesclot.org`

## Características SEO Implementadas

✅ Meta tags completos (title, description, keywords, author)
✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
✅ Twitter Card tags (summary_large_image)
✅ Canonical URLs
✅ Sitemap.xml automático
✅ Robots.txt
✅ Schema.org structured data (JSON-LD)
✅ Google Analytics (con anonimización de IP)
✅ RSS Feed
✅ URLs amigables
✅ Favicon y Apple Touch Icon
✅ Soporte multiidioma
✅ Social Media Cards configuradas

## Tarjetas de Redes Sociales

Se han implementado meta tags completas para:
- Facebook (Open Graph)
- Twitter/X (Twitter Cards)
- LinkedIn
- WhatsApp
- Telegram

### Probar las Tarjetas Sociales

1. **Facebook Sharing Debugger:**
   - URL: https://developers.facebook.com/tools/debug/
   - Introduce: `https://afaescolabernatdesclot.org`
   - Haz clic en "Debug" y luego "Scrape Again"

2. **Twitter Card Validator:**
   - URL: https://cards-dev.twitter.com/validator
   - Introduce tu URL y verifica la preview

3. **LinkedIn Post Inspector:**
   - URL: https://www.linkedin.com/post-inspector/
   - Verifica cómo se mostrará en LinkedIn

4. **Open Graph Check:**
   - URL: https://www.opengraph.xyz/
   - Verificación universal de meta tags

Ver `SOCIAL-CARDS.md` para más detalles sobre cómo crear imágenes sociales y personalizar tarjetas.

## Próximos Pasos

1. Configura Google Analytics con tu ID real
2. Verifica el sitio en Google Search Console
3. Actualiza las URLs de redes sociales
4. Configura el dominio personalizado con tu proveedor DNS
5. Monitoriza el rendimiento en Google Analytics y Search Console
