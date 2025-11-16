# Lloc web de l'AFA Bernat Desclot - GitHub Pages

Aquest és el lloc web de l'Associació de Famílies d'Alumnes (AFA) de l'escola Bernat Desclot.

## Característiques

- 🌍 **Suport multi-idioma**: Català, Español, English, العربية, اردو
- 📱 **Disseny responsiu**: Optimitzat per a mòbil i escriptori amb menú adaptatiu
- ✨ **Interfície moderna**: Amb animacions i efectes visuals
- 📝 **Blog integrat**: Per compartir notícies i activitats amb traducció automàtica
- 🔄 **Suport RTL complet**: Per a àrab i urdú (menú, navegació i contingut)
- 💾 **Persistència d'idioma**: L'idioma seleccionat es guarda localment
- ⚡ **Canvi instantani**: Canvi d'idioma sense recarregar la pàgina

## Idiomes disponibles

El lloc web està disponible en 5 idiomes utilitzant **ISO 639-1**:

- **Català (ca)** - Idioma per defecte
- **Español (es)** - Espanyol
- **English (en)** - Anglès
- **العربية (ar)** - Àrab (amb suport RTL)
- **اردو (ur)** - Urdú (amb suport RTL)

Per a més informació sobre com gestionar traduccions:
- 📘 [MULTIIDIOMA-README.md](MULTIIDIOMA-README.md) - Guia completa del sistema multi-idioma
- 📗 [LANGUAGES.md](LANGUAGES.md) - Documentació tècnica de traduccions

## Desenvolupament local

Per executar el lloc localment:

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

Visita http://localhost:4000

El sistema multi-idioma funciona completament **del costat del client** (JavaScript), per tant:
- No cal configurar rutes diferents per idioma
- El canvi d'idioma és instantani
- La preferència es guarda en localStorage del navegador

## Afegir contingut

### Crear una entrada de blog

1. Crea un fitxer a `_posts/` amb el format: `YYYY-MM-DD-titol.md`
2. Afegeix el front matter amb traduccions:

```markdown
---
layout: post
title: "El teu títol en català"
date: 2025-11-13
author: "Autor"
description: "Descripció breu en català"
tags: ["etiqueta1", "etiqueta2"]
translations:
  ca:
    title: "Títol en Català"
    description: "Descripció en català"
    author: "Equip AFA"
    tags: ["etiqueta1", "etiqueta2"]
    content: |
      <h2>Subtítol</h2>
      <p>El teu contingut en HTML aquí...</p>
  es:
    title: "Título en Español"
    description: "Descripción en español"
    author: "Equipo AFA"
    tags: ["etiqueta1", "etiqueta2"]
    content: |
      <h2>Subtítulo</h2>
      <p>Tu contenido en HTML aquí...</p>
  en:
    title: "Title in English"
    description: "Description in English"
    author: "AFA Team"
    tags: ["tag1", "tag2"]
    content: |
      <h2>Subtitle</h2>
      <p>Your content in HTML here...</p>
  ar:
    title: "العنوان بالعربية"
    description: "الوصف بالعربية"
    author: "فريق جمعية أولياء الأمور"
    tags: ["علامة1", "علامة2"]
    content: |
      <h2>عنوان فرعي</h2>
      <p>المحتوى بالعربية...</p>
  ur:
    title: "اردو میں عنوان"
    description: "اردو میں تفصیل"
    author: "والدین ایسوسی ایشن ٹیم"
    tags: ["ٹیگ1", "ٹیگ2"]
    content: |
      <h2>ذیلی عنوان</h2>
      <p>اردو میں مواد...</p>
---

El teu contingut per defecte en català...
```

**Important**: 
- Un sol fitxer per entrada, amb totes les traduccions dins
- El contingut a `translations.*.content` ha de ser **HTML**, no Markdown
- Consulta [MULTIIDIOMA-README.md](MULTIIDIOMA-README.md) per més detalls

### Afegir traduccions a la UI

Edita `assets/js/main.js` i afegeix les traduccions a l'objecte `translations`:

```javascript
const translations = {
    ca: {
        nova_seccio: {
            nou_text: "Text en català"
        }
    },
    es: {
        nova_seccio: {
            nou_text: "Texto en español"
        }
    },
    // ... altres idiomes
};
```

Després, al HTML, usa l'atribut `data-i18n`:

```html
<h2 data-i18n="nova_seccio.nou_text">Text per defecte</h2>
```

## Tecnologies

- **Jekyll 4.4** - Generador de llocs estàtics
- **JavaScript (ES6+)** - Sistema multi-idioma del costat del client
- **CSS3** - Amb suport RTL complet i responsive design
- **GitHub Pages** - Hosting
- **GitHub Actions** - Desplegament automàtic

## Arquitectura Multi-idioma

El sistema utilitza:
- **localStorage** per persistir la preferència d'idioma
- **MutationObserver** per detectar canvis d'idioma en temps real
- **Atributs `data-i18n`** per marcar elements traduïbles
- **Front matter YAML** per traduccions de posts (un sol fitxer per post)
- **RTL automàtic** amb detecció de llengües àrab i urdú

Consulta [MULTIIDIOMA-README.md](MULTIIDIOMA-README.md) per una explicació detallada.

## Millores Recents (Novembre 2025)

### Sistema Multi-idioma
- ✅ Sistema completament funcional amb JavaScript del client
- ✅ Traducció automàtica de posts en la pàgina principal
- ✅ Canvi d'idioma instantani sense recarregar
- ✅ Un sol fitxer per post amb totes les traduccions

### Menú Mòbil i RTL
- ✅ Menú mòbil vertical en tots els idiomes
- ✅ Selector d'idiomes visible i complet en mòbil
- ✅ Suport RTL complet per a àrab i urdú
- ✅ Scroll automàtic per menús llargs
- ✅ Dropdown vertical en totes les direccions

### UX i Accessibilitat
- ✅ Fonts especialitzades per àrab (Noto Sans Arabic) i urdú (Noto Nastaliq Urdu)
- ✅ Persistència d'idioma en localStorage
- ✅ Detecció automàtica de llenguatge del navegador
- ✅ Millor alineació de text en RTL

## Documentació

- 📘 [MULTIIDIOMA-README.md](MULTIIDIOMA-README.md) - Guia completa del sistema multi-idioma
- 📗 [LANGUAGES.md](LANGUAGES.md) - Documentació tècnica de traducció
- 📕 [GUIA.md](GUIA.md) - Guia d'ús del lloc web
- 📙 [INSTRUCCIONS.md](INSTRUCCIONS.md) - Instruccions tècniques detallades

## Contribuir

Si vols contribuir traduccions o millores:

1. Fork del repositori
2. Crea una branca per la teva característica
3. Fes els canvis
4. Envia un pull request

### Per a traduccions
- Segueix les directrius a [MULTIIDIOMA-README.md](MULTIIDIOMA-README.md)
- Afegeix traduccions a `assets/js/main.js` (objecte `translations`)
- Crea posts amb el format multi-idioma (veure exemples a `_posts/`)
- Assegura't que les traduccions RTL es veuen correctament

### Per a millores tècniques
- Mantén la compatibilitat amb tots els idiomes
- Prova en mòbil i escriptori
- Verifica el funcionament RTL
- Documenta els canvis

## Llicència

**GNU General Public License v3.0 (GPL-3.0)**

Aquest projecte està llicenciat sota la GPL-3.0, que garanteix:

- ✅ Llibertat d'ús per a qualsevol propòsit
- ✅ Llibertat d'estudiar i modificar el codi font
- ✅ Llibertat de distribuir còpies
- ✅ Llibertat de distribuir versions modificades
- ✅ **Copyleft**: Totes les versions modificades han de ser també GPL
- ✅ El codi font ha d'estar disponible
- ❌ No es pot relicenciar sota termes propietaris

Consulta el fitxer [LICENSE](LICENSE) per més detalls o la llicència completa a:  
https://www.gnu.org/licenses/gpl-3.0.html

## Crèdits

- **Desenvolupament**: Fet amb molt amor 💚 i l'ajuda de Claude Sonnet 4.5
- **Fonts**: Google Fonts (Baloo 2, Nunito, Noto Sans Arabic, Noto Nastaliq Urdu)
- **Icones i Emojis**: Unicode
- **Hosting**: GitHub Pages

## Contacte

- **Email**: afaescolabernatdesclot@gmail.com
- **Facebook**: [AFA Escola Bernat Desclot](https://www.facebook.com/profile.php?id=100080273986818)
- **Instagram**: [@ampaescolabernatdesclot](https://www.instagram.com/ampaescolabernatdesclot)
- **Telegram**: [Escola Bernat Desclot](https://t.me/escolabernatdesclot)
- **X (Twitter)**: [@adesclot](https://x.com/adesclot)

---

**Última actualització**: Novembre 2025  
**Versió**: 2.0 (Sistema multi-idioma del client)
