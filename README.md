# 📽️ CinéPleinAir - Beginner Sample Project

Un projet de site web **simple, propre et facile à comprendre** pour débuter en développement frontend!

## 🎯 Qu'est-ce que ce projet?

C'est une **version simplifiée** du site du festival CinéPleinAir:
- ✅ **HTML5 sémantique** - Structure claire et bien organisée
- ✅ **CSS Responsive** - Mobile-first, fonctionne sur tous les écrans
- ✅ **JavaScript basique** - Burger menu, formulaire, animations
- ❌ **PAS d'API** - Films en dur (hardcoded) pour la simplicité
- ❌ **PAS de localisation** - Contact simple
- ✅ **Facile à personnaliser**

## 📁 Structure des fichiers

```
version sample/
├── index.html      # Structure HTML (6 sections)
├── styles.css      # Tous les styles (mobile-first)
├── app.js          # Fonctionnalités JavaScript
└── README.md       # Ce fichier
```

## 🛠️ Comment utiliser?

### 1. **Ouvrir le projet**
```bash
# Naviguez dans le dossier
cd "/Users/mac/ccfbs/projict CinéPleinAir/version sample"

# Ouvrez index.html dans votre navigateur
open index.html
```

Ou utilisez **Live Server** dans VS Code:
- Clic droit sur `index.html` → "Open with Live Server"

## 📚 Les 5 sections du site

### 1️⃣ **Navigation** (`<nav>`)
- Logo avec icône de film
- Menu desktop (cachés sur mobile)
- Burger menu mobile (3 lignes)
- Navigation fluide vers les sections

### 2️⃣ **Hero** (`#hero`)
- Bannière principale avec titre
- Sous-titre et dates
- Bouton "S'INSCRIRE"

### 3️⃣ **À Propos** (`#about`)
- 4 cartes avec icônes (Projections, Rencontres, Animations, Communauté)
- Description du festival
- Effet hover sur les cartes

### 4️⃣ **Films** (`#films`)
- Grille de 6 films
- Poster, titre, année, synopsis
- Évaluation avec ⭐ 
- Animation au survol

### 5️⃣ **Programme** (`#programme`)
- 3 jours du festival
- Horaires et films
- Design en colonnes

### 6️⃣ **Contact** (`#contact`)
- Formulaire simple (Nom, Email, Sujet, Message)
- Validation basique
- Infos de contact

## 🎨 Couleurs (Palette Netflix-inspired)

```css
--bg-dark: #0a0a0a;      /* Noir profond */
--color-red: #e50914;     /* Rouge Netflix */
--color-gold: #f5c518;    /* Or/Accent */
--color-text: #e5e5e5;    /* Blanc cassé */
```

## 💻 Fonctionnalités JavaScript

### ✅ Burger Menu
- Toggles le menu sur mobile
- Ferme automatiquement au clic sur un lien

### ✅ Navigation Smooth
- Scroller fluide au clic sur les liens d'ancrage

### ✅ Validation Formulaire
- Vérifie que tous les champs sont remplis
- Valide le format email
- Affiche messages de succès/erreur

### ✅ Animations au Scroll
- Les cartes apparaissent avec animation
- Utilise l'Intersection Observer API

### ✅ Navbar qui apparaît/disparaît
- Se cache en scrollant vers le bas
- Réapparaît en scrollant vers le haut

## 📱 Design Responsive

| Device | Breakpoint |
|--------|-----------|
| Mobile | < 768px |
| Desktop | ≥ 768px |

- Grid auto-fit pour adaptation automatique
- Espacements flexibles
- Police lisible sur tous les écrans

## 🚀 Comment personnaliser?

### 1. **Changer les films**
Dans `index.html`, modifiez les sections `.film-card`:
```html
<h3>Mon Film</h3>
<p class="film-year">2024 | Genre</p>
<p class="film-synopsis">Ma description...</p>
```

### 2. **Changer les couleurs**
Dans `styles.css`, modifiez les variables `:root`:
```css
:root {
  --color-red: #ff0000;  /* Votre couleur */
  --color-gold: #ffff00;
}
```

### 3. **Ajouter des sections**
Copiez une section existante et adaptez-la:
```html
<section id="nouvelle-section" class="nouvelle">
  <!-- Votre contenu -->
</section>
```

### 4. **Ajouter des images réelles**
Remplacez les placeholder:
```html
<!-- De: -->
<img src="https://via.placeholder.com/200x300?text=Film" alt="Film" />

<!-- À: -->
<img src="mon-image.jpg" alt="Film" />
```

## 🧪 Pour tester le formulaire

1. Remplissez tous les champs
2. Cliquez "ENVOYER"
3. Vous devriez voir un message vert de succès ✅

Note: Le formulaire n'envoie **pas réellement** d'email. Pour ça, vous devrez:
- Ajouter un backend (Node.js/PHP)
- Ou utiliser FormSubmit.co/EmailJS

## 📖 Pour en savoir plus

### CSS Concepts utilisés:
- ✅ Flexbox
- ✅ CSS Grid
- ✅ Variables CSS (Custom Properties)
- ✅ Media queries (Responsive)
- ✅ Transitions & Transform

### JavaScript Concepts utilisés:
- ✅ Event Listeners
- ✅ DOM Manipulation
- ✅ Regular Expressions (validation email)
- ✅ Intersection Observer API

## 🐛 Dépannage

### Le menu mobile ne s'ouvre pas?
→ Vérifiez que le JavaScript est chargé dans le console (F12)

### Les images ne s'affichent pas?
→ Les placeholders nécessitent une connexion Internet

### Le formulaire ne marche pas?
→ Ouvrez la console (F12) pour voir les erreurs

## 🌟 Prochaines étapes

1. **Ajouter une vraie API** (TMDB, OMDb)
2. **Ajouter une vraie adresse/localisation**
3. **Connecter une vraie base de données**
4. **Déployer sur Netlify/Vercel**
5. **Ajouter plus de sections**

## 📞 Questions?

Consultez les commentaires dans le code - ils expliquent comment tout fonctionne!

---

**Bon codage! 🎬✨**

*Créé avec ❤️ pour les débutants*
