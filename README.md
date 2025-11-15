# Lloc web de l'AFA Bernat Desclot - GitHub Pages

Aquest és el lloc web de l'Associació de Famílies d'Alumnes (AFA) de l'escola Bernat Desclot.

## Característiques

- 🌍 **Suport multi-idioma**: Català, English, Español, العربية, اردو
- 📱 **Disseny responsiu**: Optimitzat per a mòbil i escriptori
- ✨ **Interfície moderna**: Amb animacions i efectes visuals
- 📝 **Blog integrat**: Per compartir notícies i activitats
- 🔄 **Suport RTL**: Per a àrab i urdú

## Idiomes disponibles

El lloc web està disponible en 5 idiomes:

- **Català (ca)** - Idioma per defecte
- **English (en)** - Anglès
- **Español (es)** - Espanyol
- **العربية (ar)** - Àrab (amb suport RTL)
- **اردو (ur)** - Urdú (amb suport RTL)

Per a més informació sobre com gestionar traduccions, consulteu [LANGUAGES.md](LANGUAGES.md).

## Desenvolupament local

Per executar el lloc localment:

```bash
bundle install
bundle exec jekyll serve
```

Visita http://localhost:4000

Per accedir a diferents idiomes:
- Català: http://localhost:4000/
- English: http://localhost:4000/en/
- Español: http://localhost:4000/es/
- العربية: http://localhost:4000/ar/
- اردو: http://localhost:4000/ur/

## Afegir contingut

### Crear una entrada de blog

1. Crea un fitxer a `_posts/` amb el format: `YYYY-MM-DD-titol.md`
2. Afegeix el front matter:

```markdown
---
layout: post
title: "El teu títol"
date: 2025-11-13
author: "Autor"
description: "Descripció breu"
tags: ["etiqueta1", "etiqueta2"]
lang: ca
---

El teu contingut aquí...
```

### Traducció d'una entrada

Per crear una traducció:

1. Crea un nou fitxer: `YYYY-MM-DD-titol.LANG.md`
2. Canvia el `lang` al codi d'idioma apropiat: `en`, `es`, `ar`, o `ur`
3. Tradueix el títol, descripció i contingut

Exemple:
- Català: `2025-11-13-benvinguts.md` (lang: ca)
- English: `2025-11-13-welcome.en.md` (lang: en)
- Español: `2025-11-13-bienvenidos.es.md` (lang: es)

## Tecnologies

- Jekyll 4.4
- Jekyll-Polyglot (multi-idioma)
- GitHub Pages
- GitHub Actions per desplegament automàtic

## Documentació

- [LANGUAGES.md](LANGUAGES.md) - Guia completa de traducció i multi-idioma
- [GUIA.md](GUIA.md) - Guia d'ús del lloc web
- [INSTRUCCIONS.md](INSTRUCCIONS.md) - Instruccions tècniques

## Contribuir

Si vols contribuir traduccions o millores:

1. Fork del repositori
2. Crea una branca per la teva característica
3. Fes els canvis
4. Envia un pull request

Per a traduccions, assegura't de seguir les directrius a [LANGUAGES.md](LANGUAGES.md).

## Llicència

Codi font obert amb llicència MIT. Lliure per usar i modificar.
