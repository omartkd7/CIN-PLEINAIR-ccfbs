# 🎓 Guide d'Apprentissage - CinéPleinAir Beginner Project

## 📖 Table des matières
1. [Comprendre HTML](#html-explained)
2. [Comprendre CSS](#css-explained)
3. [Comprendre JavaScript](#js-explained)
4. [Projet Étape par Étape](#project-step-by-step)
5. [Exercices Pratiques](#exercises)

---

## 🏗️ Comprendre HTML {#html-explained}

### Qu'est-ce que HTML?
**HTML** = HyperText Markup Language
- Crée la **structure** du site (squelette)
- Utilise des **balises** `<tag>content</tag>`
- N'a pas de couleurs ni animations (c'est le travail du CSS)

### Les 6 sections principales

```html
<!-- 1. Navigation (sticky - reste en haut) -->
<nav id="navbar" class="navbar">
  <!-- Logo + Menu -->
</nav>

<!-- 2. Hero (bannière principale) -->
<section id="hero" class="hero">
  <!-- Titre, sous-titre, bouton -->
</section>

<!-- 3. About (À propos) -->
<section id="about" class="about">
  <!-- 4 cartes avec icônes -->
</section>

<!-- 4. Films (Grille de films) -->
<section id="films" class="films">
  <!-- 6 films en grille -->
</section>

<!-- 5. Programme (Horaires) -->
<section id="programme" class="programme">
  <!-- 3 jours du festival -->
</section>

<!-- 6. Contact (Formulaire) -->
<section id="contact" class="contact">
  <!-- Formulaire + Infos -->
</section>

<!-- Footer -->
<footer class="footer">
  <!-- Copyright + Social -->
</footer>
```

### Balises HTML importantes utilisées:

| Balise | Utilité | Exemple |
|--------|---------|---------|
| `<nav>` | Navigation | Menu principal |
| `<section>` | Section de contenu | Chaque grosse partie |
| `<h1>` - `<h6>` | Titres | Titres du site |
| `<p>` | Paragraphe | Texte normal |
| `<div>` | Conteneur générique | Grouper des éléments |
| `<button>` | Bouton | "S'INSCRIRE" |
| `<form>` | Formulaire | Contact |
| `<input>` | Champ de saisie | Nom, Email |
| `<img>` | Image | Posters de films |
| `<a>` | Lien | Navigation |

### Attributs utilisés:

```html
<!-- id = identifiant unique pour cibler avec CSS/JS -->
<section id="films">

<!-- class = style réutilisable -->
<div class="about-card">

<!-- href = destination du lien -->
<a href="#about">À Propos</a>

<!-- type = type d'input (text, email, textarea) -->
<input type="email" />
```

---

## 🎨 Comprendre CSS {#css-explained}

### Qu'est-ce que CSS?
**CSS** = Cascading Style Sheets
- Ajoute les **couleurs, espacements, animations**
- Rend le site **beau** et **responsive**
- Utilise des **selecteurs** pour cibler les éléments HTML

### 3 façons de cibler les éléments:

```css
/* 1. Par balise */
h1 {
  color: white;
}

/* 2. Par class (le plus courant) - utilise un point (.) */
.hero {
  background-color: red;
}

/* 3. Par id - utilise un dièse (#) */
#navbar {
  position: sticky;
}
```

### Variables CSS (Custom Properties)

```css
:root {
  --color-red: #e50914;
  --font-body: 'Inter', sans-serif;
  --spacing: 1rem;
}

/* Puis utiliser partout: */
.btn {
  background-color: var(--color-red);  /* Réutilisable! */
  font-family: var(--font-body);
  padding: var(--spacing);
}
```

### Flexbox (pour aligner les éléments)

```css
.navigation {
  display: flex;           /* Active flexbox */
  justify-content: space-between; /* Espacement horizontal */
  align-items: center;     /* Align vertical center */
  gap: 2rem;              /* Espacement entre enfants */
}
```

### CSS Grid (pour les grilles)

```css
.films-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

### Media Queries (Responsive Design)

```css
/* Styles par défaut (mobile) */
.hero {
  font-size: 2rem;
}

/* Styles pour écrans larges */
@media (max-width: 768px) {
  .hero {
    font-size: 1.5rem;  /* Plus petit sur mobile */
  }
}
```

---

## ⚙️ Comprendre JavaScript {#js-explained}

### Qu'est-ce que JavaScript?
**JavaScript** = Langage de programmation
- Ajoute l'**interactivité** (clics, validation, animations)
- S'exécute dans le **navigateur**
- Peut modifier le HTML et CSS en temps réel

### Concepts clés:

#### 1. Sélectionner un élément HTML

```javascript
// Par ID
const navbar = document.getElementById('navbar');

// Par class (retourne une liste)
const cards = document.querySelectorAll('.film-card');

// Première correspondance
const button = document.querySelector('button');
```

#### 2. Écouter un événement (EventListener)

```javascript
// Quand on clique sur le bouton burger
burgerBtn.addEventListener('click', function() {
  navLinks.classList.toggle('active');  // Affiche/Cache le menu
});
```

#### 3. Modifier le HTML/CSS

```javascript
// Ajouter une classe CSS
element.classList.add('active');

// Enlever une classe CSS
element.classList.remove('active');

// Toggle (ajoute si absent, enlève si présent)
element.classList.toggle('active');

// Modifier le CSS directement
element.style.color = 'red';

// Modifier le texte
element.textContent = 'Nouveau texte';
```

#### 4. Valider un formulaire

```javascript
function isValidEmail(email) {
  // Utilise une expression régulière (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);  // true or false
}

// Utiliser:
if (!isValidEmail(userEmail)) {
  console.log('Email invalide!');
}
```

---

## 🚀 Projet Étape par Étape {#project-step-by-step}

### Étape 1: Structure HTML (le squelette)
✅ Crée la structure avec `<section>`, `<div>`, `<h1>`, etc.
✅ Ajoute les images placeholder
✅ Ajoute les formulaires

### Étape 2: Styles CSS (l'apparence)
✅ Définis les couleurs
✅ Styles les sections et cartes
✅ Ajoute les transitions (hover)
✅ Rends responsive (mobile-first)

### Étape 3: Interactivité JavaScript
✅ Burger menu sur mobile
✅ Smooth scroll
✅ Validation de formulaire
✅ Animations au scroll

### Étape 4: Tester & Déboguer
✅ Ouvre la console (F12) pour les erreurs
✅ Teste sur différents appareils
✅ Vérifie les breakpoints responsive

---

## 💪 Exercices Pratiques {#exercises}

### Exercice 1: Ajouter un nouveau film
**Niveau:** ⭐ Débutant

Ajoute un 7ème film à la grille:

```html
<div class="film-card">
  <div class="film-poster">
    <img src="ton-image.jpg" alt="Mon Film" />
  </div>
  <div class="film-info">
    <h3>Le Titre du Film</h3>
    <p class="film-year">2024 | Genre</p>
    <p class="film-synopsis">La description...</p>
    <div class="film-rating">
      <span class="stars">⭐⭐⭐⭐⭐</span>
      <span class="rating-text">9.0/10</span>
    </div>
  </div>
</div>
```

### Exercice 2: Changer la couleur principale
**Niveau:** ⭐ Débutant

Dans `styles.css`, change la couleur rouge:
```css
:root {
  --color-red: #0066ff;  /* Bleu au lieu de rouge */
}
```

### Exercice 3: Ajouter une nouvelle section
**Niveau:** ⭐⭐ Intermédiaire

Crée une section "FAQ" entre Programme et Contact:

```html
<section id="faq" class="faq">
  <div class="container">
    <h2 class="section-title">QUESTIONS FRÉQUENTES</h2>
    <div class="faq-grid">
      <div class="faq-card">
        <h3>Le festival est-il gratuit?</h3>
        <p>Oui! L'entrée est entièrement gratuite.</p>
      </div>
      <!-- Ajoute plus de Q&A -->
    </div>
  </div>
</section>
```

Puis ajoute le CSS:
```css
.faq {
  padding: 4rem var(--spacing);
  background-color: var(--bg-light);
}

.faq-card {
  background-color: var(--bg-card);
  padding: 2rem;
  border-radius: 8px;
  border-left: 5px solid var(--color-red);
  margin-bottom: 1rem;
}
```

### Exercice 4: Rendre les cartes cliquables
**Niveau:** ⭐⭐ Intermédiaire

Ajoute un effet sur les films:

```javascript
// Au début de app.js
const filmCards = document.querySelectorAll('.film-card');

filmCards.forEach(card => {
  card.addEventListener('click', function() {
    // Affiche une alerte
    const filmTitle = this.querySelector('h3').textContent;
    alert('Vous avez choisi: ' + filmTitle);
  });
});
```

### Exercice 5: Valider les champs du formulaire (Avancé)
**Niveau:** ⭐⭐⭐ Avancé

Améliore la validation:

```javascript
// Que le nom contienne au moins 3 caractères
if (name.length < 3) {
  showMessage('Le nom doit avoir au moins 3 caractères', 'error');
  return;
}

// Que le message soit long
if (message.length < 10) {
  showMessage('Le message doit avoir au moins 10 caractères', 'error');
  return;
}
```

---

## 📚 Ressources d'apprentissage

### Sites recommandés:
- **MDN Web Docs** - Excellente documentation
  - HTML: https://developer.mozilla.org/fr/docs/Web/HTML
  - CSS: https://developer.mozilla.org/fr/docs/Web/CSS
  - JS: https://developer.mozilla.org/fr/docs/Web/JavaScript

- **FreeCodeCamp** - Tutoriels gratuits
  - HTML/CSS/JS gratuits en français

- **CSS-Tricks** - Astuces CSS
  - Flexbox guide
  - Grid guide

### Chaînes YouTube recommandées:
- Grafikart (français)
- Développeuse en herbe (français)
- Traversy Media (anglais)

---

## 🎯 Checklist de compréhension

Que faut-il comprendre pour maîtriser ce projet?

- [ ] La structure HTML en 6 sections
- [ ] Comment utiliser Flexbox et Grid
- [ ] Les variables CSS
- [ ] Les media queries
- [ ] Les event listeners JavaScript
- [ ] DOM manipulation
- [ ] Validation de formulaires
- [ ] Intersection Observer API

---

## ✨ Prochains défis

1. **Ajouter une vraie API**
   - Intégrer TMDB ou OMDb pour les vrais films

2. **Ajouter une vraie localisation**
   - Google Maps API pour afficher le lieu

3. **Backend et base de données**
   - Node.js + Express
   - Envoyer les emails vrais

4. **Déployer en ligne**
   - Netlify, Vercel, ou GitHub Pages

---

**Bravo! Vous avez maintenant tout ce qu'il faut pour comprendre ce projet! 🎉**

*Keep coding and learning! 💻✨*
