# 🎉 Lloc Web AFA - Llest per Desplegar!

## ✅ Què s'ha creat?

S'ha creat un **lloc web complet per a una AFA** (Associació de Famílies d'Alumnes) amb:

### 📄 Pàgines principals
- **Landing page** (`index.html`): Pàgina d'inici amb informació sobre l'AFA, activitats i contacte
- **Blog** (`blog/index.html`): Llista de tots els articles del blog
- **2 posts d'exemple** per començar

### 🎨 Disseny
- Disseny infantil i colorit amb emojis
- Totalment **responsive** (funciona en mòbils i tablets)
- Animacions suaus i divertides
- Colors alegres i tipografia adaptada per a nens

### 🛠️ Tecnologia
- **Jekyll**: Gestor de contingut estàtic
- **GitHub Actions**: Desplegament automàtic
- **Tot en català**

### 📁 Estructura del projecte

```
asensionacher.github.io/
├── _config.yml              # Configuració de Jekyll
├── Gemfile                  # Dependències Ruby
├── index.html               # Landing page
├── blog/
│   └── index.html          # Pàgina del blog
├── _layouts/
│   ├── default.html        # Layout principal
│   └── post.html           # Layout per posts
├── _posts/                 # Articles del blog
│   ├── 2025-11-13-benvinguts-al-nou-blog.md
│   ├── 2025-11-10-taller-manualitats-tardor.md
│   └── 2025-11-05-castanyada-2025.md
├── assets/
│   ├── css/
│   │   └── style.css       # Estils CSS
│   └── js/
│       └── main.js         # JavaScript
├── .github/
│   └── workflows/
│       └── jekyll.yml      # GitHub Actions
├── README.md               # Documentació bàsica
└── GUIA.md                 # Guia detallada d'ús
```

## 🚀 Propers Passos

### 1. Pujar tot a GitHub

```bash
git add .
git commit -m "Lloc web AFA inicial amb Jekyll"
git push origin master
```

### 2. Activar GitHub Pages

1. Ves a: https://github.com/asensionacher/asensionacher.github.io
2. Settings → Pages
3. Source: **GitHub Actions**
4. Espera que es desplegui (2-3 minuts)

### 3. Visita el teu lloc

El lloc estarà disponible a: **https://asensionacher.github.io**

## 📝 Personalització Recomanada

Abans de publicar, personalitza aquests elements:

1. **Títol i descripció** a `_config.yml`:
   - Canvia "AFA Bernat Desclot" pel nom real de l'AFA
   - Actualitza l'email de contacte

2. **Informació de contacte** a `index.html`:
   - Email real de l'AFA
   - Enllaços a xarxes socials (Facebook, Instagram)

3. **Posts del blog**:
   - Edita o elimina els posts d'exemple
   - Crea nous posts amb informació real

4. **Colors** (opcional) a `assets/css/style.css`:
   - Pots canviar els colors principals si vols

## 🎓 Com Afegir Nous Posts

1. Crea un fitxer nou a `_posts/` amb nom: `YYYY-MM-DD-titol.md`
2. Copia aquesta plantilla:

```markdown
---
layout: post
title: "Títol del Post"
date: 2025-11-13
author: "Nom"
description: "Descripció breu"
tags: ["etiqueta1", "etiqueta2"]
---

El teu contingut aquí en Markdown...

## Subtítol

Pots usar:
- Llistes
- **Negreta**
- *Cursiva*
- Enllaços: [text](url)
- Imatges: ![alt](url)
```

3. Fes commit i push → Es desplegarà automàticament!

## 📚 Documentació Completa

Llegeix `GUIA.md` per més detalls sobre:
- Desenvolupament local
- Personalització avançada
- Solució de problemes
- Recursos i documentació

## 🎈 Característiques del Disseny

- 🌈 Colors alegres i infantils
- 😊 Emojis per fer-ho més divertit
- 📱 Funciona perfectament en mòbils
- ⚡ Ràpid i lleuger
- ♿ Accessible
- 🔍 SEO optimitzat

---

**Tot llest per començar!** 🚀

Si tens dubtes, consulta la `GUIA.md` o obre un issue al repositori.
