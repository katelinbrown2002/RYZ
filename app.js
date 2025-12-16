// 1️⃣ Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('Service Worker Failed:', err));
}

// 2️⃣ HABIT CHECKBOXES
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(cb => {
  const key = cb.nextSibling ? cb.nextSibling.textContent : cb.parentElement.textContent;
  const saved = localStorage.getItem(key);
  if (saved === 'true') cb.checked = true;

  cb.addEventListener('change', () => {
    localStorage.setItem(key, cb.checked);
  });
});

// 3️⃣ DAILY DEVOTIONAL ROTATION
const devotionals = [
  { scripture: "Proverbs 31:25", text: "Strength and dignity are her clothing; she can laugh at the days to come." },
  { scripture: "Proverbs 31:26", text: "She opens her mouth with wisdom, and the teaching of kindness is on her tongue." },
  { scripture: "Proverbs 31:27", text: "She watches over the affairs of her household and does not eat the bread of idleness." },
  { scripture: "Philippians 4:13", text: "I can do all things through Christ who strengthens me." }
];

const scriptureEl = document.getElementById('scripture');

function getDailyDevotional() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const devotional = devotionals[dayOfYear % devotionals.length];
  scriptureEl.textContent = `${devotional.scripture} — ${devotional.text}`;
}

getDailyDevotional();

// 4️⃣ WORKOUTS LIST
const workouts = [
  { name: "Pilates Beginner", duration: "30 min", details: "Full-body Pilates routine for beginners." },
  { name: "Strength Training", duration: "45 min", details: "Weight-based exercises focusing on core and arms." },
  { name: "Gym Circuit", duration: "40 min", details: "Full gym circuit, can be done with machines or free weights." },
  { name: "Cycle Syncing", duration: "20-40 min", details: "Workouts tailored for female physiology and cycle." }
];

const workoutsEl = document.getElementById('workouts');

workouts.forEach((w, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${w.name}</h3>
    <p>${w.duration}</p>
    <button id="workout-${index}">View Details</button>
    <p id="details-${index}" style="display:none">${w.details}</p>
  `;
  workoutsEl.appendChild(card);

  document.getElementById(`workout-${index}`).addEventListener('click', () => {
    const detailsEl = document.getElementById(`details-${index}`);
    detailsEl.style.display = detailsEl.style.display === 'none' ? 'block' : 'none';
  });
});

// 5️⃣ RECIPES LIST
const recipes = [
  { name: "Berry Smoothie", prep: "5 min", details: "Healthy smoothie with blueberries and pomegranate." },
  { name: "Quinoa Salad", prep: "15 min", details: "High-protein salad with fresh vegetables." },
  { name: "Sheet Pan Chicken", prep: "35 min", details: "One-pan roasted chicken with veggies." },
  { name: "Overnight Oats", prep: "5 min", details: "Make ahead oats with milk, chia, and fruit." }
];

const recipesEl = document.getElementById('recipes');

recipes.forEach((r, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${r.name}</h3>
    <p>${r.prep}</p>
    <button id="recipe-${index}">View Recipe</button>
    <p id="recipe-details-${index}" style="display:none">${r.details}</p>
  `;
  recipesEl.appendChild(card);

  document.getElementById(`recipe-${index}`).addEventListener('click', () => {
    const detailsEl = document.getElementById(`recipe-details-${index}`);
    detailsEl.style.display = detailsEl.style.display === 'none' ? 'block' : 'none';
  });
});
