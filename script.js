/* ============================================
   VERDE RESTAURANT — script.js
   ============================================ */

// ─────────────────────────────────────────────
// MENU DATA
// To add prices, fill in the `price` field.
// To add a real food photo, set `img` to the image URL or relative path (e.g., 'images/tapas.jpg').
// Leave `img` as null or empty to show the emoji placeholder instead.
// ─────────────────────────────────────────────
const menuItems = [
  {
    name: "Tapas",
    desc: "Tender, marinated beef tapa served with garlic rice and egg — a Verde favorite.",
    price: null,
    emoji: "🥩",
    tag: "Bestseller",
    category: "silog",
    img: null,  // ← Replace with: 'images/tapas.jpg'
  },
  {
    name: "Chicken Wings",
    desc: "Crispy, saucy, and packed with flavor. A crowd-pleaser every time.",
    price: null,
    emoji: "🍗",
    tag: "Must Try",
    category: "appetizers",
    img: null,
  },
  {
    name: "Adobo",
    desc: "Classic Filipino chicken or pork adobo — slow-braised to deep, savory perfection.",
    price: null,
    emoji: "🍖",
    tag: null,
    category: "mains",
    img: null,
  },
  {
    name: "Sinigang",
    desc: "Sour tamarind soup with tender pork and fresh vegetables. Comfort in a bowl.",
    price: null,
    emoji: "🥣",
    tag: null,
    category: "mains",
    img: null,
  },
  {
    name: "Kare-Kare",
    desc: "Rich peanut-based oxtail stew served with bagoong and fresh vegetables.",
    price: null,
    emoji: "🍲",
    tag: null,
    category: "mains",
    img: null,
  },
  {
    name: "Pancit Bihon",
    desc: "Stir-fried rice noodles with vegetables and your choice of protein.",
    price: null,
    emoji: "🍜",
    tag: null,
    category: "mains",
    img: null,
  },
  {
    name: "Tapsilog",
    desc: "Beef tapa + sinangag + itlog. The classic Filipino breakfast, done right.",
    price: null,
    emoji: "🍳",
    tag: "Bestseller",
    category: "silog",
    img: null,
  },
  {
    name: "Bangsilog",
    desc: "Crispy fried bangus (milkfish) with garlic rice and sunny-side-up egg.",
    price: null,
    emoji: "🐟",
    tag: null,
    category: "silog",
    img: null,
  },
  {
    name: "Lumpia Shanghai",
    desc: "Crispy golden spring rolls filled with seasoned ground pork and vegetables.",
    price: null,
    emoji: "🥟",
    tag: null,
    category: "appetizers",
    img: null,
  },
  {
    name: "Sago't Gulaman",
    desc: "Classic Filipino brown sugar drink with tapioca pearls and jelly.",
    price: null,
    emoji: "🧋",
    tag: null,
    category: "drinks",
    img: null,
  },
  {
    name: "Buko Juice",
    desc: "Fresh young coconut juice — refreshing, natural, and always cold.",
    price: null,
    emoji: "🥥",
    tag: null,
    category: "drinks",
    img: null,
  },
  {
    name: "Calamansi Juice",
    desc: "Freshly squeezed local citrus juice, sweetened just right.",
    price: null,
    emoji: "🍊",
    tag: null,
    category: "drinks",
    img: null,
  },
];

// ─────────────────────────────────────────────
// GALLERY DATA
// To use your own photos, replace the `img` null values with your image paths or URLs.
// e.g., img: 'images/food1.jpg'
// The captions are optional.
// ─────────────────────────────────────────────
const galleryItems = [
  { img: null, emoji: "🍽️", caption: "Your hero food photo here", hint: "Wide shot" },
  { img: null, emoji: "🌿", caption: "Fresh ingredients", hint: "Ingredients" },
  { img: null, emoji: "🥩", caption: "Tapas close-up", hint: "Close-up" },
  { img: null, emoji: "🍳", caption: "Kitchen action", hint: "Behind the scenes" },
  { img: null, emoji: "🍜", caption: "Pancit plating", hint: "Plating shot" },
  { img: null, emoji: "🏠", caption: "Verde ambiance", hint: "Restaurant interior" },
];

// ─────────────────────────────────────────────
// RENDER MENU
// ─────────────────────────────────────────────
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  const items = filter === 'all' ? menuItems : menuItems.filter(i => i.category === filter);
  
  grid.innerHTML = items.map(item => `
    <div class="menu-card reveal">
      <div class="menu-card__img">
        ${item.img
          ? `<img src="${item.img}" alt="${item.name}" loading="lazy" />`
          : `<div class="menu-card__img-placeholder"><span>${item.emoji}</span><p>Add photo</p></div>`
        }
        ${item.tag ? `<span class="menu-card__tag">${item.tag}</span>` : ''}
      </div>
      <div class="menu-card__body">
        <h3 class="menu-card__name">${item.name}</h3>
        <p class="menu-card__desc">${item.desc}</p>
        ${item.price ? `<span class="menu-card__price">₱${item.price}</span>` : ''}
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ─────────────────────────────────────────────
// RENDER GALLERY
// ─────────────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = galleryItems.map(item => `
    <div class="gallery-item reveal">
      ${item.img
        ? `<img src="${item.img}" alt="${item.caption}" loading="lazy" />`
        : `<div class="gallery-item__placeholder"><span>${item.emoji}</span><p>${item.hint}</p></div>`
      }
      <div class="gallery-item__overlay">
        <span class="gallery-item__overlay-icon">🔍</span>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ─────────────────────────────────────────────
// MENU TABS
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderGallery();

  const tabs = document.querySelectorAll('.menu__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.tab);
    });
  });
});

// ─────────────────────────────────────────────
// STICKY NAV
// ─────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ─────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mmLinks = document.querySelectorAll('.mm-link');

burger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
mmLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────
function observeReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Also observe static elements
document.addEventListener('DOMContentLoaded', () => {
  observeReveal();
});

// ─────────────────────────────────────────────
// MAP FALLBACK (if iframe blocked)
// ─────────────────────────────────────────────
window.addEventListener('load', () => {
  const iframe = document.querySelector('.location__map iframe');
  const fallback = document.getElementById('mapFallback');
  if (iframe && fallback) {
    iframe.addEventListener('error', () => {
      iframe.style.display = 'none';
      fallback.style.display = 'flex';
    });
    // Also show fallback for blocked embeds after 4s
    setTimeout(() => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc || iframeDoc.body.innerHTML === '') {
          fallback.style.display = 'flex';
        }
      } catch (e) {
        // Cross-origin; iframe is probably loading fine
      }
    }, 4000);
  }
});
