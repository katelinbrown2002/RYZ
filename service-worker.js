const cacheName = 'ryz-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/why-choose-ryz.html',
  '/programs.html',
  '/bible-study.html',
  '/community.html',
  '/plan.html',
  '/contact.html',
  '/css/style.css',
  '/js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
