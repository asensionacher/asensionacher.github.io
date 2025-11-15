# Multi-Language Support Documentation

This document explains the multi-language implementation for the AFA Bernat Desclot website.

## Supported Languages

The website currently supports **5 languages**:

- **Catalan (ca)** - Default language
- **English (en)**
- **Spanish (es)**
- **Arabic (ar)** - Right-to-Left (RTL) support
- **Urdu (ur)** - Right-to-Left (RTL) support

## How It Works

### Technology Stack

- **Jekyll**: Static site generator
- **Jekyll-Polyglot**: Multi-language plugin for Jekyll
- **Custom Translation Helper**: `_includes/t.html` for accessing translations
- **Translation Data**: `_data/translations.yml` containing all UI strings

### File Structure

```
├── _config.yml                    # Language configuration
├── _data/
│   └── translations.yml          # All UI translations
├── _includes/
│   ├── t.html                    # Translation helper
│   └── language-switcher.html    # Language selection UI
├── _layouts/
│   ├── default.html              # Main layout with language switcher
│   └── post.html                 # Post layout with translations
├── _posts/
│   ├── 2025-11-13-post.md       # Catalan post (lang: ca)
│   ├── 2025-11-13-post.en.md    # English translation
│   ├── 2025-11-13-post.es.md    # Spanish translation
│   ├── 2025-11-13-post.ar.md    # Arabic translation (RTL)
│   └── 2025-11-13-post.ur.md    # Urdu translation (RTL)
├── assets/
│   ├── css/style.css            # Includes RTL styles
│   └── js/main.js               # Language switcher logic
├── index.html                    # Main page with translations
└── blog/index.html              # Blog index with translations
```

## Adding New Translations

### 1. UI Translations

All UI strings are stored in `_data/translations.yml`. To add a new translation:

```yaml
# _data/translations.yml
your_section:
  your_key:
    ca: "Text en català"
    en: "Text in English"
    es: "Texto en español"
    ar: "النص بالعربية"
    ur: "اردو میں متن"
```

### 2. Using Translations in Templates

Use the `t.html` include to access translations:

```liquid
{% include t.html key="your_section.your_key" %}
```

Example:
```liquid
<h1>{% include t.html key="hero.title" %}</h1>
```

### 3. Translated Blog Posts

To create a translated blog post:

1. Create a new file with language suffix: `YYYY-MM-DD-title.LANG.md`
2. Add the `lang` attribute in front matter:

```markdown
---
layout: post
title: "Your Title"
date: 2025-11-13
author: "Author Name"
description: "Description"
tags: ["tag1", "tag2"]
lang: en
---

Your content here...
```

**Important**: The date, author, and tags should be appropriate for the target language.

### Example: Adding a French translation

**Step 1**: Update `_config.yml`
```yaml
languages: ["ca", "en", "es", "ar", "ur", "fr"]
```

**Step 2**: Add French translations to `_data/translations.yml`
```yaml
nav:
  home:
    ca: "Inici"
    en: "Home"
    es: "Inicio"
    ar: "الرئيسية"
    ur: "ہوم"
    fr: "Accueil"
```

**Step 3**: Update language switcher in `_includes/language-switcher.html`
Add French flag and name:
```liquid
{% if lang == 'fr' %}🇫🇷{% endif %}
{% if lang == 'fr' %}Français{% endif %}
```

**Step 4**: Create French blog posts
```markdown
---
layout: post
title: "Bienvenue au nouveau blog"
date: 2025-11-13
author: "Équipe AFA"
description: "Description en français"
tags: ["nouvelles", "bienvenue"]
lang: fr
---
```

**Step 5**: Add French fonts if needed (in `assets/css/style.css`)
```css
html[lang="fr"] body {
    font-family: 'Your French Font', var(--font-secondary), sans-serif;
}
```

## Right-to-Left (RTL) Support

### Automatic RTL Detection

The system automatically applies RTL styling for Arabic and Urdu:

```html
<html lang="ar" dir="rtl">
```

### RTL CSS

RTL-specific styles are in `assets/css/style.css`:

```css
[dir="rtl"] {
    text-align: right;
}

[dir="rtl"] .navbar .container {
    flex-direction: row-reverse;
}
```

### Font Support

Arabic and Urdu use specialized fonts:

- **Arabic**: Noto Sans Arabic
- **Urdu**: Noto Nastaliq Urdu

These are loaded from Google Fonts in `assets/css/style.css`.

## Language Switcher

### Location

The language switcher appears in the navigation bar on all pages.

### Behavior

1. **Click to open**: Shows dropdown with all available languages
2. **Current language**: Indicated with a checkmark (✓)
3. **Hover effects**: Visual feedback on hover
4. **Mobile responsive**: Adapts to mobile screens

### Language Detection

The system includes browser language detection:

- Detects user's browser language on first visit
- Stores preference in `localStorage`
- Respects manual language selection
- Non-intrusive (no automatic redirects by default)

## Testing Translations

### Local Testing

1. Build the site:
```bash
bundle exec jekyll build
```

2. Serve locally:
```bash
bundle exec jekyll serve
```

3. Access different languages:
- Catalan (default): `http://localhost:4000/`
- English: `http://localhost:4000/en/`
- Spanish: `http://localhost:4000/es/`
- Arabic: `http://localhost:4000/ar/`
- Urdu: `http://localhost:4000/ur/`

### What to Test

- [ ] Language switcher appears and functions correctly
- [ ] All UI elements are translated
- [ ] Navigation links work in all languages
- [ ] Blog posts appear in correct language
- [ ] RTL layouts work correctly for Arabic and Urdu
- [ ] Fonts display correctly for all languages
- [ ] Mobile responsiveness
- [ ] Browser language detection (clear localStorage to test)

## Translation Guidelines

### Best Practices

1. **Be Consistent**: Use the same terminology throughout
2. **Cultural Sensitivity**: Ensure translations are culturally appropriate
3. **Professional Tone**: Maintain a friendly but professional tone
4. **Test Thoroughly**: Always test translations with native speakers when possible
5. **Keep Formatting**: Preserve markdown formatting in blog posts
6. **Emojis**: Keep emojis as they are universal

### Common Pitfalls

- **Don't** use machine translation without review
- **Don't** mix languages within the same section
- **Don't** forget to test RTL layouts after changes
- **Don't** hardcode strings - always use the translation system

### Character Encoding

Ensure all files are saved with **UTF-8 encoding** to properly display:
- Arabic script (العربية)
- Urdu script (اردو)
- Special characters in European languages (á, è, ñ, etc.)

## Maintenance

### Adding New UI Strings

When adding new features that require translation:

1. Add the string to `_data/translations.yml` for all languages
2. Use `{% include t.html key="path.to.key" %}` in templates
3. Test with all languages

### Updating Existing Translations

1. Update `_data/translations.yml`
2. No need to change templates (they reference the data file)
3. Rebuild and test

## Troubleshooting

### Issue: Translations not appearing

**Solution**: 
- Check the key path in `translations.yml`
- Verify the `{% include t.html key="..." %}` syntax
- Ensure no typos in the key name

### Issue: RTL not working

**Solution**:
- Check that `lang` is set correctly in front matter
- Verify `dir="rtl"` is in the HTML tag
- Check CSS is properly loaded

### Issue: Wrong language showing

**Solution**:
- Clear browser localStorage
- Check URL structure
- Verify `_config.yml` language settings

### Issue: Blog posts in wrong language

**Solution**:
- Add `lang: xx` attribute to front matter
- Check filename includes language code
- Verify Jekyll-Polyglot is configured correctly

## Future Enhancements

Potential improvements for the multi-language system:

1. **Language-specific images**: Allow different images per language
2. **Automatic language detection with redirect**: Make it opt-in
3. **Translation status indicators**: Show which content is available in which languages
4. **Language-specific menus**: Different navigation items per language
5. **SEO improvements**: Add hreflang tags for better SEO
6. **Admin interface**: Create a simple UI for managing translations

## Contributing Translations

If you'd like to contribute translations:

1. Fork the repository
2. Add your translations to `_data/translations.yml`
3. Create translated blog posts
4. Test thoroughly
5. Submit a pull request

Please include:
- All UI translations
- At least 2 translated blog posts
- Screenshots of the translated pages
- Confirmation from a native speaker if possible

## Support

For questions or issues:

- Open an issue on GitHub
- Contact the AFA team
- Check existing documentation

---

**Last Updated**: 2025-11-15
**Version**: 1.0
