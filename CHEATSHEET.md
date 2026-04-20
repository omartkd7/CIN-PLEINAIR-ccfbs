# 📋 Cheatsheet CinéPleinAir - Commandes Rapides

## 🎯 Commandes HTML rapides

### Créer une nouvelle section
```html
<section id="ma-section" class="ma-section">
  <div class="container">
    <h2 class="section-title">MON TITRE</h2>
    <!-- Contenu ici -->
  </div>
</section>
```

### Créer une carte (Card)
```html
<div class="card">
  <h3>Titre</h3>
  <p>Description</p>
</div>
```

### Créer un bouton
```html
<button class="btn btn-primary">CLIQUEZ-MOI</button>
```

### Créer un lien
```html
<a href="#section" class="nav-link">Lien</a>
```

### Formulaire simple
```html
<form>
  <div class="form-group">
    <label for="champ">Label</label>
    <input type="text" id="champ" name="champ" required />
  </div>
  <button type="submit" class="btn">Envoyer</button>
</form>
```

---

## 🎨 Commandes CSS rapides

### Variables (à mettre dans :root)
```css
:root {
  --color-red: #e50914;
  --color-gold: #f5c518;
  --font-body: 'Inter', sans-serif;
  --spacing: 1rem;
}
```

### Utiliser une variable
```css
.btn {
  color: var(--color-red);
  font-family: var(--font-body);
  padding: var(--spacing);
}
```

### Flexbox (aligner horizontalement)
```css
.flex-container {
  display: flex;
  justify-content: space-between;  /* Espacement */
  align-items: center;             /* Centrer verticalement */
  gap: 1rem;                       /* Espace entre éléments */
}
```

### Grid (grille responsive)
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

### Transitions et hover
```css
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Responsive (Mobile-first)
```css
/* Par défaut: mobile */
.hero {
  font-size: 2rem;
}

/* Sur les plus grands écrans */
@media (min-width: 768px) {
  .hero {
    font-size: 3rem;
  }
}

/* Ou l'inverse */
@media (max-width: 768px) {
  /* Styles pour les petits écrans */
}
```

### Texte et typographie
```css
.title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.4;
  text-align: center;
}
```

### Couleurs et gradients
```css
.section {
  background-color: #0a0a0a;
  color: #e5e5e5;
}

.hero {
  background: linear-gradient(135deg, #e50914 0%, #0a0a0a 100%);
}
```

---

## ⚙️ Commandes JavaScript rapides

### Sélectionner des éléments
```javascript
// Un seul élément
const element = document.getElementById('mon-id');
const element = document.querySelector('.ma-class');

// Plusieurs éléments
const elements = document.querySelectorAll('.card');
```

### Ajouter un écouteur d'événement
```javascript
button.addEventListener('click', function() {
  console.log('Le bouton a été cliqué!');
});

// Ou avec arrow function
button.addEventListener('click', () => {
  console.log('Le bouton a été cliqué!');
});
```

### Modifier les classes CSS
```javascript
element.classList.add('active');      // Ajoute
element.classList.remove('active');   // Enlève
element.classList.toggle('active');   // Ajoute/enlève
```

### Modifier le HTML
```javascript
// Texte seulement
element.textContent = 'Nouveau texte';

// HTML complet (attention XSS!)
element.innerHTML = '<strong>Texte</strong>';

// Attributs
element.setAttribute('data-id', '123');
```

### Modifier le CSS directement
```javascript
element.style.color = 'red';
element.style.fontSize = '2rem';
element.style.display = 'none';  // Cacher
element.style.display = 'block'; // Afficher
```

### Boucler sur une liste d'éléments
```javascript
const cards = document.querySelectorAll('.card');

// forEach
cards.forEach(card => {
  card.addEventListener('click', () => {
    console.log(card);
  });
});

// ou boucle for
for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}
```

### Valider un email
```javascript
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Utiliser
if (isValidEmail('test@gmail.com')) {
  console.log('Email valide!');
}
```

### Afficher/cacher un élément
```javascript
// Cacher
element.style.display = 'none';

// Afficher
element.style.display = 'block';

// Toggle (basculer)
if (element.style.display === 'none') {
  element.style.display = 'block';
} else {
  element.style.display = 'none';
}
```

### Scroll vers une section
```javascript
document.querySelector('#about').scrollIntoView({
  behavior: 'smooth'
});
```

### Attendre avant d'exécuter du code
```javascript
setTimeout(() => {
  console.log('Attendre 2 secondes');
}, 2000);  // 2000 millisecondes = 2 secondes
```

### Intersection Observer (quand un élément devient visible)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Élément visible!');
      entry.target.classList.add('animated');
    }
  });
});

// Observer tous les cards
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
```

---

## 🔍 Debugging (Déboguer)

### Console (F12 → Console)
```javascript
// Afficher un message
console.log('Mon message');

// Afficher un warning
console.warn('Attention!');

// Afficher une erreur
console.error('Erreur!');

// Afficher un objet
console.log({nom: 'test', age: 25});
```

### Vérifier si un élément existe
```javascript
if (document.querySelector('#mon-id')) {
  console.log('Élément trouvé!');
} else {
  console.log('Élément NOT trouvé!');
}
```

---

## 📱 Tests Responsif

### Vérifier la taille de l'écran
```javascript
console.log(window.innerWidth);  // Largeur de l'écran

// Exécuter du code selon la taille
if (window.innerWidth < 768) {
  console.log('C\'est un mobile');
} else {
  console.log('C\'est un desktop');
}
```

### Écouter le redimensionnement
```javascript
window.addEventListener('resize', () => {
  console.log('Écran redimensionné à', window.innerWidth);
});
```

---

## 🎬 Exemple Complet: Burger Menu

### HTML
```html
<nav id="navbar">
  <button id="burgerBtn" class="burger"></button>
  <ul id="navLinks" class="nav-links"></ul>
</nav>
```

### CSS
```css
.nav-links {
  display: none;  /* Caché par défaut */
}

.nav-links.active {
  display: flex;  /* Visible quand .active */
}
```

### JavaScript
```javascript
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');  // Affiche/cache
});
```

---

## 🎬 Exemple Complet: Validation Formulaire

### HTML
```html
<form id="contactForm">
  <input type="text" id="name" required />
  <button type="submit">Envoyer</button>
</form>
<p id="message"></p>
```

### JavaScript
```javascript
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();  // Empêche de soumettre
  
  const name = document.getElementById('name').value;
  
  if (name.length < 3) {
    document.getElementById('message').textContent = 'Minimum 3 caractères';
    return;
  }
  
  document.getElementById('message').textContent = 'Succès!';
});
```

---

## 🚨 Erreurs Courantes

| Erreur | Solution |
|--------|----------|
| `Cannot read property 'addEventListener'` | L'élément n'existe pas ou le script s'exécute avant le HTML |
| Classes CSS ne s'appliquent pas | Vérifier la spécificité ou les media queries |
| Formulaire soumet la page | Ajouter `e.preventDefault()` |
| Images ne s'affichent pas | Vérifier le chemin (URL relative vs absolue) |
| Menu responsive ne fonctionne pas | Vérifier que burger existe en HTML et JS |

---

## 📞 Raccourcis VS Code

| Shortcut | Utilité |
|----------|---------|
| `Ctrl + /` | Commenter du code |
| `Ctrl + S` | Sauvegarder |
| `Ctrl + Shift + P` | Palette de commandes |
| `F12` | DevTools (déboguer) |
| `Alt + Z` | Word wrap |
| `Ctrl + Alt + L` | Formater le code |

---

**Bonne chance avec votre projet! 🚀✨**
