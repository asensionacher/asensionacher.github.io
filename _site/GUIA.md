# 🎈 Lloc Web de l'AFA Bernat Desclot - Guia de Configuració

## 📋 Configuració de GitHub Pages

Per activar el lloc web a GitHub Pages, segueix aquests passos:

### 1. Pujar els canvis a GitHub

```bash
git add .
git commit -m "Afegit lloc web AFA amb Jekyll"
git push origin master
```

### 2. Configurar GitHub Pages al repositori

1. Ves al teu repositori a GitHub: https://github.com/asensionacher/asensionacher.github.io
2. Fes clic a **Settings** (Configuració)
3. Al menú lateral, fes clic a **Pages**
4. A **Source** (Font):
   - Selecciona **GitHub Actions**
5. Guarda els canvis

### 3. Esperar el desplegament

- El GitHub Action es executarà automàticament
- Pots veure el progrés a la pestanya **Actions**
- Quan acabi, el lloc estarà disponible a: `https://asensionacher.github.io`

## 🚀 Desenvolupament Local

Per provar el lloc localment abans de publicar:

```bash
# Instal·lar dependències
bundle install

# Executar Jekyll en mode desenvolupament
bundle exec jekyll serve

# Ara pots veure el lloc a: http://localhost:4000
```

## ✏️ Com Afegir Nous Posts al Blog

1. Crea un nou arxiu a la carpeta `_posts/`
2. El nom ha de seguir aquest format: `YYYY-MM-DD-titol-del-post.md`
3. Afegeix el "front matter" a l'inici:

```yaml
---
layout: post
title: "Títol del Post"
date: 2025-11-13
author: "Nom de l'autor"
description: "Breu descripció del post"
tags: ["etiqueta1", "etiqueta2"]
---

Aquí va el contingut del post en Markdown...
```

4. Fes commit i push:

```bash
git add _posts/2025-11-13-nou-post.md
git commit -m "Nou post: Títol del post"
git push
```

El lloc es desplegarà automàticament! 🎉

## 🎨 Personalització

### Canviar colors

Edita les variables CSS a `assets/css/style.css`:

```css
:root {
    --color-primary: #FF6B9D;    /* Color principal */
    --color-secondary: #C44569;  /* Color secundari */
    --color-accent: #FFA502;     /* Color d'accent */
    /* ... */
}
```

### Modificar informació de contacte

Edita el fitxer `index.html` i busca la secció `#contacte` per canviar:
- Email
- Enllaços a xarxes socials
- Informació de contacte

### Canviar el títol i descripció del lloc

Edita `_config.yml`:

```yaml
title: "Nom de l'AFA"
description: "Descripció de l'associació"
author:
  name: "Nom de l'AFA"
  email: "email@exemple.cat"
```

## 📱 Característiques

✅ Disseny responsive (funciona en mòbils i tablets)
✅ Colors alegres i infantils
✅ Blog amb Jekyll
✅ Desplegament automàtic amb GitHub Actions
✅ Tot en català
✅ SEO optimitzat
✅ Feed RSS automàtic

## 🆘 Solució de Problemes

### El lloc no es desplega

1. Comprova que GitHub Actions estigui habilitat al repositori
2. Revisa els logs a la pestanya **Actions** per veure errors
3. Assegura't que el repositori és públic o tens GitHub Pro

### Els canvis no apareixen

- GitHub Pages pot trigar fins a 5 minuts en actualitzar
- Esborra la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

### Error en el build de Jekyll

- Comprova que el format del "front matter" dels posts és correcte
- Revisa que les dates dels posts siguin en format `YYYY-MM-DD`
- Mira els logs a GitHub Actions per veure l'error específic

## 📚 Recursos

- [Documentació de Jekyll](https://jekyllrb.com/docs/)
- [Documentació de GitHub Pages](https://docs.github.com/pages)
- [Markdown Guide](https://www.markdownguide.org/)

---

Fet amb ❤️ per a l'AFA
